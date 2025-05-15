import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

// GET - Obtener una venta por ID
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
    
    const venta = await prisma.venta.findUnique({
      where: { id_venta: id },
      include: {
        cliente: true,
        usuario: true,
        venta_productos: {
          include: {
            producto: true
          }
        },
        factura_venta: true
      }
    });
    
    if (!venta) {
      return NextResponse.json({ error: 'Venta no encontrada' }, { status: 404 });
    }
    
    return NextResponse.json(venta);
  } catch (error) {
    console.error(`Error en GET /api/ventas/${params.id}:`, error);
    return NextResponse.json({ error: 'Error al obtener la venta' }, { status: 500 });
  }
}

// PUT - Actualizar una venta
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
    if (!data.cliente_id_cliente) {
      return NextResponse.json({ error: 'El cliente es requerido' }, { status: 400 });
    }
    
    // Obtener la venta actual para comparar cambios
    const ventaActual = await prisma.venta.findUnique({
      where: { id_venta: id },
      include: {
        venta_productos: {
          include: {
            producto: true
          }
        }
      }
    });
    
    if (!ventaActual) {
      return NextResponse.json({ error: 'Venta no encontrada' }, { status: 404 });
    }
    
    // Iniciar transacción
    const result = await prisma.$transaction(async (tx) => {
      // 1. Actualizar la venta principal
      await tx.venta.update({
        where: { id_venta: id },
        data: {
          cliente_id_cliente: parseInt(data.cliente_id_cliente),
          cliente_cedula: data.cliente_cedula,
          estado: data.estado
        }
      });
      
      // Actualizar la factura si se proporcionan datos de factura
      if (data.factura) {
        await tx.facturaVenta.update({
          where: { venta_id_venta: id },
          data: {
            subtotal: parseFloat(data.factura.subtotal),
            impuestos: parseFloat(data.factura.impuestos || 0),
            total: parseFloat(data.factura.total)
          }
        });
      }
      
      // Si la venta se anula, devolver stock
      if (ventaActual.estado !== 'ANULADA' && data.estado === 'ANULADA') {
        for (const detalle of ventaActual.venta_productos) {
          await tx.producto.update({
            where: { id_producto: detalle.producto_id_producto },
            data: {
              stock: {
                increment: detalle.cantidad
              }
            }
          });
        }
      }
      
      // 2. Si la venta está completada y los productos cambiaron, actualizar detalles
      if (data.estado === 'COMPLETADA' && JSON.stringify(data.productos) !== JSON.stringify(ventaActual.venta_productos)) {
        // 2.1 Eliminar detalles antiguos y restaurar stock
        for (const detalleAntiguo of ventaActual.venta_productos) {
          await tx.producto.update({
            where: { id_producto: detalleAntiguo.producto_id_producto },
            data: {
              stock: {
                increment: detalleAntiguo.cantidad
              }
            }
          });
        }
        
        // Eliminar todos los detalles existentes
        await tx.ventaProducto.deleteMany({
          where: {
            venta_id_venta: id
          }
        });
        
        // 2.2 Crear nuevos detalles y actualizar stock
        for (const detalle of data.productos) {
          await tx.ventaProducto.create({
            data: {
              venta_id_venta: id,
              producto_id_producto: parseInt(detalle.producto_id_producto),
              cantidad: parseFloat(detalle.cantidad),
              precio_unitario: parseFloat(detalle.precio_unitario)
            }
          });
          
          // Actualizar stock
          await tx.producto.update({
            where: { id_producto: parseInt(detalle.producto_id_producto) },
            data: {
              stock: {
                decrement: parseFloat(detalle.cantidad)
              }
            }
          });
        }
      }
      
      // Retornar la venta actualizada
      return tx.venta.findUnique({
        where: { id_venta: id },
        include: {
          cliente: true,
          usuario: true,
          venta_productos: {
            include: {
              producto: true
            }
          },
          factura_venta: true
        }
      });
    });
    
    return NextResponse.json(result);
  } catch (error) {
    console.error(`Error en PUT /api/ventas/${params.id}:`, error);
    return NextResponse.json({ error: 'Error al actualizar la venta' }, { status: 500 });
  }
}

// DELETE - Eliminar una venta (en realidad la anulamos)
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
    
    // Obtener la venta actual
    const ventaActual = await prisma.venta.findUnique({
      where: { id_venta: id },
      include: {
        venta_productos: {
          include: {
            producto: true
          }
        }
      }
    });
    
    if (!ventaActual) {
      return NextResponse.json({ error: 'Venta no encontrada' }, { status: 404 });
    }
    
    // Iniciar transacción para anular la venta
    await prisma.$transaction(async (tx) => {
      // 1. Actualizar la venta a estado ANULADA
      await tx.venta.update({
        where: { id_venta: id },
        data: {
          estado: 'ANULADA'
        }
      });
      
      // 2. Restaurar el stock de productos si la venta estaba completada
      if (ventaActual.estado === 'COMPLETADA') {
        for (const detalle of ventaActual.venta_productos) {
          await tx.producto.update({
            where: { id_producto: detalle.producto_id_producto },
            data: {
              stock: {
                increment: detalle.cantidad
              }
            }
          });
        }
      }
    });
    
    return NextResponse.json({ message: 'Venta anulada correctamente' });
  } catch (error) {
    console.error(`Error en DELETE /api/ventas/${params.id}:`, error);
    return NextResponse.json({ error: 'Error al anular la venta' }, { status: 500 });
  }
}