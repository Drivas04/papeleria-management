# Papelería Rosita - Sistema de Gestión

Sistema de gestión para inventario, ventas y clientes de Papelería Rosita.

## Requisitos previos

1. **Node.js**: Node.js (recomendado v18 o superior)
2. **npm**: Para gestionar los paquetes
3. **Base de datos**: MySQL V7+

## Pasos para la instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Drivas04/papeleria-management.git
   cd papeleria-management

2. **Instalar dependencias**:
    ```bash
    npm install

3. **Configuración de la base de datos**
    ```bash
    # Ejecutar migraciones de Prisma
    npx prisma migrate dev

    # Opcional: Generar cliente Prisma
    npx prisma generate

4. **Iniciar la aplicación**
    ```bash
    npm run dev


### Tecnologías utilizadas
1. Frontend: Next.js, React, TailwindCSS
2. Backend: Node.js, API Routes de Next.js
3. Base de datos: MySQL con Prisma ORM
4. Autenticación: NextAuth.js
