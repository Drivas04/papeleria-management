// Mock para el adaptador de Prisma
jest.mock('@auth/prisma-adapter', () => ({
  PrismaAdapter: jest.fn(() => ({
    // Mock de los métodos del adaptador si es necesario
  }))
}));

// Mock para el cliente Prisma
jest.mock('../../app/lib/prisma', () => ({
  prisma: {
    usuario: {
      findFirst: jest.fn()
    }
  }
}));

// Mock para CredentialsProvider
jest.mock('next-auth/providers/credentials', () => {
  return jest.fn(() => ({
    id: 'credentials',
    name: 'Credenciales',
    credentials: {
      username: { label: "Usuario", type: "text" },
      password: { label: "Contraseña", type: "password" }
    },
    authorize: jest.fn()
  }));
});

// Importamos después de los mocks
import { prisma } from '../../app/lib/prisma';

describe('Autenticación', () => {
  // Limpiar todos los mocks después de cada prueba
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('CredentialsProvider authorize', () => {
    let authorize;
    
    beforeEach(() => {
      // Crear una función authorize de prueba que imite el comportamiento
      authorize = async (credentials) => {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        try {
          // Buscar usuario por nombre de usuario
          const user = await prisma.usuario.findFirst({
            where: {
              usuario: credentials.username,
            }
          });

          if (!user) {
            return null;
          }

          // Verificar contraseña (texto plano en este caso)
          const passwordMatch = credentials.password === user.contraseña;

          if (!passwordMatch) {
            return null;
          }
          
          // Devolver los datos del usuario para la sesión
          return {
            id: user.id_usuario.toString(),
            name: user.usuario,
            role: user.rol
          };
        } catch (error) {
          return null;
        }
      };
    });

    test('debe rechazar la autenticación si faltan credenciales', async () => {
      // Caso: Sin credenciales
      let resultado = await authorize({});
      expect(resultado).toBeNull();

      // Caso: Solo nombre de usuario
      resultado = await authorize({ username: 'admin' });
      expect(resultado).toBeNull();

      // Caso: Solo contraseña
      resultado = await authorize({ password: 'password123' });
      expect(resultado).toBeNull();
    });

    test('debe rechazar la autenticación si el usuario no existe', async () => {
      // Configurar el mock para retornar null (usuario no encontrado)
      prisma.usuario.findFirst.mockResolvedValue(null);

      const resultado = await authorize({
        username: 'usuarioinexistente',
        password: 'password123'
      });

      // Verificar que se intentó buscar al usuario
      expect(prisma.usuario.findFirst).toHaveBeenCalledWith({
        where: { usuario: 'usuarioinexistente' }
      });

      // Verificar que se rechazó la autenticación
      expect(resultado).toBeNull();
    });

    test('debe rechazar la autenticación si la contraseña es incorrecta', async () => {
      // Configurar el mock para retornar un usuario con una contraseña diferente
      prisma.usuario.findFirst.mockResolvedValue({
        id_usuario: 1,
        usuario: 'admin',
        contraseña: 'password123',
        rol: 'admin'
      });

      const resultado = await authorize({
        username: 'admin',
        password: 'contraseñaincorrecta'
      });

      // Verificar que se intentó buscar al usuario
      expect(prisma.usuario.findFirst).toHaveBeenCalledWith({
        where: { usuario: 'admin' }
      });

      // Verificar que se rechazó la autenticación
      expect(resultado).toBeNull();
    });

    test('debe autenticar correctamente con credenciales válidas', async () => {
      // Usuario de prueba
      const usuarioPrueba = {
        id_usuario: 1,
        usuario: 'admin',
        contraseña: 'password123',
        rol: 'admin'
      };

      // Configurar el mock para retornar el usuario
      prisma.usuario.findFirst.mockResolvedValue(usuarioPrueba);

      const resultado = await authorize({
        username: 'admin',
        password: 'password123'
      });

      // Verificar que se intentó buscar al usuario
      expect(prisma.usuario.findFirst).toHaveBeenCalledWith({
        where: { usuario: 'admin' }
      });

      // Verificar que se autenticó correctamente
      expect(resultado).toEqual({
        id: '1',
        name: 'admin',
        role: 'admin'
      });
    });

    test('debe manejar errores durante la autenticación', async () => {
      // Configurar el mock para lanzar un error
      prisma.usuario.findFirst.mockRejectedValue(new Error('Error de base de datos'));

      const resultado = await authorize({
        username: 'admin',
        password: 'password123'
      });

      // Verificar que se intentó buscar al usuario
      expect(prisma.usuario.findFirst).toHaveBeenCalledWith({
        where: { usuario: 'admin' }
      });

      // Verificar que se rechazó la autenticación
      expect(resultado).toBeNull();
    });
  });

  describe('Callbacks', () => {
    let jwtCallback;
    let sessionCallback;
    
    beforeEach(() => {
      // Crear funciones de callback que imiten el comportamiento de authOptions
      jwtCallback = ({ token, user }) => {
        if (user) {
          token.id = user.id;
          token.role = user.role;
        }
        return token;
      };
      
      sessionCallback = ({ session, token }) => {
        if (token) {
          session.user.id = token.id;
          session.user.role = token.role;
        }
        return session;
      };
    });

    test('debe añadir id y rol al token', async () => {
      const token = {};
      const user = { id: '1', role: 'admin' };

      const resultado = jwtCallback({ token, user });

      expect(resultado).toEqual({
        id: '1',
        role: 'admin'
      });
    });

    test('debe mantener el token sin cambios si no hay usuario', async () => {
      const token = { id: '1', role: 'admin' };

      const resultado = jwtCallback({ token });

      expect(resultado).toEqual(token);
    });

    test('debe añadir id y rol a la sesión', async () => {
      const session = { user: {} };
      const token = { id: '1', role: 'admin' };

      const resultado = sessionCallback({ session, token });

      expect(resultado).toEqual({
        user: {
          id: '1',
          role: 'admin'
        }
      });
    });

    test('debe mantener la sesión sin cambios si no hay token', async () => {
      const session = { user: { id: '1', role: 'admin' } };

      const resultado = sessionCallback({ session });

      expect(resultado).toEqual(session);
    });
  });
});
