import { create } from "zustand";
import {
  insertarProducto,
  getProducts,
  buscarProductos,
} from "../services/productsAPI";

export const useProductosStore = create((set, get) => ({
  dataProductos: [],
  productosItemSelect: [],
  buscador: "",
  setBuscador: (buscador) => set({ buscador }),

  mostrarProductos: async () => {
    const response = await getProducts();
    set({ dataProductos: response });
    return response;
  },

  buscarProductos: async (buscador) => {
    const response = await buscarProductos(buscador);
    set({ dataProductos: response });
    return response;
  },

  insertarProductos: async (producto) => {
    const response = await insertarProducto(producto);
    const { parametro } = get();
    await get().mostrarProductos(parametro.id);
    return response;
  },
}));
