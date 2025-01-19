INSERT INTO marca(nombre,logo,id_empresa)VALUES('Adidas','adidas.png', 1);

INSERT INTO empresa(nombre,id_fiscal,direccion_fiscal,logo,simbolo_moneda,id_auth,id_usuario,iso,pais,currency,impuesto,valor_impuesto)
VALUES('NK Mazate', '1001', 'Plaza America Mazatenango', 'nkmazate.png', 'Q', '1', 1, 'GTQ', 'Guatemala', 'GTQ', 'IVA', 12);

INSERT INTO categoria(nombre,color,icono,id_empresa)VALUES('Calzado','#ff9500', '-', 1);

SELECT * FROM productos;

TRUNCATE TABLE productos RESTART IDENTITY;