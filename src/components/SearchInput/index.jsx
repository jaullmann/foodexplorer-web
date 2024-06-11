import { FiSearch } from "react-icons/fi";
import { Container, Input } from "./styles";

export function SearchInput({ onClick }){
  return (
    <Container id="search">      
      <Input         
        autoFocus
        value={null}
        onChange={null}
        placeholder="Busque por pratos ou ingredientes"
      />
      <button
        onClick={onClick}
      >
        <FiSearch/>
      </button>       
    </Container>    
  )
}