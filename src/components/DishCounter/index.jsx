import { Container } from "./styles";
import Minus from "../../assets/app_icons/minus.svg"
import Plus from "../../assets/app_icons/plus.svg"
import { useState } from "react";

export function DishCounter() {
  
  const [amount, setAmount] = useState(1);

  function addDish() {
    setAmount(amount + 1);
    return;
  }

  function removeDish() {
    if (amount > 1) {
      setAmount(amount -1);      
    }    
    return;
  };

  return(
      <Container>
        <img src={Minus} alt="Retirar" onClick={removeDish}/>                  
        <h3>{String(amount).padStart(2, '0')}</h3>          
        <img src={Plus} alt="Adicionar" onClick={addDish}/>                 
      </Container>
  )
}