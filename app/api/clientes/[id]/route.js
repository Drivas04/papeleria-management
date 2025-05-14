import { PrismaClient } from "../../../generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Obtener un cliente por ID
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de cliente inválido" },
        { status: 400 }
      );
    }

    const cliente = await prisma.cliente.findUnique({
      where: { id_cliente: id },
      include: {
        _count: {
          select: {
            ventas: true
          }
        },
        ventas: {
          take: 5,
          orderBy: {
            id_venta: 'desc'
          },
          include: {
            factura_venta: {
              select: {
                total: true,
                fecha: true
              }
            }
          }
        }
      }
    });

    if (!cliente) {
      return NextResponse.json(
        { error: "Cliente no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(cliente);
  } catch (error) {
    console.error("Error al obtener cliente:", error);
    return NextResponse.json(
      { error: "Error al obtener cliente" },
      { status: 500 }
    );
  }
}

// PUT - Actualizar un cliente por ID
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de cliente inválido" },
        { status: 400 }
      );
    }

    const data = await request.json();
    
    // Verificar que el cliente existe
    const clienteExistente = await prisma.cliente.findUnique({
      where: { id_cliente: id }
    });

    if (!clienteExistente) {
      return NextResponse.json(
        { error: "Cliente no encontrado" },
        { status: 404 }
      );
    }

    // Verificar si la cédula ya está en uso (si se está cambiando)
    if (data.cedula && data.cedula !== clienteExistente.cedula) {
      const cedulaExiste = await prisma.cliente.findUnique({
        where: { cedula: data.cedula }
      });

      if (cedulaExiste) {
        return NextResponse.json(
          { error: "La cédula ya está registrada por otro cliente" },
          { status: 400 }
        );
      }
    }

    // Preparar los datos de actualización
    const updateData = {
      cedula: data.cedula,
      nombre: data.nombre,
      apellido: data.apellido,
      telefono: data.telefono,
      compras_semanales: data.compras_semanales,
      deuda_total: data.deuda_total
    };

    // Eliminar campos indefinidos
    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key]
    );

    // Actualizar cliente
    const clienteActualizado = await prisma.cliente.update({
      where: { id_cliente: id },
      data: updateData
    });

    return NextResponse.json({
      message: "Cliente actualizado correctamente",
      cliente: clienteActualizado
    });
  } catch (error) {
    console.error("Error al actualizar cliente:", error);
    return NextResponse.json(
      { error: "Error al actualizar cliente" },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar un cliente por ID (soft delete)
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de cliente inválido" },
        { status: 400 }
      );
    }

    // Verificar que el cliente existe
    const clienteExistente = await prisma.cliente.findUnique({
      where: { id_cliente: id },
      include: {
        _count: {
          select: {
            ventas: true
          }
        }
      }
    });

    if (!clienteExistente) {
      return NextResponse.json(
        { error: "Cliente no encontrado" },
        { status: 404 }
      );
    }

    // Eliminar cliente (en tu esquema actual parece no tener campo estado)
    // Si necesitas implementar un soft delete, deberías añadir un campo "estado" al modelo Cliente
    await prisma.cliente.delete({
      where: { id_cliente: id }
    });

    return NextResponse.json({
      message: "Cliente desactivado correctamente"
    });
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
    return NextResponse.json(
      { error: "Error al eliminar cliente" },
      { status: 500 }
    );
  }
}