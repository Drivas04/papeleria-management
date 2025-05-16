import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { getServerSession } from 'next-auth';
import { prisma } from '@/app/lib/prisma';
import { authOptions } from '@/app/lib/auth';

// GET - Obtener todos los usuarios
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return new NextResponse(
        JSON.stringify({ error: 'No autenticado' }),
        { status: 401 }
      );
    }
    
    const usuarios = await prisma.usuario.findMany();

    // No retornamos las contraseñas en la respuesta
    const usuariosSinPassword = usuarios.map(usuario => {
      const { contraseña, ...usuarioSinPassword } = usuario;
      return usuarioSinPassword;
    });

    return NextResponse.json(usuariosSinPassword);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json(
      { error: "Error al obtener usuarios" },
      { status: 500 }
    );
  }
}

// POST - Crear un nuevo usuario
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validaciones básicas
    if (!data.email || !data.password || !data.nombre || !data.apellido || !data.rolId) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" }, 
        { status: 400 }
      );
    }

    // Verificar si el email ya existe
    const existingUser = await prisma.usuario.findUnique({
      where: { email: data.email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "El email ya está registrado" }, 
        { status: 400 }
      );
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Crear el usuario
    const usuario = await prisma.usuario.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        password: hashedPassword,
        rolId: data.rolId
      },
      include: {
        rol: true
      }
    });

    // No retornamos la contraseña en la respuesta
    const { password, ...usuarioSinPassword } = usuario;

    return NextResponse.json(
      { message: "Usuario creado correctamente", usuario: usuarioSinPassword },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json(
      { error: "Error al crear usuario" },
      { status: 500 }
    );
  }
}