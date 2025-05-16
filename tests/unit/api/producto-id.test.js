// Importamos dependencias necesarias
import { NextResponse } from 'next/server';

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
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    },
    categoria: {
      findUnique: jest.fn()
    }
  }
}));

// Importamos el cliente Prisma mockeado
import { prisma } from '../../../app/lib/prisma';

// Definimos las funciones a probar
const GET = async (request, { params }) => {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de producto inválido" },
        { status: 400 }
      );
    }

    const producto = await prisma.producto.findUnique({
      where: { id_producto: id },
      include: {
        categoria: {
          select: {
            id_categoria: true,
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
    return NextResponse.json(
      { error: "Error al obtener producto" },
      { status: 500 }
    );
  }
};

const PUT = async (request, { params }) => {
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
      where: { id_producto: id }
    });

    if (!productoExistente) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Verificar si el nombre_producto ya existe
    if (data.nombre_producto && data.nombre_producto !== productoExistente.nombre_producto) {
      const nombreExiste = await prisma.producto.findFirst({
        where: { nombre_producto: data.nombre_producto }
      });

      if (nombreExiste) {
        return NextResponse.json(
          { error: "Ya existe un producto con ese nombre" },
          { status: 400 }
        );
      }
    }

    // Verificar la categoría (si está actualizando)
    if (data.categoria_id_categoria) {
      const categoriaExiste = await prisma.categoria.findUnique({
        where: { id_categoria: parseInt(data.categoria_id_categoria) }
      });

      if (!categoriaExiste) {
        return NextResponse.json(
          { error: "La categoría seleccionada no existe" }, 
          { status: 400 }
        );
      }
    }

    // Calcular nivel_alerta basado en el stock actual y stock_minimo
    let nivel_alerta = data.nivel_alerta;
    const stock = data.stock !== undefined ? parseFloat(data.stock) : parseFloat(productoExistente.stock || 0);
    const stock_minimo = data.stock_minimo !== undefined ? parseFloat(data.stock_minimo) : parseFloat(productoExistente.stock_minimo || 5);
    
    // Si se está actualizando el stock o el stock_minimo, recalcular el nivel_alerta
    if (data.stock !== undefined || data.stock_minimo !== undefined) {
      nivel_alerta = stock < stock_minimo ? 'bajo' : 'normal';
    }
    
    const updateData = {
      nombre_producto: data.nombre_producto,
      descripcion: data.descripcion,
      stock: stock !== undefined ? stock : undefined,
      stock_minimo: stock_minimo !== undefined ? stock_minimo : undefined,
      nivel_alerta: nivel_alerta,
      categoria_id_categoria: data.categoria_id_categoria !== undefined ? parseInt(data.categoria_id_categoria) : undefined
    };

    // Eliminar campos indefinidos
    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key]
    );

    // Actualizar producto
    const productoActualizado = await prisma.producto.update({
      where: { id_producto: id },
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
    return NextResponse.json(
      { error: "Error al actualizar producto" },
      { status: 500 }
    );
  }
};

const DELETE = async (request, { params }) => {
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
      where: { id_producto: id }
    });

    if (!productoExistente) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Borrar el producto directamente
    await prisma.producto.delete({
      where: { id_producto: id }
    });

    return NextResponse.json({
      message: "Producto desactivado correctamente"
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar producto" },
      { status: 500 }
    );
  }
};

describe('API de Producto Específico', () => {
  const mockRequest = (body = null) => ({
    json: jest.fn().mockResolvedValue(body || {})
  });

  const mockContext = (id) => ({
    params: { id: id.toString() }
  });

  // Producto de prueba
  const productoPrueba = {
    id_producto: 1,
    nombre_producto: 'Lápiz HB',
    descripcion: 'Lápiz de grafito HB',
    stock: 50,
    stock_minimo: 20,
    nivel_alerta: 'normal',
    categoria_id_categoria: 1,
    categoria: {
      id_categoria: 1,
      nombre: 'Escritura'
    }
  };

  // Limpiar todos los mocks después de cada prueba
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/productos/[id]', () => {
    test('debe retornar error 400 si el ID no es un número', async () => {
      const response = await GET(mockRequest(), mockContext('abc'));
      
      expect(response.options.status).toBe(400);
      expect(response.data.error).toBe('ID de producto inválido');
    });

    test('debe retornar error 404 si el producto no existe', async () => {
      // Configurar el mock para retornar null (producto no encontrado)
      prisma.producto.findUnique.mockResolvedValue(null);
      
      const response = await GET(mockRequest(), mockContext(999));
      
      expect(prisma.producto.findUnique).toHaveBeenCalledWith({
        where: { id_producto: 999 },
        include: {
          categoria: {
            select: {
              id_categoria: true,
              nombre: true
            }
          }
        }
      });
      expect(response.options.status).toBe(404);
      expect(response.data.error).toBe('Producto no encontrado');
    });

    test('debe obtener un producto correctamente', async () => {
      // Configurar el mock para retornar el producto de prueba
      prisma.producto.findUnique.mockResolvedValue(productoPrueba);
      
      const response = await GET(mockRequest(), mockContext(1));
      
      expect(prisma.producto.findUnique).toHaveBeenCalledWith({
        where: { id_producto: 1 },
        include: {
          categoria: {
            select: {
              id_categoria: true,
              nombre: true
            }
          }
        }
      });
      expect(response.data).toEqual(productoPrueba);
    });

    test('debe manejar errores correctamente', async () => {
      // Configurar el mock para lanzar un error
      prisma.producto.findUnique.mockRejectedValue(new Error('Error de base de datos'));
      
      const response = await GET(mockRequest(), mockContext(1));
      
      expect(response.options.status).toBe(500);
      expect(response.data.error).toBe('Error al obtener producto');
    });
  });

  describe('PUT /api/productos/[id]', () => {
    test('debe retornar error 400 si el ID no es un número', async () => {
      const response = await PUT(mockRequest(), mockContext('abc'));
      
      expect(response.options.status).toBe(400);
      expect(response.data.error).toBe('ID de producto inválido');
    });

    test('debe retornar error 404 si el producto no existe', async () => {
      // Configurar el mock para retornar null (producto no encontrado)
      prisma.producto.findUnique.mockResolvedValue(null);
      
      const response = await PUT(mockRequest({ nombre_producto: 'Lápiz 2B' }), mockContext(999));
      
      expect(prisma.producto.findUnique).toHaveBeenCalledWith({
        where: { id_producto: 999 }
      });
      expect(response.options.status).toBe(404);
      expect(response.data.error).toBe('Producto no encontrado');
    });

    test('debe validar nombre de producto único', async () => {
      // Configurar el mock para retornar el producto existente
      prisma.producto.findUnique.mockResolvedValue(productoPrueba);
      
      // Configurar otro producto con el mismo nombre
      prisma.producto.findFirst.mockResolvedValue({
        id_producto: 2,
        nombre_producto: 'Lápiz 2B'
      });
      
      const response = await PUT(
        mockRequest({ nombre_producto: 'Lápiz 2B' }), 
        mockContext(1)
      );
      
      expect(response.options.status).toBe(400);
      expect(response.data.error).toBe('Ya existe un producto con ese nombre');
    });

    test('debe validar que la categoría existe', async () => {
      // Configurar el mock para retornar el producto existente
      prisma.producto.findUnique.mockResolvedValue(productoPrueba);
      
      // Configurar que no se encuentra la categoría
      prisma.categoria.findUnique.mockResolvedValue(null);
      
      const response = await PUT(
        mockRequest({ categoria_id_categoria: '2' }), 
        mockContext(1)
      );
      
      expect(prisma.categoria.findUnique).toHaveBeenCalledWith({
        where: { id_categoria: 2 }
      });
      expect(response.options.status).toBe(400);
      expect(response.data.error).toBe('La categoría seleccionada no existe');
    });

    test('debe actualizar el producto correctamente', async () => {
      // Configurar el mock para retornar el producto existente
      prisma.producto.findUnique.mockResolvedValue(productoPrueba);
      
      // Datos para actualizar
      const datosActualizacion = {
        nombre_producto: 'Lápiz 2B',
        stock: '60',
        stock_minimo: '20'
      };
      
      // Configurar que no hay otro producto con el mismo nombre
      prisma.producto.findFirst.mockResolvedValue(null);
      
      // Producto actualizado
      const productoActualizado = {
        ...productoPrueba,
        nombre_producto: 'Lápiz 2B',
        stock: 60
      };
      
      // Configurar el mock para retornar el producto actualizado
      prisma.producto.update.mockResolvedValue(productoActualizado);
      
      const response = await PUT(
        mockRequest(datosActualizacion), 
        mockContext(1)
      );
      
      // Verificar que se llamó a update con los datos correctos
      expect(prisma.producto.update).toHaveBeenCalledWith({
        where: { id_producto: 1 },
        data: expect.objectContaining({
          nombre_producto: 'Lápiz 2B',
          stock: 60,
          nivel_alerta: 'normal'
        }),
        include: { categoria: true }
      });
      
      expect(response.data.message).toBe('Producto actualizado correctamente');
      expect(response.data.producto).toEqual(productoActualizado);
    });

    test('debe calcular nivel_alerta como "bajo" cuando stock < stock_minimo', async () => {
      // Configurar el mock para retornar el producto existente
      prisma.producto.findUnique.mockResolvedValue(productoPrueba);
      
      // Datos para actualizar
      const datosActualizacion = {
        stock: '15',  // Ahora es menor que stock_minimo (20)
      };
      
      // Configurar que no hay otro producto con el mismo nombre
      prisma.producto.findFirst.mockResolvedValue(null);
      
      // Producto actualizado
      const productoActualizado = {
        ...productoPrueba,
        stock: 15,
        nivel_alerta: 'bajo'
      };
      
      // Configurar el mock para retornar el producto actualizado
      prisma.producto.update.mockResolvedValue(productoActualizado);
      
      await PUT(
        mockRequest(datosActualizacion), 
        mockContext(1)
      );
      
      // Verificar que nivel_alerta se establece a 'bajo'
      expect(prisma.producto.update).toHaveBeenCalledWith({
        where: { id_producto: 1 },
        data: expect.objectContaining({
          stock: 15,
          nivel_alerta: 'bajo'
        }),
        include: { categoria: true }
      });
    });

    test('debe manejar errores correctamente', async () => {
      // Configurar el mock para retornar el producto existente
      prisma.producto.findUnique.mockResolvedValue(productoPrueba);
      
      // Configurar que no hay otro producto con el mismo nombre
      prisma.producto.findFirst.mockResolvedValue(null);
      
      // Configurar el mock para lanzar un error
      prisma.producto.update.mockRejectedValue(new Error('Error de base de datos'));
      
      const response = await PUT(
        mockRequest({ nombre_producto: 'Lápiz 2B' }), 
        mockContext(1)
      );
      
      expect(response.options.status).toBe(500);
      expect(response.data.error).toBe('Error al actualizar producto');
    });
  });

  describe('DELETE /api/productos/[id]', () => {
    test('debe retornar error 400 si el ID no es un número', async () => {
      const response = await DELETE(mockRequest(), mockContext('abc'));
      
      expect(response.options.status).toBe(400);
      expect(response.data.error).toBe('ID de producto inválido');
    });

    test('debe retornar error 404 si el producto no existe', async () => {
      // Configurar el mock para retornar null (producto no encontrado)
      prisma.producto.findUnique.mockResolvedValue(null);
      
      const response = await DELETE(mockRequest(), mockContext(999));
      
      expect(prisma.producto.findUnique).toHaveBeenCalledWith({
        where: { id_producto: 999 }
      });
      expect(response.options.status).toBe(404);
      expect(response.data.error).toBe('Producto no encontrado');
    });

    test('debe eliminar el producto correctamente', async () => {
      // Configurar el mock para retornar el producto existente
      prisma.producto.findUnique.mockResolvedValue(productoPrueba);
      
      const response = await DELETE(mockRequest(), mockContext(1));
      
      expect(prisma.producto.delete).toHaveBeenCalledWith({
        where: { id_producto: 1 }
      });
      expect(response.data.message).toBe('Producto desactivado correctamente');
    });

    test('debe manejar errores correctamente', async () => {
      // Configurar el mock para retornar el producto existente
      prisma.producto.findUnique.mockResolvedValue(productoPrueba);
      
      // Configurar el mock para lanzar un error
      prisma.producto.delete.mockRejectedValue(new Error('Error de base de datos'));
      
      const response = await DELETE(mockRequest(), mockContext(1));
      
      expect(response.options.status).toBe(500);
      expect(response.data.error).toBe('Error al eliminar producto');
    });
  });
});
