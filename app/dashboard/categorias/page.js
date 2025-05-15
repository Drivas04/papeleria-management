"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Link from "next/link";
import { 
  PencilIcon, 
  TrashIcon, 
  PlusCircleIcon
} from "@heroicons/react/24/outline";

export default function CategoriasPage() {
  const router = useRouter();
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategorias();
  }, []);

  const fetchCategorias = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/categorias");
      
      if (!response.ok) {
        throw new Error('Error al cargar las categorías');
      }
      
      const data = await response.json();
      setCategorias(data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, productosCount) => {
    if (productosCount > 0) {
      alert(`No se puede eliminar esta categoría porque tiene ${productosCount} productos asociados.`);
      return;
    }
    
    if (confirm("¿Está seguro que desea desactivar esta categoría?")) {
      try {
        const response = await fetch(`/api/categorias/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Error al eliminar la categoría');
        }

        // Actualizar la lista de categorías después de eliminar
        fetchCategorias();
      } catch (error) {
        console.error("Error:", error);
        alert(error.message);
      }
    }
  };

  return (
    <>
      <Header pageTitle="Gestión de Categorías" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Categorías de Productos</h2>
          <Link
            href="/dashboard/categorias/nueva"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center"
          >
            <PlusCircleIcon className="w-5 h-5 mr-2" />
            Nueva Categoría
          </Link>
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
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Descripción
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Productos
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
                {categorias.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                      No hay categorías registradas
                    </td>
                  </tr>
                ) : (
                  categorias.map((categoria) => (
                    <tr key={categoria.id_categoria}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {categoria.nombre}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {categoria.descripcion || "Sin descripción"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {categoria._count?.productos || 0}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          !categoria.estado 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {!categoria.estado ? "Activa" : "Inactiva"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link
                            href={`/dashboard/categorias/editar/${categoria.id_categoria}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <PencilIcon className="w-5 h-5" />
                          </Link>
                          <button
                            onClick={() => handleDelete(categoria.id_categoria, categoria._count?.productos || 0)}
                            className="text-red-600 hover:text-red-900"
                            disabled={categoria._count?.productos > 0}
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
        )}
      </main>
    </>
  );
}