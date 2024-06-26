import { FiSearch } from "react-icons/fi";
import { Container, Input } from "./styles";

export function SearchInput(){
  return (
    <Container id="search">      
      <Input         
        autoFocus
        value={undefined}
        onChange={undefined}
        placeholder="Busque por pratos ou ingredientes"
      />
      <button>
        <FiSearch/>
      </button>       
    </Container>    
  )
}