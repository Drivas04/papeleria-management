import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Obtener todos los productos con filtros opcionales
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoria = searchParams.get("categoria");
    const nombre = searchParams.get("nombre");
    const codigo = searchParams.get("codigo");
    const stockBajo = searchParams.get("stockBajo") === "true";
    
    // Construir filtros
    let where = { estado: true };
    
    if (categoria) {
      where.categoriaId = parseInt(categoria);
    }
    
    if (nombre) {
      where.nombre = {
        contains: nombre,
        mode: 'insensitive'
      };
    }
    
    if (codigo) {
      where.codigo = {
        contains: codigo,
        mode: 'insensitive'
      };
    }
    
    if (stockBajo) {
      where.stock = {
        lte: prisma.producto.fields.stockMinimo
      };
    }
    
    // Ejecutar consulta
    const productos = await prisma.producto.findMany({
      where,
      include: {
        categoria: {
          select: {
            id: true,
            nombre: true
          }
        }
      },
      orderBy: {
        nombre: 'asc'
      }
    });
    
    return NextResponse.json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return NextResponse.json(
      { error: "Error al obtener productos" },
      { status: 500 }
    );
  }
}

// POST - Crear un nuevo producto
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validaciones básicas
    if (!data.nombre || !data.codigo || !data.categoriaId || 
        data.precioCompra === undefined || data.precioVenta === undefined) {
      return NextResponse.json(
        { error: "Faltan campos requeridos para el producto" }, 
        { status: 400 }
      );
    }

    // Verificar si el código ya existe
    const productoExistente = await prisma.producto.findUnique({
      where: { codigo: data.codigo }
    });

    if (productoExistente) {
      return NextResponse.json(
        { error: "Ya existe un producto con ese código" }, 
        { status: 400 }
      );
    }

    // Verificar que la categoría existe
    const categoriaExistente = await prisma.categoria.findUnique({
      where: { id: parseInt(data.categoriaId) }
    });

    if (!categoriaExistente) {
      return NextResponse.json(
        { error: "La categoría seleccionada no existe" }, 
        { status: 400 }
      );
    }

    // Crear el producto
    const producto = await prisma.producto.create({
      data: {
        codigo: data.codigo,
        nombre: data.nombre,
        descripcion: data.descripcion || null,
        precioCompra: parseFloat(data.precioCompra),
        precioVenta: parseFloat(data.precioVenta),
        stock: parseInt(data.stock || 0),
        stockMinimo: parseInt(data.stockMinimo || 5),
        categoriaId: parseInt(data.categoriaId)
      },
      include: {
        categoria: true
      }
    });

    return NextResponse.json(
      { message: "Producto creado correctamente", producto },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear producto:", error);
    return NextResponse.json(
      { error: "Error al crear el producto" },
      { status: 500 }
    );
  }
}