import { PrismaClient } from '../generated/prisma';

// Prevenir múltiples instancias de Prisma Client en desarrollo
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: ['query', 'error', 'warn'],
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Verificar que la conexión a la base de datos funciona
prisma.$connect()
  .then(() => console.log('Conexión a la base de datos establecida'))
  .catch((e) => console.error('Error al conectar con la base de datos:', e));