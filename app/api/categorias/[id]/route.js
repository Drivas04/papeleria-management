import { NextResponse } from "next/server";
import { prisma } from '@/app/lib/prisma';

// GET - Obtener una categoría por ID
export async function GET(request, { params }) {
  try {
    const id_categoria = parseInt(params.id);
    
    if (isNaN(id_categoria)) {
      return NextResponse.json(
        { error: "ID de categoría inválido" },
        { status: 400 }
      );
    }

    const categoria = await prisma.categoria.findUnique({
      where: { id_categoria },
      
    });

    if (!categoria) {
      return NextResponse.json(
        { error: "Categoría no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(categoria);
  } catch (error) {
    console.error("Error al obtener categoría:", error);
    return NextResponse.json(
      { error: "Error al obtener categoría" },
      { status: 500 }
    );
  }
}

// PUT - Actualizar una categoría por ID
export async function PUT(request, { params }) {
  try {
    const id_categoria = parseInt(params.id);
    
    if (isNaN(id_categoria)) {
      return NextResponse.json(
        { error: "ID de categoría inválido" },
        { status: 400 }
      );
    }

    const data = await request.json();
    
    // Validaciones básicas
    if (!data.nombre) {
      return NextResponse.json(
        { error: "El nombre de la categoría es requerido" }, 
        { status: 400 }
      );
    }

    // Verificar que la categoría existe
    const categoriaExistente = await prisma.categoria.findUnique({
      where: { id_categoria }
    });

    if (!categoriaExistente) {
      return NextResponse.json(
        { error: "Categoría no encontrada" },
        { status: 404 }
      );
    }

    // Verificar si el nuevo nombre ya está en uso (si se está cambiando)
    if (data.nombre !== categoriaExistente.nombre) {
      const nombreExiste = await prisma.categoria.findUnique({
        where: { nombre: data.nombre }
      });

      if (nombreExiste) {
        return NextResponse.json(
          { error: "Ya existe una categoría con ese nombre" },
          { status: 400 }
        );
      }
    }

    // Actualizar categoría
    const categoriaActualizada = await prisma.categoria.update({
      where: { id_categoria },
      data: {
        nombre: data.nombre,

      }
    });

    return NextResponse.json({
      message: "Categoría actualizada correctamente",
      categoria: categoriaActualizada
    });
  } catch (error) {
    console.error("Error al actualizar categoría:", error);
    return NextResponse.json(
      { error: "Error al actualizar categoría" },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar una categoría por ID (soft delete)
export async function DELETE(request, { params }) {
  try {
    const id_categoria = parseInt(params.id);
    
    if (isNaN(id_categoria)) {
      return NextResponse.json(
        { error: "ID de categoría inválido" },
        { status: 400 }
      );
    }

    // Verificar que la categoría existe
    const categoriaExistente = await prisma.categoria.findUnique({
      where: { id_categoria },
      include: {
        _count: {
          select: {
            productos: true
          }
        }
      }
    });

    if (!categoriaExistente) {
      return NextResponse.json(
        { error: "Categoría no encontrada" },
        { status: 404 }
      );
    }

    // Verificar si tiene productos asociados
    if (categoriaExistente._count.productos > 0) {
      return NextResponse.json(
        { 
          error: "No se puede eliminar la categoría porque tiene productos asociados",
          productosAsociados: categoriaExistente._count.productos 
        },
        { status: 400 }
      );
    }

    // Soft delete - solo marcar como inactivo
    await prisma.categoria.update({
      where: { id_categoria },
      data: { estado: false }
    });

    return NextResponse.json({
      message: "Categoría desactivada correctamente"
    });
  } catch (error) {
    console.error("Error al eliminar categoría:", error);
    return NextResponse.json(
      { error: "Error al eliminar categoría" },
      { status: 500 }
    );
  }
}