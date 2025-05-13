"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "../../../../components/Header";
import Link from "next/link";

export default function DetallesUsuarioPage() {
  const params = useParams();
  const router = useRouter();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/usuarios/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Error al cargar los datos del usuario');
        }
        
        const data = await response.json();
        setUsuario(data);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchUsuario();
    }
  }, [params.id]);
  
  if (loading) {
    return (
      <>
        <Header pageTitle="Detalles del Usuario" />
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
        <Header pageTitle="Detalles del Usuario" />
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
      <Header pageTitle="Detalles del Usuario" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Información del Usuario</h2>
          <p className="text-gray-600">Datos del usuario del sistema</p>
          <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
            <p>Los usuarios son fijos y no pueden ser modificados en el sistema.</p>
          </div>
        </div>
        
        {usuario && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Perfil de Usuario
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Información personal y detalles de la cuenta
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Nombre completo</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {usuario.nombre} {usuario.apellido}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Correo electrónico</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {usuario.email}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Rol en el sistema</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                      {usuario.rol?.nombre || "Sin rol asignado"}
                    </span>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Estado</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      usuario.estado 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {usuario.estado ? "Activo" : "Inactivo"}
                    </span>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Fecha de registro</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {new Date(usuario.fechaRegistro).toLocaleDateString()}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <Link
            href="/dashboard/usuarios"
            className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Volver a la lista de usuarios
          </Link>
        </div>
      </main>
    </>
  );
}