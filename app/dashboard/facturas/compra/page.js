'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { formatDate } from '@/app/lib/utils';

export default function FacturasCompraPage() {
  const [facturas, setFacturas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const res = await fetch('/api/compras');
        if (!res.ok) throw new Error('Error al cargar compras');
        
        const compras = await res.json();
        // Filtrar solo las compras que tienen factura
        const comprasConFactura = compras.filter(compra => compra.factura_compra);
        setFacturas(comprasConFactura);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCompras();
  }, []);
  

  const formatCurrency = (value) => {
    const num = parseFloat(value);
    return !isNaN(num) ? `$${num.toFixed(2)}` : '$0.00';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Facturas de Compra</h1>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {facturas.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No hay facturas de compra registradas.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Factura</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impuestos</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {facturas.map((compra) => (
                    <tr key={compra.id_compra} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{compra.factura_compra?.id_factura}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatDate(compra.factura_compra?.fecha)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{compra.proveedor?.nombre || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(compra.factura_compra?.subtotal)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(compra.factura_compra?.impuestos)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(compra.factura_compra?.total)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          href={`/dashboard/compras/${compra.id_compra}`}
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
