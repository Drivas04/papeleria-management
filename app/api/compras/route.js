import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    
    const { searchParams } = new URL(request.url);
    const fechaInicio = searchParams.get('fechaInicio');
    const fechaFin = searchParams.get('fechaFin');
    const proveedorId = searchParams.get('proveedorId');
    
    let where = {};
    
    // Filtrar por rango de fechas
    if (fechaInicio && fechaFin) {
      where.fecha_compra = {
        gte: new Date(fechaInicio),
        lte: new Date(fechaFin)
      };
    }
    
    // Filtrar por proveedor
    if (proveedorId) {
      where.proveedor_id_proveedor = parseInt(proveedorId);
    }
    
    const compras = await prisma.compra.findMany({
      where,
      orderBy: {
        fecha_compra: 'desc'
      },
      include: {
        proveedor: true,
        compra_productos: {
          include: {
            producto: true
          }
        },
        factura_compra: true
      }
    });
    
    return NextResponse.json(compras);
  } catch (error) {
    console.error('Error al obtener compras:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

// POST - Crear una nueva compra
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const data = await request.json();
    
    // Validaciones básicas
    if (!data.proveedor_id_proveedor) {
      return NextResponse.json({ error: 'El proveedor es requerido' }, { status: 400 });
    }
    
    console.log('Datos recibidos en API:', JSON.stringify(data, null, 2));
    
    if (!data.productos || !data.productos.length) {
      return NextResponse.json({ error: 'La compra debe tener al menos un producto' }, { status: 400 });
    }
    
    // Iniciar transacción
    const result = await prisma.$transaction(async (tx) => {
      // Calcular el total de la compra
      const totalCompra = data.productos.reduce((sum, producto) => {
        const cantidad = parseFloat(producto.cantidad);
        const precio_unitario = parseFloat(producto.precio_unitario);
        return sum + (cantidad * precio_unitario);
      }, 0);
      
      // 1. Crear la compra
      const compra = await tx.compra.create({
        data: {
          proveedor_id_proveedor: parseInt(data.proveedor_id_proveedor),
          fecha_compra: new Date(),
          estado: 'COMPLETADA',
          total: parseFloat(totalCompra.toFixed(2)),  // Asegurar dos decimales
          usuario_id_usuario: parseInt(session.user.id)
        }
      });
      
      // 2. Crear los detalles de la compra
      for (const producto of data.productos) {
        const cantidad = parseFloat(producto.cantidad);
        const precio_unitario = parseFloat(producto.precio_unitario);
        const subtotal = cantidad * precio_unitario;
        
        await tx.compraProducto.create({
          data: {
            compra_id_compra: compra.id_compra,
            producto_id_producto: parseInt(producto.producto_id_producto),
            cantidad: cantidad,
            precio_unitario: precio_unitario,
            subtotal: subtotal
          }
        });
        
        // 3. Actualizar el stock de productos
        await tx.producto.update({
          where: { id_producto: parseInt(producto.producto_id_producto) },
          data: {
            stock: {
              increment: parseFloat(producto.cantidad)
            }
          }
        });
      }
      
      // 4. Crear la factura de compra si se proporcionan los datos
      if (data.factura) {
        await tx.facturaCompra.create({
          data: {
            fecha: new Date(),
            subtotal: parseFloat(data.factura.subtotal || 0),
            impuestos: parseFloat(data.factura.impuestos || 0),
            total: parseFloat(data.factura.total || 0),
            compra_id_compra: compra.id_compra
          }
        });
      }
      
      // Retornar la compra creada
      return tx.compra.findUnique({
        where: { id_compra: compra.id_compra },
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
    });
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error en POST /api/compras:', error);
    return NextResponse.json({ error: 'Error al crear la compra' }, { status: 500 });
  }
}