'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PurchaseForm({ compra }) {
  const router = useRouter();
  const [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ivaPorcentaje, setIvaPorcentaje] = useState(19); // Agregar estado para el porcentaje de IVA (19% por defecto)
  
  // Estado para la compra
  const [formData, setFormData] = useState({
    proveedor_id_proveedor: compra?.proveedor_id_proveedor || '',
    detalles: compra?.compra_productos || [],
    estado: compra?.estado || 'COMPLETADA'
  });
  
  // Estado para un nuevo detalle
  const [nuevoDetalle, setNuevoDetalle] = useState({
    producto_id_producto: '',
    cantidad: 1,
    precio_unitario: 0,
    precio_venta: 0,
    subtotal: 0
  });
  
  // Calcular total
  const total = formData.detalles.reduce((sum, detalle) => {
    const subtotal = parseFloat(detalle.subtotal) || 0;
    return sum + subtotal;
  }, 0);
  
  // Calcular el IVA
  const iva = total * (ivaPorcentaje / 100);
  
  // Calcular el total con IVA
  const totalConIva = total + iva;
  
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
        
        setProveedores(proveedoresData); // No filtramos por estado ya que no existe en MySQL
        setProductos(productosData);
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
      proveedor_id_proveedor: parseInt(e.target.value)
    });
  };
  
  // Manejar cambio de producto en el nuevo detalle
  const handleProductoChange = (e) => {
    const producto_id_producto = parseInt(e.target.value) || '';
    
    if (!producto_id_producto) {
      // Si no hay producto seleccionado, reiniciar valores
      setNuevoDetalle({
        ...nuevoDetalle,
        producto_id_producto: '',
        precio_unitario: 0,
        precio_venta: 0,
        subtotal: 0
      });
      return;
    }
    
    // Buscar el producto seleccionado
    const productoSeleccionado = productos.find(p => p.id_producto === producto_id_producto);
    
    if (productoSeleccionado) {
      // Usar el precio de compra del producto como valor inicial para el precio unitario
      const precio_unitario = parseFloat(productoSeleccionado.precio_compra || 0);
      
      // Calcular un precio de venta sugerido (30% margen por defecto)
      let precio_venta = 0;
      if (productoSeleccionado.precio_venta && parseFloat(productoSeleccionado.precio_venta) > 0) {
        precio_venta = parseFloat(productoSeleccionado.precio_venta);
      } else {
        // Asegurarnos de hacer el cálculo correctamente para evitar problemas de punto flotante
        precio_venta = precio_unitario * 1.3;
      }
      
      const cantidad = parseInt(nuevoDetalle.cantidad) || 1;
      const subtotal = precio_unitario * cantidad;
      
      setNuevoDetalle({
        ...nuevoDetalle,
        producto_id_producto,
        precio_unitario,
        precio_venta,
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
    
    const precio_unitario = parseFloat(nuevoDetalle.precio_unitario) || 0;
    // Calcular subtotal con dos decimales para mayor precisión
    const subtotal = parseFloat((precio_unitario * cantidad).toFixed(2));
    
    setNuevoDetalle({
      ...nuevoDetalle,
      cantidad,
      subtotal
    });
  };

  // Manejar cambio de precio unitario
  const handlePrecioChange = (e) => {
    // Permitir que el campo esté vacío para facilitar la escritura
    const valorInput = e.target.value;
    
    // Si el campo está vacío, establecemos un valor temporal
    if (valorInput === '') {
      setNuevoDetalle({
        ...nuevoDetalle,
        precio_unitario: '',
        subtotal: 0
      });
      return;
    }
    
    // Convertir a número
    let precio_unitario = parseFloat(valorInput);
    
    // Solo validamos si el precio es NaN, permitimos cualquier valor válido
    if (isNaN(precio_unitario)) {
      precio_unitario = 0.01;
    }
    
    const cantidad = parseInt(nuevoDetalle.cantidad) || 1;
    // Calcular subtotal con dos decimales para mayor precisión
    const subtotal = parseFloat((precio_unitario * cantidad).toFixed(2));
    
    // Sugerir un precio de venta con un 30% de margen sobre el precio de compra
    const precio_venta_sugerido = precio_unitario * 1.3;
    
    setNuevoDetalle({
      ...nuevoDetalle,
      precio_unitario,
      precio_venta: precio_venta_sugerido,
      subtotal
    });
  };

  // Manejar cambio de precio de venta
  const handlePrecioVentaChange = (e) => {
    // Permitir que el campo esté vacío para facilitar la escritura
    const valorInput = e.target.value;
    
    // Si el campo está vacío, establecemos un valor temporal
    if (valorInput === '') {
      setNuevoDetalle({
        ...nuevoDetalle,
        precio_venta: '',
      });
      return;
    }
    
    // Convertir a número
    let precio_venta = parseFloat(valorInput);
    
    // Solo validamos si el precio es NaN, permitimos cualquier valor válido
    if (isNaN(precio_venta)) {
      precio_venta = 0.01;
    }
    
    setNuevoDetalle({
      ...nuevoDetalle,
      precio_venta
    });
  };
  
  // Agregar detalle a la compra
  const agregarDetalle = () => {
    // Validar que se tenga un producto seleccionado
    if (!nuevoDetalle.producto_id_producto) {
      alert('Debe seleccionar un producto');
      return;
    }
    
    // Validar que la cantidad sea mayor a cero
    if (nuevoDetalle.cantidad <= 0) {
      alert('La cantidad debe ser mayor a cero');
      return;
    }
    
    // Validar que el precio de compra sea mayor a cero
    if (!nuevoDetalle.precio_unitario || nuevoDetalle.precio_unitario <= 0) {
      alert('El precio de compra debe ser mayor a cero');
      return;
    }
    
    // Validar que el precio de venta sea mayor a cero
    if (!nuevoDetalle.precio_venta || nuevoDetalle.precio_venta <= 0) {
      alert('El precio de venta debe ser mayor a cero');
      return;
    }
    
    // Verificar si el producto ya está en la lista
    const detalleExistente = formData.detalles.findIndex(d => d.producto_id_producto === nuevoDetalle.producto_id_producto);
    
    if (detalleExistente !== -1) {
      // Actualizar detalle existente
      const nuevosDetalles = [...formData.detalles];
      nuevosDetalles[detalleExistente].cantidad += nuevoDetalle.cantidad;
      nuevosDetalles[detalleExistente].subtotal = 
        nuevosDetalles[detalleExistente].cantidad * nuevosDetalles[detalleExistente].precio_unitario;
      
      setFormData({
        ...formData,
        detalles: nuevosDetalles
      });
    } else {
      // Agregar nuevo detalle
      const productoInfo = productos.find(p => p.id_producto === nuevoDetalle.producto_id_producto);
      
      // Asegurarse de que todos los valores son del tipo correcto
      const detalleNuevo = {
        producto_id_producto: parseInt(nuevoDetalle.producto_id_producto),
        cantidad: parseInt(nuevoDetalle.cantidad),
        precio_unitario: parseFloat(nuevoDetalle.precio_unitario),
        precio_venta: parseFloat(nuevoDetalle.precio_venta),
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
      producto_id_producto: '',
      cantidad: 1,
      precio_unitario: 1,
      precio_venta: 1,
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
    
    if (!formData.detalles || formData.detalles.length === 0) {
      alert('Debe agregar al menos un producto a la compra');
      return;
    }
    
    if (!formData.proveedor_id_proveedor) {
      alert('Debe seleccionar un proveedor');
      return;
    }
    
    // Verificar que todos los detalles tengan precios de compra válidos
    const detalleInvalidoCompra = formData.detalles.find(
      detalle => !detalle.precio_unitario || detalle.precio_unitario <= 0
    );
    
    if (detalleInvalidoCompra) {
      alert('Todos los productos deben tener un precio de compra válido mayor a 0');
      return;
    }
    
    // Verificar que todos los detalles tengan precios de venta válidos
    const detalleInvalidoVenta = formData.detalles.find(
      detalle => !detalle.precio_venta || detalle.precio_venta <= 0
    );
    
    if (detalleInvalidoVenta) {
      alert('Todos los productos deben tener un precio de venta válido mayor a 0');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Preparar los detalles para enviarlos a la API - asegurarse de que todos son números
      const detallesFormateados = formData.detalles.map(detalle => ({
        producto_id_producto: parseInt(detalle.producto_id_producto),
        cantidad: parseInt(detalle.cantidad),
        precio_unitario: parseFloat(detalle.precio_unitario),
        precio_venta: parseFloat(detalle.precio_venta),
        subtotal: parseFloat(detalle.subtotal)
      }));
      
      // Agregamos una validación adicional
      if (detallesFormateados.length === 0) {
        alert('Debe agregar al menos un producto a la compra');
        setIsSubmitting(false);
        return;
      }
      
      const payload = {
        proveedor_id_proveedor: parseInt(formData.proveedor_id_proveedor),
        estado: formData.estado,
        productos: detallesFormateados, // Aseguramos que el nombre sea 'productos' aquí
        total: parseFloat(totalConIva), // Ahora utilizamos el total con IVA
        // Agregar información de factura automáticamente
        factura: {
          subtotal: parseFloat(total),
          impuestos: parseFloat(iva), // Ahora agregamos el valor del IVA calculado
          total: parseFloat(totalConIva) // Total con IVA incluido
        }
      };
      
      
      const url = compra ? `/api/compras/${compra.id_compra}` : '/api/compras';
      const method = compra ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      const responseData = await response.json();
      console.log('Respuesta de API:', responseData);
      
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
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-bold">Información importante</p>
        <p>Este formulario permite registrar compras a proveedores y actualizar el inventario. Puede:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Agregar nuevos productos al registrar una compra</li>
          <li>Actualizar el stock de productos existentes</li>
          <li>Actualizar precios de compra y venta</li>
        </ul>
      </div>
    
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Datos de la Compra</h2>
        
        {/* Selección de Proveedor */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Proveedor
          </label>
          <select 
            value={formData.proveedor_id_proveedor} 
            onChange={handleProveedorChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Seleccione un proveedor</option>
            {proveedores.map(proveedor => (
              <option key={proveedor.id_proveedor} value={proveedor.id_proveedor}>
                {proveedor.nombre}
              </option>
            ))}
          </select>
        </div>
        
        {/* Control para el IVA */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Porcentaje de IVA (%)
          </label>
          <input 
            type="number" 
            min="0"
            max="100"
            step="0.1"
            readOnly
            value={ivaPorcentaje} 
            onChange={(e) => setIvaPorcentaje(parseFloat(e.target.value) || 0)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
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
        
        <div className="alert bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4 text-yellow-800">
          <p>Al agregar productos, los siguientes valores se actualizarán automáticamente:</p>
          <ul className="list-disc ml-5 mt-1">
            <li>Stock: se incrementará según la cantidad comprada</li>
            <li>Precio de compra: se actualizará al precio unitario indicado</li>
            <li>Precio de venta: se actualizará al precio indicado (por defecto se sugiere un 30% sobre el precio de compra)</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
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
                  {producto.nombre_producto || producto.nombre}
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
              Precio Compra
            </label>
            <input 
              type="number" 
              step="0.01"
              min="0.01"
              value={nuevoDetalle.precio_unitario} 
              onChange={handlePrecioChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio Venta
            </label>
            <input 
              type="number" 
              step="0.01"
              min="0.01"
              value={nuevoDetalle.precio_venta} 
              onChange={handlePrecioVentaChange}
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio Compra</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio Venta</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.detalles.map((detalle, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {detalle.producto?.nombre_producto || `Producto ID: ${detalle.producto_id_producto}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{detalle.cantidad}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${detalle.precio_unitario}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${detalle.precio_venta.toFixed(2)}</td>
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
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap" colSpan="4">SUBTOTAL</td>
                  <td className="px-6 py-4 whitespace-nowrap">${total.toFixed(2)}</td>
                  <td></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap" colSpan="4">IVA ({ivaPorcentaje}%)</td>
                  <td className="px-6 py-4 whitespace-nowrap">${iva.toFixed(2)}</td>
                  <td></td>
                </tr>
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-6 py-4 whitespace-nowrap" colSpan="4">TOTAL</td>
                  <td className="px-6 py-4 whitespace-nowrap">${totalConIva.toFixed(2)}</td>
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