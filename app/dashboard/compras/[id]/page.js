'use client'

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DetalleCompraPage() {
  const { id } = useParams();
  const router = useRouter();
  const [compra, setCompra] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchCompra = async () => {
      try {
        const res = await fetch(`/api/compras/${id}`);
        if (!res.ok) throw new Error('No se pudo cargar la información de la compra');
        
        const data = await res.json();
        setCompra(data);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchCompra();
    }
  }, [id]);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'COP'
    }).format(parseFloat(amount));
  };
  
  const handleAnularCompra = async () => {
    if (!confirm('¿Está seguro de anular esta compra? Esta acción ajustará el inventario.')) {
      return;
    }
    
    try {
      const res = await fetch(`/api/compras/${id}`, {
        method: 'DELETE'
      });
      
      if (!res.ok) {
        throw new Error('Error al anular la compra');
      }
      
      router.push('/dashboard/compras');
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al anular la compra');
    }
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
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Detalle de Compra #{id}</h1>
          <p className="text-gray-600">Información completa de la compra a proveedor</p>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => window.history.back()}
            className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Volver
          </button>
          
          {compra && compra.estado === 'COMPLETADA' && (
            <button
              onClick={handleAnularCompra}
              className="py-2 px-4 border border-red-300 text-red-700 rounded-md shadow-sm text-sm font-medium hover:bg-red-50"
            >
              Anular Compra
            </button>
          )}
          
          {compra && compra.estado === 'COMPLETADA' && (
            <Link
              href={`/dashboard/compras/editar/${id}`}
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Editar
            </Link>
          )}
        </div>
      </div>
      
      {compra && (
        <div className="space-y-6">
          {/* Estado de la compra */}
          <div className="flex justify-end">
            <span 
              className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                compra.estado === 'COMPLETADA' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {compra.estado === 'COMPLETADA' ? 'Completada' : 'Anulada'}
            </span>
          </div>
          
          {/* Información general */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Información General</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Fecha</h3>
                <p>{formatDate(compra.fecha)}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Proveedor</h3>
                <p>{compra.proveedor?.nombre}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total</h3>
                <p className="text-lg font-semibold">{formatCurrency(compra.total)}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Registrado por</h3>
                <p>{compra.usuario?.nombre} {compra.usuario?.apellido}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Teléfono Proveedor</h3>
                <p>{compra.proveedor?.telefono || 'No disponible'}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email Proveedor</h3>
                <p>{compra.proveedor?.email || 'No disponible'}</p>
              </div>
            </div>
          </div>
          
          {/* Detalle de productos */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Productos Comprados</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio Unit.</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {compra.detalles.map((detalle) => (
                    <tr key={detalle.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {detalle.producto?.nombre}
                        <div className="text-xs text-gray-500">Código: {detalle.producto?.codigo}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{detalle.cantidad}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(detalle.precioUnitario)}</td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">{formatCurrency(detalle.subtotal)}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td colSpan="3" className="px-6 py-4 text-right font-bold">TOTAL</td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold">{formatCurrency(compra.total)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}