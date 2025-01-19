CREATE OR REPLACE FUNCTION buscarmarca(buscador text)
RETURNS TABLE (
id int,
nombre TEXT,
logo TEXT,
id_empresa int
)
AS $$
BEGIN
RETURN QUERY
SELECT m.id, m.nombre, m.logo, m.id_empresa
FROM marca m
WHERE m.nombre ILIKE '%' || buscador || '%';
END;
$$ LANGUAGE plpgsql;

select * from buscarmarca('a')