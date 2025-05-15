-- AlterTable
ALTER TABLE `caja` ADD COLUMN `estado` VARCHAR(15) NULL DEFAULT 'abierta',
    ADD COLUMN `notas` VARCHAR(255) NULL,
    MODIFY `fecha_apertura` DATETIME NULL,
    MODIFY `fecha_cierre` DATETIME NULL;

-- AlterTable
ALTER TABLE `cliente` ADD COLUMN `direccion` VARCHAR(100) NULL,
    ADD COLUMN `email` VARCHAR(50) NULL,
    ADD COLUMN `total_compras` INTEGER NULL DEFAULT 0,
    ADD COLUMN `ultima_compra` DATE NULL;

-- AlterTable
ALTER TABLE `producto` ADD COLUMN `precio_compra` DECIMAL(10, 2) NULL DEFAULT 0,
    ADD COLUMN `precio_venta` DECIMAL(10, 2) NULL DEFAULT 0,
    ADD COLUMN `stock_minimo` DECIMAL(10, 2) NULL DEFAULT 5;
