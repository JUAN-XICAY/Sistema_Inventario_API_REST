import styled from "styled-components";

import { Header } from "../organismo/Header";
import { ContentFiltro } from "../atomos/ContentFiltro";
import { Title } from "../atomos/Title";
import { Btnfiltro } from "../moleculas/Btnfiltro";
import { v } from "../../styles/variables";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TablaProductos } from "../tablas/TablaProductos";
import { Buscador } from "../organismo/Buscador";
// import { useProductosStore } from "../../store/ProductosStore";
// import { RegistrarProducto } from "../organismo/formulario/RegistrarProducto";

export function ProductosTemplate() {
  const [producto, setProducto] = useState([]);
  const [buscador, setBuscador] = useState("");
  // const { dataProductos, setBuscador } = useProductosStore();
  const navigate = useNavigate();

  const getAllProductos = async () => {
    const response = await fetch("http://localhost:4000/productos");
    const data = await response.json();
    setProducto(data);
  };

  const getProductoFiltrado = async (buscador) => {
    try {
      const response = await fetch(
        `http://localhost:4000/buscarproductos?buscador=${buscador}`
      );
      if (!response.ok) throw new Error("Error al buscar producto");
      const data = await response.json();
      setProducto(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProducto = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/productos/${id}`, {
        method: "DELETE",
      });
      await getAllProductos();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProductos();
  }, []);

  const handleChange = (e) => {
    const buscador = e.target.value;
    setBuscador(buscador);
    getProductoFiltrado(buscador);
  };

  return (
    <Container>
      <header className="header">
        <Header />
      </header>
      <section className="area1">
        <ContentFiltro>
          <Title>Productos</Title>
          <Btnfiltro
            funcion={() => navigate("/configuracion/productos/new")}
            titulo="Nuevo"
            icono={<v.agregar />}
            textcolor="#353535"
            bgcolor="#f6f3f3"
          />
        </ContentFiltro>
      </section>
      <section className="area2">
        <Buscador value={buscador} setBuscador={handleChange} />
      </section>
      <section className="main">
        <TablaProductos producto={producto} handleDelete={deleteProducto} />
      </section>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 97%;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  padding: 15px;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 100px
    "main" auto;

  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    /* background-color: rgba(229, 67, 26, 0.14); */
    display: flex;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .main {
    grid-area: main;
    /* background-color: rgba(179, 46, 241, 0.14); */
  }
`;
