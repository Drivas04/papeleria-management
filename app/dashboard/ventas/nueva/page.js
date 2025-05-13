'use client'

import SaleForm from '@/app/components/SaleForm';

export default function NuevaVentaPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Nueva Venta</h1>
        <p className="text-gray-600">Complete el formulario para registrar una nueva venta</p>
      </div>
      
      <SaleForm />
    </div>
  );
}