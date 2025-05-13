"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir automáticamente al login al cargar la página principal
    router.push("/auth/login");
  }, [router]);

  // Este contenido nunca se mostrará debido a la redirección
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-2">Papelería Rosita</h1>
        <p className="text-gray-500">Cargando...</p>
      </div>
    </div>
  );
}
