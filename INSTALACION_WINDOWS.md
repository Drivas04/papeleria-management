# Pasos para Instalar y Ejecutar Papelería Management en Windows

## 1. Instalar requisitos previos

### Instalar Node.js
```bash
# Descargar e instalar Node.js (v18 o superior) desde https://nodejs.org/
# 1. Ve a https://nodejs.org/
# 2. Descarga la versión LTS (recomendada)
# 3. Ejecuta el instalador y sigue las instrucciones en pantalla
# 4. Asegúrate de que la opción "Add to PATH" esté marcada
```

### Instalar MySQL
```bash
# 1. Descarga el instalador de MySQL desde https://dev.mysql.com/downloads/installer/
# 2. Ejecuta el instalador y selecciona "Custom Install"
# 3. Selecciona MySQL Server, MySQL Workbench y Connector/J
# 4. Configura la instalación:
#    - Usa "Development Computer" como tipo de configuración
#    - Establece la contraseña de root
#    - Crea un usuario adicional (opcional)
# 5. Completa la instalación siguiendo las instrucciones en pantalla
```

## 2. Clonar y configurar el proyecto

```bash
# 1. Instala Git desde https://git-scm.com/download/win si aún no lo tienes

# 2. Abre el símbolo del sistema (cmd) o PowerShell y ejecuta:
git clone https://github.com/Drivas04/papeleria-management.git
cd papeleria-management

# 3. Instalar dependencias
npm install
```

## 3. Configurar el entorno (NO ES NECESARIO PORQUE EL ARCHIVO .ENV YA ESTÁ EN EL PROYECTO)

```bash
# Si necesitas crear el archivo .env manualmente:
echo DATABASE_URL="mysql://papeleria_user:Pap3l3r1a@2025@localhost:3306/papeleria_db" > .env
echo NEXTAUTH_SECRET="una-clave-secreta-aleatoria" >> .env
echo NEXTAUTH_URL="http://localhost:3000" >> .env
```

> **NOTA IMPORTANTE**: La contraseña contiene caracteres especiales (@), lo que podría causar problemas en la URL de conexión. Si hay problemas, intenta codificarla:
> ```
> DATABASE_URL="mysql://papeleria_user:Pap3l3r1a%402025@localhost:3306/papeleria_db"
> ```

## 4. Crear y configurar la base de datos

```bash
# 1. Abre MySQL Workbench y conéctate al servidor local
# 2. Crea una nueva conexión si es necesario:
#    - Host: localhost
#    - Port: 3306
#    - Username: papeleria_user
#    - Password: Pap3l3r1a@2025

# 3. En la ventana de consulta, ejecuta:
CREATE DATABASE papeleria_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'papeleria_user'@'localhost' IDENTIFIED BY 'Pap3l3r1a@2025';
-- Dar permisos completos sobre la base de datos principal
GRANT ALL PRIVILEGES ON papeleria_db.* TO 'papeleria_user'@'localhost';
-- Otorgar permisos necesarios para las migraciones de Prisma (shadow database)
GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'papeleria_user'@'localhost';
-- Permitir que el usuario pueda crear tablas en cualquier base de datos que cree
GRANT ALL PRIVILEGES ON `prisma\_migrate\_%`.* TO 'papeleria_user'@'localhost';
FLUSH PRIVILEGES;

# 4. Vuelve a la línea de comandos (cmd o PowerShell) y ejecuta:
# Ejecutar migraciones de Prisma
npx prisma migrate dev

# Generar cliente Prisma
npx prisma generate

# Poblar la base de datos con datos iniciales (usuarios admin y vendedor)
node scripts/seed.js
```

> **Nota**: Si prefieres usar MySQL Command Line Client en lugar de MySQL Workbench, abre MySQL Command Line, ingresa la contraseña de root cuando se te solicite y ejecuta los mismos comandos SQL.

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
2. Inicia sesión con las credenciales creadas durante el proceso de instalación:
   - Usuario: `admin`
   - Contraseña: `admin123`

## Solución de problemas

### Problemas de conexión a la base de datos
- Verifica que el servicio de MySQL esté corriendo:
  - Abre el Administrador de servicios de Windows (services.msc) 
  - Busca "MySQL80" o similar y asegúrate de que esté iniciado
- Comprueba que el usuario tiene los permisos adecuados
- Si hay problemas con la contraseña, intenta cambiarla o codificarla correctamente en la URL
- Verifica que el firewall de Windows no esté bloqueando la conexión

### Errores con las migraciones de Prisma
Si encuentras errores como "Prisma migrate could not create the shadow database" o "User was denied access on the database prisma_migrate_shadow_db", sigue estos pasos:

```bash
# 1. Abre MySQL Workbench y conéctate como root (o abre MySQL Command Line Client)
# 2. Ejecuta:
GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'papeleria_user'@'localhost';
GRANT ALL PRIVILEGES ON `prisma\_migrate\_%`.* TO 'papeleria_user'@'localhost';
FLUSH PRIVILEGES;

# 3. Si sigues teniendo problemas, reinicia el servicio MySQL:
#    - Ve al Administrador de servicios de Windows (services.msc)
#    - Busca el servicio MySQL y reinícialo

# 4. Luego vuelve a intentar las migraciones
npx prisma migrate dev
```

### Errores de permisos
- Ejecuta PowerShell o cmd como administrador si encuentras errores de permisos
- Asegúrate de que tienes permisos de escritura en la carpeta del proyecto

### Errores de dependencias
- Verifica que estás usando las versiones correctas de Node.js y npm
- Intenta borrar la carpeta `node_modules` y el archivo `package-lock.json` y vuelve a ejecutar `npm install`
- Si hay problemas con paquetes nativos que requieren compilación, instala las "Visual C++ Build Tools":
  - Descarga desde https://visualstudio.microsoft.com/visual-cpp-build-tools/
  - Instala el workload "Desktop Development with C++"

### Otros problemas
- Revisa los registros de la aplicación para identificar errores específicos
- Ejecuta `npm run dev > log.txt 2>&1` para capturar todos los mensajes de error en un archivo
- Si hay problemas con las URLs o paths, recuerda que Windows usa barras invertidas (\) mientras que las URLs usan barras normales (/)

## Requisitos del sistema recomendados
- Windows 10 o superior
- Node.js 18.x o superior
- MySQL 8.0 o superior
- Mínimo 4GB de RAM
- Al menos 1GB de espacio libre en disco

## Notas adicionales
- Asegúrate que los puertos 3000 (para Next.js) y 3306 (para MySQL) estén disponibles
- Para entornos de producción, considera usar IIS como servidor proxy
- Si usas Windows Defender o cualquier otro antivirus, puede que necesites crear excepciones para Node.js o para la carpeta del proyecto
