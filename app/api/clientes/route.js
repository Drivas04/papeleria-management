import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Obtener todos los clientes
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const nombre = searchParams.get("nombre");
    const email = searchParams.get("email");
    
    // Construir filtros
    let where = { estado: true };
    
    if (nombre) {
      where.OR = [
        {
          nombre: {
            contains: nombre,
            mode: 'insensitive'
          }
        },
        {
          apellido: {
            contains: nombre,
            mode: 'insensitive'
          }
        }
      ];
    }
    
    if (email) {
      where.email = {
        contains: email,
        mode: 'insensitive'
      };
    }
    
    const clientes = await prisma.cliente.findMany({
      where,
      orderBy: {
        fechaRegistro: 'desc'
      },
      include: {
        _count: {
          select: {
            ventas: true
          }
        }
      }
    });
    
    return NextResponse.json(clientes);
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    return NextResponse.json(
      { error: "Error al obtener clientes" },
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