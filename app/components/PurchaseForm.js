'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PurchaseForm({ compra }) {
  const router = useRouter();
  const [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Estado para la compra
  const [formData, setFormData] = useState({
    proveedorId: compra?.proveedorId || '',
    detalles: compra?.detalles || [],
    estado: compra?.estado || 'COMPLETADA'
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
  
  // Cargar proveedores y productos al iniciar
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [proveedoresRes, productosRes] = await Promise.all([
          fetch('/api/proveedores'),
          fetch('/api/productos')
        ]);
        
        const proveedoresData = await proveedoresRes.json();
        const productosData = await productosRes.json();
        
        setProveedores(proveedoresData.filter(p => p.estado));
        setProductos(productosData.filter(p => p.estado));
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };
    
    fetchData();
  }, []);
  
  // Manejar cambio de proveedor
  const handleProveedorChange = (e) => {
    setFormData({
      ...formData,
      proveedorId: parseInt(e.target.value)
    });
  };
  
  // Manejar cambio de producto en el nuevo detalle
  const handleProductoChange = (e) => {
    const productoId = parseInt(e.target.value) || '';
    
    if (!productoId) {
      // Si no hay producto seleccionado, reiniciar valores
      setNuevoDetalle({
        ...nuevoDetalle,
        productoId: '',
        precioUnitario: 0,
        subtotal: 0
      });
      return;
    }
    
    // Buscar el producto seleccionado
    const productoSeleccionado = productos.find(p => p.id === productoId);
    
    if (productoSeleccionado) {
      // Usar el precio de compra del producto como valor inicial para el precio unitario
      const precioUnitario = parseFloat(productoSeleccionado.precioCompra);
      const cantidad = parseInt(nuevoDetalle.cantidad) || 1;
      const subtotal = precioUnitario * cantidad;
      
      setNuevoDetalle({
        ...nuevoDetalle,
        productoId,
        precioUnitario,
        cantidad,
        subtotal
      });
    }
  };
  
  // Manejar cambio de cantidad en el nuevo detalle
  const handleCantidadChange = (e) => {
    let cantidad = parseInt(e.target.value);
    
    // Asegurarse de que la cantidad sea un número válido mayor que cero
    if (isNaN(cantidad) || cantidad <= 0) {
      cantidad = 1;
    }
    
    const precioUnitario = parseFloat(nuevoDetalle.precioUnitario) || 0;
    const subtotal = precioUnitario * cantidad;
    
    setNuevoDetalle({
      ...nuevoDetalle,
      cantidad,
      subtotal
    });
  };

  // Manejar cambio de precio unitario
  const handlePrecioChange = (e) => {
    let precioUnitario = parseFloat(e.target.value);
    
    // Asegurarse de que el precio sea un número válido mayor que cero
    if (isNaN(precioUnitario) || precioUnitario <= 0) {
      precioUnitario = 0.01; // Un precio mínimo válido
    }
    
    const cantidad = parseInt(nuevoDetalle.cantidad) || 1;
    const subtotal = precioUnitario * cantidad;
    
    setNuevoDetalle({
      ...nuevoDetalle,
      precioUnitario,
      subtotal
    });
  };
  
  // Agregar detalle a la compra
  const agregarDetalle = () => {
    // Validar que se tenga un producto seleccionado
    if (!nuevoDetalle.productoId) {
      alert('Debe seleccionar un producto');
      return;
    }
    
    // Validar que la cantidad sea mayor a cero
    if (nuevoDetalle.cantidad <= 0) {
      alert('La cantidad debe ser mayor a cero');
      return;
    }
    
    // Validar que el precio sea mayor a cero
    if (nuevoDetalle.precioUnitario <= 0) {
      alert('El precio unitario debe ser mayor a cero');
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
      
      // Asegurarse de que todos los valores son del tipo correcto
      const detalleNuevo = {
        productoId: parseInt(nuevoDetalle.productoId),
        cantidad: parseInt(nuevoDetalle.cantidad),
        precioUnitario: parseFloat(nuevoDetalle.precioUnitario),
        subtotal: parseFloat(nuevoDetalle.subtotal),
        producto: productoInfo
      };
      
      setFormData({
        ...formData,
        detalles: [...formData.detalles, detalleNuevo]
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
      alert('Debe agregar al menos un producto a la compra');
      return;
    }
    
    if (!formData.proveedorId) {
      alert('Debe seleccionar un proveedor');
      return;
    }
    
    // Verificar que todos los detalles tengan precios válidos
    const detalleInvalido = formData.detalles.find(
      detalle => !detalle.precioUnitario || detalle.precioUnitario <= 0
    );
    
    if (detalleInvalido) {
      alert('Todos los productos deben tener un precio válido mayor a 0');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Preparar los detalles para enviarlos a la API - asegurarse de que todos son números
      const detallesFormateados = formData.detalles.map(detalle => ({
        productoId: parseInt(detalle.productoId),
        cantidad: parseInt(detalle.cantidad),
        precioUnitario: parseFloat(detalle.precioUnitario),
        subtotal: parseFloat(detalle.subtotal)
      }));
      
      const payload = {
        proveedorId: parseInt(formData.proveedorId),
        estado: formData.estado,
        detalles: detallesFormateados,
        total: parseFloat(total)
      };
      
      console.log('Enviando datos:', JSON.stringify(payload, null, 2));
      
      const url = compra ? `/api/compras/${compra.id}` : '/api/compras';
      const method = compra ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.error || 'Error al guardar la compra');
      }
      
      router.push('/dashboard/compras');
      router.refresh();
    } catch (error) {
      console.error('Error:', error);
      alert(`Error al procesar la compra: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Datos de la Compra</h2>
        
        {/* Selección de Proveedor */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Proveedor
          </label>
          <select 
            value={formData.proveedorId} 
            onChange={handleProveedorChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Seleccione un proveedor</option>
            {proveedores.map(proveedor => (
              <option key={proveedor.id} value={proveedor.id}>
                {proveedor.nombre}
              </option>
            ))}
          </select>
        </div>
        
        {/* Estado de la compra */}
        {compra && (
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
                  {producto.nombre}
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
              Precio Unitario
            </label>
            <input 
              type="number" 
              step="0.01"
              min="0.01"
              value={nuevoDetalle.precioUnitario} 
              onChange={handlePrecioChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
      
      {/* Lista de productos en la compra */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Detalle de la Compra</h2>
        
        {formData.detalles.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            No hay productos agregados a la compra
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
          onClick={() => router.push('/dashboard/compras')}
          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
        >
          {isSubmitting ? 'Guardando...' : (compra ? 'Actualizar' : 'Guardar')}
        </button>
      </div>
    </form>
  );
}