import { PrismaClient } from "../../../generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Obtener un producto por ID
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de producto inválido" },
        { status: 400 }
      );
    }

    const producto = await prisma.producto.findUnique({
      where: { id_producto: id },
      include: {
        categoria: {
          select: {
            id_categoria: true,
            nombre: true
          }
        }
      }
    });

    if (!producto) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(producto);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    return NextResponse.json(
      { error: "Error al obtener producto" },
      { status: 500 }
    );
  }
}

// PUT - Actualizar un producto por ID
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de producto inválido" },
        { status: 400 }
      );
    }

    const data = await request.json();
    
    // Verificar que el producto existe
    const productoExistente = await prisma.producto.findUnique({
      where: { id_producto: id }
    });

    if (!productoExistente) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // En el modelo actual no hay campo código único, pero podría verificarse otro campo único si existe
    // Por ejemplo, verificar si el nombre_producto ya existe
    if (data.nombre_producto && data.nombre_producto !== productoExistente.nombre_producto) {
      const nombreExiste = await prisma.producto.findFirst({
        where: { nombre_producto: data.nombre_producto }
      });

      if (nombreExiste) {
        return NextResponse.json(
          { error: "Ya existe un producto con ese nombre" },
          { status: 400 }
        );
      }
    }

    // Verificar la categoría (si está actualizando)
    if (data.categoria_id_categoria) {
      const categoriaExiste = await prisma.categoria.findUnique({
        where: { id_categoria: parseInt(data.categoria_id_categoria) }
      });

      if (!categoriaExiste) {
        return NextResponse.json(
          { error: "La categoría seleccionada no existe" }, 
          { status: 400 }
        );
      }
    }

    // Preparar los datos de actualización según el modelo actual
    const updateData = {
      nombre_producto: data.nombre_producto,
      descripcion: data.descripcion,
      stock: data.stock !== undefined ? parseFloat(data.stock) : undefined,
      nivel_alerta: data.nivel_alerta,
      categoria_id_categoria: data.categoria_id_categoria !== undefined ? parseInt(data.categoria_id_categoria) : undefined
    };

    // Eliminar campos indefinidos
    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key]
    );

    // Actualizar producto
    const productoActualizado = await prisma.producto.update({
      where: { id_producto: id },
      data: updateData,
      include: {
        categoria: true
      }
    });

    return NextResponse.json({
      message: "Producto actualizado correctamente",
      producto: productoActualizado
    });
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    return NextResponse.json(
      { error: "Error al actualizar producto" },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar un producto por ID (soft delete)
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de producto inválido" },
        { status: 400 }
      );
    }

    // Verificar que el producto existe
    const productoExistente = await prisma.producto.findUnique({
      where: { id_producto: id }
    });

    if (!productoExistente) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Borrar el producto directamente ya que no parece haber soft delete en el modelo actual
    await prisma.producto.delete({
      where: { id_producto: id }
    });

    return NextResponse.json({
      message: "Producto desactivado correctamente"
    });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return NextResponse.json(
      { error: "Error al eliminar producto" },
      { status: 500 }
    );
  }
}