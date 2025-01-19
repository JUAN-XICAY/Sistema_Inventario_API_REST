select * from marca

UPDATE productos SET descripcion = $1, id_marca = $2, id_categoria = $3,
stock = $4, stock_minimo = $5, codigo_barras = $6, codigo_interno = $7, precio_venta = $8,
precio_compra = $9, id_empresa = $10, imagen = $11
WHERE id = $12;

TRUNCATE TABLE productos RESTART IDENTITY
TRUNCATE TABLE categoria RESTART IDENTITY CASCADE;