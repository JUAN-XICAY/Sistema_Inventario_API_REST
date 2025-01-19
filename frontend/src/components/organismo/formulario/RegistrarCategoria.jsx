import styled from "styled-components";
import { v } from "../../../styles/variables";
import { InputText } from "../InputText";
import { Btnsave } from "../../moleculas/Btnsave";

import { CirclePicker } from "react-color";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function RegistrarCategorias() {
  const [dataCategoria, setDataCategoria] = useState({
    nombre: "",
    color: "",
    icono: "",
    id_empresa: "",
  });

  const params = useParams();
  const [editing, setEditing] = useState(false);
  const [currentColor, setColor] = useState("#F44336");
  const navigate = useNavigate();

  function elegirColor(color) {
    setColor(color.hex); // Actualiza el estado del color actual
    setDataCategoria((prevState) => ({
      ...prevState,
      color: color.hex, // Actualiza el color en dataCategoria
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      const response = await fetch(
        `http://localhost:4000/categoria/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataCategoria),
        }
      );
    } else {
      const respnse = await fetch("http://localhost:4000/categoria", {
        method: "POST",
        body: JSON.stringify(dataCategoria),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    navigate("/configuracion/categoria");
  };

  const loadTask = async (id) => {
    const response = await fetch(`http://localhost:4000/categoria/${id}`);
    const data = await response.json();
    setDataCategoria(data);
    setColor(data.color);
    setEditing(true);
  };
  const handleChange = (e) => {
    setDataCategoria({ ...dataCategoria, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
      // setColor(dataCategoria.color);
    }
  }, [params.id]);

  return (
    <Container>
      <div className="sub-contenedor">
        <div className="headers">
          <section>
            <h1>
              {editing ? "Editar categoria" : "Registrar Nueva categoria"}
            </h1>
          </section>

          <section>
            <span onClick={() => navigate("/configuracion/categoria")}>x</span>
          </section>
        </div>

        <form className="formulario" onSubmit={handleSubmit}>
          <section>
            {/* Campo Nombre de la Categoria */}
            <article>
              <InputText icono={<v.iconomarca />}>
                <input
                  className="form__field"
                  type="text"
                  placeholder="Nombre de la categoría"
                  name="nombre"
                  onChange={handleChange}
                  value={dataCategoria.nombre}
                  required={true}
                />
                <label className="form__label">Categoría</label>
              </InputText>
            </article>

            {/* Campo del Iconos */}
            <article>
              <InputText icono={<v.iconomarca />}>
                <input
                  className="form__field"
                  type="text"
                  placeholder="Ícono"
                  name="icono"
                  onChange={handleChange}
                  value={dataCategoria.icono}
                  required={true}
                />
                <label className="form__label">Ícono</label>
              </InputText>
            </article>

            {/* Campo: ID Empresa */}
            <article>
              <InputText icono={<v.iconomarca />}>
                <input
                  className="form__field"
                  type="text"
                  placeholder="ID Empresa"
                  name="id_empresa"
                  onChange={handleChange}
                  value={dataCategoria.id_empresa}
                  required={true}
                />
                <label className="form__label">ID Empresa</label>
              </InputText>
            </article>

            {/* Selector de Color */}
            <article className="colorContainer">
              <CirclePicker onChange={elegirColor} color={currentColor} />
            </article>

            <div className="btnguardarContent">
              <Btnsave
                icono={<v.iconoguardar />}
                titulo="Guardar"
                bgcolor="#ef552b"
                type="submit"
              />
            </div>
          </section>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .sub-contenedor {
    width: 500px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        color: ${({ theme }) => theme.text};
        font-size: 20px;
        font-weight: 500;
      }
      span {
        color: ${({ theme }) => theme.text};
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      section {
        gap: 20px;
        display: flex;
        flex-direction: column;
        .colorContainer {
          .colorPickerCotent {
            padding-top: 15px;
            min-height: 50px;
          }
        }
      }
    }
  }
`;
