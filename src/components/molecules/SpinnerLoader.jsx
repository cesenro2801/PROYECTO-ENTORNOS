import styled from 'styled-components'
import{BeatLoader} from "react-spinners"
export function SpinnerLoader() {
  return (<Container>
    <BeatLoader size={30} color='#E3451E'/>
  </Container>);
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: ${({theme}) => theme.bgtotal };
    transform: all 0.3s;
`
