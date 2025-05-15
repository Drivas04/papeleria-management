"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "../../../../components/Header";
import ClientForm from "../../../../components/ClientForm";
import { formatDate, formatMoney } from "../../../../lib/utils";

export default function EditarClientePage() {
  const params = useParams();
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchCliente = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/clientes/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Error al cargar los datos del cliente');
        }
        
        const data = await response.json();
        setCliente(data);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchCliente();
    }
  }, [params.id]);
  
  if (loading) {
    return (
      <>
        <Header pageTitle="Editar Cliente" />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header pageTitle="Editar Cliente" />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header pageTitle="Editar Cliente" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Editar Cliente</h2>
          <p className="text-gray-600">Modifique la información del cliente</p>
        </div>
        
        {cliente && (
          <div className="space-y-6">
            <ClientForm cliente={cliente} />
            
            {/* Sección para mostrar historial de compras recientes si existen */}
            {cliente.ventas && cliente.ventas.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Últimas compras
                </h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cliente.ventas.map(venta => (
                      <tr key={venta.id_venta}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          #{venta.id_venta}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(venta.factura_venta?.fecha)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {formatMoney(venta.factura_venta?.total)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {cliente._count.ventas > 5 && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      Mostrando las 5 compras más recientes de un total de {cliente._count.ventas}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}