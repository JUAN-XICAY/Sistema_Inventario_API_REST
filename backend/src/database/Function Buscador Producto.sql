SELECT * FROM categoria;
SELECT * FROM empresa;
SELECT * FROM marca;
SELECT * FROM productos;


CREATE OR REPLACE FUNCTION buscarproducto(buscador TEXT)
RETURNS TABLE(
  id INT,
  descripcion TEXT,
  id_marca INT,
  id_categoria INT,
  stock numeric,
  stock_minimo numeric,
  codigo_barras TEXT,
  codigo_interno TEXT,
  precio_venta numeric,
  precio_compra numeric,
  id_empresa INT,
  imagen TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT p.id, p.descripcion, p.id_marca, p.id_categoria, p.stock, p.stock_minimo, 
  p.codigo_barras, p.codigo_interno, p.precio_venta, p.precio_compra, p.id_empresa, p.imagen
  FROM productos p
  WHERE p.descripcion || p.codigo_interno ILIKE '%' || buscador || '%';
END;
$$ LANGUAGE plpgsql;



SELECT * FROM buscarproducto('8');