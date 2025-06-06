// Script para poblar la base de datos MySQL
const mysql = require('mysql2/promise');
require('dotenv').config();

async function main() {
  // Obtener la URL de la base de datos desde las variables de entorno
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.error('No se encontró la variable de entorno DATABASE_URL');
    process.exit(1);
  }

  // Extraer credenciales de la URL
  const regex = /mysql:\/\/(.*):(.*)@(.*):(\d+)\/(.*)/;
  const matches = databaseUrl.match(regex);

  if (!matches || matches.length < 6) {
    console.error('URL de base de datos inválida');
    process.exit(1);
  }

  const [, user, password, host, port, database] = matches;

  try {
    // Conectar a MySQL
    const connection = await mysql.createConnection({
      host,
      user,
      password,
      port,
      database,
      multipleStatements: true
    });

    console.log('Conexión a MySQL establecida correctamente');

    // Insertar datos básicos
    await connection.query(`
      -- Insertar usuario administrador
      INSERT INTO usuario (usuario, contraseña, rol) VALUES ('admin', 'admin123', 'admin');
      INSERT INTO usuario (usuario, contraseña, rol) VALUES ('vendedor', 'vend123', 'vendedor');

      -- Insertar categorías
      INSERT INTO categoria (nombre) VALUES ('Útiles escolares');
      INSERT INTO categoria (nombre) VALUES ('Artículos de oficina');
      INSERT INTO categoria (nombre) VALUES ('Papelería general');
      
      -- Insertar proveedor
      INSERT INTO proveedor (nombre, telefono, direccion, contacto, email, notas, estado) 
      VALUES ('Distribuidora Nacional', '555-1234', 'Calle Principal #123', 'Maria Rodríguez', 'contacto@distribuidoranacional.com', 'Entrega los martes y jueves', 'activo');
      
      -- Insertar cliente
      INSERT INTO cliente (cedula, nombre, apellido, direccion, email, telefono, total_compras, ultima_compra) 
      VALUES ('1234567890', 'Juan', 'Pérez', 'Av. Principal 123', 'juan.perez@example.com', '555-6789', 0, NULL);
      
      -- Obtener IDs
      SET @categoria_id_utiles = (SELECT id_categoria FROM categoria WHERE nombre = 'Útiles escolares');
      SET @categoria_id_oficina = (SELECT id_categoria FROM categoria WHERE nombre = 'Artículos de oficina');
      
      -- Insertar productos
      INSERT INTO producto (nombre_producto, descripcion, stock, precio_compra, precio_venta, stock_minimo, nivel_alerta, categoria_id_categoria) 
      VALUES ('Cuaderno universitario', 'Cuaderno de 100 hojas, líneas', 50, 1000, 1500, 10, 'normal', @categoria_id_utiles);
      
      INSERT INTO producto (nombre_producto, descripcion, stock, precio_compra, precio_venta, stock_minimo, nivel_alerta, categoria_id_categoria) 
      VALUES ('Lápiz grafito', 'Lápiz HB', 100, 200, 300, 20, 'normal', @categoria_id_utiles);
      
      INSERT INTO producto (nombre_producto, descripcion, stock, precio_compra, precio_venta, stock_minimo, nivel_alerta, categoria_id_categoria) 
      VALUES ('Resma papel carta', 'Resma de 500 hojas', 30, 3000, 4500, 5, 'normal', @categoria_id_oficina);
    `);

    console.log('¡Datos iniciales creados correctamente!');
    await connection.end();

  } catch (error) {
    console.error('Error al crear datos iniciales:', error);
    process.exit(1);
  }
}

main();
