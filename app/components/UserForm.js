"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UserForm({ usuario = null }) {
  const router = useRouter();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingRoles, setLoadingRoles] = useState(true);
  const [error, setError] = useState("");
  
  // Configuración de react-hook-form
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setValue,
    reset
  } = useForm({
    defaultValues: {
      nombre: usuario?.nombre || "",
      apellido: usuario?.apellido || "",
      email: usuario?.email || "",
      password: "",
      rolId: usuario?.rolId || "",
      estado: usuario?.estado !== undefined ? usuario.estado : true
    }
  });

  // Cargar roles
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        // Por ahora simularemos los roles porque aún no tenemos la API
        setLoadingRoles(true);
        // En una implementación real, se haría una petición a la API:
        // const response = await fetch("/api/roles");
        // const data = await response.json();
        const data = [
          { id: 1, nombre: "Administrador" },
          { id: 2, nombre: "Vendedor" },
          { id: 3, nombre: "Inventario" }
        ];
        setRoles(data);
      } catch (error) {
        console.error("Error al cargar roles:", error);
      } finally {
        setLoadingRoles(false);
      }
    };

    // Si estamos en modo edición, actualizamos el formulario
    if (usuario) {
      Object.keys(usuario).forEach(key => {
        if (key !== 'password') {
          setValue(key, usuario[key]);
        }
      });
    }

    fetchRoles();
  }, [usuario, setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      
      // Si no hay contraseña y estamos editando, la eliminamos para no enviarla vacía
      if (!data.password && usuario) {
        delete data.password;
      }

      // Determinar si es creación o actualización
      const url = usuario 
        ? `/api/usuarios/${usuario.id}` 
        : "/api/usuarios";
      
      const method = usuario ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al guardar el usuario");
      }

      // Redirigir a la lista de usuarios
      router.push("/dashboard/usuarios");
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
            Nombre
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
            Apellido
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
            Email
          </label>
          <input
            type="email"
            {...register("email", { 
              required: "El email es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
            Contraseña {usuario ? "(Dejar vacío para mantener)" : ""}
          </label>
          <input
            type="password"
            {...register("password", { 
              required: usuario ? false : "La contraseña es requerida",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres"
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rol
          </label>
          {loadingRoles ? (
            <p className="mt-1 text-sm text-gray-500">Cargando roles...</p>
          ) : (
            <select
              {...register("rolId", { 
                required: "El rol es requerido"
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Seleccione un rol</option>
              {roles.map(rol => (
                <option key={rol.id} value={rol.id}>{rol.nombre}</option>
              ))}
            </select>
          )}
          {errors.rolId && (
            <p className="mt-1 text-sm text-red-600">{errors.rolId.message}</p>
          )}
        </div>

        {usuario && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <select
              {...register("estado")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </select>
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <Link
          href="/dashboard/usuarios"
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Cancelar
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
        >
          {loading ? "Guardando..." : usuario ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  );
}