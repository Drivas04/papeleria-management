"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductForm({ producto = null }) {
  const router = useRouter();
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingCategorias, setLoadingCategorias] = useState(true);
  const [error, setError] = useState("");
  
  // Configuración de react-hook-form
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setValue,
    watch
  } = useForm({
    defaultValues: {
      nombre_producto: producto?.nombre_producto || "",
      descripcion: producto?.descripcion || "",
      stock: producto?.stock?.toString() || "0",
      nivel_alerta: producto?.nivel_alerta || "normal",
      categoria_id_categoria: producto?.categoria_id_categoria?.toString() || "",
    }
  });

  // Observar campos para cálculos y validaciones en tiempo real
  const stock = watch("stock");

  // Cargar categorías
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        setLoadingCategorias(true);
        const response = await fetch("/api/categorias");
        
        if (!response.ok) {
          throw new Error("Error al cargar categorías");
        }
        
        const data = await response.json();
        setCategorias(data); // En PostgreSQL no tenemos campo estado en categorias
      } catch (error) {
        console.error("Error al cargar categorías:", error);
        setError("Error al cargar las categorías. Por favor, intente de nuevo.");
      } finally {
        setLoadingCategorias(false);
      }
    };

    fetchCategorias();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      
      // Convertir campos numéricos
      const productoData = {
        ...data,
        stock: parseFloat(data.stock),
        categoria_id_categoria: parseInt(data.categoria_id_categoria),
      };

      // Validaciones adicionales
      if (productoData.stock < 0) {
        setError("El stock no puede ser negativo");
        setLoading(false);
        return;
      }

      // Determinar si es creación o actualización
      const url = producto 
        ? `/api/productos/${producto.id_producto}` 
        : "/api/productos";
      
      const method = producto ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productoData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al guardar el producto");
      }

      // Redirigir a la lista de productos
      router.push("/dashboard/productos");
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
            Nombre del Producto *
          </label>
          <input
            type="text"
            {...register("nombre_producto", { 
              required: "El nombre del producto es requerido" 
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.nombre_producto && (
            <p className="mt-1 text-sm text-red-600">{errors.nombre_producto.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Categoría *
          </label>
          {loadingCategorias ? (
            <p className="mt-1 text-sm text-gray-500">Cargando categorías...</p>
          ) : (
            <select
              {...register("categoria_id_categoria", { 
                required: "La categoría es requerida" 
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Seleccione una categoría</option>
              {categorias.map(cat => (
                <option key={cat.id_categoria} value={cat.id_categoria}>{cat.nombre}</option>
              ))}
            </select>
          )}
          {errors.categoria_id_categoria && (
            <p className="mt-1 text-sm text-red-600">{errors.categoria_id_categoria.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            rows={2}
            {...register("descripcion")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Stock *
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            {...register("stock", { 
              required: "El stock es requerido",
              min: {
                value: 0,
                message: "El stock no puede ser negativo"
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.stock && (
            <p className="mt-1 text-sm text-red-600">{errors.stock.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nivel de alerta
          </label>
          <select
            {...register("nivel_alerta")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="bajo">Bajo</option>
            <option value="normal">Normal</option>
            <option value="alto">Alto</option>
          </select>
          <p className="mt-1 text-xs text-gray-500">
            Nivel para alertar cuando el stock está bajo
          </p>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <Link
          href="/dashboard/productos"
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Cancelar
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
        >
          {loading ? "Guardando..." : producto ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  );
}