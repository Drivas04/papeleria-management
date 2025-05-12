"use client";

import Header from "../../../components/Header";
import ClientForm from "../../../components/ClientForm";

export default function NuevoClientePage() {
  return (
    <>
      <Header pageTitle="Nuevo Cliente" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Registrar Nuevo Cliente</h2>
          <p className="text-gray-600">Ingrese la información del nuevo cliente de la papelería</p>
        </div>
        
        <ClientForm />
      </main>
    </>
  );
}