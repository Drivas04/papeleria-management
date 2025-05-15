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
      precio_compra: producto?.precio_compra?.toString() || "0",
      precio_venta: producto?.precio_venta?.toString() || "0",
      stock_minimo: producto?.stock_minimo?.toString() || "5",
      nivel_alerta: producto?.nivel_alerta || "normal",
      categoria_id_categoria: producto?.categoria_id_categoria?.toString() || "",
    }
  });

  // Observar campos para cálculos y validaciones en tiempo real
  const stock = watch("stock");
  const precioCompra = watch("precio_compra");
  const stockMinimo = watch("stock_minimo");

  // Sugerir precio de venta con un 30% de margen cuando cambia el precio de compra
  useEffect(() => {
    if (precioCompra) {
      const precioCompraNum = parseFloat(precioCompra);
      const sugeridoPrecioVenta = (precioCompraNum * 1.3).toFixed(2);
      // Solo establecer si el usuario no ha ingresado un precio de venta o si es 0
      const currentPrecioVenta = parseFloat(watch("precio_venta") || 0);
      if (currentPrecioVenta === 0) {
        setValue("precio_venta", sugeridoPrecioVenta);
      }
    }
  }, [precioCompra, setValue, watch]);
  
  // Actualizar nivel_alerta automáticamente cuando cambia el stock o stock_minimo
  useEffect(() => {
    const stockNum = parseFloat(stock || 0);
    const stockMinimoNum = parseFloat(stockMinimo || 5);
    const nivelAlerta = stockNum < stockMinimoNum ? 'bajo' : 'normal';
    setValue("nivel_alerta", nivelAlerta);
  }, [stock, stockMinimo, setValue]);

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
        precio_compra: parseFloat(data.precio_compra),
        precio_venta: parseFloat(data.precio_venta),
        stock_minimo: parseFloat(data.stock_minimo),
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
            step="1"
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
            Stock Mínimo
          </label>
          <input
            type="number"
            step="1"
            min="0"
            {...register("stock_minimo")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <p className="mt-1 text-xs text-gray-500">
            Cantidad mínima antes de generar alertas
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Precio de Compra *
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              step="0.01"
              min="0"
              {...register("precio_compra", {
                required: "El precio de compra es requerido",
                min: {
                  value: 0,
                  message: "El precio de compra no puede ser negativo"
                }
              })}
              className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          {errors.precio_compra && (
            <p className="mt-1 text-sm text-red-600">{errors.precio_compra.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Precio de Venta *
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              step="0.01"
              min="0"
              {...register("precio_venta", {
                required: "El precio de venta es requerido",
                min: {
                  value: 0,
                  message: "El precio de venta no puede ser negativo"
                }
              })}
              className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          {errors.precio_venta && (
            <p className="mt-1 text-sm text-red-600">{errors.precio_venta.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nivel de alerta
          </label>
          <input
            type="text"
            disabled
            value={parseFloat(stock || 0) < parseFloat(watch("stock_minimo") || 5) ? "bajo" : "normal"}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-700 cursor-not-allowed"
          />
          <input
            type="hidden"
            {...register("nivel_alerta")}
            value={parseFloat(stock || 0) < parseFloat(watch("stock_minimo") || 5) ? "bajo" : "normal"}
          />
          <p className="mt-1 text-xs text-gray-500">
            El nivel de alerta se calcula automáticamente en base al stock y stock mínimo
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