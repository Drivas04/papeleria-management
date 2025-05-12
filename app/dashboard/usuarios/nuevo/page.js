"use client";

import Header from "../../../components/Header";
import UserForm from "../../../components/UserForm";

export default function NuevoUsuarioPage() {
  return (
    <>
      <Header pageTitle="Crear Nuevo Usuario" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Información del Usuario</h2>
          <p className="text-gray-600">Ingrese los datos para crear un nuevo usuario</p>
        </div>
        
        <UserForm />
      </main>
    </>
  );
}