import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    
    const categorias = await prisma.categoria.findMany({
      orderBy: {
        nombre: 'asc'
      },
      include: {
        _count: {
          select: {
            productos: true
          }
        }
      }
    });

    return NextResponse.json(categorias);
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    return NextResponse.json(
      { error: "Error al obtener categorías" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    
    const data = await request.json();
    
    if (!data.nombre) {
      return NextResponse.json(
        { error: "El nombre de la categoría es requerido" }, 
        { status: 400 }
      );
    }

    const categoriaExistente = await prisma.categoria.findFirst({
      where: { nombre: data.nombre }
    });

    if (categoriaExistente) {
      return NextResponse.json(
        { error: "Ya existe una categoría con ese nombre" }, 
        { status: 400 }
      );
    }

    const categoria = await prisma.categoria.create({
      data: {
        nombre: data.nombre,
      }
    });

    return NextResponse.json(
      { message: "Categoría creada correctamente", categoria },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear categoría:", error);
    return NextResponse.json(
      { error: "Error al crear la categoría" },
      { status: 500 }
    );
  }
}