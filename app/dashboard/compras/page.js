'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { formatDate, formatMoney } from '../../lib/utils';

export default function ComprasPage() {
  const [compras, setCompras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const res = await fetch('/api/compras');
        if (!res.ok) throw new Error('Error al cargar compras');
        const data = await res.json();
        setCompras(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCompras();
  }, []);
  
  

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gestión de Compras</h1>
          <Link href="/dashboard/compras/nueva" 
                className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow">
            Nueva Compra
          </Link>
        </div>
        
        
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {compras.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No hay compras registradas. Haga clic en "Nueva Compra" para crear una.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {compras.map((compra) => (
                    <tr key={compra.id_compra} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{compra.id_compra}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatDate(compra.fecha_compra)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {compra.proveedor?.nombre}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">${parseFloat(compra.total).toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span 
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            compra.estado === 'COMPLETADA' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {compra.estado === 'COMPLETADA' ? 'Completada' : 'Anulada'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        
                        <Link
                          href={`/dashboard/compras/${compra.id_compra}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Ver
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}