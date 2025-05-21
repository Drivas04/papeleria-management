import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse(
        JSON.stringify({ error: 'No autenticado' }),
        { status: 401 }
      );
    }
    
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    
    let where = {};
    
    if (search) {
      where.OR = [
        { nombre: { contains: search } },
        { apellido: { contains: search } },
        { cedula: { contains: search } }
      ];
    }
    
    const clientes = await prisma.cliente.findMany({
      where,
      orderBy: {
        nombre: 'asc'
      }
    });
    
    return NextResponse.json(clientes);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Error al procesar la solicitud' }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    if (!data.nombre || !data.apellido || !data.cedula) {
      return NextResponse.json(
        { error: "El nombre, apellido y cédula son campos requeridos" }, 
        { status: 400 }
      );
    }

    const clienteExistente = await prisma.cliente.findUnique({
      where: { cedula: data.cedula }
    });

    if (clienteExistente) {
      return NextResponse.json(
        { error: "Ya existe un cliente con esa cédula" }, 
        { status: 400 }
      );
    }

    const cliente = await prisma.cliente.create({
      data: {
        cedula: data.cedula,
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono || null,
        direccion: data.direccion || null,
        email: data.email || null,
        total_compras: 0
      }
    });

    return NextResponse.json(
      { message: "Cliente creado correctamente", cliente },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear cliente:", error);
    return NextResponse.json(
      { error: "Error al crear el cliente" },
      { status: 500 }
    );
  }
}