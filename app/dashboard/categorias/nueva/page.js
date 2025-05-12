"use client";

import Header from "../../../components/Header";
import CategoryForm from "../../../components/CategoryForm";

export default function NuevaCategoriaPage() {
  return (
    <>
      <Header pageTitle="Nueva Categoría" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Crear Nueva Categoría</h2>
          <p className="text-gray-600">Ingrese la información de la nueva categoría de productos</p>
        </div>
        
        <CategoryForm />
      </main>
    </>
  );
}