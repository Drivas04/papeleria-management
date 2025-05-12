"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "Ocurrió un error durante la autenticación";

  if (error === "CredentialsSignin") {
    errorMessage = "Nombre de usuario o contraseña incorrectos";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error de autenticación</h1>
        <p className="text-gray-700 mb-6">{errorMessage}</p>
        <Link href="/auth/login" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Volver al inicio de sesión
        </Link>
      </div>
    </div>
  );
}