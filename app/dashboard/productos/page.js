"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Link from "next/link";
import { 
  PencilIcon, 
  TrashIcon, 
  PlusCircleIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

export default function ProductosPage() {
  const router = useRouter();
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filtros
  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [stockBajo, setStockBajo] = useState(false);
  const [stockAlto, setStockAlto] = useState(false);

  useEffect(() => {
    // Cargar categorías para el filtro
    const fetchCategorias = async () => {
      try {
        const response = await fetch("/api/categorias");
        
        if (!response.ok) {
          throw new Error('Error al cargar las categorías');
        }
        
        const data = await response.json();
        setCategorias(data);
      } catch (error) {
        console.error("Error al cargar categorías:", error);
      }
    };
    
    fetchCategorias();
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      setLoading(true);
      
      // Construir la URL con los filtros
      let url = "/api/productos?";
      
      if (busqueda) {
        url += `nombre=${encodeURIComponent(busqueda)}&`;
      }
      
      if (categoriaFiltro) {
        url += `categoria=${categoriaFiltro}&`;
      }
      
      if (stockBajo) {
        url += "stockBajo=true&";
      }
      
      if (stockAlto) {
        url += "stockAlto=true&";
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Error al cargar los productos');
      }
      
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("¿Está seguro que desea desactivar este producto?")) {
      try {
        const response = await fetch(`/api/productos/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Error al eliminar el producto');
        }

        // Actualizar la lista de productos después de eliminar
        fetchProductos();
      } catch (error) {
        console.error("Error:", error);
        alert(error.message);
      }
    }
  };
  
  const handleFilter = (e) => {
    e.preventDefault();
    fetchProductos();
  };
  
  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoriaFiltro("");
    setStockBajo(false);
    setStockAlto(false);
    
    // Recargar productos sin filtros
    setTimeout(fetchProductos, 0);
  };

  return (
    <>
      <Header pageTitle="Gestión de Productos" />
      <main className="flex-1 p-6 bg-gray-50">      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Inventario de Productos</h2>
          <div className="flex space-x-2">
            <Link
              href="/dashboard/compras/nueva"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center"
            >
              <PlusCircleIcon className="w-5 h-5 mr-2" />
              Registrar Compra
            </Link>
            <Link
              href="/dashboard/productos/nuevo"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center"
            >
              <PlusCircleIcon className="w-5 h-5 mr-2" />
              Nuevo Producto
            </Link>
          </div>
        </div>
        
        <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-bold">Información importante</p>
          <p className="mt-1">El registro de nuevos productos debe realizarse a través del módulo de Compras. De esta forma:</p>
          <ul className="list-disc ml-5 mt-1">
            <li>Se mantiene un registro completo de los proveedores y facturas de compra</li>
            <li>El stock se actualiza correctamente según las compras realizadas</li>
            <li>Los precios de compra y venta quedan vinculados a cada transacción</li>
          </ul>
          <p className="mt-2 font-medium">Utiliza el botón "Registrar Compra" para agregar nuevos productos al inventario.</p>
        </div>
      </div>

        {/* Filtros */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <form onSubmit={handleFilter} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Buscar por nombre
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Buscar..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoría
              </label>
              <select
                value={categoriaFiltro}
                onChange={(e) => setCategoriaFiltro(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Todas</option>
                {categorias.map((cat) => (
                  <option key={cat.id_categoria} value={cat.id_categoria}>
                    {cat.nombre}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end flex-col space-y-2">
              <label className="inline-flex items-center">
                <input 
                  type="checkbox" 
                  checked={stockBajo} 
                  onChange={(e) => {
                    setStockBajo(e.target.checked);
                    if (e.target.checked) {
                      setStockAlto(false);
                    }
                  }}
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                />
                <span className="ml-2">Solo productos con stock bajo</span>
              </label>
              
              <label className="inline-flex items-center">
                <input 
                  type="checkbox" 
                  checked={stockAlto} 
                  onChange={(e) => {
                    setStockAlto(e.target.checked);
                    if (e.target.checked) {
                      setStockBajo(false);
                    }
                  }}
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                />
                <span className="ml-2">Solo productos con stock alto</span>
              </label>
            </div>
            
            <div className="flex items-end space-x-2">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md"
              >
                Filtrar
              </button>
              <button
                type="button"
                onClick={limpiarFiltros}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Código
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Producto
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoría
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Precio Venta
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {productos.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                        No se encontraron productos
                      </td>
                    </tr>
                  ) : (
                    productos.map((producto) => (
                      <tr key={producto.id_producto}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {producto.id_producto || producto.codigo}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {producto.nombre_producto || producto.nombre}
                          </div>
                          <div className="text-xs text-gray-500">
                            {producto.descripcion?.substring(0, 30) || "Sin descripción"}
                            {producto.descripcion?.length > 30 ? "..." : ""}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                            {producto.categoria?.nombre || "Sin categoría"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {/* Precio de último venta aquí o mensaje si no hay */}
                            {producto.precio_venta ? `$${producto.precio_venta}` : "N/A"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className={`text-sm mr-2 ${
                              producto.nivel_alerta === 'bajo' ? 'text-red-600 font-bold' : 'text-gray-900'
                            }`}>
                              {producto.stock}
                            </span>
                            {producto.nivel_alerta === 'bajo' && (
                              <span className="text-red-600 bg-red-100 text-xs px-2 py-1 rounded-full" title="Stock por debajo del mínimo">
                                Bajo ⚠️
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500">
                            Mín: {producto.stock_minimo || 5}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            !producto.estado 
                              ? "bg-green-100 text-green-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {!producto.estado ? "Activo" : "Inactivo"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <Link
                              href={`/dashboard/productos/editar/${producto.id_producto}`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <PencilIcon className="w-5 h-5" />
                            </Link>
                            <button
                              onClick={() => handleDelete(producto.id_producto)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <TrashIcon className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </>
  );
}