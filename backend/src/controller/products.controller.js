import { pool } from "../db.js";

export const getAllProducts = async (req, res) => {
  const result = await pool.query("SELECT * FROM productos");
  res.json(result.rows);
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM productos WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: "Producto no encontrado",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  const {
    descripcion,
    id_marca,
    id_categoria,
    stock,
    stock_minimo,
    codigo_barras,
    codigo_interno,
    precio_venta,
    precio_compra,
    id_empresa,
    imagen,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO productos(descripcion, id_marca, id_categoria, stock, stock_minimo, codigo_barras, codigo_interno, precio_venta, precio_compra, id_empresa, imagen) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
      [
        descripcion,
        id_marca,
        id_categoria,
        stock,
        stock_minimo,
        codigo_barras,
        codigo_interno,
        precio_venta,
        precio_compra,
        id_empresa,
        imagen,
      ]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    descripcion,
    id_marca,
    id_categoria,
    stock,
    stock_minimo,
    codigo_barras,
    codigo_interno,
    precio_venta,
    precio_compra,
    id_empresa,
    imagen,
  } = req.body;

  try {
    const result = await pool.query(
      "UPDATE productos SET descripcion = $1, id_marca = $2, id_categoria = $3, stock = $4, stock_minimo = $5, codigo_barras = $6, codigo_interno = $7, precio_venta = $8, precio_compra = $9, id_empresa = $10, imagen = $11 WHERE id = $12 RETURNING *",
      [
        descripcion,
        id_marca,
        id_categoria,
        stock,
        stock_minimo,
        codigo_barras,
        codigo_interno,
        precio_venta,
        precio_compra,
        id_empresa,
        imagen,
        id,
      ]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "No se encontró el producto",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM productos WHERE id = $1", [
      id,
    ]);

    res.json({ message: "Producto Eliminado" });

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Producto no Encontrado" });
    }
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

export const buscarProducto = async (req, res) => {
  const { buscador = "" } = req.query;
  try {
    const result = await pool.query("SELECT * FROM buscarproducto($1)", [
      buscador,
    ]);
    res.json(result.rows);
  } catch (error) {
    console.error("Erorr al buscar producto: ", error);
    res.status(500).json({ error: "Error al buscar producto" });
  }
};
