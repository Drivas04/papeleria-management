import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

// GET - Obtener una compra por ID
export async function GET(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }
    
    const compra = await prisma.compra.findUnique({
      where: { id_compra: id },
      include: {
        proveedor: true,
        usuario: true,
        compra_productos: {
          include: {
            producto: true
          }
        },
        factura_compra: true
      }
    });
    
    if (!compra) {
      return NextResponse.json({ error: 'Compra no encontrada' }, { status: 404 });
    }
    
    return NextResponse.json(compra);
  } catch (error) {
    console.error(`Error en GET /api/compras/${params.id}:`, error);
    return NextResponse.json({ error: 'Error al obtener la compra' }, { status: 500 });
  }
}

// PUT - Actualizar una compra
export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }
    
    const data = await request.json();
    
    // Validaciones básicas
    if (!data.proveedorId) {
      return NextResponse.json({ error: 'El proveedor es requerido' }, { status: 400 });
    }
    
    // Obtener la compra actual para comparar cambios
    const compraActual = await prisma.compra.findUnique({
      where: { id },
      include: {
        detalles: true
      }
    });
    
    if (!compraActual) {
      return NextResponse.json({ error: 'Compra no encontrada' }, { status: 404 });
    }
    
    // Iniciar transacción
    const result = await prisma.$transaction(async (tx) => {
      // 1. Actualizar la compra principal
      await tx.compra.update({
        where: { id },
        data: {
          proveedorId: data.proveedorId,
          total: data.total,
          estado: data.estado
        }
      });
      
      // Si la compra se anula, restar stock
      if (compraActual.estado !== 'ANULADA' && data.estado === 'ANULADA') {
        for (const detalle of compraActual.detalles) {
          await tx.producto.update({
            where: { id: detalle.productoId },
            data: {
              stock: {
                decrement: detalle.cantidad
              }
            }
          });
        }
      }
      
      // 2. Si la compra está completada y los detalles cambiaron, actualizar detalles
      if (data.estado === 'COMPLETADA' && JSON.stringify(data.detalles) !== JSON.stringify(compraActual.detalles)) {
        // 2.1 Eliminar detalles antiguos y restar stock
        for (const detalleAntiguo of compraActual.detalles) {
          await tx.producto.update({
            where: { id: detalleAntiguo.productoId },
            data: {
              stock: {
                decrement: detalleAntiguo.cantidad
              }
            }
          });
        }
        
        // Eliminar todos los detalles existentes
        await tx.detalleCompra.deleteMany({
          where: {
            compraId: id
          }
        });
        
        // 2.2 Crear nuevos detalles y actualizar stock
        for (const detalle of data.detalles) {
          await tx.detalleCompra.create({
            data: {
              compraId: id,
              productoId: detalle.productoId,
              cantidad: detalle.cantidad,
              precioUnitario: detalle.precioUnitario,
              subtotal: detalle.subtotal
            }
          });
          
          // Actualizar stock y precio de compra
          await tx.producto.update({
            where: { id: detalle.productoId },
            data: {
              stock: {
                increment: detalle.cantidad
              },
              precioCompra: detalle.precioUnitario
            }
          });
        }
      }
      
      // Retornar la compra actualizada
      return tx.compra.findUnique({
        where: { id },
        include: {
          proveedor: true,
          usuario: true,
          detalles: {
            include: {
              producto: true
            }
          }
        }
      });
    });
    
    return NextResponse.json(result);
  } catch (error) {
    console.error(`Error en PUT /api/compras/${params.id}:`, error);
    return NextResponse.json({ error: 'Error al actualizar la compra' }, { status: 500 });
  }
}

// DELETE - Eliminar una compra (en realidad la anulamos)
export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }
    
    console.log(`Iniciando anulación de compra ID: ${id}`);
    
    // Obtener la compra actual
    const compraActual = await prisma.compra.findUnique({
      where: { id_compra: id },
      include: {
        compra_productos: {
          include: {
            producto: true
          }
        }
      }
    });
    
    if (!compraActual) {
      return NextResponse.json({ error: 'Compra no encontrada' }, { status: 404 });
    }
    
    // Iniciar transacción para anular la compra
    await prisma.$transaction(async (tx) => {
      // 1. Actualizar la compra a estado ANULADA
      await tx.compra.update({
        where: { id_compra: id },
        data: {
          estado: 'ANULADA'
        }
      });
      
      // 2. Ajustar el stock de productos si la compra estaba completada
      if (compraActual.estado === 'COMPLETADA') {
        for (const detalle of compraActual.compra_productos) {
          await tx.producto.update({
            where: { id_producto: detalle.producto_id_producto },
            data: {
              stock: {
                decrement: parseFloat(detalle.cantidad)
              }
            }
          });
        }
      }
    });
    
    return NextResponse.json({ message: 'Compra anulada correctamente' });
  } catch (error) {
    console.error(`Error en DELETE /api/compras/${params.id}:`, error);
    return NextResponse.json({ error: 'Error al anular la compra' }, { status: 500 });
  }
}