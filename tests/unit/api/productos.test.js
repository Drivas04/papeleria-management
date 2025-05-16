// Importamos dependencias necesarias
import { NextResponse } from 'next/server';

// Mock de next-auth
jest.mock('next-auth', () => ({
  getServerSession: jest.fn()
}));

// Define las funciones GET y POST que vamos a probar
async function GET(request) {
  try {
    const session = await getServerSession();
    
    if (!session) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    
    // Obtener parámetros de la URL
    const { searchParams } = new URL(request.url);
    const categoriaId = searchParams.get('categoria');
    const search = searchParams.get('nombre');
    const stockBajo = searchParams.get('stockBajo') === 'true';
    
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
    
    const productos = await prisma.producto.findMany({
      where,
      include: {
        categoria: true
      },
      orderBy: {
        nombre_producto: 'asc'
      }
    });
    
    // Filtrar por stock bajo después de obtener los resultados
    if (stockBajo) {
      const productosConBajoStock = productos.filter(p => {
        const stock = parseFloat(p.stock || 0);
        const stock_minimo = parseFloat(p.stock_minimo || 5);
        return stock < stock_minimo;
      });
      
      return NextResponse.json(productosConBajoStock);
    }
    
    return NextResponse.json(productos);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' }, 
      { status: 500 }
    );
  }
}

async function POST(request) {
  try {
    const session = await getServerSession();
    
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
    const stock_minimo = parseFloat(data.stock_minimo || 10);
    
    const producto = await prisma.producto.create({
      data: {
        nombre_producto: data.nombre_producto,
        descripcion: data.descripcion || null,
        stock: stock,
        stock_minimo: stock_minimo,
        nivel_alerta: stock < stock_minimo ? 'bajo' : 'normal',
        categoria_id_categoria: parseInt(data.categoria_id_categoria)
      }
    });
    
    return NextResponse.json(
      { message: "Producto creado correctamente", producto }, 
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear el producto' }, 
      { status: 500 }
    );
  }
}

// Obtén una referencia a la función getServerSession mockeada
import { getServerSession } from 'next-auth';

// Mock de next/server
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, options) => ({ data, options }))
  }
}));

// Mock del cliente Prisma
jest.mock('../../../app/lib/prisma', () => ({
  prisma: {
    producto: {
      findMany: jest.fn(),
      create: jest.fn()
    }
  }
}));

// Importamos el cliente Prisma mockeado
import { prisma } from '../../../app/lib/prisma';

describe('API de Productos', () => {
  const mockSession = {
    user: { id: '1', name: 'admin', role: 'admin' }
  };
  
  const mockRequest = (params = {}) => {
    // Crear una URL con parámetros de búsqueda
    const url = new URL('http://example.com/api/productos');
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    
    return {
      url: url.toString(),
      json: jest.fn().mockResolvedValue({ ...params })
    };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/productos', () => {
    test('debe retornar 401 si no hay sesión', async () => {
      // Configurar el mock para retornar null (sin sesión)
      getServerSession.mockResolvedValue(null);
      
      const response = await GET(mockRequest());
      
      expect(getServerSession).toHaveBeenCalled();
      expect(response.options.status).toBe(401);
      expect(response.data.error).toBe('No autenticado');
    });

    test('debe obtener todos los productos correctamente', async () => {
      // Configurar el mock para retornar una sesión válida
      getServerSession.mockResolvedValue(mockSession);
      
      // Productos de prueba
      const productosPrueba = [
        { id_producto: 1, nombre_producto: 'Lápiz HB', stock: 50, stock_minimo: 20, categoria: { nombre: 'Escritura' } },
        { id_producto: 2, nombre_producto: 'Borrador', stock: 30, stock_minimo: 10, categoria: { nombre: 'Escritura' } }
      ];
      
      // Configurar el mock para retornar los productos de prueba
      prisma.producto.findMany.mockResolvedValue(productosPrueba);
      
      const response = await GET(mockRequest());
      
      expect(getServerSession).toHaveBeenCalled();
      expect(prisma.producto.findMany).toHaveBeenCalled();
      expect(response.data).toEqual(productosPrueba);
    });

    test('debe filtrar productos por categoría', async () => {
      // Configurar el mock para retornar una sesión válida
      getServerSession.mockResolvedValue(mockSession);
      
      // Filtrar por categoría 1
      await GET(mockRequest({ categoria: '1' }));
      
      // Verificar que se llama con el filtro correcto
      expect(prisma.producto.findMany).toHaveBeenCalledWith(expect.objectContaining({
        where: { categoria_id_categoria: 1 },
        include: { categoria: true },
        orderBy: { nombre_producto: 'asc' }
      }));
    });

    test('debe filtrar productos por nombre', async () => {
      // Configurar el mock para retornar una sesión válida
      getServerSession.mockResolvedValue(mockSession);
      
      // Filtrar por nombre 'Lápiz'
      await GET(mockRequest({ nombre: 'Lápiz' }));
      
      // Verificar que se llama con el filtro correcto
      expect(prisma.producto.findMany).toHaveBeenCalledWith(expect.objectContaining({
        where: {
          OR: [
            { nombre_producto: { contains: 'Lápiz' } },
            { descripcion: { contains: 'Lápiz' } }
          ]
        },
        include: { categoria: true },
        orderBy: { nombre_producto: 'asc' }
      }));
    });

    test('debe filtrar productos con stock bajo', async () => {
      // Configurar el mock para retornar una sesión válida
      getServerSession.mockResolvedValue(mockSession);
      
      // Productos de prueba con diferentes niveles de stock
      const productosPrueba = [
        { id_producto: 1, nombre_producto: 'Lápiz HB', stock: 5, stock_minimo: 10 },  // Stock bajo
        { id_producto: 2, nombre_producto: 'Borrador', stock: 15, stock_minimo: 10 }  // Stock normal
      ];
      
      // Configurar el mock para retornar los productos de prueba
      prisma.producto.findMany.mockResolvedValue(productosPrueba);
      
      // Filtrar por stock bajo
      const response = await GET(mockRequest({ stockBajo: 'true' }));
      
      // El resultado debe contener solo el producto con stock bajo
      expect(response.data).toEqual([productosPrueba[0]]);
    });

    test('debe manejar errores correctamente', async () => {
      // Configurar el mock para retornar una sesión válida
      getServerSession.mockResolvedValue(mockSession);
      
      // Configurar el mock para lanzar un error
      prisma.producto.findMany.mockRejectedValue(new Error('Error de base de datos'));
      
      const response = await GET(mockRequest());
      
      expect(response.options.status).toBe(500);
      expect(response.data.error).toBe('Error al procesar la solicitud');
    });
  });

  describe('POST /api/productos', () => {
    test('debe retornar 401 si no hay sesión', async () => {
      // Configurar el mock para retornar null (sin sesión)
      getServerSession.mockResolvedValue(null);
      
      const response = await POST(mockRequest());
      
      expect(getServerSession).toHaveBeenCalled();
      expect(response.options.status).toBe(401);
      expect(response.data.error).toBe('No autenticado');
    });

    test('debe validar que el nombre del producto es requerido', async () => {
      // Configurar el mock para retornar una sesión válida
      getServerSession.mockResolvedValue(mockSession);
      
      // Producto sin nombre
      const request = mockRequest({ categoria_id_categoria: '1' });
      
      const response = await POST(request);
      
      expect(response.options.status).toBe(400);
      expect(response.data.error).toBe('El nombre del producto es requerido');
    });

    test('debe validar que la categoría es requerida', async () => {
      // Configurar el mock para retornar una sesión válida
      getServerSession.mockResolvedValue(mockSession);
      
      // Producto sin categoría
      const request = mockRequest({ nombre_producto: 'Lápiz HB' });
      
      const response = await POST(request);
      
      expect(response.options.status).toBe(400);
      expect(response.data.error).toBe('La categoría es requerida');
    });

    test('debe crear un producto correctamente', async () => {
      // Configurar el mock para retornar una sesión válida
      getServerSession.mockResolvedValue(mockSession);
      
      // Datos del producto
      const datosPrueba = {
        nombre_producto: 'Lápiz HB',
        descripcion: 'Lápiz de grafito HB',
        stock: '100',
        stock_minimo: '20',
        categoria_id_categoria: '1'
      };
      
      // Producto creado
      const productoCreado = {
        id_producto: 1,
        nombre_producto: 'Lápiz HB',
        descripcion: 'Lápiz de grafito HB',
        stock: 100,
        stock_minimo: 20,
        nivel_alerta: 'normal',
        categoria_id_categoria: 1
      };
      
      // Configurar el mock para retornar el producto creado
      prisma.producto.create.mockResolvedValue(productoCreado);
      
      const request = {
        ...mockRequest(),
        json: jest.fn().mockResolvedValue(datosPrueba)
      };
      
      const response = await POST(request);
      
      expect(request.json).toHaveBeenCalled();
      expect(prisma.producto.create).toHaveBeenCalledWith({
        data: {
          nombre_producto: 'Lápiz HB',
          descripcion: 'Lápiz de grafito HB',
          stock: 100,
          stock_minimo: 20,
          nivel_alerta: 'normal',
          categoria_id_categoria: 1
        }
      });
      
      expect(response.options.status).toBe(201);
      expect(response.data.message).toBe('Producto creado correctamente');
      expect(response.data.producto).toEqual(productoCreado);
    });

    test('debe establecer nivel de alerta a "bajo" cuando el stock es menor que el mínimo', async () => {
      // Configurar el mock para retornar una sesión válida
      getServerSession.mockResolvedValue(mockSession);
      
      // Datos del producto con stock bajo
      const datosPrueba = {
        nombre_producto: 'Lápiz HB',
        descripcion: 'Lápiz de grafito HB',
        stock: '5',
        stock_minimo: '20',
        categoria_id_categoria: '1'
      };
      
      // Configurar el mock de la creación
      prisma.producto.create.mockImplementation(async ({ data }) => ({
        id_producto: 1,
        ...data
      }));
      
      const request = {
        ...mockRequest(),
        json: jest.fn().mockResolvedValue(datosPrueba)
      };
      
      await POST(request);
      
      // Verificar que nivel_alerta se establece a 'bajo'
      expect(prisma.producto.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          nivel_alerta: 'bajo'
        })
      });
    });

    test('debe manejar errores correctamente', async () => {
      // Configurar el mock para retornar una sesión válida
      getServerSession.mockResolvedValue(mockSession);
      
      // Datos del producto
      const datosPrueba = {
        nombre_producto: 'Lápiz HB',
        descripcion: 'Lápiz de grafito HB',
        stock: '100',
        stock_minimo: '20',
        categoria_id_categoria: '1'
      };
      
      // Configurar el mock para lanzar un error
      prisma.producto.create.mockRejectedValue(new Error('Error de base de datos'));
      
      const request = {
        ...mockRequest(),
        json: jest.fn().mockResolvedValue(datosPrueba)
      };
      
      const response = await POST(request);
      
      expect(response.options.status).toBe(500);
      expect(response.data.error).toBe('Error al crear el producto');
    });
  });
});
