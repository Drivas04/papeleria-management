import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Obtener un cliente por ID
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de cliente inválido" },
        { status: 400 }
      );
    }

    const cliente = await prisma.cliente.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            ventas: true
          }
        },
        ventas: {
          take: 5,
          orderBy: {
            fecha: 'desc'
          },
          select: {
            id: true,
            fecha: true,
            total: true
          }
        }
      }
    });

    if (!cliente) {
      return NextResponse.json(
        { error: "Cliente no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(cliente);
  } catch (error) {
    console.error("Error al obtener cliente:", error);
    return NextResponse.json(
      { error: "Error al obtener cliente" },
      { status: 500 }
    );
  }
}

// PUT - Actualizar un cliente por ID
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de cliente inválido" },
        { status: 400 }
      );
    }

    const data = await request.json();
    
    // Verificar que el cliente existe
    const clienteExistente = await prisma.cliente.findUnique({
      where: { id }
    });

    if (!clienteExistente) {
      return NextResponse.json(
        { error: "Cliente no encontrado" },
        { status: 404 }
      );
    }

    // Verificar si el email ya está en uso (si se está cambiando)
    if (data.email && data.email !== clienteExistente.email) {
      const emailExiste = await prisma.cliente.findUnique({
        where: { email: data.email }
      });

      if (emailExiste) {
        return NextResponse.json(
          { error: "El email ya está registrado por otro cliente" },
          { status: 400 }
        );
      }
    }

    // Preparar los datos de actualización
    const updateData = {
      nombre: data.nombre,
      apellido: data.apellido,
      direccion: data.direccion,
      telefono: data.telefono,
      email: data.email,
      estado: data.estado !== undefined ? data.estado : clienteExistente.estado
    };

    // Eliminar campos indefinidos
    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key]
    );

    // Actualizar cliente
    const clienteActualizado = await prisma.cliente.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json({
      message: "Cliente actualizado correctamente",
      cliente: clienteActualizado
    });
  } catch (error) {
    console.error("Error al actualizar cliente:", error);
    return NextResponse.json(
      { error: "Error al actualizar cliente" },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar un cliente por ID (soft delete)
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de cliente inválido" },
        { status: 400 }
      );
    }

    // Verificar que el cliente existe
    const clienteExistente = await prisma.cliente.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            ventas: true
          }
        }
      }
    });

    if (!clienteExistente) {
      return NextResponse.json(
        { error: "Cliente no encontrado" },
        { status: 404 }
      );
    }

    // Soft delete - solo marcar como inactivo
    await prisma.cliente.update({
      where: { id },
      data: { estado: false }
    });

    return NextResponse.json({
      message: "Cliente desactivado correctamente"
    });
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
    return NextResponse.json(
      { error: "Error al eliminar cliente" },
      { status: 500 }
    );
  }
}