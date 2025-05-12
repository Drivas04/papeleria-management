"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { 
  HomeIcon, 
  UserGroupIcon, 
  TagIcon, 
  CubeIcon,
  BanknotesIcon,
  TruckIcon,
  UserCircleIcon,
  ChartBarIcon,
  ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Clientes', href: '/dashboard/clientes', icon: UserGroupIcon },
  { name: 'Categorías', href: '/dashboard/categorias', icon: TagIcon },
  { name: 'Productos', href: '/dashboard/productos', icon: CubeIcon },
  { name: 'Ventas', href: '/dashboard/ventas', icon: BanknotesIcon },
  { name: 'Proveedores', href: '/dashboard/proveedores', icon: TruckIcon },
  { name: 'Compras', href: '/dashboard/compras', icon: ChartBarIcon },
  { name: 'Usuarios', href: '/dashboard/usuarios', icon: UserCircleIcon }
];

export default function Sidebar({ user }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/auth/login" });
  };

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} min-h-screen bg-indigo-800 text-white transition-all duration-300 ease-in-out`}>
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <h2 className="text-xl font-bold">Papelería Rosita</h2>
        )}
        <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-indigo-700">
          {collapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>

      <div className="mt-5">
        <nav className="px-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link href={item.href} key={item.name} className={`${isActive ? 'bg-indigo-900' : 'hover:bg-indigo-700'} flex items-center px-4 py-3 mb-1 rounded-md transition-colors`}>
                <item.icon className="h-6 w-6" />
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="absolute bottom-0 w-full p-4">
        <button onClick={handleLogout} className="w-full flex items-center px-4 py-3 rounded-md hover:bg-indigo-700 transition-colors">
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          {!collapsed && <span className="ml-3">Cerrar sesión</span>}
        </button>
      </div>
    </div>
  );
}