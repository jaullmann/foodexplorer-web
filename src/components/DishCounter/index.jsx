import { Container } from "./styles";
import Minus from "../../assets/app_icons/minus.svg"
import Plus from "../../assets/app_icons/plus.svg"

export function DishCounter({ amount }) {
    return(
        <Container>
          <img src={Minus} alt="Retirar"/>                  
          <h3>{String(amount).padStart(2, '0')}</h3>          
          <img src={Plus} alt="Adicionar"/>                 
        </Container>
    )
}