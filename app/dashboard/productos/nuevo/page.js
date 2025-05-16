"use client";

import Header from "../../../components/Header";
import ProductForm from "../../../components/ProductForm";

export default function NuevoProductoPage() {
  return (
    <>
      <Header pageTitle="Nuevo Producto" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-bold">Información importante</p>
          <p>Aquí puedes registrar la información básica del producto. El stock y el precio de compra se actualizarán cuando realices una compra.</p>
        </div>
        
        <ProductForm />
      </main>
    </>
  );
}