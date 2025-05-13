'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import SaleForm from '@/app/components/SaleForm';

export default function EditarVentaPage() {
  const { id } = useParams();
  const [venta, setVenta] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVenta = async () => {
      try {
        const res = await fetch(`/api/ventas/${id}`);
        if (!res.ok) throw new Error('No se pudo cargar la información de la venta');
        
        const data = await res.json();
        setVenta(data);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchVenta();
    }
  }, [id]);

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
        <button
          onClick={() => window.history.back()}
          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Editar Venta #{id}</h1>
        <p className="text-gray-600">Modifique los datos de la venta según sea necesario</p>
      </div>
      
      {venta && <SaleForm sale={venta} />}
    </div>
  );
}