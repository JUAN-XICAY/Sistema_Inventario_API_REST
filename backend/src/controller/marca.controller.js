import { pool } from "../db.js";

export const getAllMarca = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM marca ORDER BY id asc");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
  }
};

export const getMarca = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM marca WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ messaage: "Marca no encotrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const createMarca = async (req, res) => {
  const { nombre, logo, id_empresa } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO marca(nombre,logo, id_empresa) VALUES($1,$2,$3) RETURNING *",
      [nombre, logo, id_empresa]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const updateMarca = async (req, res) => {
  const { id } = req.params;
  const { nombre, logo, id_empresa } = req.body;

  try {
    const result = await pool.query(
      "UPDATE marca SET nombre = $1, logo = $2, id_empresa = $3 WHERE id = $4 RETURNING *",
      [nombre, logo, id_empresa, id]
    );
    if (result.rowCount === 0) {
      return res.status(400).json({ message: "Marca no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const deleteMarca = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM marca WHERE id = $1", [id]);

    res.json({ message: "Marca Eliminado" });

    if (result.rowCount === 0)
      return res
        .status(404)
        .json({ messaage: "Marca no se encuentra registrado" });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

export const buscarMarca = async (req, res) => {
  const { buscador = "" } = req.query;
  try {
    const response = await pool.query("SELECT * FROM buscarmarca($1)", [
      buscador,
    ]);
    res.json(response.rows);
  } catch (error) {
    console.error("Error al encontrar la marca: ", error);
    res.status(500).json({ error: "Error al buscar la marca" });
  }
};
