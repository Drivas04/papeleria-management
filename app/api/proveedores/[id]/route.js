import { PrismaClient } from "../../../generated/prisma";
import { NextResponse } from "next/server";

// Usar un singleton para la instancia de PrismaClient
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// GET - Obtener un proveedor por ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    const proveedor = await prisma.proveedor.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        compras: {
          take: 5,
          orderBy: {
            fecha: 'desc'
          }
        },
        _count: {
          select: {
            compras: true
          }
        }
      }
    });
    
    if (!proveedor) {
      return NextResponse.json(
        { error: "Proveedor no encontrado" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(proveedor);
  } catch (error) {
    console.error("Error al obtener proveedor:", error);
    return NextResponse.json(
      { error: "Error al obtener el proveedor" },
      { status: 500 }
    );
  }
}

// PUT - Actualizar un proveedor
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // Validaciones básicas
    if (!data.nombre) {
      return NextResponse.json(
        { error: "El nombre del proveedor es obligatorio" },
        { status: 400 }
      );
    }
    
    // Verificar que el proveedor existe
    const proveedorExistente = await prisma.proveedor.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    
    if (!proveedorExistente) {
      return NextResponse.json(
        { error: "Proveedor no encontrado" },
        { status: 404 }
      );
    }
    
    // Verificar que no exista otro proveedor con el mismo nombre
    const nombreExistente = await prisma.proveedor.findFirst({
      where: {
        nombre: {
          equals: data.nombre
        },
        id: {
          not: parseInt(id)
        }
      }
    });
    
    if (nombreExistente) {
      return NextResponse.json(
        { error: "Ya existe otro proveedor con este nombre" },
        { status: 400 }
      );
    }
    
    // Preparar datos para la actualización (solo campos válidos)
    const proveedorData = {
      nombre: data.nombre,
      telefono: data.telefono || null,
      direccion: data.direccion || null
    };
    
    // Actualizar el estado solo si viene en los datos
    if (data.estado !== undefined) {
      proveedorData.estado = data.estado === "true" || data.estado === true;
    }
    
    // Actualizar el proveedor
    const proveedorActualizado = await prisma.proveedor.update({
      where: {
        id: parseInt(id)
      },
      data: proveedorData
    });
    
    return NextResponse.json({
      message: "Proveedor actualizado con éxito",
      proveedor: proveedorActualizado
    });
  } catch (error) {
    console.error("Error al actualizar proveedor:", error);
    return NextResponse.json(
      { error: "Error al actualizar el proveedor" },
      { status: 500 }
    );
  }
}

// DELETE - Desactivar (softdelete) un proveedor
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // Verificar que el proveedor existe
    const proveedorExistente = await prisma.proveedor.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    
    if (!proveedorExistente) {
      return NextResponse.json(
        { error: "Proveedor no encontrado" },
        { status: 404 }
      );
    }
    
    // Actualizar el estado a inactivo (en lugar de eliminar)
    const proveedorDesactivado = await prisma.proveedor.update({
      where: {
        id: parseInt(id)
      },
      data: {
        estado: false
      }
    });
    
    return NextResponse.json({
      message: "Proveedor desactivado con éxito",
      proveedor: proveedorDesactivado
    });
  } catch (error) {
    console.error("Error al desactivar proveedor:", error);
    return NextResponse.json(
      { error: "Error al desactivar el proveedor" },
      { status: 500 }
    );
  }
}