import styled from "styled-components";
import { v } from "../../../styles/variables";
import { InputText } from "../InputText";
import { Btnsave } from "../../moleculas/Btnsave";

import { CirclePicker } from "react-color";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function RegistrarMarca() {
  const [dataMarca, setDataMarca] = useState({
    nombre: "",
    logo: "",
    id_empresa: "",
  });

  const params = useParams();
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      const response = await fetch(`http://localhost:4000/marca/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataMarca),
      });
    } else {
      const respnse = await fetch("http://localhost:4000/marca", {
        method: "POST",
        body: JSON.stringify(dataMarca),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    navigate("/configuracion/marca");
  };

  const loadTask = async (id) => {
    const response = await fetch(`http://localhost:4000/marca/${id}`);
    const data = await response.json();
    setDataMarca(data);
    setEditing(true);
  };
  const handleChange = (e) => {
    setDataMarca({ ...dataMarca, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  return (
    <Container>
      <div className="sub-contenedor">
        <div className="headers">
          <section>
            <h1>{editing ? "Editar Marca" : "Registrar Nueva marca"} </h1>
          </section>

          <section>
            <span onClick={() => navigate("/configuracion/marca")}>x</span>
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
                  placeholder="Nombre de la marca"
                  name="nombre"
                  onChange={handleChange}
                  value={dataMarca.nombre}
                  required={true}
                />
                <label className="form__label">Marca</label>
              </InputText>
            </article>

            {/* Campo del Logo */}
            <article>
              <InputText icono={<v.iconomarca />}>
                <input
                  className="form__field"
                  type="text"
                  placeholder="Logo"
                  name="logo"
                  onChange={handleChange}
                  value={dataMarca.logo}
                  required={true}
                />
                <label className="form__label">Logo</label>
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
                  value={dataMarca.id_empresa}
                  required={true}
                />
                <label className="form__label">ID Empresa</label>
              </InputText>
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
        color: ${({theme}) => theme.text};
        font-size: 20px;
        font-weight: 500;
      }
      span {
        color: ${({theme}) => theme.text};
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      section {
        gap: 20px;
        display: flex;
        flex-direction: column;
        /* margin-bottom: 50px; */
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
