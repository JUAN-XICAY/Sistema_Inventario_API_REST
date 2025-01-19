import styled from "styled-components";
import { Icono } from "../atomos/Icono";

export function Btnsave({  funcion, titulo, bgcolor, icono, url }) {
  return (
    <Container $bgcolor={bgcolor}>
      <button type="submit" >
        <Icono>{icono} </Icono>
        <span className="btn" onClick={funcion}>
          <a href={url} target="_blank">
            {titulo}
          </a>
        </span>
      </button>
    </Container>
  );
}

const Container = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    gap: 10px;
    background-color: initial;
    z-index: 2;
    .btn {
      background: ${(props) => props.$bgcolor};
      padding: 0.6rem 1.3em;
      font-weight: 900;
      font-size: 18px;
      border: 3px solid black;
      border-radius: 0.4rem;
      box-shadow: 0.1rem 0.1rem #000;
      transition: 0.2s;
      white-space: 1px;
      color: #000;
      a {
        text-decoration: none;
        color: #000;
      }
      cursor: pointer;
      &:hover {
        transform: translate(-0.05em, -0.5em);
        box-shadow: 0.15em 0.15em #000;
      }
      &:active {
        transform: translate(0.05em, 0.5em);
        box-shadow: 0.05em 0.05em #000;
      }
    }
  }
`;
