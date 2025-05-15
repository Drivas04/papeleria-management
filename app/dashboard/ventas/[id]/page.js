'use client'

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { formatDate, formatMoney } from '@/app/lib/utils';

export default function DetalleVentaPage() {
  const { id } = useParams();
  const router = useRouter();
  const [venta, setVenta] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Función para calcular el subtotal de la venta
  const calcularSubtotal = (detalles) => {
    if (!detalles || detalles.length === 0) return 0;
    try {
      return detalles.reduce((total, detalle) => {
        const cantidad = parseFloat(detalle.cantidad) || 0;
        const precio = parseFloat(detalle.precio_unitario) || 0;
        return total + (cantidad * precio);
      }, 0);
    } catch (error) {
      console.error("Error al calcular subtotal:", error);
      return 0;
    }
  };
  
  // Función para calcular el IVA (19%)
  const calcularIva = (subtotal) => {
    try {
      const iva = parseFloat(subtotal) * 0.19;
      return isNaN(iva) ? 0 : iva;
    } catch (error) {
      console.error("Error al calcular IVA:", error);
      return 0;
    }
  };
  
  // Función para calcular el total con IVA
  const calcularTotal = (detalles) => {
    try {
      const subtotal = calcularSubtotal(detalles);
      const iva = calcularIva(subtotal);
      return subtotal + iva;
    } catch (error) {
      console.error("Error al calcular total:", error);
      return 0;
    }
  };
  
  useEffect(() => {
    const fetchVenta = async () => {
      try {
        const res = await fetch(`/api/ventas/${id}`);
        if (!res.ok) throw new Error('No se pudo cargar la información de la venta');
        
        const data = await res.json();
        
        // Añadir logs para depuración
        console.log('Datos completos de la venta:', data);
        console.log('¿Tiene factura_venta?', !!data.factura_venta);
        if (data.factura_venta) {
          console.log('Fecha en factura_venta:', data.factura_venta.fecha);
        }
        
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
  
  
  
  
  const handleAnularVenta = async () => {
    if (!confirm('¿Está seguro de anular esta venta? Esta acción devolverá el stock de los productos.')) {
      return;
    }
    
    try {
      const res = await fetch(`/api/ventas/${id}`, {
        method: 'DELETE'
      });
      
      if (!res.ok) {
        throw new Error('Error al anular la venta');
      }
      
      router.push('/dashboard/ventas');
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al anular la venta');
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
          <h1 className="text-2xl font-bold">Detalle de Venta #{id}</h1>
          <p className="text-gray-600">Información completa de la venta</p>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => window.history.back()}
            className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Volver
          </button>
          
          {venta && venta.estado === 'COMPLETADA' && (
            <button
              onClick={handleAnularVenta}
              className="py-2 px-4 border border-red-300 text-red-700 rounded-md shadow-sm text-sm font-medium hover:bg-red-50"
            >
              Anular Venta
            </button>
          )}
          
          {venta && venta.estado === 'COMPLETADA' && (
            <Link
              href={`/dashboard/ventas/editar/${id}`}
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Editar
            </Link>
          )}
        </div>
      </div>
      
      {venta && (
        <div className="space-y-6">
          {/* Estado de la venta */}
          <div className="flex justify-end">
            <span 
              className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                venta.estado === 'COMPLETADA' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {venta.estado === 'COMPLETADA' ? 'Completada' : 'Anulada'}
            </span>
          </div>
          
          {/* Información general */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Información General</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Fecha</h3>
                {venta.factura_venta?.fecha ? (
                  <p className="font-medium text-gray-900">{formatDate(venta.factura_venta.fecha)}</p>
                ) : (
                  <p className="text-gray-500 italic">Sin fecha registrada</p>
                )}
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Cliente</h3>
                <p>{venta.cliente?.nombre} {venta.cliente?.apellido}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Subtotal</h3>
                <p>{formatMoney(calcularSubtotal(venta?.venta_productos))}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">IVA (19%)</h3>
                <p>{formatMoney(calcularIva(calcularSubtotal(venta?.venta_productos)))}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total</h3>
                <p className="text-lg font-semibold">{formatMoney(calcularTotal(venta?.venta_productos))}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Atendido por</h3>
                <p>{venta.usuario.rol === 'vendedor' ? "Gladys" : "Rosita"}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Teléfono Cliente</h3>
                <p>{venta.cliente?.telefono || 'No disponible'}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email Cliente</h3>
                <p>{venta.cliente?.email || 'No disponible'}</p>
              </div>
            </div>
          </div>
          
          {/* Detalle de productos */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Productos Vendidos</h2>
            
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
                  {venta?.venta_productos?.map((detalle) => (
                    <tr key={`${detalle?.venta_id_venta}-${detalle?.producto_id_producto}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {detalle?.producto?.nombre_producto}
                        <div className="text-xs text-gray-500">ID: {detalle?.producto?.id_producto}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{detalle?.cantidad}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatMoney(detalle?.precio_unitario)}</td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">{formatMoney(detalle?.cantidad * detalle?.precio_unitario)}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td colSpan="3" className="px-6 py-4 text-right font-medium">SUBTOTAL</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {formatMoney(calcularSubtotal(venta?.venta_productos))}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td colSpan="3" className="px-6 py-4 text-right font-medium">IVA (19%)</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {formatMoney(calcularIva(calcularSubtotal(venta?.venta_productos)))}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td colSpan="3" className="px-6 py-4 text-right font-bold">TOTAL</td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold">
                      {formatMoney(calcularTotal(venta?.venta_productos))}
                    </td>
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