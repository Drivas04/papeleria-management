/*
  Warnings:

  - Added the required column `subtotal` to the `compra_producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `compra` ADD COLUMN `total` DECIMAL(10, 2) NULL;

-- AlterTable
ALTER TABLE `compra_producto` ADD COLUMN `subtotal` DECIMAL(10, 2) NOT NULL DEFAULT 0;
