import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Listar proveedores
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const nombre = searchParams.get('nombre');
    const estado = searchParams.get('estado');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : 100;
    
    // Construir filtros
    const where = {};
    
    if (nombre) {
      where.nombre = {
        contains: nombre,
        mode: 'insensitive'
      };
    }
    
    if (estado === 'true') {
      where.estado = true;
    } else if (estado === 'false') {
      where.estado = false;
    }
    
    const proveedores = await prisma.proveedor.findMany({
      where,
      take: limit,
      orderBy: {
        nombre: 'asc'
      },
      include: {
        _count: {
          select: {
            compras: true
          }
        }
      }
    });
    
    return NextResponse.json(proveedores);
  } catch (error) {
    console.error("Error al obtener proveedores:", error);
    return NextResponse.json(
      { error: "Error al obtener proveedores" },
      { status: 500 }
    );
  }
}

// POST - Crear nuevo proveedor
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validaciones básicas
    if (!data.nombre) {
      return NextResponse.json(
        { error: "El nombre del proveedor es obligatorio" },
        { status: 400 }
      );
    }
    
    // Verificar que no exista un proveedor con el mismo nombre
    const existente = await prisma.proveedor.findFirst({
      where: {
        nombre: {
          equals: data.nombre,
          mode: 'insensitive'
        }
      }
    });
    
    if (existente) {
      return NextResponse.json(
        { error: "Ya existe un proveedor con este nombre" },
        { status: 400 }
      );
    }
    
    // Preparar datos para la creación
    const proveedorData = {
      nombre: data.nombre,
      contacto: data.contacto,
      telefono: data.telefono,
      email: data.email,
      direccion: data.direccion,
      notas: data.notas,
      estado: true // Por defecto el proveedor está activo
    };
    
    // Crear el proveedor
    const nuevoProveedor = await prisma.proveedor.create({
      data: proveedorData
    });
    
    return NextResponse.json({
      message: "Proveedor creado con éxito",
      proveedor: nuevoProveedor
    }, { status: 201 });
  } catch (error) {
    console.error("Error al crear proveedor:", error);
    return NextResponse.json(
      { error: "Error al crear el proveedor" },
      { status: 500 }
    );
  }
}