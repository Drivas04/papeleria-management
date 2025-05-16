import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { getCurrentDateNormalized, normalizeDate } from '@/app/lib/date-utils';
import { formatDate } from '@/app/lib/utils';
import { format } from 'date-fns';


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
    
    if (fechaInicio && fechaFin) {
      where.fecha_compra = {
        gte: normalizeDate(fechaInicio),
        lte: normalizeDate(fechaFin)
      };
    }
    
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

export async function POST(request) {
  try {
    console.log('Iniciando POST /api/compras');
    
    const session = await getServerSession(authOptions);
    
    console.log('Sesión:', session ? 'Activa' : 'No hay sesión');
    
    if (!session) {
      console.log('Error: No hay sesión de usuario autenticado');
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    console.log('Usuario autenticado:', session.user);
    
    let data;
    try {
      data = await request.json();
    } catch (parseError) {
      console.error('Error al parsear JSON de la solicitud:', parseError);
      return NextResponse.json({ error: 'Formato de datos inválido' }, { status: 400 });
    }
    
    if (!data.proveedor_id_proveedor) {
      console.log('Error: No se especificó un proveedor');
      return NextResponse.json({ error: 'El proveedor es requerido' }, { status: 400 });
    }
    
    console.log('Datos recibidos en API:', JSON.stringify(data, null, 2));
    
    if (!data.productos || !data.productos.length) {
      console.log('Error: No hay productos en la compra');
      return NextResponse.json({ error: 'La compra debe tener al menos un producto' }, { status: 400 });
    }
    
    for (const producto of data.productos) {
      if (!producto.producto_id_producto) {
        return NextResponse.json({ error: 'Todos los productos deben tener un ID' }, { status: 400 });
      }
      if (!producto.cantidad || producto.cantidad <= 0) {
        return NextResponse.json({ error: 'Todos los productos deben tener una cantidad válida' }, { status: 400 });
      }
      if (!producto.precio_unitario || producto.precio_unitario <= 0) {
        return NextResponse.json({ error: 'Todos los productos deben tener un precio de compra válido' }, { status: 400 });
      }
      if (!producto.precio_venta || producto.precio_venta <= 0) {
        return NextResponse.json({ error: 'Todos los productos deben tener un precio de venta válido' }, { status: 400 });
      }
    }
    
    const result = await prisma.$transaction(async (tx) => {
      const totalCompra = data.productos.reduce((sum, producto) => {
        const cantidad = parseFloat(producto.cantidad);
        const precio_unitario = parseFloat(producto.precio_unitario);
        return sum + (cantidad * precio_unitario);
      }, 0);
      
      const fechaActual = new Date();
      const fechaAjustada = new Date(fechaActual.getTime() - 24 * 60 * 60 * 1000);
      console.log("Fecha original:", fechaActual, "Fecha ajustada:", fechaAjustada);
      
      const estado = data.estado || 'COMPLETADA';
      
      const compra = await tx.compra.create({
        data: {
          proveedor_id_proveedor: parseInt(data.proveedor_id_proveedor),
          fecha_compra: fechaAjustada, // Usar la fecha ajustada
          estado: estado,
          total: parseFloat(totalCompra.toFixed(2)),  // Asegurar dos decimales
          usuario_id_usuario: parseInt(session.user.id || 1) // Usar ID 1 como fallback
        }
      });
      
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
        

        const productoInfo = await tx.producto.findUnique({
          where: { id_producto: parseInt(producto.producto_id_producto) }
        });
        
        if (productoInfo) {
          const nuevoStock = parseFloat(productoInfo.stock) + parseFloat(producto.cantidad);
          const stockMinimo = parseFloat(productoInfo.stock_minimo || 5);
          
          const nivel_alerta = nuevoStock < stockMinimo ? 'bajo' : 'normal';
          
          await tx.producto.update({
            where: { id_producto: parseInt(producto.producto_id_producto) },
            data: {
              stock: nuevoStock,
              nivel_alerta,
              precio_compra: parseFloat(producto.precio_unitario || 0),
              precio_venta: parseFloat(producto.precio_venta || 0)
            }
          });
          
          await tx.movimientoInventario.create({
            data: {
              tipo_movimiento: 'ENTRADA',
              fecha_movimiento: fechaAjustada,
              cantidad: parseFloat(producto.cantidad),
              producto_id_producto: parseInt(producto.producto_id_producto)
            }
          });
        } else {
          console.log(`Producto con ID ${producto.producto_id_producto} no encontrado, podría ser necesario crearlo.`);
        }
      }
      
      if (data.factura) {
        await tx.facturaCompra.create({
          data: {
            fecha: fechaAjustada, // Usar la misma fecha ajustada que la compra
            subtotal: parseFloat(data.factura.subtotal || 0),
            impuestos: parseFloat(data.factura.impuestos || 0),
            total: parseFloat(data.factura.total || 0),
            compra_id_compra: compra.id_compra
          }
        });
      }
      
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