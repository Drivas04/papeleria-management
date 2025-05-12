"use client";

import Header from "../../../components/Header";
import ProviderForm from "../../../components/ProviderForm";

export default function NuevoProveedorPage() {
  return (
    <>
      <Header pageTitle="Nuevo Proveedor" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Registrar Nuevo Proveedor</h2>
          <p className="text-gray-600">Ingrese la información del nuevo proveedor de la papelería</p>
        </div>
        
        <ProviderForm />
      </main>
    </>
  );
}