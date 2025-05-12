"use client";

import Header from "../../../components/Header";
import ProductForm from "../../../components/ProductForm";

export default function NuevoProductoPage() {
  return (
    <>
      <Header pageTitle="Nuevo Producto" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Crear Nuevo Producto</h2>
          <p className="text-gray-600">Ingrese la información del nuevo producto para el inventario</p>
        </div>
        
        <ProductForm />
      </main>
    </>
  );
}