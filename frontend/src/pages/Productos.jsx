import { ProductosTemplate } from "../components/templates/ProductosTemplate";
import { useQuery } from "@tanstack/react-query";
// import { getProducts } from "../services/productsAPI";
import { Spinner1 } from "../components/moleculas/Spinner1";
import { useProductosStore } from "../store/ProductosStore";

export function Productos() {
  const { mostrarProductos, buscarProductos, buscador, setBuscador } = useProductosStore();
  const {
    isLoading,
    data: producto,
    isError,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: () => mostrarProductos(),
  });

  useQuery({
    queryKey: ["buscar productos", buscador],
    queryFn: () => buscarProductos({ buscador: buscador }),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Spinner1 />;
  else if (isError) return <div>Error: {error.message} </div>;

 

  return <ProductosTemplate data={producto} />;
}