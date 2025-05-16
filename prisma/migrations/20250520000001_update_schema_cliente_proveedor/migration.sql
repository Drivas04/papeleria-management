-- Modificaciones a la tabla de proveedores
ALTER TABLE proveedor
ADD COLUMN contacto VARCHAR(50) NULL,
ADD COLUMN email VARCHAR(100) NULL,
ADD COLUMN notas VARCHAR(255) NULL,
ADD COLUMN estado VARCHAR(20) DEFAULT 'activo' NULL;

-- Modificaciones a la tabla de clientes
ALTER TABLE cliente
DROP COLUMN compras_semanales,
DROP COLUMN deuda_total;
