"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NuevoUsuarioPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir automáticamente, ya que no permitimos crear nuevos usuarios
    router.push("/dashboard/usuarios");
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );
}