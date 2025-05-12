import { PrismaClient } from "@prisma/client";
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
      where: { id },
      include: {
        categoria: {
          select: {
            id: true,
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
      where: { id }
    });

    if (!productoExistente) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Verificar que el código no está duplicado (si se está cambiando)
    if (data.codigo && data.codigo !== productoExistente.codigo) {
      const codigoExiste = await prisma.producto.findUnique({
        where: { codigo: data.codigo }
      });

      if (codigoExiste) {
        return NextResponse.json(
          { error: "Ya existe un producto con ese código" },
          { status: 400 }
        );
      }
    }

    // Verificar la categoría (si está actualizando)
    if (data.categoriaId) {
      const categoriaExiste = await prisma.categoria.findUnique({
        where: { id: parseInt(data.categoriaId) }
      });

      if (!categoriaExiste) {
        return NextResponse.json(
          { error: "La categoría seleccionada no existe" }, 
          { status: 400 }
        );
      }
    }

    // Preparar los datos de actualización
    const updateData = {
      codigo: data.codigo,
      nombre: data.nombre,
      descripcion: data.descripcion,
      precioCompra: data.precioCompra !== undefined ? parseFloat(data.precioCompra) : undefined,
      precioVenta: data.precioVenta !== undefined ? parseFloat(data.precioVenta) : undefined,
      stock: data.stock !== undefined ? parseInt(data.stock) : undefined,
      stockMinimo: data.stockMinimo !== undefined ? parseInt(data.stockMinimo) : undefined,
      categoriaId: data.categoriaId !== undefined ? parseInt(data.categoriaId) : undefined,
      estado: data.estado !== undefined ? data.estado : undefined
    };

    // Eliminar campos indefinidos
    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key]
    );

    // Actualizar producto
    const productoActualizado = await prisma.producto.update({
      where: { id },
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
      where: { id }
    });

    if (!productoExistente) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Soft delete - solo marcar como inactivo
    await prisma.producto.update({
      where: { id },
      data: { estado: false }
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