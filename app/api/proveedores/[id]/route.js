import { NextResponse } from "next/server";
import { prisma } from '@/app/lib/prisma';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    const proveedor = await prisma.proveedor.findUnique({
      where: {
        id_proveedor: parseInt(id)
      },
      include: {
        compras: {
          take: 5,
          orderBy: {
            fecha_compra: 'desc'
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
    
    const proveedorExistente = await prisma.proveedor.findUnique({
      where: {
        id_proveedor: parseInt(id)
      }
    });
    
    if (!proveedorExistente) {
      return NextResponse.json(
        { error: "Proveedor no encontrado" },
        { status: 404 }
      );
    }
    
    const nombreExistente = await prisma.proveedor.findFirst({
      where: {
        nombre: {
          equals: data.nombre
        },
        id_proveedor: {
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
    
    const proveedorData = {
      nombre: data.nombre,
      telefono: data.telefono || null,
      direccion: data.direccion || null,
      contacto: data.contacto || null,
      email: data.email || null,
      notas: data.notas || null,
      estado: data.estado || "activo"
    };
    
    if (data.estado !== undefined) {
      proveedorData.estado = data.estado;
    }
    
    const proveedorActualizado = await prisma.proveedor.update({
      where: {
        id_proveedor: parseInt(id)
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

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    const proveedorExistente = await prisma.proveedor.findUnique({
      where: {
        id_proveedor: parseInt(id)
      },
      include: {
        _count: {
          select: {
            compras: true
          }
        }
      }
    });
    
    if (!proveedorExistente) {
      return NextResponse.json(
        { error: "Proveedor no encontrado" },
        { status: 404 }
      );
    }

    if (proveedorExistente._count.compras > 0) {
      await prisma.proveedor.update({
        where: {
          id_proveedor: parseInt(id)
        },
        data: {
          estado: "inactivo"
        }
      });
      
      return NextResponse.json({
        message: "El proveedor ha sido desactivado porque tiene compras asociadas"
      });
    } else {
      await prisma.proveedor.delete({
        where: {
          id_proveedor: parseInt(id)
        }
      });
      
      return NextResponse.json({
        message: "Proveedor eliminado con éxito"
      });
    }
  } catch (error) {
    console.error("Error al eliminar proveedor:", error);
    return NextResponse.json(
      { error: "Error al eliminar el proveedor" },
      { status: 500 }
    );
  }
}
