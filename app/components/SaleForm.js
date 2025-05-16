'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SaleForm({ sale }) {
  const router = useRouter();
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ivaPorcentaje, setIvaPorcentaje] = useState(19); // Agregar estado para el porcentaje de IVA (19% por defecto)
  
  // Estado para la venta
  const [formData, setFormData] = useState({
    cliente_id_cliente: sale?.cliente_id_cliente || '',
    cliente_cedula: sale?.cliente_cedula || '',
    productos: sale?.venta_productos?.map(vp => ({
      ...vp,
      subtotal: parseFloat(vp.cantidad) * parseFloat(vp.precio_unitario)
    })) || [],
    estado: sale?.estado || 'COMPLETADA'
  });
  
  // Estado para un nuevo detalle
  const [nuevoDetalle, setNuevoDetalle] = useState({
    producto_id_producto: '',
    cantidad: 1,
    precio_unitario: 0,
    subtotal: 0
  });
  
  // Calcular total
  const total = formData.productos.reduce((sum, detalle) => sum + Number(detalle.subtotal || 0), 0);
  
  // Calcular el IVA
  const iva = total * (ivaPorcentaje / 100);
  
  // Calcular el total con IVA
  const totalConIva = total + iva;
  
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
        
        setClientes(clientesData || []); 
        setProductos(productosData?.filter(p => p.stock > 0) || []);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };
    
    fetchData();
  }, []);
  
  // Manejar cambio de cliente
  const handleClienteChange = (e) => {
    const clienteId = parseInt(e.target.value);
    const clienteSeleccionado = clientes.find(c => c.id_cliente === clienteId);
    
    setFormData({
      ...formData,
      cliente_id_cliente: clienteId,
      cliente_cedula: clienteSeleccionado ? clienteSeleccionado.cedula : ''
    });
  };
  
  // Manejar cambio de producto en el nuevo detalle
  const handleProductoChange = (e) => {
    const producto_id_producto = parseInt(e.target.value);
    const productoSeleccionado = productos.find(p => p.id_producto === producto_id_producto);
    
    // Usar el precio de venta del producto
    const precioVenta = productoSeleccionado?.precio_venta || 0;
    
    setNuevoDetalle({
      ...nuevoDetalle,
      producto_id_producto,
      precio_unitario: precioVenta,
      subtotal: precioVenta * nuevoDetalle.cantidad
    });
  };
  
  // Manejar cambio de cantidad en el nuevo detalle
  const handleCantidadChange = (e) => {
    const cantidad = parseFloat(e.target.value) || 0;
    const subtotal = nuevoDetalle.precio_unitario * cantidad;
    
    setNuevoDetalle({
      ...nuevoDetalle,
      cantidad,
      subtotal
    });
  };
  
  // Manejar cambio de precio unitario
  const handlePrecioUnitarioChange = (e) => {
    const precio_unitario = parseFloat(e.target.value) || 0;
    const subtotal = precio_unitario * nuevoDetalle.cantidad;
    
    setNuevoDetalle({
      ...nuevoDetalle,
      precio_unitario,
      subtotal
    });
  };
  
  // Agregar detalle a la venta
  const agregarDetalle = () => {
    if (!nuevoDetalle.producto_id_producto || nuevoDetalle.cantidad <= 0) {
      alert('Seleccione un producto y una cantidad válida');
      return;
    }
    
    // Verificar stock disponible
    const producto = productos.find(p => p.id_producto === nuevoDetalle.producto_id_producto);
    if (producto && nuevoDetalle.cantidad > producto.stock) {
      alert(`Stock insuficiente. Disponible: ${producto.stock}`);
      return;
    }
    
    // Verificar si el producto ya está en la lista
    const detalleExistente = formData.productos.findIndex(d => d.producto_id_producto === nuevoDetalle.producto_id_producto);
    
    if (detalleExistente !== -1) {
      // Actualizar detalle existente
      const nuevosDetalles = [...formData.productos];
      nuevosDetalles[detalleExistente].cantidad += nuevoDetalle.cantidad;
      nuevosDetalles[detalleExistente].subtotal = 
        nuevosDetalles[detalleExistente].cantidad * nuevosDetalles[detalleExistente].precio_unitario;
      
      setFormData({
        ...formData,
        productos: nuevosDetalles
      });
    } else {
      // Agregar nuevo detalle
      const productoInfo = productos.find(p => p.id_producto === nuevoDetalle.producto_id_producto);
      
      setFormData({
        ...formData,
        productos: [...formData.productos, {
          ...nuevoDetalle,
          producto: productoInfo
        }]
      });
    }
    
    // Reiniciar formulario de detalle
    setNuevoDetalle({
      producto_id_producto: '',
      cantidad: 1,
      precio_unitario: 0,
      subtotal: 0
    });
  };
  
  // Eliminar detalle
  const eliminarDetalle = (index) => {
    setFormData({
      ...formData,
      productos: formData.productos.filter((_, i) => i !== index)
    });
  };
  
  // Manejar cambio de estado
  const handleEstadoChange = (e) => {
    setFormData({
      ...formData,
      estado: e.target.value
    });
  };
  
  // Manejar cambio de porcentaje de IVA
  const handleIvaChange = (e) => {
    const valor = parseFloat(e.target.value) || 0;
    setIvaPorcentaje(valor);
  };
  
  // Formatear valores monetarios
  const formatMoney = (value) => {
    const num = parseFloat(value);
    return !isNaN(num) ? num.toFixed(2) : '0.00';
  };
  
  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.productos.length === 0) {
      alert('Debe agregar al menos un producto a la venta');
      return;
    }
    
    if (!formData.cliente_id_cliente) {
      alert('Debe seleccionar un cliente');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const payload = {
        ...formData,
        factura: {
          total: totalConIva,
          fecha: new Date(),
          subtotal: total,
          impuestos: iva
        }
      };
      
      const url = sale ? `/api/ventas/${sale.id_venta}` : '/api/ventas';
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
            value={formData.cliente_id_cliente} 
            onChange={handleClienteChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Seleccione un cliente</option>
            {clientes.map(cliente => (
              <option key={cliente.id_cliente} value={cliente.id_cliente}>
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

        {/* Porcentaje de IVA */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Porcentaje de IVA
          </label>
          <input 
            type="number" 
            min="0"
            max="100"
            step="0.1"
            readOnly
            value={ivaPorcentaje} 
            onChange={handleIvaChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
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
              value={nuevoDetalle.producto_id_producto} 
              onChange={handleProductoChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Seleccione un producto</option>
              {productos.map(producto => (
                <option key={producto.id_producto} value={producto.id_producto}>
                  {producto.nombre_producto} (Stock: {producto.stock})
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
              value={nuevoDetalle.precio_unitario} 
              onChange={handlePrecioUnitarioChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              min="0"
              step="0.01"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subtotal
            </label>
            <div className="flex items-center space-x-2">
              <input 
                type="number" 
                value={formatMoney(nuevoDetalle.subtotal)} 
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
        
        {formData.productos.length === 0 ? (
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
                {formData.productos.map((detalle, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {detalle.producto?.nombre_producto || `Producto ID: ${detalle.producto_id_producto}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{detalle.cantidad}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${formatMoney(detalle.precio_unitario)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${formatMoney(detalle.subtotal)}</td>
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
                  <td className="px-6 py-4 whitespace-nowrap">${formatMoney(total)}</td>
                  <td></td>
                </tr>
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-6 py-4 whitespace-nowrap" colSpan="3">IVA ({ivaPorcentaje}%)</td>
                  <td className="px-6 py-4 whitespace-nowrap">${formatMoney(iva)}</td>
                  <td></td>
                </tr>
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-6 py-4 whitespace-nowrap" colSpan="3">TOTAL CON IVA</td>
                  <td className="px-6 py-4 whitespace-nowrap">${formatMoney(totalConIva)}</td>
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