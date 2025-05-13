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
    const proveedorId = searchParams.get('proveedorId');
    
    let where = {};
    
    // Filtrar por rango de fechas
    if (fechaInicio && fechaFin) {
      where.fecha = {
        gte: new Date(fechaInicio),
        lte: new Date(fechaFin)
      };
    }
    
    // Filtrar por proveedor
    if (proveedorId) {
      where.proveedorId = parseInt(proveedorId);
    }
    
    const compras = await prisma.compra.findMany({
      where,
      orderBy: {
        fecha: 'desc'
      },
      include: {
        proveedor: true,
        detalles: {
          include: {
            producto: true
          }
        }
      }
    });
    
    return NextResponse.json(compras);
  } catch (error) {
    console.error('Error al obtener compras:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Error al procesar la solicitud' }),
      { status: 500 }
    );
  }
}

// POST - Crear una nueva compra
export async function POST(request) {
  try {
    const session = await getServerSession();
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const data = await request.json();
    
    // Validaciones básicas
    if (!data.proveedorId) {
      return NextResponse.json({ error: 'El proveedor es requerido' }, { status: 400 });
    }
    
    if (!data.detalles || !data.detalles.length) {
      return NextResponse.json({ error: 'La compra debe tener al menos un producto' }, { status: 400 });
    }
    
    // Verificar que los detalles tengan valores válidos
    for (const detalle of data.detalles) {
      if (!detalle.productoId) {
        return NextResponse.json({ error: 'Todos los productos deben ser especificados' }, { status: 400 });
      }
      
      if (!detalle.cantidad || detalle.cantidad <= 0) {
        return NextResponse.json({ error: 'La cantidad debe ser mayor a 0' }, { status: 400 });
      }
      
      if (!detalle.precioUnitario || detalle.precioUnitario <= 0) {
        return NextResponse.json({ error: 'El precio unitario debe ser mayor a 0' }, { status: 400 });
      }
    }
    
    // Iniciar transacción
    const result = await prisma.$transaction(async (tx) => {
      // 1. Crear la compra
      const compra = await tx.compra.create({
        data: {
          proveedorId: parseInt(data.proveedorId),
          total: parseFloat(data.total),
          usuarioId: session.user.id ? parseInt(session.user.id) : null,
          estado: data.estado || 'COMPLETADA'
        }
      });
      
      // 2. Crear los detalles de la compra y actualizar productos
      for (const detalle of data.detalles) {
        // Crear detalle
        await tx.detalleCompra.create({
          data: {
            compraId: compra.id,
            productoId: parseInt(detalle.productoId),
            cantidad: parseInt(detalle.cantidad),
            precioUnitario: parseFloat(detalle.precioUnitario),
            subtotal: parseFloat(detalle.subtotal)
          }
        });
        
        // Actualizar stock y posiblemente precio de compra del producto
        await tx.producto.update({
          where: { id: parseInt(detalle.productoId) },
          data: {
            stock: {
              increment: parseInt(detalle.cantidad)
            },
            precioCompra: parseFloat(detalle.precioUnitario)
          }
        });
      }
      
      // Retornar la compra creada
      return tx.compra.findUnique({
        where: { id: compra.id },
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
    console.error('Error en POST /api/compras:', error);
    return NextResponse.json({ error: `Error al crear la compra: ${error.message}` }, { status: 500 });
  }
}