import styled from "styled-components";
import { ContentFiltro, Header, RegistrarMarca, ReporteKardex, Title, useKardexStore } from "../../index";
import { useState } from "react";
import {PDFViewer} from "@react-pdf/renderer";

export function ReportesTemplate() {

  const [state, setState] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, SetopenRegistro] = useState(false);
  const {datakardex} = useKardexStore();
  return (
    <Container>
      {
        openRegistro &&  <RegistrarMarca dataSelect={dataSelect} accion={accion} onClose={()=>SetopenRegistro(!openRegistro)}/>
      }
     
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <ContentFiltro>
          <Title>
            Reporte del Kardex
          </Title>
        </ContentFiltro>
      </section>
     
      <section className="area2">
        <PDFViewer style={{width:"100%", height:"100%" }}>
          <ReporteKardex data={datakardex} />
        </PDFViewer>
      </section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  padding: 15px;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 400px;
  .header {
    grid-area: header;
    display: flex;
    align-items: center;
    
  }
  .area1 {
    grid-area: area1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;