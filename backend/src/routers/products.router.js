import { Router } from "express";
import {
  buscarProducto,
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controller/products.controller.js";

import {
  buscarMarca,
  createMarca,
  deleteMarca,
  getAllMarca,
  getMarca,
  updateMarca,
} from "../controller/marca.controller.js";

import {
  buscarCategoria,
  createCategoria,
  deleteCategoria,
  getAllCategorgia,
  getCategoria,
  updateCategoria,
} from "../controller/categoria.controller.js";

export const router = Router();

router.get("/productos", getAllProducts);

router.get("/productos/:id", getProduct);

router.post("/productos", createProduct);

router.put("/productos/:id", updateProduct);

router.delete("/productos/:id", deleteProduct);

router.get("/buscarproductos", buscarProducto);

router.get("/marca", getAllMarca);

router.get("/marca/:id", getMarca);

router.post("/marca", createMarca);

router.put("/marca/:id", updateMarca);

router.delete("/marca/:id", deleteMarca);

router.get("/buscarmarca", buscarMarca);

router.get("/categoria", getAllCategorgia);

router.get("/categoria/:id", getCategoria);

router.post("/categoria/", createCategoria);

router.put("/categoria/:id", updateCategoria);

router.delete("/categoria/:id", deleteCategoria);

router.get("/buscarcategoria", buscarCategoria);
