import styled from "styled-components";
import { v } from "../../styles/variables";
import { CardDatosEmpresa } from "../molecules/CardDatosEmpresa";
import { useEmpresaStore } from "../../store/EmpresaStore";
import stock from "../../assets/icons8-stock.png";

export function BannerEmpresa(){
    const {dataempresa, contadorusuarios} = useEmpresaStore();
    return(<Container>
        <div className="content-wrapper-context">
            <span className="titulo">
            <img src={stock}></img>
                {dataempresa?.nombre}
            </span>
            <div className="content-text">
                StockSense te mantiene siempre informado
            </div>
            <ContentCards>
                <CardDatosEmpresa titulo="Moneda" valor={dataempresa?.simbolomoneda} />
                <CardDatosEmpresa titulo="Usuarios" valor={contadorusuarios}/>
            </ContentCards>
        </div>
    </Container>);
}
const Container =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: o solid #6b6b6b;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat, repeat;
    border-radius: 14px;
    overflow: hidden;
    margin-top:10px;
    .titulo{
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .content-text{
        font-size: 17px;
        font-weight: 700;
        margin-top: 10px;
    }
`;
const ContentCards =styled.div`
    display: flex;
    gap: 10px;
    padding-top: 20px;
    cursor: pointer;
`;