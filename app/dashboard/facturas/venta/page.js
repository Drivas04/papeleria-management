'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { formatDate } from '@/app/lib/utils';


export default function FacturasVentaPage() {
  const [facturas, setFacturas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const res = await fetch('/api/ventas');
        if (!res.ok) throw new Error('Error al cargar ventas');
        
        const ventas = await res.json();
        // Filtrar solo las ventas que tienen factura
        const ventasConFactura = ventas.filter(venta => venta.factura_venta);
        setFacturas(ventasConFactura);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchVentas();
  }, []);
  
  

  const formatCurrency = (value) => {
    const num = parseFloat(value);
    return !isNaN(num) ? `$${num.toFixed(2)}` : '$0.00';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Facturas de Venta</h1>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {facturas.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No hay facturas de venta registradas.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Factura</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impuestos</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {facturas.map((venta) => (
                    <tr key={venta.id_venta} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{venta.factura_venta?.id_factura}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatDate(venta.factura_venta?.fecha)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {venta.cliente?.nombre} {venta.cliente?.apellido}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(venta.factura_venta?.subtotal)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(venta.factura_venta?.impuestos)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(venta.factura_venta?.total)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          href={`/dashboard/ventas/${venta.id_venta}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Ver Detalles
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
