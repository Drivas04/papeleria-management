'use client'

import PurchaseForm from '@/app/components/PurchaseForm';

export default function NuevaCompraPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Nueva Compra</h1>
        <p className="text-gray-600">Complete el formulario para registrar una nueva compra a proveedor</p>
      </div>
      
      <PurchaseForm />
    </div>
  );
}