"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession, SessionProvider } from "next-auth/react";
import Sidebar from "../components/Sidebar";

// Componente interno que usa useSession
function DashboardContent({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      return;
    }
    
    if (!session) {
      router.push('/auth/login');
      return;
    }

    // Comprueba si tiene acceso a la ruta actual según su rol
    const checkRouteAccess = () => {
      const path = pathname;
      const userRole = session.user.role?.toLowerCase() || '';

      // Rutas exclusivas para administradores
      const adminOnlyRoutes = [
        '/dashboard/compras',
        '/dashboard/compras/',
        '/dashboard/facturas/compra',
        '/dashboard/proveedores',
        '/dashboard/usuarios',
      ];
      
      // Si es una ruta administrativa y el usuario no es administrador, redireccionar
      if (userRole !== 'admin' && 
          (adminOnlyRoutes.includes(path) || 
           adminOnlyRoutes.some(route => 
             path.startsWith(route + '/')
           ))) {
        alert("No tienes permiso para acceder a esta sección");
        router.push('/dashboard');
        return false;
      }
      
      return true;
    };

    if (checkRouteAccess()) {
      setLoading(false);
    }
  }, [session, status, router, pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden lg:pl-64">
        <main className="flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}

// Componente principal que proporciona el SessionProvider
export default function DashboardLayout({ children }) {
  return (
    <SessionProvider>
      <DashboardContent>{children}</DashboardContent>
    </SessionProvider>
  );
}