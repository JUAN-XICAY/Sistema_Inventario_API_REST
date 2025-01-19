CREATE TABLE empresa (
	id SERIAL PRIMARY KEY,
	nombre text,
	id_fiscal text,
	direccion_fiscal text,
	logo text,
	simbolo_moneda text,
	id_auth text,
	id_usuario int,
	iso text,
	pais text,
	currency text,
	impuesto text,
	valor_impuesto numeric
);


CREATE TABLE productos (
	id SERIAL PRIMARY KEY,
	descripcion text,
	id_marca int,
	id_categoria int,
	stock numeric,
	stock_minimo numeric,
	codigo_barras text,
	codigo_interno text,
	precio_venta numeric,
	precio_compra numeric,
	id_empresa int,
	imagen text,
	FOREIGN KEY (id_marca) REFERENCES marca(id),
	FOREIGN KEY (id_categoria) REFERENCES categoria(id),
	FOREIGN KEY (id_empresa) REFERENCES empresa(id)
);

CREATE TABLE marca(
	id SERIAL PRIMARY KEY,
	nombre text,
	logo text,
	id_empresa int,
	FOREIGN KEY (id_empresa) REFERENCES empresa(id)
);

CREATE TABLE categoria(
	id SERIAL PRIMARY KEY,
	nombre text,
	color text,
	icono text,
	id_empresa int,
	FOREIGN KEY (id_empresa) REFERENCES empresa(id)
);