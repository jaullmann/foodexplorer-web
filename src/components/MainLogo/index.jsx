import { useSearch } from "../../hooks/search";
import { useNavigate } from 'react-router-dom';
import { Container } from "./styles";
import HexagonIcon from "../../assets/app_icons/hexagon_icon.svg";

export function MainLogo({ userRole="customer" }) {

  const { handleInputValue } = useSearch();
  const navigate = useNavigate();  

  function handleClick() {
    handleInputValue("");
    navigate("/");
  }

  return (
    <Container 
      id='main-logo'
      onClick={handleClick}
    >
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
