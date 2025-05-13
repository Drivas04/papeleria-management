import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const prisma = new PrismaClient();

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
      where: { id },
      include: {
        cliente: true,
        usuario: true,
        detalles: {
          include: {
            producto: true
          }
        }
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
    if (!data.clienteId) {
      return NextResponse.json({ error: 'El cliente es requerido' }, { status: 400 });
    }
    
    // Obtener la venta actual para comparar cambios
    const ventaActual = await prisma.venta.findUnique({
      where: { id },
      include: {
        detalles: true
      }
    });
    
    if (!ventaActual) {
      return NextResponse.json({ error: 'Venta no encontrada' }, { status: 404 });
    }
    
    // Iniciar transacción
    const result = await prisma.$transaction(async (tx) => {
      // 1. Actualizar la venta principal
      await tx.venta.update({
        where: { id },
        data: {
          clienteId: data.clienteId,
          total: data.total,
          estado: data.estado
        }
      });
      
      // Si la venta se anula, devolver stock
      if (ventaActual.estado !== 'ANULADA' && data.estado === 'ANULADA') {
        for (const detalle of ventaActual.detalles) {
          await tx.producto.update({
            where: { id: detalle.productoId },
            data: {
              stock: {
                increment: detalle.cantidad
              }
            }
          });
        }
      }
      
      // 2. Si la venta está completada y los detalles cambiaron, actualizar detalles
      if (data.estado === 'COMPLETADA' && JSON.stringify(data.detalles) !== JSON.stringify(ventaActual.detalles)) {
        // 2.1 Eliminar detalles antiguos y restaurar stock
        for (const detalleAntiguo of ventaActual.detalles) {
          await tx.producto.update({
            where: { id: detalleAntiguo.productoId },
            data: {
              stock: {
                increment: detalleAntiguo.cantidad
              }
            }
          });
        }
        
        // Eliminar todos los detalles existentes
        await tx.detalleVenta.deleteMany({
          where: {
            ventaId: id
          }
        });
        
        // 2.2 Crear nuevos detalles y actualizar stock
        for (const detalle of data.detalles) {
          await tx.detalleVenta.create({
            data: {
              ventaId: id,
              productoId: detalle.productoId,
              cantidad: detalle.cantidad,
              precioUnitario: detalle.precioUnitario,
              subtotal: detalle.subtotal
            }
          });
          
          // Actualizar stock
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
      
      // Retornar la venta actualizada
      return tx.venta.findUnique({
        where: { id },
        include: {
          cliente: true,
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
      where: { id },
      include: {
        detalles: true
      }
    });
    
    if (!ventaActual) {
      return NextResponse.json({ error: 'Venta no encontrada' }, { status: 404 });
    }
    
    // Iniciar transacción para anular la venta
    await prisma.$transaction(async (tx) => {
      // 1. Actualizar la venta a estado ANULADA
      await tx.venta.update({
        where: { id },
        data: {
          estado: 'ANULADA'
        }
      });
      
      // 2. Restaurar el stock de productos si la venta estaba completada
      if (ventaActual.estado === 'COMPLETADA') {
        for (const detalle of ventaActual.detalles) {
          await tx.producto.update({
            where: { id: detalle.productoId },
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