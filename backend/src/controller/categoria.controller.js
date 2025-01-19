import { pool } from "../db.js";

export const getAllCategorgia = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM categoria ORDER BY id asc");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
  }
};

export const getCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM categoria WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Categoria no existente" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const createCategoria = async (req, res) => {
  const { nombre, color, icono, id_empresa } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO categoria(nombre,color,icono,id_empresa) VALUES($1,$2,$3,$4) RETURNING *",
      [nombre, color, icono, id_empresa]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre, color, icono, id_empresa } = req.body;

  try {
    const result = await pool.query(
      "UPDATE categoria SET nombre = $1, color = $2, icono = $3, id_empresa = $4 WHERE id = $5 RETURNING *",
      [nombre, color, icono, id_empresa, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Categoria no encontrada..." });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM categoria WHERE id = $1", [
      id,
    ]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Categoria no encontrado" });
    } else {
      res.json({ message: "Categoria eliminado..." });
    }
    res.sendStatus(202);
  } catch (error) {
    console.log(error);
  }
};

export const buscarCategoria = async (req, res) => {
  const { buscador = "" } = req.query;
  try {
    const result = await pool.query("SELECT * FROM buscarcategoria($1)", [
      buscador]);
    res.json(result.rows);
  } catch (error) {
    console.error("Error al buscar categoria: ", error);
    res.status(500).json({ error: "Error al buscar categoria " });
  }
};
