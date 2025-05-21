const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const adminUser = await prisma.usuario.create({
      data: {
        usuario: 'admin',
        contraseña: 'admin123',
        rol: 'admin'
      }
    });
    
    console.log('Usuario administrador creado:', adminUser);
    
    // Crear usuario vendedor
    const vendedorUser = await prisma.usuario.create({
      data: {
        usuario: 'vendedor',
        contraseña: 'vend123',
        rol: 'vendedor'
      }
    });
    
    console.log('Usuario vendedor creado:', vendedorUser);

    // Crear algunas categorías
    const categorias = await Promise.all([
      prisma.categoria.create({
        data: { nombre: 'Útiles escolares' }
      }),
      prisma.categoria.create({
        data: { nombre: 'Artículos de oficina' }
      }),
      prisma.categoria.create({
        data: { nombre: 'Papelería general' }
      })
    ]);
    console.log('Categorías creadas:', categorias);

    // Crear un proveedor de ejemplo
    const proveedor = await prisma.proveedor.create({
      data: {
        nombre: 'Distribuidora Nacional',
        telefono: '555-1234',
        direccion: 'Calle Principal #123',
        contacto: 'Maria Rodríguez',
        email: 'contacto@distribuidoranacional.com',
        notas: 'Entrega los martes y jueves',
        estado: 'activo'
      }
    });
    console.log('Proveedor creado:', proveedor);

    // Crear un cliente de ejemplo
    const cliente = await prisma.cliente.create({
      data: {
        cedula: '1234567890',
        nombre: 'Juan',
        apellido: 'Pérez',
        telefono: '555-6789',
        email: 'juan.perez@example.com',
        total_compras: 0
      }
    });
    console.log('Cliente creado:', cliente);

    // Agregar algunos productos
    const productos = await Promise.all([
      prisma.producto.create({
        data: {
          nombre_producto: 'Cuaderno universitario',
          descripcion: 'Cuaderno de 100 hojas, líneas',
          stock: 50,
          nivel_alerta: 'normal',
          categoria_id_categoria: categorias[0].id_categoria
        }
      }),
      prisma.producto.create({
        data: {
          nombre_producto: 'Lápiz grafito',
          descripcion: 'Lápiz HB',
          stock: 100,
          nivel_alerta: 'normal',
          categoria_id_categoria: categorias[0].id_categoria
        }
      }),
      prisma.producto.create({
        data: {
          nombre_producto: 'Resma papel carta',
          descripcion: 'Resma de 500 hojas',
          stock: 30,
          nivel_alerta: 'normal',
          categoria_id_categoria: categorias[1].id_categoria
        }
      })
    ]);
    console.log('Productos creados:', productos);

    console.log('¡Datos iniciales creados correctamente!');
  } catch (error) {
    console.error('Error al crear datos iniciales:', error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });