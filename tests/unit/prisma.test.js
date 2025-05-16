// Mock del cliente Prisma
jest.mock('../../app/lib/prisma', () => {
  const mockPrismaClient = {
    $connect: jest.fn().mockResolvedValue(),
    $disconnect: jest.fn().mockResolvedValue(),
    // Mocks para diferentes modelos y operaciones
    usuario: {
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    producto: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    venta: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    // Se pueden agregar más modelos según sea necesario
  };

  return {
    prisma: mockPrismaClient
  };
});

// Importamos el cliente Prisma mockeado
import { prisma } from '../../app/lib/prisma';

describe('Cliente Prisma', () => {
  // Llamar explícitamente a $connect antes de cada prueba
  beforeEach(() => {
    prisma.$connect.mockClear();
    prisma.$connect(); // Esto asegura que $connect sea llamado antes de cada prueba
  });

  // Limpiar los mocks después de cada prueba
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('debería conectarse a la base de datos', async () => {
    // Verificar que $connect fue llamado durante la inicialización
    expect(prisma.$connect).toHaveBeenCalled();
  });

  test('debería buscar un usuario por nombre de usuario', async () => {
    // Mock de datos para la prueba
    const usuarioMock = {
      id_usuario: 1,
      nombre_usuario: 'admin',
      contrasena: 'hashed_password',
      rol: 'admin',
      nombre: 'Administrador',
    };

    // Configurar el mock para devolver un usuario específico
    prisma.usuario.findFirst.mockResolvedValue(usuarioMock);

    // Realizar la consulta
    const usuario = await prisma.usuario.findFirst({
      where: {
        nombre_usuario: 'admin'
      }
    });

    // Verificaciones
    expect(prisma.usuario.findFirst).toHaveBeenCalledWith({
      where: {
        nombre_usuario: 'admin'
      }
    });
    expect(usuario).toEqual(usuarioMock);
  });

  test('debería obtener una lista de productos', async () => {
    // Mock de datos para la prueba
    const productosMock = [
      {
        id_producto: 1,
        nombre_producto: 'Lápiz HB',
        descripcion: 'Lápiz de grafito estándar',
        stock: 100,
        nivel_alerta: 'normal',
      },
      {
        id_producto: 2,
        nombre_producto: 'Bolígrafo azul',
        descripcion: 'Bolígrafo de tinta azul',
        stock: 50,
        nivel_alerta: 'normal',
      }
    ];

    // Configurar el mock para devolver una lista de productos
    prisma.producto.findMany.mockResolvedValue(productosMock);

    // Realizar la consulta
    const productos = await prisma.producto.findMany();

    // Verificaciones
    expect(prisma.producto.findMany).toHaveBeenCalled();
    expect(productos).toEqual(productosMock);
    expect(productos.length).toBe(2);
  });

  test('debería crear un nuevo producto', async () => {
    // Datos del nuevo producto
    const nuevoProducto = {
      nombre_producto: 'Goma de borrar',
      descripcion: 'Goma de borrar blanca',
      stock: 30,
      nivel_alerta: 'normal',
      categoria_id_categoria: 1
    };

    // Producto creado (con ID asignado)
    const productoCreado = {
      id_producto: 3,
      ...nuevoProducto
    };

    // Configurar el mock para simular la creación exitosa
    prisma.producto.create.mockResolvedValue(productoCreado);

    // Crear el producto
    const resultado = await prisma.producto.create({
      data: nuevoProducto
    });

    // Verificaciones
    expect(prisma.producto.create).toHaveBeenCalledWith({
      data: nuevoProducto
    });
    expect(resultado).toEqual(productoCreado);
    expect(resultado.id_producto).toBe(3);
  });

  test('debería actualizar un producto existente', async () => {
    // ID del producto a actualizar
    const id = 1;

    // Datos para actualizar
    const datosActualizados = {
      stock: 80,
      nivel_alerta: 'normal'
    };

    // Producto actualizado
    const productoActualizado = {
      id_producto: id,
      nombre_producto: 'Lápiz HB',
      descripcion: 'Lápiz de grafito estándar',
      stock: 80,
      nivel_alerta: 'normal',
    };

    // Configurar el mock para simular la actualización exitosa
    prisma.producto.update.mockResolvedValue(productoActualizado);

    // Actualizar el producto
    const resultado = await prisma.producto.update({
      where: { id_producto: id },
      data: datosActualizados
    });

    // Verificaciones
    expect(prisma.producto.update).toHaveBeenCalledWith({
      where: { id_producto: id },
      data: datosActualizados
    });
    expect(resultado).toEqual(productoActualizado);
    expect(resultado.stock).toBe(80);
  });

  test('debería eliminar un producto', async () => {
    // ID del producto a eliminar
    const id = 2;

    // Producto eliminado
    const productoEliminado = {
      id_producto: id,
      nombre_producto: 'Bolígrafo azul',
      descripcion: 'Bolígrafo de tinta azul',
      stock: 50,
      nivel_alerta: 'normal',
    };

    // Configurar el mock para simular la eliminación exitosa
    prisma.producto.delete.mockResolvedValue(productoEliminado);

    // Eliminar el producto
    const resultado = await prisma.producto.delete({
      where: { id_producto: id }
    });

    // Verificaciones
    expect(prisma.producto.delete).toHaveBeenCalledWith({
      where: { id_producto: id }
    });
    expect(resultado).toEqual(productoEliminado);
    expect(resultado.id_producto).toBe(id);
  });
});
