'use client'

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session } = useSession();
  const [stats, setStats] = useState({
    totalVentasHoy: 0,
    totalVentasMes: 0,
    totalComprasMes: 0,
    gananciaEstimada: 0,
    totalProductos: 0,
    totalClientes: 0,
    productosConBajoStock: [],
    productosConAltoStock: [],
    ventasRecientes: [],
    comprasRecientes: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        // Primero comprobar si podemos acceder a algún dato básico
        try {
          const productosRes = await fetch('/api/productos');
          if (!productosRes.ok) {
            throw new Error(`Error al cargar productos: ${productosRes.status}`);
          }
          const productos = await productosRes.json();
          
          // Si llegamos aquí, la API de productos funciona, intentar cargar más datos
          const clientesRes = await fetch('/api/clientes');
          if (!clientesRes.ok) {
            // Si hay error con clientes, al menos mostramos productos
            setStats(prevState => ({
              ...prevState,
              totalProductos: Array.isArray(productos) ? productos.filter(p => p.estado).length : 0
            }));
            throw new Error(`Error al cargar clientes: ${clientesRes.status}`);
          }
          const clientes = await clientesRes.json();
          
          // Actualizar con lo que tenemos hasta ahora
          setStats(prevState => ({
            ...prevState,
            totalProductos: Array.isArray(productos) ? productos.filter(p => p.estado).length : 0,
            totalClientes: Array.isArray(clientes) ? clientes.filter(c => c.estado).length : 0
          }));
          
          // Intentar cargar datos de ventas
          try {
            const ventasRes = await fetch('/api/ventas');
            if (ventasRes.ok) {
              const ventas = await ventasRes.json();
              if (Array.isArray(ventas)) {
                const fechaHoy = new Date();
                const ventasRecientes = ventas
                  .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                  .slice(0, 5);
                  
                // Ventas de hoy
                const ventasHoy = ventas.filter(v => {
                  const fechaVenta = new Date(v.fecha);
                  return fechaVenta.toDateString() === fechaHoy.toDateString() && v.estado === 'COMPLETADA';
                });
                const totalVentasHoy = ventasHoy.reduce((sum, venta) => sum + parseFloat(venta.total || 0), 0);
                
                // Ventas del mes
                const ventasDelMes = ventas.filter(v => {
                  const fechaVenta = new Date(v.fecha);
                  return fechaVenta.getMonth() === fechaHoy.getMonth() && 
                         fechaVenta.getFullYear() === fechaHoy.getFullYear() &&
                         v.estado === 'COMPLETADA';
                });
                const totalVentasMes = ventasDelMes.reduce((sum, venta) => sum + parseFloat(venta.total || 0), 0);
                
                setStats(prevState => ({
                  ...prevState,
                  totalVentasHoy,
                  totalVentasMes,
                  ventasRecientes
                }));
              }
            }
          } catch (ventasError) {
            console.error("Error cargando ventas:", ventasError);
          }
          
          // Intentar cargar datos de compras
          try {
            const comprasRes = await fetch('/api/compras');
            if (comprasRes.ok) {
              const compras = await comprasRes.json();
              if (Array.isArray(compras)) {
                const fechaHoy = new Date();
                const comprasRecientes = compras
                  .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                  .slice(0, 5);
                  
                // Compras del mes
                const comprasDelMes = compras.filter(c => {
                  const fechaCompra = new Date(c.fecha);
                  return fechaCompra.getMonth() === fechaHoy.getMonth() && 
                         fechaCompra.getFullYear() === fechaHoy.getFullYear() &&
                         c.estado === 'COMPLETADA';
                });
                const totalComprasMes = comprasDelMes.reduce((sum, compra) => sum + parseFloat(compra.total || 0), 0);
                
                // Calcular ganancia estimada
                const gananciaEstimada = stats.totalVentasMes - totalComprasMes;
                
                setStats(prevState => ({
                  ...prevState,
                  totalComprasMes,
                  gananciaEstimada,
                  comprasRecientes
                }));
              }
            }
          } catch (comprasError) {
            console.error("Error cargando compras:", comprasError);
          }
          
          // Intentar cargar productos con stock bajo y alto
          try {
            const bajoStockRes = await fetch('/api/productos?bajoStock=true');
            if (bajoStockRes.ok) {
              const productosConBajoStock = await bajoStockRes.json();
              setStats(prevState => ({
                ...prevState,
                productosConBajoStock: Array.isArray(productosConBajoStock) ? productosConBajoStock : []
              }));
            }
            
            const altoStockRes = await fetch('/api/productos?altoStock=true');
            if (altoStockRes.ok) {
              const productosConAltoStock = await altoStockRes.json();
              setStats(prevState => ({
                ...prevState,
                productosConAltoStock: Array.isArray(productosConAltoStock) ? productosConAltoStock : []
              }));
            }
          } catch (stockError) {
            console.error("Error cargando datos de stock:", stockError);
          }
          
        } catch (initialError) {
          console.error("Error inicial cargando datos:", initialError);
          setError('Error al cargar los datos del dashboard. Por favor, inténtelo de nuevo.');
        }
      } catch (error) {
        console.error('Error al cargar datos del dashboard:', error);
        setError('Error al cargar los datos del dashboard. Por favor, inténtelo de nuevo.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 2
    }).format(amount);
  };
  
  if (isLoading) {
    return (
      <div className="p-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Bienvenido {session?.user?.name || 'Usuario'}, aquí tienes un resumen de tu negocio</p>
      </div>
      
      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Ventas del día */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm font-medium">Ventas Hoy</h2>
              <p className="text-2xl font-bold">{formatCurrency(stats.totalVentasHoy || 0)}</p>
            </div>
          </div>
        </div>
        
        {/* Ventas del mes */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3">
              <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm font-medium">Ventas del Mes</h2>
              <p className="text-2xl font-bold">{formatCurrency(stats.totalVentasMes || 0)}</p>
            </div>
          </div>
        </div>
        
        {/* Compras del mes */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-yellow-100 p-3">
              <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm font-medium">Compras del Mes</h2>
              <p className="text-2xl font-bold">{formatCurrency(stats.totalComprasMes || 0)}</p>
            </div>
          </div>
        </div>
        
        {/* Ganancia Estimada */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-purple-100 p-3">
              <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm font-medium">Ganancia Estimada</h2>
              <p className="text-2xl font-bold">{formatCurrency(stats.gananciaEstimada || 0)}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Segunda fila de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total de productos */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Productos Activos</h3>
            <Link href="/dashboard/productos" className="text-blue-600 text-sm hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm font-medium">Total</h2>
              <p className="text-2xl font-bold">{stats.totalProductos}</p>
            </div>
          </div>
        </div>
        
        {/* Total de clientes */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Clientes Activos</h3>
            <Link href="/dashboard/clientes" className="text-blue-600 text-sm hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3">
              <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm font-medium">Total</h2>
              <p className="text-2xl font-bold">{stats.totalClientes}</p>
            </div>
          </div>
        </div>
        
        {/* Alertas de stock bajo */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Productos con Stock Bajo</h3>
            <Link href="/dashboard/productos" className="text-blue-600 text-sm hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-red-100 p-3">
              <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm font-medium">Alertas</h2>
              <p className="text-2xl font-bold">{stats.productosConBajoStock ? stats.productosConBajoStock.length : 0}</p>
            </div>
          </div>
          
          {stats.productosConBajoStock && stats.productosConBajoStock.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2">Producto</th>
                    <th className="px-4 py-2">Stock</th>
                    <th className="px-4 py-2">Mínimo</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.productosConBajoStock.slice(0, 4).map((producto) => (
                    <tr key={producto.id_producto} className="border-t">
                      <td className="px-4 py-2">{producto.nombre_producto || producto.nombre}</td>
                      <td className="px-4 py-2">
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                          {producto.stock}
                        </span>
                      </td>
                      <td className="px-4 py-2">{producto.stock_minimo || producto.stockMinimo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500">
              No hay productos con stock bajo
            </div>
          )}
        </div>

        {/* Alertas de stock alto */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Productos con Stock Alto</h3>
            <Link href="/dashboard/productos" className="text-blue-600 text-sm hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-orange-100 p-3">
              <svg className="h-6 w-6 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm font-medium">Alertas</h2>
              <p className="text-2xl font-bold">{stats.productosConAltoStock ? stats.productosConAltoStock.length : 0}</p>
            </div>
          </div>
          
          {stats.productosConAltoStock && stats.productosConAltoStock.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2">Producto</th>
                    <th className="px-4 py-2">Stock</th>
                    <th className="px-4 py-2">Máximo</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.productosConAltoStock.slice(0, 4).map((producto) => (
                    <tr key={producto.id_producto} className="border-t">
                      <td className="px-4 py-2">{producto.nombre_producto || producto.nombre}</td>
                      <td className="px-4 py-2">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                          {producto.stock}
                        </span>
                      </td>
                      <td className="px-4 py-2">{producto.stockMaximo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500">
              No hay productos con stock alto
            </div>
          )}
        </div>
      </div>
      
      {/* Ventas y Compras Recientes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Ventas Recientes */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b flex items-center justify-between">
            <h3 className="text-lg font-semibold">Ventas Recientes</h3>
            <Link href="/dashboard/ventas" className="text-blue-600 text-sm hover:underline">
              Ver todas
            </Link>
          </div>
          <div>
            {stats.ventasRecientes && stats.ventasRecientes.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {stats.ventasRecientes.map((venta) => (
                      <tr key={venta.id_venta} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{formatDate(venta.fecha)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {venta.cliente?.nombre} {venta.cliente?.apellido}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {formatCurrency(parseFloat(venta.total))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No hay ventas recientes
              </div>
            )}
          </div>
        </div>
        
        {/* Compras Recientes */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b flex items-center justify-between">
            <h3 className="text-lg font-semibold">Compras Recientes</h3>
            <Link href="/dashboard/compras" className="text-blue-600 text-sm hover:underline">
              Ver todas
            </Link>
          </div>
          <div>
            {stats.comprasRecientes && stats.comprasRecientes.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {stats.comprasRecientes.map((compra) => (
                      <tr key={compra.id_compra} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{formatDate(compra.fecha)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {compra.proveedor?.nombre}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {formatCurrency(parseFloat(compra.total))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No hay compras recientes
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}