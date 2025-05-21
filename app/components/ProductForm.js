"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductForm({ producto }) {
  const router = useRouter();
  const isNewProduct = !producto;
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingCategorias, setLoadingCategorias] = useState(true);
  const [error, setError] = useState("");
  
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

  const stock = watch("stock");
  const precioCompra = watch("precio_compra");
  const stockMinimo = watch("stock_minimo");

  useEffect(() => {
    if (precioCompra) {
      const precioCompraNum = parseFloat(precioCompra);
      const sugeridoPrecioVenta = (precioCompraNum * 1.3).toFixed(2);
      const currentPrecioVenta = parseFloat(watch("precio_venta") || 0);
      if (currentPrecioVenta === 0) {
        setValue("precio_venta", sugeridoPrecioVenta);
      }
    }
  }, [precioCompra, setValue, watch]);
  
  useEffect(() => {
    const stockNum = parseFloat(stock || 0);
    const stockMinimoNum = parseFloat(stockMinimo || 5);
    const nivelAlerta = stockNum < stockMinimoNum ? 'bajo' : 'normal';
    setValue("nivel_alerta", nivelAlerta);
  }, [stock, stockMinimo, setValue]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        setLoadingCategorias(true);
        const response = await fetch("/api/categorias");
        
        if (!response.ok) {
          throw new Error("Error al cargar categorías");
        }
        
        const data = await response.json();
        setCategorias(data); 
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
      
      // Preparar datos dependiendo si es creación o actualización
      const productoData = {
        nombre_producto: data.nombre_producto,
        descripcion: data.descripcion,
        stock_minimo: parseFloat(data.stock_minimo),
        categoria_id_categoria: parseInt(data.categoria_id_categoria),
        nivel_alerta: data.nivel_alerta
      };
      
      // Si es un nuevo producto, establecer valores iniciales
      if (isNewProduct) {
        productoData.stock = 0;
        productoData.precio_compra = 0;
        productoData.precio_venta = 0;
      } else {
        // Si es actualización, solo modificar precio de venta
        productoData.precio_venta = parseFloat(data.precio_venta);
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
      
      <div className="alert bg-blue-100 border-l-4 border-blue-500 p-4 mb-4 text-blue-700">
        <p className="font-bold">Información importante</p>
        {isNewProduct ? (
          <p>Al crear un nuevo producto, solo necesitas ingresar su información básica. El stock iniciará en 0 y se actualizará cuando realices una compra.</p>
        ) : (
          <p>Este formulario es solo para editar la información básica del producto. Para modificar el stock, use el formulario de compras.</p>
        )}
      </div>
      
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

        {!isNewProduct && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Stock
            </label>
            <input
              type="number"
              step="1"
              min="0"
              disabled
              readOnly
              {...register("stock")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-700 cursor-not-allowed"
            />
            <p className="mt-1 text-xs text-gray-500">
              El stock solo se puede modificar mediante compras
            </p>
          </div>
        )}
        
        {/* Campo oculto para stock cuando es nuevo producto */}
        {isNewProduct && (
          <input type="hidden" {...register("stock")} value="0" />
        )}

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

        {!isNewProduct && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Precio de Compra
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                step="0.01"
                min="0"
                disabled
                readOnly
                {...register("precio_compra")}
                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-700 cursor-not-allowed"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              El precio de compra solo se puede actualizar al realizar una compra
            </p>
          </div>
        )}
        
        {/* Campo oculto para precio de compra cuando es nuevo producto */}
        {isNewProduct && (
          <input type="hidden" {...register("precio_compra")} value="0" />
        )}

        {!isNewProduct ? (
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
        ) : (
          <input type="hidden" {...register("precio_venta")} value="0" />
        )}

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
            {isNewProduct 
              ? "Al crear el producto, el nivel de alerta se establecerá como 'bajo' ya que el stock inicial es 0"
              : "El nivel de alerta se calcula automáticamente en base al stock y stock mínimo"}
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