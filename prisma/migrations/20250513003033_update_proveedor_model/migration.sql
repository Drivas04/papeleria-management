/*
  Warnings:

  - You are about to drop the column `email` on the `proveedores` table. All the data in the column will be lost.
  - You are about to drop the column `fechaRegistro` on the `proveedores` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_proveedores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT,
    "direccion" TEXT,
    "estado" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_proveedores" ("direccion", "estado", "id", "nombre", "telefono") SELECT "direccion", "estado", "id", "nombre", "telefono" FROM "proveedores";
DROP TABLE "proveedores";
ALTER TABLE "new_proveedores" RENAME TO "proveedores";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
