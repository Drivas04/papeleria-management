-- CreateTable
CREATE TABLE `caja` (
    `id_cierre_caja` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_apertura` DATE NULL,
    `fecha_cierre` DATE NULL,
    `monto_inicial` DECIMAL(10, 2) NULL,
    `monto_final` DECIMAL(10, 2) NULL,
    `total_ventas` DECIMAL(10, 2) NULL,
    `diferencia` DECIMAL(10, 2) NULL,
    `usuario_id_usuario` INTEGER NOT NULL,

    PRIMARY KEY (`id_cierre_caja`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `id_cliente` INTEGER NOT NULL AUTO_INCREMENT,
    `cedula` VARCHAR(10) NOT NULL,
    `nombre` VARCHAR(30) NULL,
    `apellido` VARCHAR(30) NULL,
    `telefono` VARCHAR(15) NULL,
    `compras_semanales` DECIMAL(10, 2) NULL,
    `deuda_total` DECIMAL(10, 2) NULL,

    UNIQUE INDEX `cliente_cedula_key`(`cedula`),
    PRIMARY KEY (`id_cliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra` (
    `id_compra` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_compra` DATE NULL,
    `estado` VARCHAR(20) NULL,
    `usuario_id_usuario` INTEGER NOT NULL,
    `proveedor_id_proveedor` INTEGER NOT NULL,

    PRIMARY KEY (`id_compra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra_producto` (
    `compra_id_compra` INTEGER NOT NULL,
    `producto_id_producto` INTEGER NOT NULL,
    `precio_unitario` DECIMAL(10, 2) NOT NULL,
    `cantidad` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`compra_id_compra`, `producto_id_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `factura_compra` (
    `id_factura` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATE NULL,
    `subtotal` DECIMAL(10, 2) NULL,
    `impuestos` DECIMAL(10, 2) NULL,
    `total` DECIMAL(10, 2) NULL,
    `compra_id_compra` INTEGER NOT NULL,

    UNIQUE INDEX `factura_compra_compra_id_compra_key`(`compra_id_compra`),
    PRIMARY KEY (`id_factura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `factura_venta` (
    `id_factura` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATE NULL,
    `subtotal` DECIMAL(10, 2) NULL,
    `impuestos` DECIMAL(10, 2) NULL,
    `total` DECIMAL(10, 2) NULL,
    `venta_id_venta` INTEGER NOT NULL,

    UNIQUE INDEX `factura_venta_venta_id_venta_key`(`venta_id_venta`),
    PRIMARY KEY (`id_factura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movimiento_inventario` (
    `id_movimiento` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_movimiento` VARCHAR(15) NULL,
    `fecha_movimiento` DATE NULL,
    `cantidad` DECIMAL(10, 2) NULL,
    `producto_id_producto` INTEGER NOT NULL,

    PRIMARY KEY (`id_movimiento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto` (
    `id_producto` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_producto` VARCHAR(50) NULL,
    `descripcion` VARCHAR(100) NULL,
    `stock` DECIMAL(10, 2) NULL,
    `nivel_alerta` VARCHAR(15) NULL,
    `categoria_id_categoria` INTEGER NOT NULL,

    PRIMARY KEY (`id_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proveedor` (
    `id_proveedor` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NULL,
    `telefono` VARCHAR(15) NULL,
    `direccion` VARCHAR(50) NULL,

    PRIMARY KEY (`id_proveedor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(20) NULL,
    `contraseña` VARCHAR(20) NULL,
    `rol` VARCHAR(10) NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venta` (
    `id_venta` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_venta` VARCHAR(20) NULL,
    `estado` VARCHAR(20) NULL,
    `cliente_id_cliente` INTEGER NOT NULL,
    `cliente_cedula` VARCHAR(10) NOT NULL,
    `usuario_id_usuario` INTEGER NOT NULL,

    PRIMARY KEY (`id_venta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venta_producto` (
    `venta_id_venta` INTEGER NOT NULL,
    `producto_id_producto` INTEGER NOT NULL,
    `cantidad` DECIMAL(10, 2) NOT NULL,
    `precio_unitario` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`venta_id_venta`, `producto_id_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `caja` ADD CONSTRAINT `caja_usuario_id_usuario_fkey` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_usuario_id_usuario_fkey` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_proveedor_id_proveedor_fkey` FOREIGN KEY (`proveedor_id_proveedor`) REFERENCES `proveedor`(`id_proveedor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra_producto` ADD CONSTRAINT `compra_producto_compra_id_compra_fkey` FOREIGN KEY (`compra_id_compra`) REFERENCES `compra`(`id_compra`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra_producto` ADD CONSTRAINT `compra_producto_producto_id_producto_fkey` FOREIGN KEY (`producto_id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `factura_compra` ADD CONSTRAINT `factura_compra_compra_id_compra_fkey` FOREIGN KEY (`compra_id_compra`) REFERENCES `compra`(`id_compra`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `factura_venta` ADD CONSTRAINT `factura_venta_venta_id_venta_fkey` FOREIGN KEY (`venta_id_venta`) REFERENCES `venta`(`id_venta`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movimiento_inventario` ADD CONSTRAINT `movimiento_inventario_producto_id_producto_fkey` FOREIGN KEY (`producto_id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `producto_categoria_id_categoria_fkey` FOREIGN KEY (`categoria_id_categoria`) REFERENCES `categoria`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `venta` ADD CONSTRAINT `venta_cliente_id_cliente_fkey` FOREIGN KEY (`cliente_id_cliente`) REFERENCES `cliente`(`id_cliente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `venta` ADD CONSTRAINT `venta_usuario_id_usuario_fkey` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `venta_producto` ADD CONSTRAINT `venta_producto_venta_id_venta_fkey` FOREIGN KEY (`venta_id_venta`) REFERENCES `venta`(`id_venta`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `venta_producto` ADD CONSTRAINT `venta_producto_producto_id_producto_fkey` FOREIGN KEY (`producto_id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE;
