import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" }
      },
      async authorize(credentials) {
        console.log("Intentando autenticación con:", credentials.username);
        
        if (!credentials?.username || !credentials?.password) {
          console.log("Faltan credenciales");
          return null;
        }

        try {
          // Buscar usuario por nombre de usuario
          const user = await prisma.usuario.findFirst({
            where: {
              usuario: credentials.username,
            }
          });

          console.log("Usuario encontrado:", user ? "Sí" : "No");

          if (!user) {
            console.log("Usuario no encontrado");
            return null;
          }

          // Verificar contraseña (texto plano en este caso)
          const passwordMatch = credentials.password === user.contraseña;
          console.log("Contraseña correcta:", passwordMatch ? "Sí" : "No");

          if (!passwordMatch) {
            console.log("Contraseña incorrecta");
            return null;
          }

          console.log("Autenticación exitosa");
          
          // Devolver los datos del usuario para la sesión
          return {
            id: user.id_usuario.toString(),
            name: user.usuario,
            role: user.rol
          };
        } catch (error) {
          console.error("Error en la autorización:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error"
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60 // 1 día
  }
};
