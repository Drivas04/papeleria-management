import { NextResponse } from "next/server";
import { prisma } from '@/app/lib/prisma';

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
        contains: nombre
        // MySQL no utiliza mode: 'insensitive'
      };
    }
    
    // El campo estado no existe en el esquema actual, así que omitimos esta parte
    // Si necesitas agregar un campo estado en el futuro, descomenta y actualiza esta parte
    
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
          equals: data.nombre
        }
      }
    });
    
    if (existente) {
      return NextResponse.json(
        { error: "Ya existe un proveedor con este nombre" },
        { status: 400 }
      );
    }
    
    // Preparar datos para la creación (solo incluir campos válidos según el modelo)
    const proveedorData = {
      nombre: data.nombre,
      direccion: data.direccion || null,
      telefono: data.telefono || null,
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