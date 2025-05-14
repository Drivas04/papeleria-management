-- Crear tablas principales

CREATE TABLE usuario (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(20),
  contraseña VARCHAR(20),
  rol VARCHAR(10)
) ENGINE=InnoDB;

CREATE TABLE caja (
  id_cierre_caja INT AUTO_INCREMENT PRIMARY KEY,
  fecha_apertura DATE,
  fecha_cierre DATE,
  monto_inicial DECIMAL(10,2),
  monto_final DECIMAL(10,2),
  total_ventas DECIMAL(10,2),
  diferencia DECIMAL(10,2),
  usuario_id_usuario INT NOT NULL,
  FOREIGN KEY (usuario_id_usuario) REFERENCES usuario(id_usuario)
) ENGINE=InnoDB;

CREATE TABLE categoria (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30)
) ENGINE=InnoDB;

CREATE TABLE cliente (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  cedula VARCHAR(10) NOT NULL,
  nombre VARCHAR(30),
  apellido VARCHAR(30),
  telefono VARCHAR(15),
  compras_semanales DECIMAL(10,2),
  deuda_total DECIMAL(10,2),
  UNIQUE (id_cliente, cedula)
) ENGINE=InnoDB;

CREATE TABLE proveedor (
  id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30),
  telefono VARCHAR(15),
  direccion VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE producto (
  id_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre_producto VARCHAR(50),
  descripcion VARCHAR(100),
  stock DECIMAL(10,2),
  nivel_alerta VARCHAR(15),
  categoria_id_categoria INT NOT NULL,
  FOREIGN KEY (categoria_id_categoria) REFERENCES categoria(id_categoria)
) ENGINE=InnoDB;

CREATE TABLE compra (
  id_compra INT AUTO_INCREMENT PRIMARY KEY,
  fecha_compra DATE,
  estado VARCHAR(20),
  usuario_id_usuario INT NOT NULL,
  proveedor_id_proveedor INT NOT NULL,
  FOREIGN KEY (usuario_id_usuario) REFERENCES usuario(id_usuario),
  FOREIGN KEY (proveedor_id_proveedor) REFERENCES proveedor(id_proveedor)
) ENGINE=InnoDB;

CREATE TABLE compra_producto (
  compra_id_compra INT NOT NULL,
  producto_id_producto INT NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  cantidad DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (compra_id_compra, producto_id_producto),
  FOREIGN KEY (compra_id_compra) REFERENCES compra(id_compra),
  FOREIGN KEY (producto_id_producto) REFERENCES producto(id_producto)
) ENGINE=InnoDB;

CREATE TABLE factura_compra (
  id_factura INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE,
  subtotal DECIMAL(10,2),
  impuestos DECIMAL(10,2),
  total DECIMAL(10,2),
  compra_id_compra INT NOT NULL,
  FOREIGN KEY (compra_id_compra) REFERENCES compra(id_compra)
) ENGINE=InnoDB;

CREATE TABLE venta (
  id_venta INT AUTO_INCREMENT PRIMARY KEY,
  tipo_venta VARCHAR(20),
  estado VARCHAR(20),
  cliente_id_cliente INT NOT NULL,
  cliente_cedula VARCHAR(10) NOT NULL,
  usuario_id_usuario INT NOT NULL,
  FOREIGN KEY (cliente_id_cliente, cliente_cedula) REFERENCES cliente(id_cliente, cedula),
  FOREIGN KEY (usuario_id_usuario) REFERENCES usuario(id_usuario)
) ENGINE=InnoDB;

CREATE TABLE venta_producto (
  venta_id_venta INT NOT NULL,
  producto_id_producto INT NOT NULL,
  cantidad DECIMAL(10,2) NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (venta_id_venta, producto_id_producto),
  FOREIGN KEY (venta_id_venta) REFERENCES venta(id_venta),
  FOREIGN KEY (producto_id_producto) REFERENCES producto(id_producto)
) ENGINE=InnoDB;

CREATE TABLE factura_venta (
  id_factura INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE,
  subtotal DECIMAL(10,2),
  impuestos DECIMAL(10,2),
  total DECIMAL(10,2),
  venta_id_venta INT NOT NULL,
  FOREIGN KEY (venta_id_venta) REFERENCES venta(id_venta)
) ENGINE=InnoDB;

CREATE TABLE movimiento_inventario (
  id_movimiento INT AUTO_INCREMENT PRIMARY KEY,
  tipo_movimiento VARCHAR(15),
  fecha_movimiento DATE,
  cantidad DECIMAL(10,2),
  producto_id_producto INT NOT NULL,
  FOREIGN KEY (producto_id_producto) REFERENCES producto(id_producto)
) ENGINE=InnoDB;
