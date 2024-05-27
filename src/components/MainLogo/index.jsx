import { Container } from "./styles";
import HexagonIcon from "../../assets/app_icons/hexagon_icon.svg";

export function MainLogo({ admin=false }) {
  return (
    <Container>
      <img 
        src={HexagonIcon}
        alt='Símbolo de food explorer'
      />
      <div>
        <h1>food explorer</h1>
        <h3 className={ admin ? 'admin' : 'user' }>admin</h3>     
      </div>      
    </Container>
  )
}
