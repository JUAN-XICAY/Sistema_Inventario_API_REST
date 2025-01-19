import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Dark } from "../../styles/themes";
export function BuscadorProduct({ setBuscador }) {
  function buscar(e) {
    setBuscador(e.target.value);
  }
  return (
    <Container>
      <section className="content">
        <FaSearch className="icono" />
        <input placeholder="...buscar" onChange={buscar} />
      </section>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.bg};
  border-radius: 10px;
  height: 60px;
  align-items: center;
  display: flex;
  color: ${Dark.text};
  border: 1px solid #414244;
  .content {
    padding: 15px;
    gap: 10px;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    .icono {
      font-size: 18px;
    }
    input {
      font-size: 18px;
      width: 100%;
      outline: none;
      background: none;
      border: 0;
      color: ${(props) => props.theme.text};
    }
  }
`;
