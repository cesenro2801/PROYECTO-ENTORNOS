import styled from "styled-components";
import { AccionTabla, v } from "../../../index";
export function ContentAccionesT({ funcionEditar, funcionEliminar }) {
  return (
    <Container>
      <AccionTabla
        funcion={funcionEditar}
        color="#2d8d8d"
        icono={<v.iconeditarTabla />}
      />
      <AccionTabla
        funcion={funcionEliminar}
        color="#ff0000"
        icono={<v.iconeliminarTabla />}
        />
    </Container>
  );
}
const Container = styled.div`
 display: flex;
 gap: 10px;
 justify-content: center;
 flex-wrap:wrap;

 @media (max-width: 768px) {
    justify-content:end;
 }

`;
