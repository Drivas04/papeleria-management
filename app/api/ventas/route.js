import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma';
import { getServerSession } from 'next-auth';

// Usar un singleton para la instancia de PrismaClient
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return new NextResponse(
        JSON.stringify({ error: 'No autenticado' }),
        { status: 401 }
      );
    }
    
    const { searchParams } = new URL(request.url);
    const fechaInicio = searchParams.get('fechaInicio');
    const fechaFin = searchParams.get('fechaFin');
    const clienteId = searchParams.get('clienteId');
    
    let where = {};
    
    // Filtrar por rango de fechas
    if (fechaInicio && fechaFin) {
      where.fecha = {
        gte: new Date(fechaInicio),
        lte: new Date(fechaFin)
      };
    }
    
    // Filtrar por cliente
    if (clienteId) {
      where.clienteId = parseInt(clienteId);
    }
    
    const ventas = await prisma.venta.findMany({
      where,
      orderBy: {
        fecha: 'desc'
      },
      include: {
        cliente: true,
        detalles: {
          include: {
            producto: true
          }
        }
      }
    });
    
    return NextResponse.json(ventas);
  } catch (error) {
    console.error('Error al obtener ventas:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Error al procesar la solicitud' }),
      { status: 500 }
    );
  }
}

// POST - Crear una nueva venta
export async function POST(request) {
  try {
    const session = await getServerSession();
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const data = await request.json();
    
    // Validaciones básicas
    if (!data.clienteId) {
      return NextResponse.json({ error: 'El cliente es requerido' }, { status: 400 });
    }
    
    if (!data.detalles || !data.detalles.length) {
      return NextResponse.json({ error: 'La venta debe tener al menos un producto' }, { status: 400 });
    }
    
    // Iniciar transacción
    const result = await prisma.$transaction(async (tx) => {
      // 1. Crear la venta
      const venta = await tx.venta.create({
        data: {
          clienteId: parseInt(data.clienteId),
          total: parseFloat(data.total),
          usuarioId: parseInt(session.user.id)
        }
      });
      
      // 2. Crear los detalles de la venta
      for (const detalle of data.detalles) {
        await tx.detalleVenta.create({
          data: {
            ventaId: venta.id,
            productoId: parseInt(detalle.productoId),
            cantidad: parseInt(detalle.cantidad),
            precioUnitario: parseFloat(detalle.precioUnitario),
            subtotal: parseFloat(detalle.subtotal)
          }
        });
        
        // 3. Actualizar el stock de productos
        await tx.producto.update({
          where: { id: parseInt(detalle.productoId) },
          data: {
            stock: {
              decrement: parseInt(detalle.cantidad)
            }
          }
        });
      }
      
      // Retornar la venta creada
      return tx.venta.findUnique({
        where: { id: venta.id },
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
    console.error('Error en POST /api/ventas:', error);
    return NextResponse.json({ error: 'Error al crear la venta' }, { status: 500 });
  }
}