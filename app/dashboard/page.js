"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import { 
  ShoppingCartIcon, 
  CurrencyDollarIcon, 
  ArchiveBoxIcon,
  ExclamationCircleIcon 
} from "@heroicons/react/24/outline";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalVentas: 0,
    totalProductos: 0,
    ingresosMes: 0,
    stockBajo: 0
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // En una implementación real, aquí cargaríamos datos de la API
        // Por ahora, simulamos una carga y usamos datos de ejemplo
        setTimeout(() => {
          setStats({
            totalVentas: 156,
            totalProductos: 243,
            ingresosMes: 2850.50,
            stockBajo: 12
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error al cargar datos del dashboard:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <div className="ml-5">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header pageTitle="Dashboard" />
      
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-800">Bienvenido a Papelería Rosita</h2>
          <p className="text-gray-600">Aquí tienes un resumen del estado actual del negocio</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Ventas Totales" 
              value={stats.totalVentas}
              icon={ShoppingCartIcon} 
              color="text-blue-500" 
            />
            <StatCard 
              title="Ingresos del Mes" 
              value={`$${stats.ingresosMes.toFixed(2)}`}
              icon={CurrencyDollarIcon} 
              color="text-green-500" 
            />
            <StatCard 
              title="Total Productos" 
              value={stats.totalProductos}
              icon={ArchiveBoxIcon} 
              color="text-purple-500" 
            />
            <StatCard 
              title="Productos Stock Bajo" 
              value={stats.stockBajo}
              icon={ExclamationCircleIcon} 
              color="text-red-500" 
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-medium text-gray-700 mb-4">Ventas Recientes</h3>
            <div className="border-t border-gray-200">
              <p className="py-4 text-center text-gray-500">
                {loading ? "Cargando datos..." : "Aquí se mostrarán las ventas recientes"}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-medium text-gray-700 mb-4">Productos más vendidos</h3>
            <div className="border-t border-gray-200">
              <p className="py-4 text-center text-gray-500">
                {loading ? "Cargando datos..." : "Aquí se mostrarán los productos más vendidos"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}