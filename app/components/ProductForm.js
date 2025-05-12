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
      codigo: producto?.codigo || "",
      nombre: producto?.nombre || "",
      descripcion: producto?.descripcion || "",
      precioCompra: producto?.precioCompra?.toString() || "",
      precioVenta: producto?.precioVenta?.toString() || "",
      stock: producto?.stock?.toString() || "0",
      stockMinimo: producto?.stockMinimo?.toString() || "5",
      categoriaId: producto?.categoriaId?.toString() || "",
      estado: producto?.estado !== undefined ? producto.estado : true
    }
  });

  // Observar campos para cálculos y validaciones en tiempo real
  const precioCompra = watch("precioCompra");
  const precioVenta = watch("precioVenta");

  // Calcular margen de ganancia
  const margenGanancia = (() => {
    if (!precioCompra || !precioVenta || isNaN(precioCompra) || isNaN(precioVenta) || parseFloat(precioCompra) <= 0) {
      return 0;
    }
    return (((parseFloat(precioVenta) - parseFloat(precioCompra)) / parseFloat(precioCompra)) * 100).toFixed(2);
  })();

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
        setCategorias(data.filter(cat => cat.estado)); // Solo categorías activas
      } catch (error) {
        console.error("Error al cargar categorías:", error);
        setError("Error al cargar las categorías. Por favor, intente de nuevo.");
      } finally {
        setLoadingCategorias(false);
      }
    };

    fetchCategorias();
  }, []);

  const generateCodigo = async () => {
    // Generar un código único usando timestamp e iniciales del producto
    const timestamp = Date.now().toString().slice(-6);
    const iniciales = watch("nombre") 
      ? watch("nombre")
          .split(" ")
          .map(word => word.charAt(0))
          .join("")
          .toUpperCase()
      : "PROD";
    
    setValue("codigo", `${iniciales}-${timestamp}`);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      
      // Convertir campos numéricos
      const productoData = {
        ...data,
        precioCompra: parseFloat(data.precioCompra),
        precioVenta: parseFloat(data.precioVenta),
        stock: parseInt(data.stock),
        stockMinimo: parseInt(data.stockMinimo),
        categoriaId: parseInt(data.categoriaId),
        estado: data.estado === "true" || data.estado === true
      };

      // Validaciones adicionales
      if (productoData.precioVenta <= productoData.precioCompra) {
        setError("El precio de venta debe ser mayor que el precio de compra");
        setLoading(false);
        return;
      }

      // Determinar si es creación o actualización
      const url = producto 
        ? `/api/productos/${producto.id}` 
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
            Código *
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              {...register("codigo", { 
                required: "El código es requerido" 
              })}
              className="flex-1 rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={generateCodigo}
              className="rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 hover:bg-gray-100"
            >
              Generar
            </button>
          </div>
          {errors.codigo && (
            <p className="mt-1 text-sm text-red-600">{errors.codigo.message}</p>
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
            Categoría *
          </label>
          {loadingCategorias ? (
            <p className="mt-1 text-sm text-gray-500">Cargando categorías...</p>
          ) : (
            <select
              {...register("categoriaId", { 
                required: "La categoría es requerida" 
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Seleccione una categoría</option>
              {categorias.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
          )}
          {errors.categoriaId && (
            <p className="mt-1 text-sm text-red-600">{errors.categoriaId.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Precio de compra *
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                step="0.01"
                min="0"
                {...register("precioCompra", { 
                  required: "El precio de compra es requerido",
                  min: {
                    value: 0.01,
                    message: "El precio debe ser mayor a 0"
                  }
                })}
                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            {errors.precioCompra && (
              <p className="mt-1 text-sm text-red-600">{errors.precioCompra.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Precio de venta *
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                step="0.01"
                min="0"
                {...register("precioVenta", { 
                  required: "El precio de venta es requerido",
                  min: {
                    value: 0.01,
                    message: "El precio debe ser mayor a 0"
                  }
                })}
                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            {errors.precioVenta && (
              <p className="mt-1 text-sm text-red-600">{errors.precioVenta.message}</p>
            )}
            {precioCompra && precioVenta && parseFloat(precioVenta) > 0 && parseFloat(precioCompra) > 0 && (
              <p className={`mt-1 text-sm ${parseFloat(precioVenta) <= parseFloat(precioCompra) ? 'text-red-600' : 'text-green-600'}`}>
                {parseFloat(precioVenta) <= parseFloat(precioCompra) 
                  ? "¡Precio de venta menor o igual al costo!" 
                  : `Margen: ${margenGanancia}%`}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Stock inicial
            </label>
            <input
              type="number"
              min="0"
              step="1"
              {...register("stock", { 
                valueAsNumber: true
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.stock && (
              <p className="mt-1 text-sm text-red-600">{errors.stock.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Stock mínimo
            </label>
            <input
              type="number"
              min="0"
              step="1"
              {...register("stockMinimo", { 
                valueAsNumber: true
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <p className="mt-1 text-xs text-gray-500">
              Nivel para alertar cuando el stock es bajo
            </p>
          </div>
        </div>

        {producto && (
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