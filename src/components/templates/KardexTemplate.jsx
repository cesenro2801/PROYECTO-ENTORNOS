import styled from "styled-components";
import { Btnsave, Buscador, ContentFiltro, Header, RegistrarKardex, Tabs, Title,useKardexStore} from "../../index";
import { useState } from "react";


export function KardexTemplate({data}) {
  const {setBuscador} = useKardexStore();
  const [state, setState] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, SetopenRegistro] = useState(false);
  const [tipo, setTipo] = useState("");

  const nuevaentrada=()=>{
    SetopenRegistro(true);
    setTipo("entrada")
  }

  const nuevasalida=()=>{
    SetopenRegistro(true);
    setTipo("salida")
  }
  
  return (
    <Container>
      {
        openRegistro &&  <RegistrarKardex tipo={tipo} dataSelect={dataSelect} accion={accion} onClose={()=>SetopenRegistro(!openRegistro)}/>
      }
     
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>

      <section className="area0">
          <Title> Kardex </Title>
      </section>

      <section className="area1">
        <ContentFiltro>
          <Btnsave bgcolor="#6CB" titulo="+ Entradas" funcion={nuevaentrada}/>
          <Btnsave bgcolor="#D87" titulo="- Salidas" funcion={nuevasalida} />
        </ContentFiltro>
      </section>

      <section className="area2">
        <Buscador setBuscador={setBuscador}/>
      </section>

      <section className="main">
      <Tabs data={data}/>
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
    "area0" 10px
    "area1" 100px
    "area2" 80px
    "main" auto;
  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
    
  }
  .area0 {
    grid-area: area0;
    display: flex;
    align-items: center;
    justify-content: center;
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
  .main {
    grid-area: main;
  }
`;