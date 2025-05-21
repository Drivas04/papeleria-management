import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { getCurrentDateNormalized, normalizeDate } from '@/app/lib/date-utils';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    
    const { searchParams } = new URL(request.url);
    const fechaInicio = searchParams.get('fechaInicio');
    const fechaFin = searchParams.get('fechaFin');
    const clienteId = searchParams.get('clienteId');
    
    console.log('API Ventas - Parámetros recibidos:');
    console.log('- fechaInicio:', fechaInicio);
    console.log('- fechaFin:', fechaFin);
    console.log('- clienteId:', clienteId);
    
    let where = {};
    
    // Filtrar por rango de fechas
    if (fechaInicio && fechaFin) {
      console.log('API Ventas - Buscando ventas entre:', fechaInicio, 'y', fechaFin);
      
      // Normalizar las fechas para evitar problemas de zona horaria
      const fechaInicioNormalizada = normalizeDate(fechaInicio);
      const fechaFinNormalizada = normalizeDate(fechaFin);
      
      console.log('API Ventas - Fechas normalizadas:', 
                  fechaInicioNormalizada.toISOString(), 'y', 
                  fechaFinNormalizada.toISOString());
      
      where.factura_venta = {
        fecha: {
          gte: fechaInicioNormalizada,
          lte: fechaFinNormalizada
        }
      };
    }
    
    // Filtrar por cliente
    if (clienteId) {
      where.cliente_id_cliente = parseInt(clienteId);
    }
    
    const ventas = await prisma.venta.findMany({
      where,
      orderBy: {
        id_venta: 'desc'
      },
      include: {
        cliente: true,
        venta_productos: {
          include: {
            producto: true
          }
        },
        factura_venta: true
      }
    });
    
    console.log(`API Ventas - Encontradas ${ventas.length} ventas`);
    
    // Mostrar información de depuración sobre la primera venta
    if (ventas.length > 0) {
      console.log('API Ventas - Primera venta encontrada:', {
        id: ventas[0].id_venta,
        estado: ventas[0].estado,
        fecha: ventas[0].factura_venta?.fecha,
        total: ventas[0].factura_venta?.total,
      });
    }
    
    return NextResponse.json(ventas);
  } catch (error) {
    console.error('Error al obtener ventas:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const data = await request.json();
    
    if (!data.cliente_id_cliente) {
      return NextResponse.json({ error: 'El cliente es requerido' }, { status: 400 });
    }
    
    if (!data.productos || !data.productos.length) {
      return NextResponse.json({ error: 'La venta debe tener al menos un producto' }, { status: 400 });
    }
    
    const result = await prisma.$transaction(async (tx) => {
      const venta = await tx.venta.create({
        data: {
          tipo_venta: 'NORMAL',
          estado: data.estado || 'COMPLETADA',
          cliente_id_cliente: parseInt(data.cliente_id_cliente),
          cliente_cedula: data.cliente_cedula,
          usuario_id_usuario: parseInt(session.user.id || 1), // Usar un ID por defecto si no hay sesión
          factura_venta: {
            create: {
              fecha: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
              subtotal: parseFloat(data.factura.subtotal),
              impuestos: parseFloat(data.factura.impuestos || 0),
              total: parseFloat(data.factura.total)
            }
          }
        }
      });
      
      for (const detalle of data.productos) {
        await tx.ventaProducto.create({
          data: {
            venta_id_venta: venta.id_venta,
            producto_id_producto: parseInt(detalle.producto_id_producto),
            cantidad: parseFloat(detalle.cantidad),
            precio_unitario: parseFloat(detalle.precio_unitario)
          }
        });
        
        const producto = await tx.producto.findUnique({
          where: { id_producto: parseInt(detalle.producto_id_producto) }
        });
        
        if (producto) {
          const nuevoStock = parseFloat(producto.stock) - parseFloat(detalle.cantidad);
          const stockMinimo = parseFloat(producto.stock_minimo || 5);
          const nivel_alerta = nuevoStock < stockMinimo ? 'bajo' : 'normal';
          
          await tx.producto.update({
            where: { id_producto: parseInt(detalle.producto_id_producto) },
            data: {
              stock: nuevoStock,
              nivel_alerta
            }
          });
        }
      }
      
      await tx.cliente.update({
        where: { id_cliente: parseInt(data.cliente_id_cliente) },
        data: {
          total_compras: {
            increment: 1
          },
          ultima_compra: new Date()
        }
      });
      
      return tx.venta.findUnique({
        where: { id_venta: venta.id_venta },
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
    console.error('Error en POST /api/ventas:', error);
    return NextResponse.json({ error: 'Error al crear la venta' }, { status: 500 });
  }
}