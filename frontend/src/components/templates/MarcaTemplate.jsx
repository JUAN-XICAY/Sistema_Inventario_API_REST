import styled from "styled-components";
import { TablaMarca } from "../tablas/TablaMarca";
import { Dark } from "../../styles/themes";
import { Header } from "../organismo/Header";
import { ContentFiltro } from "../atomos/ContentFiltro";
import { Title } from "../atomos/Title";
import { Btnfiltro } from "../moleculas/Btnfiltro";
import { v } from "../../styles/variables";
import { Buscador } from "../organismo/Buscador";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function MarcaTemplate() {
  const navigate = useNavigate();
  const [buscador, setBuscador] = useState("");

  const [marca, setMarca] = useState([]);

  const getAllMarca = async () => {
    const response = await fetch("http://localhost:4000/marca");
    const data = await response.json();
    setMarca(data);
  };

  const getMarcaFiltradas = async (buscador) => {
    try {
      const response = await fetch(
        `http://localhost:4000/buscarmarca?buscador=${buscador}`
      );
      if (!response.ok) throw new Error("Error al buscar marca");
      const data = await response.json();
      setMarca(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/marca/${id}`, {
        method: "DELETE",
      });
      // setCategorias(categorias.filter((categoria) => categoria.id !== id));
      await getAllMarca();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllMarca();
  }, []);
  const handleChange = (e) => {
    const buscador = e.target.value;
    setBuscador(buscador);
    getMarcaFiltradas(buscador);
  };

  return (
    <Container>
      <header className="header">
        <Header />
      </header>
      <section className="area1">
        <ContentFiltro>
          <Title>Marca</Title>
          <Btnfiltro
            funcion={() => navigate("/configuracion/marca/new")}
            icono={<v.agregar />}
            textcolor="#353535"
            bgcolor="#f6f3f3"
          />
        </ContentFiltro>
      </section>
      <section className="area2">
        <Buscador value={buscador} setBuscador={handleChange} />
        {/* <input
          value={buscador}
          placeholder="...buscar"
          onChange={handleChange}
        /> */}
      </section>
      <section className="main">
        <TablaMarca marca={marca} handleDelete={handleDelete} />
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
  /* overflow: hidden; */
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
