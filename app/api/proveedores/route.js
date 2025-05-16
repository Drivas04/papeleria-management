import { NextResponse } from "next/server";
import { prisma } from '@/app/lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const nombre = searchParams.get('nombre');
    const estado = searchParams.get('estado');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : 100;
    
    const where = {};
    
    if (nombre) {
      where.nombre = {
        contains: nombre
      };
    }
    
    if (estado) {
      where.estado = estado;
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

export async function POST(request) {
  try {
    const data = await request.json();
    
    if (!data.nombre) {
      return NextResponse.json(
        { error: "El nombre del proveedor es obligatorio" },
        { status: 400 }
      );
    }
    
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
    
    const proveedorData = {
      nombre: data.nombre,
      direccion: data.direccion || null,
      telefono: data.telefono || null,
      contacto: data.contacto || null,
      email: data.email || null,
      notas: data.notas || null,
      estado: data.estado !== undefined ? data.estado : "activo" // Por defecto el proveedor está activo
    };
    
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