import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    
    // Obtener parámetros de la URL
    const { searchParams } = new URL(request.url);
    const categoriaId = searchParams.get('categoria');
    const search = searchParams.get('nombre');
    const stockBajo = searchParams.get('stockBajo') === 'true';
    const stockAlto = searchParams.get('altoStock') === 'true';
    
    // Construir la consulta
    let where = {};
    
    if (categoriaId) {
      where.categoria_id_categoria = parseInt(categoriaId);
    }
    
    if (search) {
      // MySQL no tiene mode: 'insensitive' como PostgreSQL
      // Para MySQL usamos contains y dependemos de la configuración de collation de la base de datos
      where.OR = [
        { nombre_producto: { contains: search } },
        { descripcion: { contains: search } },
        { codigo_barras: { contains: search } }
      ];
    }
    
    if (stockBajo) {
      // Para nivel de alerta bajo
      where.nivel_alerta = 'bajo';
    }
    
    if (stockAlto) {
      // Para nivel de alerta alto
      where.nivel_alerta = 'alto';
    }
    
    // Ejecutar la consulta
    const productos = await prisma.producto.findMany({
      where,
      include: {
        categoria: true
      },
      orderBy: {
        nombre_producto: 'asc'
      }
    });
    
    return NextResponse.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' }, 
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
    
    // Validaciones básicas
    if (!data.nombre_producto) {
      return NextResponse.json(
        { error: "El nombre del producto es requerido" }, 
        { status: 400 }
      );
    }
    
    if (!data.categoria_id_categoria) {
      return NextResponse.json(
        { error: "La categoría es requerida" }, 
        { status: 400 }
      );
    }
    
    // Crear el producto
    const producto = await prisma.producto.create({
      data: {
        nombre_producto: data.nombre_producto,
        descripcion: data.descripcion || null,
        stock: data.stock || 0,
        nivel_alerta: data.stock < (data.stock_minimo || 10) ? 'bajo' : 'normal',
        categoria_id_categoria: parseInt(data.categoria_id_categoria)
      }
    });
    
    return NextResponse.json(
      { message: "Producto creado correctamente", producto }, 
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al crear producto:', error);
    return NextResponse.json(
      { error: 'Error al crear el producto' }, 
      { status: 500 }
    );
  }
}