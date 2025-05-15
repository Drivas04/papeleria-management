'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const userRole = session?.user?.role || '';
  const [isOpen, setIsOpen] = useState(false);
  const [stats, setStats] = useState({
    productosConBajoStock: 0,
    productosConAltoStock: 0
  });
  
  // Cargar estadísticas básicas para mostrar contadores
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Obtener productos con bajo stock
        const bajoStockRes = await fetch('/api/productos?bajoStock=true');
        const altoStockRes = await fetch('/api/productos?altoStock=true');
        
        if (bajoStockRes.ok && altoStockRes.ok) {
          const bajoStockData = await bajoStockRes.json();
          const altoStockData = await altoStockRes.json();
          
          setStats(prev => ({
            ...prev,
            productosConBajoStock: bajoStockData.length,
            productosConAltoStock: altoStockData.length
          }));
        }
      } catch (error) {
        console.error('Error al cargar estadísticas:', error);
      }
    };
    
    fetchStats();
  }, []);

  const isActive = (path) => {
    // Para el dashboard principal, solo activar cuando la ruta es exactamente /dashboard
    if (path === '/dashboard') {
      return pathname === '/dashboard';
    }
    
    // Para rutas específicas como /dashboard/compras/nueva, verificar coincidencia exacta
    if (path.includes('/nueva') || path.includes('/nuevo') || path.includes('/editar')) {
      return pathname === path || pathname.startsWith(`${path}/`);
    }
    
    // Para secciones principales como /dashboard/compras, activar solo si estamos en esa sección exacta,
    // y no en una subsección como /dashboard/compras/nueva
    const pathParts = path.split('/').filter(Boolean);
    const pathnameParts = pathname.split('/').filter(Boolean);
    
    // Si la ruta actual tiene más partes que la ruta del enlace y ambas coinciden hasta cierto punto,
    // estamos en una subsección (como /dashboard/compras/nueva)
    if (pathnameParts.length > pathParts.length) {
      // Si en la ruta del navegador hay una parte adicional específica, no resaltar la sección principal
      if (pathnameParts[pathParts.length] === 'nueva' || 
          pathnameParts[pathParts.length] === 'nuevo' ||
          pathnameParts[pathParts.length] === 'editar') {
        return false;
      }
    }
    
    // Para otras rutas, activar si la ruta actual comienza con la ruta del enlace
    return pathname === path || (pathname.startsWith(path) && pathname.charAt(path.length) === '/');
  };
  
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/auth/login' });
  };
  
  return (
    <>
      {/* Sidebar para móviles */}
      <div className="lg:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="fixed inset-0 z-40 lg:hidden" aria-modal="true">
            {/* Fondo oscuro */}
            <div 
              className="fixed inset-0 bg-gray-600 bg-opacity-75" 
              onClick={() => setIsOpen(false)}
            ></div>
            
            {/* Panel lateral */}
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Cerrar menú</span>
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Contenido del sidebar móvil */}
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <span className="text-xl font-bold text-gray-800">Papelería</span>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {renderNavLinks()}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <button
                  onClick={handleSignOut}
                  className="flex items-center text-red-600 hover:text-red-900"
                >
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Sidebar para escritorio */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center justify-center flex-shrink-0 px-4 mb-4">
            <span className="text-xl font-bold text-gray-800">Papelería App</span>
          </div>
          
          <nav className="mt-2 flex-1 px-4 space-y-4">
            {renderNavLinks()}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <button
            onClick={handleSignOut}
            className="flex items-center text-red-600 hover:text-red-900 w-full"
          >
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );

  function renderNavLinks() {
    // Definimos todos los grupos de navegación posibles
    const allNavGroups = [
      {
        title: 'General',
        links: [
          {
            href: '/dashboard',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            ),
            text: 'Dashboard',
            roles: ['admin', 'vendedor']
          }
        ]
      },
      {
        title: 'Ventas',
        links: [
          {
            href: '/dashboard/ventas',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            text: 'Ventas',
            badge: null,
            roles: ['admin', 'vendedor']
          },
          {
            href: '/dashboard/ventas/nueva',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            ),
            text: 'Nueva Venta',
            badge: null,
            roles: ['admin', 'vendedor']
          }
        ]
      },
      {
        title: 'Inventario',
        links: [
          {
            href: '/dashboard/productos',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            ),
            text: 'Productos',
            badge: stats.productosConBajoStock > 0 ? stats.productosConBajoStock.toString() : null,
            badgeColor: 'bg-red-100 text-red-800',
            secondBadge: stats.productosConAltoStock > 0 ? stats.productosConAltoStock.toString() : null,
            secondBadgeColor: 'bg-orange-100 text-orange-800',
            roles: ['admin', 'vendedor']
          },
          {
            href: '/dashboard/categorias',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            ),
            text: 'Categorías',
            badge: null,
            roles: ['admin', 'vendedor']
          }
        ]
      },
      {
        title: 'Compras',
        links: [
          {
            href: '/dashboard/compras',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            ),
            text: 'Compras',
            badge: null,
            roles: ['admin']
          },
          {
            href: '/dashboard/compras/nueva',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            ),
            text: 'Nueva Compra',
            badge: null,
            roles: ['admin']
          }
        ]
      },
      {
        title: 'Facturas',
        links: [
          {
            href: '/dashboard/facturas/venta',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            ),
            text: 'Facturas de Venta',
            badge: null,
            roles: ['admin', 'vendedor']
          },
          {
            href: '/dashboard/facturas/compra',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            ),
            text: 'Facturas de Compra',
            badge: null,
            roles: ['admin']
          }
        ]
      },
      {
        title: 'Contactos',
        links: [
          {
            href: '/dashboard/clientes',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            ),
            text: 'Clientes',
            badge: null,
            roles: ['admin', 'vendedor']
          },
          {
            href: '/dashboard/proveedores',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            ),
            text: 'Proveedores',
            badge: null,
            roles: ['admin']
          }
        ]
      },
      {
        title: 'Administración',
        links: [
          {
            href: '/dashboard/usuarios',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ),
            text: 'Usuarios',
            badge: null,
            roles: ['admin']
          },
          {
            href: '/dashboard/caja',
            icon: (
              <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            ),
            text: 'Cierre de Caja',
            badge: null,
            roles: ['admin', 'vendedor']
          }
        ]
      }
    ];
    
    // Filtramos los grupos y enlaces según el rol del usuario
    const filteredNavGroups = allNavGroups.map(group => {
      // Filtrar los enlaces según el rol
      const filteredLinks = group.links.filter(link => 
        link.roles && link.roles.includes(userRole.toLowerCase())
      );
      
      // Solo devolver grupos que tengan enlaces después de filtrar
      return {
        ...group,
        links: filteredLinks
      };
    }).filter(group => group.links.length > 0);
    
    return (
      <>
        {filteredNavGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-2">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {group.title}
            </h3>
            {group.links.map((link, linkIndex) => (
              <Link 
                key={linkIndex}
                href={link.href}
                className={`flex items-center px-2 py-2 text-sm rounded-md ${
                  isActive(link.href)
                    ? 'bg-gray-100 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center flex-grow">
                  {link.icon}
                  <span>{link.text}</span>
                </div>
                
                <div className="flex space-x-1">
                  {link.badge && (
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${link.badgeColor || 'bg-blue-100 text-blue-800'}`}>
                      {link.badge}
                    </span>
                  )}
                  {link.secondBadge && (
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${link.secondBadgeColor || 'bg-blue-100 text-blue-800'}`}>
                      {link.secondBadge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </>
    );
    

    return (
      <>
        {navGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-2">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {group.title}
            </h3>
            {group.links.map((link, linkIndex) => (
              <Link 
                key={linkIndex}
                href={link.href}
                className={`flex items-center px-2 py-2 text-sm rounded-md ${
                  isActive(link.href)
                    ? 'bg-gray-100 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center flex-grow">
                  {link.icon}
                  <span>{link.text}</span>
                </div>
                
                <div className="flex space-x-1">
                  {link.badge && (
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${link.badgeColor || 'bg-blue-100 text-blue-800'}`}>
                      {link.badge}
                    </span>
                  )}
                  {link.secondBadge && (
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${link.secondBadgeColor || 'bg-blue-100 text-blue-800'}`}>
                      {link.secondBadge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </>
    );
  }
}