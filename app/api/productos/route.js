import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma';
import { getServerSession } from 'next-auth';

// Usar un singleton para la instancia de PrismaClient
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return new NextResponse(
        JSON.stringify({ error: 'No autenticado' }),
        { status: 401 }
      );
    }
    
    // Obtener parámetros de la URL
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const categoriaId = searchParams.get('categoriaId');
    const bajoStock = searchParams.get('bajoStock');
    const altoStock = searchParams.get('altoStock');
    
    let productos = [];
    
    // Si se busca productos con bajo stock
    if (bajoStock === 'true') {
      // Primero obtenemos todos los productos
      const allProductos = await prisma.producto.findMany({
        where: { estado: true },
        include: { categoria: true }
      });
      
      // Luego filtramos los que tienen stock menor que su mínimo
      productos = allProductos.filter(producto => 
        producto.stock < producto.stockMinimo
      );
    }
    // Si se busca productos con alto stock
    else if (altoStock === 'true') {
      // Primero obtenemos todos los productos
      const allProductos = await prisma.producto.findMany({
        where: { estado: true },
        include: { categoria: true }
      });
      
      // Luego filtramos los que tienen stock mayor que su máximo
      productos = allProductos.filter(producto => 
        producto.stock > producto.stockMaximo
      );
    }
    // Búsqueda normal
    else {
      const where = {
        estado: true
      };
      
      // Añadir filtro por nombre si existe
      if (search) {
        where.OR = [
          { nombre: { contains: search } },
          { codigo: { contains: search } }
        ];
      }
      
      // Añadir filtro por categoría si existe
      if (categoriaId) {
        where.categoriaId = parseInt(categoriaId);
      }
      
      productos = await prisma.producto.findMany({
        where,
        include: {
          categoria: true
        },
        orderBy: {
          nombre: 'asc'
        }
      });
    }
    
    return NextResponse.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Error al procesar la solicitud' }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return new NextResponse(
        JSON.stringify({ error: 'No autenticado' }),
        { status: 401 }
      );
    }
    
    const data = await request.json();
    
    // Validar datos requeridos
    if (!data.nombre || !data.codigo || !data.precioCompra === undefined || !data.precioVenta === undefined || data.categoriaId === undefined) {
      return new NextResponse(
        JSON.stringify({ error: 'Faltan campos obligatorios' }),
        { status: 400 }
      );
    }
    
    // Convertir a números cuando sea necesario
    const productoData = {
      ...data,
      precioCompra: parseFloat(data.precioCompra),
      precioVenta: parseFloat(data.precioVenta),
      stock: parseInt(data.stock || 0),
      stockMinimo: data.stockMinimo ? parseInt(data.stockMinimo) : 5,
      stockMaximo: data.stockMaximo ? parseInt(data.stockMaximo) : 100,
      categoriaId: parseInt(data.categoriaId),
    };
    
    const producto = await prisma.producto.create({
      data: productoData
    });
    
    return NextResponse.json(producto);
  } catch (error) {
    console.error('Error al crear producto:', error);
    
    if (error.code === 'P2002') {
      return new NextResponse(
        JSON.stringify({ error: 'Ya existe un producto con ese código' }),
        { status: 400 }
      );
    }
    
    return new NextResponse(
      JSON.stringify({ error: 'Error al procesar la solicitud' }),
      { status: 500 }
    );
  }
}