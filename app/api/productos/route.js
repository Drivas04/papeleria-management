import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

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
    const stockBajo = searchParams.get('stockBajo') === 'true' || searchParams.get('bajoStock') === 'true'; // Aceptar ambos parámetros
    const stockAlto = searchParams.get('altoStock') === 'true' || searchParams.get('stockAlto') === 'true'; // Aceptar ambos parámetros
    
    // Construir la consulta
    let where = {};
    
    if (categoriaId) {
      where.categoria_id_categoria = parseInt(categoriaId);
    }
    
    if (search) {
      where.OR = [
        { nombre_producto: { contains: search } },
        { descripcion: { contains: search } }
      ];
    }
    
    // No usar filters inicialmente
    let filters = {};
    
    
    const productos = await prisma.producto.findMany({
      where,
      include: {
        categoria: true
      },
      orderBy: {
        nombre_producto: 'asc'
      }
    });
    
    // Filtrar por stock bajo o alto después de obtener los resultados
    if (stockBajo) {
      console.log(`Filtrando productos con stock bajo de ${productos.length} productos totales`);
      const productosConBajoStock = productos.filter(p => {
        const stock = parseFloat(p.stock || 0);
        const stock_minimo = parseFloat(p.stock_minimo || 5);
        // Cambiar condición: un producto tiene stock bajo solo si su stock es MENOR que el stock_minimo
        const esBajoStock = stock < stock_minimo;
        
        if (esBajoStock) {
          console.log(`Producto con stock bajo: ${p.nombre_producto}, Stock: ${stock}, Stock mínimo: ${stock_minimo}`);
        }
        
        return esBajoStock;
      });
      
      console.log(`Se encontraron ${productosConBajoStock.length} productos con stock bajo`);
      return NextResponse.json(productosConBajoStock);
    }
    
    if (stockAlto) {
      console.log(`Filtrando productos con stock alto de ${productos.length} productos totales`);
      const productosConAltoStock = productos.filter(p => {
        const stock = parseFloat(p.stock || 0);
        const stock_minimo = parseFloat(p.stock_minimo || 5);
        const umbralAltoStock = stock_minimo * 3; // Stock alto: 3 veces el mínimo
        // Condición claramente definida para stock alto
        const esAltoStock = stock > umbralAltoStock;
        
        if (esAltoStock) {
          console.log(`Producto con stock alto: ${p.nombre_producto}, Stock: ${stock}, Stock mínimo: ${stock_minimo}, Umbral alto stock: ${umbralAltoStock}`);
        }
        
        return esAltoStock;
      });
      
      console.log(`Se encontraron ${productosConAltoStock.length} productos con stock alto`);
      return NextResponse.json(productosConAltoStock);
    }
    
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
    const stock = parseFloat(data.stock || 0);
    const stock_minimo = parseFloat(data.stock_minimo || 5);
    
    const producto = await prisma.producto.create({
      data: {
        nombre_producto: data.nombre_producto,
        descripcion: data.descripcion || null,
        stock: stock, // Siempre iniciará en 0 para nuevos productos
        precio_compra: parseFloat(data.precio_compra || 0), // Iniciará en 0
        precio_venta: parseFloat(data.precio_venta || 0), // Iniciará en 0
        stock_minimo: stock_minimo,
        nivel_alerta: 'bajo', // Para nuevos productos siempre empezará como bajo
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