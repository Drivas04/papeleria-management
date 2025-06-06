# Pasos para Instalar y Ejecutar Papelería Management

# NOTA: Pra windows ver; ***INSTALACION_WINDOWS.md***

## 1. Instalar requisitos previos

### Instalar Node.js
```bash
# Descargar e instalar Node.js (v18 o superior) desde https://nodejs.org/
# O usar estos comandos en Linux:
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Instalar MySQL
```bash
# En Linux:
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
sudo mysql_secure_installation
```

## 2. Clonar y configurar el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/Drivas04/papeleria-management.git
cd papeleria-management

# Instalar dependencias
npm install
```

## 3. Configurar el entorno (NO ES NECESARIO POR QUE EL ARCHIVO .ENV YA ESTA EN EL PROYECTO )

```bash
# Crear archivo .env con la configuración necesaria
cat > .env << EOL
DATABASE_URL="mysql://papeleria_user:Pap3l3r1a@2025@localhost:3306/papeleria_db"
NEXTAUTH_SECRET="una-clave-secreta-aleatoria"
NEXTAUTH_URL="http://localhost:3000"
EOL
```

> **NOTA IMPORTANTE**: La contraseña contiene caracteres especiales (@), lo que podría causar problemas en la URL de conexión. Si hay problemas, intenta codificarla:
> ```
> DATABASE_URL="mysql://papeleria_user:Pap3l3r1a%402025@localhost:3306/papeleria_db"
> ```

## 4. Crear y configurar la base de datos

```bash
# Acceder a MySQL como root
sudo mysql

# Dentro de MySQL, ejecutar:
CREATE DATABASE papeleria_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'papeleria_user'@'localhost' IDENTIFIED BY 'Pap3l3r1a@2025';
-- Dar permisos completos sobre la base de datos principal
GRANT ALL PRIVILEGES ON papeleria_db.* TO 'papeleria_user'@'localhost';
-- Otorgar permisos necesarios para las migraciones de Prisma (shadow database)
GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'papeleria_user'@'localhost';
-- Permitir que el usuario pueda crear tablas en cualquier base de datos que cree
GRANT ALL PRIVILEGES ON `prisma\_migrate\_%`.* TO 'papeleria_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# Ejecutar migraciones de Prisma
npx prisma migrate dev

# Generar cliente Prisma
npx prisma generate

# Poblar la base de datos con datos iniciales (usuarios admin y vendedor)
node scripts/seed.js
```

## 5. Iniciar la aplicación

```bash
# Compilar y ejecutar en desarrollo
npm run dev

# O para producción:
npm run build
npm start
```

## 6. Verificar la instalación

1. Abre un navegador y navega a `http://localhost:3000`
2. Inicia sesión con las credenciales creadas durante el proceso de instalación

## Solución de problemas

### Problemas de conexión a la base de datos
- Verifica que MySQL esté corriendo: `sudo systemctl status mysql`
- Comprueba que el usuario tiene los permisos adecuados
- Si hay problemas con la contraseña, intenta cambiarla o codificarla correctamente en la URL

### Errores con las migraciones de Prisma
Si encuentras errores como "Prisma migrate could not create the shadow database" o "User was denied access on the database prisma_migrate_shadow_db", sigue estos pasos:

```bash
# Acceder a MySQL como root
sudo mysql

# Ejecutar:
GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'papeleria_user'@'localhost';
GRANT ALL PRIVILEGES ON `prisma\_migrate\_%`.* TO 'papeleria_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# Si sigues teniendo problemas, intenta reiniciar el servicio MySQL
sudo systemctl restart mysql

# Luego vuelve a intentar las migraciones
npx prisma migrate dev
```

### Errores de dependencias
- Verifica que estás usando las versiones correctas de Node.js y npm
- Intenta borrar la carpeta `node_modules` y el archivo `package-lock.json` y vuelve a ejecutar `npm install`

### Otros problemas
- Revisa los registros de la aplicación para identificar errores específicos
- Ejecuta `npm run dev > log.txt 2>&1` para capturar todos los mensajes de error en un archivo

## Requisitos del sistema recomendados
- Node.js 18.x o superior
- MySQL 8.0 o superior
- Mínimo 4GB de RAM
- Al menos 1GB de espacio libre en disco

## Notas adicionales
- Asegúrate que los puertos 3000 (para Next.js) y 3306 (para MySQL) estén disponibles
- Para entornos de producción, considera configurar un proxy inverso como Nginx o Apache
