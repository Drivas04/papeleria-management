import NextAuth from "next-auth";
import { authOptions } from "../../../lib/auth";

// Usar las opciones de autenticación definidas en el archivo lib/auth.js
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
