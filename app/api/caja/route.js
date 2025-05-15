import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

// GET - Obtener todas las cajas
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    
    const cajas = await prisma.caja.findMany({
      orderBy: {
        fecha_apertura: 'desc'
      },
      include: {
        usuario: true
      }
    });
    
    return NextResponse.json(cajas);
  } catch (error) {
    console.error('Error al obtener cajas:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

// POST - Abrir una nueva caja
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    const data = await request.json();
    
    // Verificar si ya existe una caja abierta
    const cajaAbierta = await prisma.caja.findFirst({
      where: {
        estado: 'abierta'
      }
    });
    
    if (cajaAbierta) {
      return NextResponse.json(
        { error: 'Ya existe una caja abierta. Debe cerrar la caja actual antes de abrir una nueva.' },
        { status: 400 }
      );
    }
    
    // Validaciones básicas
    if (!data.monto_inicial || isNaN(parseFloat(data.monto_inicial)) || parseFloat(data.monto_inicial) <= 0) {
      return NextResponse.json({ error: 'El monto inicial debe ser un valor numérico positivo' }, { status: 400 });
    }
    
    // Crear nueva caja
    const nuevaCaja = await prisma.caja.create({
      data: {
        fecha_apertura: new Date(),
        estado: 'abierta',
        monto_inicial: parseFloat(data.monto_inicial),
        usuario_id_usuario: parseInt(data.usuario_id_usuario || session.user.id),
      }
    });
    
    return NextResponse.json(nuevaCaja);
  } catch (error) {
    console.error('Error en POST /api/caja:', error);
    return NextResponse.json({ error: 'Error al crear la caja' }, { status: 500 });
  }
}
