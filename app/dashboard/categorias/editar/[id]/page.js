"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "../../../../components/Header";
import CategoryForm from "../../../../components/CategoryForm";

export default function EditarCategoriaPage() {
  const params = useParams();
  const [categoria, setCategoria] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/categorias/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Error al cargar los datos de la categoría');
        }
        
        const data = await response.json();
        setCategoria(data);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchCategoria();
    }
  }, [params.id]);
  
  if (loading) {
    return (
      <>
        <Header pageTitle="Editar Categoría" />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header pageTitle="Editar Categoría" />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header pageTitle="Editar Categoría" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Editar Categoría</h2>
          <p className="text-gray-600">Modifique los datos de la categoría</p>
        </div>
        
        {categoria && <CategoryForm categoria={categoria} />}
      </main>
    </>
  );
}