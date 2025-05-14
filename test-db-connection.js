// Script para probar la conexión a la base de datos
const { PrismaClient } = require('./app/generated/prisma');

// Crear una instancia de Prisma Client
const prisma = new PrismaClient();

async function testDatabaseConnection() {
  try {
    console.log('Intentando conectar a la base de datos...');
    
    // Intentar una consulta simple - contar usuarios
    const userCount = await prisma.usuario.count();
    console.log('✅ ¡Conexión exitosa a la base de datos!');
    console.log(`Número de usuarios en la base de datos: ${userCount}`);
    
    // Intentar obtener el usuario admin
    const adminUser = await prisma.usuario.findFirst({
      where: { usuario: 'admin' }
    });
    
    if (adminUser) {
      console.log('✅ Usuario administrador encontrado:');
      console.log({
        id: adminUser.id_usuario,
        usuario: adminUser.usuario,
        rol: adminUser.rol
      });
    } else {
      console.log('⚠️ No se encontró el usuario administrador');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:');
    console.error(error);
    return false;
  } finally {
    // Cerrar la conexión al finalizar
    await prisma.$disconnect();
  }
}

// Ejecutar la prueba
testDatabaseConnection()
  .then(success => {
    if (success) {
      console.log('\nDiagnóstico: Tu proyecto está correctamente conectado a la base de datos.');
    } else {
      console.log('\nDiagnóstico: Tu proyecto NO está correctamente conectado a la base de datos.');
      console.log('Verifica la URL de conexión en el archivo .env');
    }
    process.exit(success ? 0 : 1);
  });