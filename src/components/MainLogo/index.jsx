import { useAuth } from '../../hooks/auth';
import { Container } from "./styles";
import HexagonIcon from "../../assets/app_icons/hexagon_icon.svg";

export function MainLogo({ userRole="customer" }) {

  return (
    <Container id='main-logo'>
      <img 
        src={HexagonIcon}
        alt='Símbolo de food explorer'
      />
      <div>
        <h1>food explorer</h1>
        <h3 className={ userRole }>admin</h3>     
      </div>      
    </Container>
  )
}
