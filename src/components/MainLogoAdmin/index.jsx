import { Container } from "./styles";
import HexagonIcon from "../../assets/app_icons/hexagon_icon.svg";

export function MainLogoAdmin() {
  return (
    <Container>
      <img 
        src={HexagonIcon}
        alt='Símbolo de food explorer'
      />
      <div>
        <h1>food explorer</h1>
        <h3>admin</h3>     
      </div>      
    </Container>
  )
}
