"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ClientForm({ cliente = null }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Configuración de react-hook-form
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm({
    defaultValues: {
      cedula: cliente?.cedula || "",
      nombre: cliente?.nombre || "",
      apellido: cliente?.apellido || "",
      direccion: cliente?.direccion || "",
      email: cliente?.email || "",
      telefono: cliente?.telefono || ""
    }
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      
      // Determinar si es creación o actualización
      const url = cliente 
        ? `/api/clientes/${cliente.id_cliente}` 
        : "/api/clientes";
      
      const method = cliente ? "PUT" : "POST";
      
      // Preparar datos para enviar
      const clienteData = {
        ...data
      };
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clienteData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al guardar el cliente");
      }

      // Redirigir a la lista de clientes
      router.push("/dashboard/clientes");
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cédula *
          </label>
          <input
            type="text"
            {...register("cedula", { 
              required: "La cédula es requerida",
              pattern: {
                value: /^\d{10}$/,
                message: "La cédula debe tener 10 dígitos numéricos"
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            disabled={!!cliente} // Deshabilitar si es edición
          />
          {errors.cedula && (
            <p className="mt-1 text-sm text-red-600">{errors.cedula.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre *
          </label>
          <input
            type="text"
            {...register("nombre", { 
              required: "El nombre es requerido" 
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.nombre && (
            <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Apellido *
          </label>
          <input
            type="text"
            {...register("apellido", { 
              required: "El apellido es requerido" 
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.apellido && (
            <p className="mt-1 text-sm text-red-600">{errors.apellido.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            type="text"
            {...register("telefono")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email inválido"
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Dirección
          </label>
          <input
            type="text"
            {...register("direccion")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {cliente && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Total Compras
            </label>
            <input
              type="number"
              disabled
              readOnly
              value={cliente?.total_compras || 0}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-700 cursor-not-allowed"
            />
            <p className="mt-1 text-xs text-gray-500">
              Este valor se actualiza automáticamente cuando el cliente realiza compras
            </p>
          </div>
        )}
        
        {cliente && cliente.ultima_compra && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Última Compra
            </label>
            <input
              type="date"
              disabled
              readOnly
              value={new Date(cliente.ultima_compra).toISOString().split('T')[0]}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-700 cursor-not-allowed"
            />
            <p className="mt-1 text-xs text-gray-500">
              Esta fecha se actualiza automáticamente cuando el cliente realiza una compra
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <Link
          href="/dashboard/clientes"
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Cancelar
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
        >
          {loading ? "Guardando..." : cliente ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  );
}