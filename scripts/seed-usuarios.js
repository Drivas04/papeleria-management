// Script optimizado para crear solo los usuarios del sistema
const { PrismaClient } = require('../app/generated/prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Crear usuario administrador
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
    console.log('¡Usuarios iniciales creados correctamente!');
  } catch (error) {
    console.error('Error al crear usuarios iniciales:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
