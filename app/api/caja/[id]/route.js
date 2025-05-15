import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

// GET - Obtener una caja por su ID
export async function GET(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    
    const { id } = params;
    
    const caja = await prisma.caja.findUnique({
      where: {
        id_cierre_caja: parseInt(id)
      },
      include: {
        usuario: true
      }
    });
    
    if (!caja) {
      return NextResponse.json({ error: 'Caja no encontrada' }, { status: 404 });
    }
    
    return NextResponse.json(caja);
  } catch (error) {
    console.error(`Error al obtener caja ID ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

// PUT - Cerrar una caja existente
export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const { id } = params;
    const data = await request.json();
    
    console.log('Datos recibidos para cerrar caja:', data);
    
    // Verificar si la caja existe y está abierta
    const caja = await prisma.caja.findUnique({
      where: {
        id_cierre_caja: parseInt(id)
      }
    });
    
    if (!caja) {
      return NextResponse.json({ error: 'Caja no encontrada' }, { status: 404 });
    }
    
    if (caja.estado !== 'abierta') {
      return NextResponse.json({ error: 'Esta caja ya está cerrada' }, { status: 400 });
    }
    
    // Calcular el total de ventas realizadas durante la apertura de la caja
    const fechaApertura = caja.fecha_apertura;
    
    const ventasEnPeriodo = await prisma.venta.findMany({
      where: {
        factura_venta: {
          fecha: {
            gte: fechaApertura,
            lte: new Date()
          }
        },
        estado: 'COMPLETADA' // Solo considerar ventas completadas
      },
      include: {
        factura_venta: true
      }
    });
    
    // Asegurar que los valores numéricos sean válidos
    let totalVentas = ventasEnPeriodo.reduce((sum, venta) => {
      const ventaTotal = parseFloat(venta.factura_venta?.total || 0);
      return sum + (isNaN(ventaTotal) ? 0 : ventaTotal);
    }, 0);
    
    // Redondear a 2 decimales para evitar problemas de precisión
    totalVentas = parseFloat(totalVentas.toFixed(2));
    
    console.log('Total de ventas calculado:', totalVentas);
    
    // Calcular diferencia entre lo que debería haber y lo informado
    const montoFinal = parseFloat(data.monto_final || 0);
    const montoInicial = parseFloat(caja.monto_inicial || 0);
    const montoEsperado = montoInicial + totalVentas;
    
    console.log('Monto inicial:', montoInicial);
    console.log('Monto final:', montoFinal);
    console.log('Monto esperado:', montoEsperado);
    
    // Redondear la diferencia a 2 decimales
    const diferencia = parseFloat((montoFinal - montoEsperado).toFixed(2));
    
    // Actualizar la caja
    const cajaActualizada = await prisma.caja.update({
      where: {
        id_cierre_caja: parseInt(id)
      },
      data: {
        fecha_cierre: new Date(),
        estado: 'cerrada',
        monto_final: montoFinal,
        total_ventas: totalVentas,
        diferencia: diferencia,
        notas: data.notas || ''
      }
    });
    
    // Convertir la respuesta para asegurar que sea serializable
    const cajaResponse = {
      ...cajaActualizada,
      // Asegurarse de que todos los campos numéricos sean tipos normales de JavaScript
      id_cierre_caja: Number(cajaActualizada.id_cierre_caja),
      monto_inicial: parseFloat(Number(cajaActualizada.monto_inicial).toFixed(2)),
      monto_final: parseFloat(Number(cajaActualizada.monto_final).toFixed(2)),
      total_ventas: parseFloat(Number(cajaActualizada.total_ventas).toFixed(2)),
      diferencia: parseFloat(Number(cajaActualizada.diferencia).toFixed(2)),
      usuario_id_usuario: Number(cajaActualizada.usuario_id_usuario)
    };
    
    console.log('Caja procesada para respuesta:', JSON.stringify(cajaResponse));
    
    // Asegurar que la respuesta sea un JSON válido
    return new NextResponse(JSON.stringify(cajaResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(`Error en PUT /api/caja/${params.id}:`, error);
    console.error('Detalles del error:', error.message);
    
    // Asegurar que la respuesta de error sea JSON válido
    return new NextResponse(JSON.stringify({ 
      error: 'Error al actualizar la caja',
      message: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
