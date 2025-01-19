import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const getProducts = async () => {
  const res = await productsApi.get("/productos");
  return res.data;
};

export const mostrarProductos = async (id) => {
  const res = await productsApi.get(`/productos/${id}`);
  return res.data;
};

export const insertarProducto = async (producto) => {
  const res = await productsApi.post("/productos", producto);
  return res.data;
};

export const editarProducto = async (id, producto) => {
  const res = await productsApi.put(`/productos/${id}`, producto);
  return res.data;
};

export const eliminarProducto = async (id) => {
  const res = await productsApi.delete(`/productos/${id}`);
  return res.data;
};

export const buscarProductos = async ({ buscador }) => {
  const res = await productsApi.get(`/buscarproducto?buscador=${buscador}`);
  return res.data;
};
