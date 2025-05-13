'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SaleForm({ sale }) {
  const router = useRouter();
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Estado para la venta
  const [formData, setFormData] = useState({
    clienteId: sale?.clienteId || '',
    detalles: sale?.detalles || [],
    estado: sale?.estado || 'COMPLETADA'
  });
  
  // Estado para un nuevo detalle
  const [nuevoDetalle, setNuevoDetalle] = useState({
    productoId: '',
    cantidad: 1,
    precioUnitario: 0,
    subtotal: 0
  });
  
  // Calcular total
  const total = formData.detalles.reduce((sum, detalle) => sum + Number(detalle.subtotal), 0);
  
  // Cargar clientes y productos al iniciar
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clientesRes, productosRes] = await Promise.all([
          fetch('/api/clientes'),
          fetch('/api/productos')
        ]);
        
        const clientesData = await clientesRes.json();
        const productosData = await productosRes.json();
        
        setClientes(clientesData.filter(c => c.estado));
        setProductos(productosData.filter(p => p.estado && p.stock > 0));
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };
    
    fetchData();
  }, []);
  
  // Manejar cambio de cliente
  const handleClienteChange = (e) => {
    setFormData({
      ...formData,
      clienteId: parseInt(e.target.value)
    });
  };
  
  // Manejar cambio de producto en el nuevo detalle
  const handleProductoChange = (e) => {
    const productoId = parseInt(e.target.value);
    const productoSeleccionado = productos.find(p => p.id === productoId);
    
    setNuevoDetalle({
      ...nuevoDetalle,
      productoId,
      precioUnitario: productoSeleccionado ? parseFloat(productoSeleccionado.precioVenta) : 0,
      subtotal: productoSeleccionado ? parseFloat(productoSeleccionado.precioVenta) * nuevoDetalle.cantidad : 0
    });
  };
  
  // Manejar cambio de cantidad en el nuevo detalle
  const handleCantidadChange = (e) => {
    const cantidad = parseInt(e.target.value) || 0;
    const subtotal = nuevoDetalle.precioUnitario * cantidad;
    
    setNuevoDetalle({
      ...nuevoDetalle,
      cantidad,
      subtotal
    });
  };
  
  // Agregar detalle a la venta
  const agregarDetalle = () => {
    if (!nuevoDetalle.productoId || nuevoDetalle.cantidad <= 0) {
      alert('Seleccione un producto y una cantidad válida');
      return;
    }
    
    // Verificar stock disponible
    const producto = productos.find(p => p.id === nuevoDetalle.productoId);
    if (producto && nuevoDetalle.cantidad > producto.stock) {
      alert(`Stock insuficiente. Disponible: ${producto.stock}`);
      return;
    }
    
    // Verificar si el producto ya está en la lista
    const detalleExistente = formData.detalles.findIndex(d => d.productoId === nuevoDetalle.productoId);
    
    if (detalleExistente !== -1) {
      // Actualizar detalle existente
      const nuevosDetalles = [...formData.detalles];
      nuevosDetalles[detalleExistente].cantidad += nuevoDetalle.cantidad;
      nuevosDetalles[detalleExistente].subtotal = 
        nuevosDetalles[detalleExistente].cantidad * nuevosDetalles[detalleExistente].precioUnitario;
      
      setFormData({
        ...formData,
        detalles: nuevosDetalles
      });
    } else {
      // Agregar nuevo detalle
      const productoInfo = productos.find(p => p.id === nuevoDetalle.productoId);
      
      setFormData({
        ...formData,
        detalles: [...formData.detalles, {
          ...nuevoDetalle,
          producto: productoInfo
        }]
      });
    }
    
    // Reiniciar formulario de detalle
    setNuevoDetalle({
      productoId: '',
      cantidad: 1,
      precioUnitario: 0,
      subtotal: 0
    });
  };
  
  // Eliminar detalle
  const eliminarDetalle = (index) => {
    setFormData({
      ...formData,
      detalles: formData.detalles.filter((_, i) => i !== index)
    });
  };
  
  // Manejar cambio de estado
  const handleEstadoChange = (e) => {
    setFormData({
      ...formData,
      estado: e.target.value
    });
  };
  
  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.detalles.length === 0) {
      alert('Debe agregar al menos un producto a la venta');
      return;
    }
    
    if (!formData.clienteId) {
      alert('Debe seleccionar un cliente');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const payload = {
        ...formData,
        total
      };
      
      const url = sale ? `/api/ventas/${sale.id}` : '/api/ventas';
      const method = sale ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error('Error al guardar la venta');
      }
      
      router.push('/dashboard/ventas');
      router.refresh();
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al procesar la venta');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Datos de la Venta</h2>
        
        {/* Selección de Cliente */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cliente
          </label>
          <select 
            value={formData.clienteId} 
            onChange={handleClienteChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Seleccione un cliente</option>
            {clientes.map(cliente => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nombre} {cliente.apellido}
              </option>
            ))}
          </select>
        </div>
        
        {/* Estado de la venta */}
        {sale && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado
            </label>
            <select 
              value={formData.estado} 
              onChange={handleEstadoChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="COMPLETADA">Completada</option>
              <option value="ANULADA">Anulada</option>
            </select>
          </div>
        )}
      </div>
      
      {/* Agregar productos */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Agregar Productos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Producto
            </label>
            <select 
              value={nuevoDetalle.productoId} 
              onChange={handleProductoChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Seleccione un producto</option>
              {productos.map(producto => (
                <option key={producto.id} value={producto.id}>
                  {producto.nombre} (Stock: {producto.stock})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cantidad
            </label>
            <input 
              type="number" 
              min="1"
              value={nuevoDetalle.cantidad} 
              onChange={handleCantidadChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio
            </label>
            <input 
              type="number" 
              value={nuevoDetalle.precioUnitario} 
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm bg-gray-100"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subtotal
            </label>
            <div className="flex items-center space-x-2">
              <input 
                type="number" 
                value={nuevoDetalle.subtotal} 
                readOnly
                className="w-full border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
              <button 
                type="button" 
                onClick={agregarDetalle}
                className="py-2 px-3 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lista de productos en la venta */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Detalle de la Venta</h2>
        
        {formData.detalles.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            No hay productos agregados a la venta
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio Unit.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.detalles.map((detalle, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {detalle.producto?.nombre || `Producto ID: ${detalle.productoId}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{detalle.cantidad}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${detalle.precioUnitario.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${detalle.subtotal.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        type="button" 
                        onClick={() => eliminarDetalle(index)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-6 py-4 whitespace-nowrap" colSpan="3">TOTAL</td>
                  <td className="px-6 py-4 whitespace-nowrap">${total.toFixed(2)}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => router.push('/dashboard/ventas')}
          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
        >
          {isSubmitting ? 'Guardando...' : (sale ? 'Actualizar' : 'Guardar')}
        </button>
      </div>
    </form>
  );
}