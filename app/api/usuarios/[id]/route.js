import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from '@/app/lib/prisma';

// GET - Obtener un usuario por ID
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de usuario inválido" },
        { status: 400 }
      );
    }

    const usuario = await prisma.usuario.findUnique({
      where: { id },
      include: { rol: true }
    });

    if (!usuario) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // No retornar contraseña
    const { password, ...usuarioSinPassword } = usuario;

    return NextResponse.json(usuarioSinPassword);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return NextResponse.json(
      { error: "Error al obtener usuario" },
      { status: 500 }
    );
  }
}

// PUT - Actualizar un usuario por ID
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de usuario inválido" },
        { status: 400 }
      );
    }

    const data = await request.json();
    
    // Verificar que el usuario existe
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { id }
    });

    if (!usuarioExistente) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Verificar que el email no está en uso (si se está cambiando)
    if (data.email && data.email !== usuarioExistente.email) {
      const emailExists = await prisma.usuario.findUnique({
        where: { email: data.email }
      });

      if (emailExists) {
        return NextResponse.json(
          { error: "El email ya está registrado por otro usuario" },
          { status: 400 }
        );
      }
    }

    // Preparar los datos de actualización
    const updateData = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      rolId: data.rolId !== undefined ? parseInt(data.rolId) : undefined,
      estado: data.estado !== undefined ? data.estado : undefined
    };

    // Si se proporciona contraseña, hash
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    // Eliminar campos indefinidos
    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key]
    );

    // Actualizar usuario
    const usuarioActualizado = await prisma.usuario.update({
      where: { id },
      data: updateData,
      include: { rol: true }
    });

    // No retornar contraseña
    const { password, ...usuarioSinPassword } = usuarioActualizado;

    return NextResponse.json({
      message: "Usuario actualizado correctamente",
      usuario: usuarioSinPassword
    });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return NextResponse.json(
      { error: "Error al actualizar usuario" },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar un usuario por ID (soft delete)
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de usuario inválido" },
        { status: 400 }
      );
    }

    // Verificar que el usuario existe
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { id }
    });

    if (!usuarioExistente) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Soft delete - solo marcar como inactivo
    await prisma.usuario.update({
      where: { id },
      data: { estado: false }
    });

    return NextResponse.json({
      message: "Usuario desactivado correctamente"
    });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return NextResponse.json(
      { error: "Error al eliminar usuario" },
      { status: 500 }
    );
  }
}