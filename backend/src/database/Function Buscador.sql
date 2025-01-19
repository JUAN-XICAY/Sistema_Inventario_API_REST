CREATE OR REPLACE FUNCTION buscarcategoria(buscador TEXT)
RETURNS TABLE(
  id INT,
  nombre TEXT,
  color TEXT,
  icono TEXT,
  id_empresa INT
) AS $$
BEGIN
  RETURN QUERY
  SELECT c.id, c.nombre, c.color, c.icono, c.id_empresa
  FROM categoria c
  WHERE c.nombre ILIKE '%' || buscador || '%';
END;
$$ LANGUAGE plpgsql;



SELECT * FROM buscarcategoria ('a');