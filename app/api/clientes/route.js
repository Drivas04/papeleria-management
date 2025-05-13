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
    
    // Obtener parámetros de la URL
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    
    let where = {
      estado: true
    };
    
    if (search) {
      where.OR = [
        { nombre: { contains: search } },
        { apellido: { contains: search } },
        { email: { contains: search } }
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

// POST - Crear un nuevo cliente
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validaciones básicas
    if (!data.nombre || !data.apellido) {
      return NextResponse.json(
        { error: "El nombre y apellido son campos requeridos" }, 
        { status: 400 }
      );
    }

    // Verificar si el email ya existe (si se proporciona)
    if (data.email) {
      const clienteExistente = await prisma.cliente.findUnique({
        where: { email: data.email }
      });

      if (clienteExistente) {
        return NextResponse.json(
          { error: "Ya existe un cliente con ese email" }, 
          { status: 400 }
        );
      }
    }

    // Crear el cliente
    const cliente = await prisma.cliente.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        direccion: data.direccion || null,
        telefono: data.telefono || null,
        email: data.email || null
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