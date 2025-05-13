const { PrismaClient } = require('../app/generated/prisma')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

async function main() {
  console.log('Iniciando seed de datos...')

  // Crear roles si no existen
  const adminRol = await prisma.rol.upsert({
    where: { nombre: 'Administrador' },
    update: {},
    create: {
      nombre: 'Administrador',
      descripcion: 'Control total del sistema: inventario, compras, proveedores, categorías y reportes'
    },
  })

  const vendedorRol = await prisma.rol.upsert({
    where: { nombre: 'Vendedor' },
    update: {},
    create: {
      nombre: 'Vendedor',
      descripcion: 'Gestión de ventas y clientes'
    },
  })

  console.log('Roles creados:', { adminRol, vendedorRol })

  // Crear usuarios fijos
  const adminPassword = await bcrypt.hash('admin123', 10)
  const vendedorPassword = await bcrypt.hash('vendedor123', 10)

  const admin = await prisma.usuario.upsert({
    where: { email: 'admin@papeleriarosita.com' },
    update: {
      password: adminPassword,
      rolId: adminRol.id
    },
    create: {
      nombre: 'Administrador',
      apellido: 'Sistema',
      email: 'admin@papeleriarosita.com',
      password: adminPassword,
      rolId: adminRol.id,
    },
  })

  const vendedor = await prisma.usuario.upsert({
    where: { email: 'vendedor@papeleriarosita.com' },
    update: {
      password: vendedorPassword,
      rolId: vendedorRol.id
    },
    create: {
      nombre: 'Vendedor',
      apellido: 'Principal',
      email: 'vendedor@papeleriarosita.com',
      password: vendedorPassword,
      rolId: vendedorRol.id,
    },
  })

  console.log('Usuarios fijos creados:', { admin, vendedor })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })