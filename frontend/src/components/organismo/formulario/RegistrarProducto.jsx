import styled from "styled-components";
import { v } from "../../../styles/variables";
import { InputText } from "../InputText";
import { Btnsave } from "../../moleculas/Btnsave";

import { CirclePicker } from "react-color";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Device } from "../../../styles/breackpoints";

export function RegistrarProductos() {
  const [dataProducto, setDataProducto] = useState({
    descripcion: "",
    id_marca: "",
    id_categoria: "",
    stock: "",
    stock_minimo: "",
    codigo_barras: "",
    codigo_interno: "",
    precio_venta: "",
    precio_compra: "",
    id_empresa: "",
    imagen: "",
  });

  const params = useParams();
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      const response = await fetch(
        `http://localhost:4000/productos/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataProducto),
        }
      );
    } else {
      const respnse = await fetch("http://localhost:4000/productos", {
        method: "POST",
        body: JSON.stringify(dataProducto),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    navigate("/configuracion/productos");
  };

  const loadTask = async (id) => {
    const response = await fetch(`http://localhost:4000/productos/${id}`);
    const data = await response.json();
    setDataProducto(data);
    setEditing(true);
  };
  const handleChange = (e) => {
    setDataProducto({ ...dataProducto, [e.target.name]: e.target.value });
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
            <h1>{editing ? "Editar producto" : "Registrar Nueva producto"}</h1>
          </section>

          <section>
            <span onClick={() => navigate("/configuracion/productos")}>x</span>
          </section>
        </div>

        <form className="formulario" onSubmit={handleSubmit}>
          <section className="seccion1">
            <section>
              {/* Campo Nombre de la Categoria */}
              <article>
                <InputText icono={<v.iconomarca />}>
                  <input
                    className="form__field"
                    type="text"
                    placeholder="Descripcion del producto"
                    name="descripcion"
                    onChange={handleChange}
                    value={dataProducto.descripcion}
                    required={true}
                  />
                  <label className="form__label">Descripcion</label>
                </InputText>
              </article>

              {/* Campo del Iconos */}
              <article>
                <InputText icono={<v.iconomarca />}>
                  <input
                    className="form__field"
                    type="text"
                    placeholder="ID marca"
                    name="id_marca"
                    onChange={handleChange}
                    value={dataProducto.id_marca}
                    required={true}
                  />
                  <label className="form__label">Marca</label>
                </InputText>
              </article>

              {/* Campo: ID Empresa */}
              <article>
                <InputText icono={<v.iconomarca />}>
                  <input
                    className="form__field"
                    type="text"
                    placeholder="ID categoria"
                    name="id_categoria"
                    onChange={handleChange}
                    value={dataProducto.id_categoria}
                    required={true}
                  />
                  <label className="form__label">Categoria</label>
                </InputText>
              </article>

              <article>
                <InputText icono={<v.iconomarca />}>
                  <input
                    className="form__field"
                    type="text"
                    placeholder="Stock"
                    name="stock"
                    onChange={handleChange}
                    value={dataProducto.stock}
                    required={true}
                  />
                  <label className="form__label">Stock</label>
                </InputText>
              </article>

              <article>
                <InputText icono={<v.iconomarca />}>
                  <input
                    className="form__field"
                    type="text"
                    placeholder="Stock Minimo"
                    name="stock_minimo"
                    onChange={handleChange}
                    value={dataProducto.stock_minimo}
                    required={true}
                  />
                  <label className="form__label">Stock Minimo</label>
                </InputText>
              </article>

              <article>
                <InputText icono={<v.iconomarca />}>
                  <input
                    className="form__field"
                    type="text"
                    placeholder="Codigo de barras"
                    name="codigo_barras"
                    onChange={handleChange}
                    value={dataProducto.codigo_barras}
                    required={true}
                  />
                  <label className="form__label">Codigo de Barras</label>
                </InputText>
              </article>

              <article>
                <InputText icono={<v.iconomarca />}>
                  <input
                    className="form__field"
                    type="text"
                    placeholder="Codigo de interno"
                    name="codigo_interno"
                    onChange={handleChange}
                    value={dataProducto.codigo_interno}
                    required={true}
                  />
                  <label className="form__label">Codigo de Interno</label>
                </InputText>
              </article>
            </section>
          </section>

          <section className="seccion2">
            <article>
              <InputText icono={<v.iconomarca />}>
                <input
                  className="form__field"
                  type="text"
                  placeholder="Precio venta"
                  name="precio_venta"
                  onChange={handleChange}
                  value={dataProducto.precio_venta}
                  required={true}
                />
                <label className="form__label">Precio venta</label>
              </InputText>
            </article>

            <article>
              <InputText icono={<v.iconomarca />}>
                <input
                  className="form__field"
                  type="text"
                  placeholder="Precio compra"
                  name="precio_compra"
                  onChange={handleChange}
                  value={dataProducto.precio_compra}
                  required={true}
                />
                <label className="form__label">Precio compra</label>
              </InputText>
            </article>

            <article>
              <InputText icono={<v.iconomarca />}>
                <input
                  className="form__field"
                  type="text"
                  placeholder="ID Empresa"
                  name="id_empresa"
                  onChange={handleChange}
                  value={dataProducto.id_empresa}
                  required={true}
                />
                <label className="form__label">Empresa</label>
              </InputText>
            </article>

            <article>
              <InputText icono={<v.iconomarca />}>
                <input
                  className="form__field"
                  type="text"
                  placeholder="Imagen"
                  name="imagen"
                  onChange={handleChange}
                  value={dataProducto.imagen}
                  required={true}
                />
                <label className="form__label">Imagen</label>
              </InputText>
            </article>
          </section>

          <div className="btnguardarContent">
          <Btnsave
            icono={<v.iconoguardar />}
            titulo="Guardar"
            bgcolor="#ef552b"
            type="submit"
          />
          </div> 
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
    width: 100%;
    max-width: 90%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;
    height: 90vh;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #484848;
      border-radius: 10px;
    }

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        font-size: 20px;
        font-weight: 500;
      }
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      @media ${Device.tablet} {
        grid-template-columns: repeat(2, 1fr);
      }
      section {
        gap: 20px;
        display: flex;
        flex-direction: column;
      }
      .btnguardarContent {
        display: flex;
        justify-content: end;
        grid-column: 1;
        @media ${Device.tablet} {
          grid-column: 2;
        }
      }
    }
  }
`;