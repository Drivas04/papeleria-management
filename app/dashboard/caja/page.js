'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function CajaPage() {
  const [cajaActual, setCajaActual] = useState(null);
  const [historialCajas, setHistorialCajas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [montoCierre, setMontoCierre] = useState('');
  const [montoInicial, setMontoInicial] = useState('');
  const [error, setError] = useState('');
  const [notas, setNotas] = useState('');
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchCajas = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/caja');
        if (!res.ok) throw new Error('Error al cargar datos de caja');
        
        const data = await res.json();
        
        // Buscar caja abierta
        const cajaAbierta = data.find(caja => caja.estado === 'abierta');
        setCajaActual(cajaAbierta || null);
        
        // Historial de cajas cerradas
        setHistorialCajas(data.filter(caja => caja.estado === 'cerrada'));
      } catch (error) {
        console.error('Error:', error);
        setError('Error al cargar datos de caja');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCajas();
  }, []);

  const abrirCaja = async (e) => {
    e.preventDefault();
    
    if (!montoInicial || parseFloat(montoInicial) <= 0) {
      setError('El monto inicial debe ser mayor que 0');
      return;
    }
    
    try {
      const response = await fetch('/api/caja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          monto_inicial: parseFloat(montoInicial),
          usuario_id_usuario: session?.user?.id || 1,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al abrir la caja');
      }

      const nuevaCaja = await response.json();
      setCajaActual(nuevaCaja);
      setMontoInicial('');
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  const cerrarCaja = async (e) => {
    e.preventDefault();
    
    if (!cajaActual) {
      setError('No hay una caja abierta para cerrar');
      return;
    }
    
    if (!montoCierre || parseFloat(montoCierre) < 0) {
      setError('El monto de cierre debe ser un valor válido');
      return;
    }
    
    try {
      // Preparar los datos y validar que sean correctos
      const dataCierre = {
        monto_final: parseFloat(montoCierre),
        estado: 'cerrada',
        notas: notas || ''
      };
      
      console.log('Enviando datos:', dataCierre);
      
      const response = await fetch(`/api/caja/${cajaActual.id_cierre_caja}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataCierre),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = 'Error al cerrar la caja';
        
        try {
          // Intentar analizar la respuesta como JSON
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorMessage;
        } catch (jsonError) {
          console.error('Error al analizar respuesta JSON:', errorText);
          errorMessage = `Error en formato de respuesta: ${errorText.substring(0, 50)}`;
        }
        
        throw new Error(errorMessage);
      }

      // Analizar la respuesta con manejo de errores
      try {
        // Intentar leer la respuesta como texto primero
        const responseText = await response.text();
        console.log('Respuesta del servidor (texto):', responseText);
        
        // Comprobar si el texto está vacío
        if (!responseText.trim()) {
          throw new Error('La respuesta del servidor está vacía');
        }
        
        // Intentar analizar como JSON
        const cajaActualizada = JSON.parse(responseText);
        console.log('Caja actualizada (objeto):', cajaActualizada);
        
        setCajaActual(null);
        setHistorialCajas(prev => [cajaActualizada, ...prev]);
        setMontoCierre('');
        setNotas('');
        setError('');
      } catch (jsonError) {
        console.error('Error al procesar respuesta:', jsonError);
        throw new Error('No se pudo procesar la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return isNaN(date.getTime()) 
      ? 'Fecha inválida'
      : date.toLocaleDateString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
  };

  const formatCurrency = (value) => {
    const num = parseFloat(value);
    return !isNaN(num) ? `$${num.toFixed(2)}` : '$0.00';
  };

  if (isLoading) {
    return (
      <div className="p-6 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Control de Caja</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Panel de Caja Actual */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Estado de Caja</h2>
          
          {cajaActual ? (
            <div>
              <div className="mb-4 p-4 bg-green-100 rounded-lg">
                <p className="text-lg font-medium text-green-800">Caja Abierta</p>
                <p className="text-sm text-green-700">Abierta el {formatDate(cajaActual.fecha_apertura)}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600">Monto Inicial</p>
                <p className="text-xl font-bold">{formatCurrency(cajaActual.monto_inicial)}</p>
              </div>
              
              <form onSubmit={cerrarCaja} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monto Final
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      step="0.01"
                      value={montoCierre}
                      onChange={e => setMontoCierre(e.target.value)}
                      className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notas
                  </label>
                  <textarea
                    value={notas}
                    onChange={e => setNotas(e.target.value)}
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Observaciones sobre el cierre de caja..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Cerrar Caja
                </button>
              </form>
            </div>
          ) : (
            <div>
              <div className="mb-4 p-4 bg-yellow-100 rounded-lg">
                <p className="text-lg font-medium text-yellow-800">Caja Cerrada</p>
                <p className="text-sm text-yellow-700">No hay una caja abierta actualmente</p>
              </div>
              
              <form onSubmit={abrirCaja} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monto Inicial
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      step="0.01"
                      value={montoInicial}
                      onChange={e => setMontoInicial(e.target.value)}
                      className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Abrir Caja
                </button>
              </form>
            </div>
          )}
        </div>
        
        {/* Historial de Cierres */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Historial de Cierres</h2>
          
          {historialCajas.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No hay registros de cierres de caja</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Apertura</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Cierre</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inicial</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Final</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diferencia</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {historialCajas.map((caja) => (
                    <tr key={caja.id_cierre_caja} className="hover:bg-gray-50">
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{formatDate(caja.fecha_apertura)}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{formatDate(caja.fecha_cierre)}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{formatCurrency(caja.monto_inicial)}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{formatCurrency(caja.monto_final)}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${parseFloat(caja.diferencia) >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {formatCurrency(caja.diferencia)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
