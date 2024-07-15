import { useState, useEffect } from "react";
import { Container } from "./styles";
import Minus from "../../assets/app_icons/minus.svg"
import Plus from "../../assets/app_icons/plus.svg"

export function DishCounter({ onAmountChange }) {
  
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    if (onAmountChange) {
      onAmountChange(amount);
    }
  }, [amount, onAmountChange]);

  function addDish() {
    setAmount((prevAmount) => prevAmount + 1);
  }

  function removeDish() {
    setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
  }

  return(
      <Container>
        <img src={Minus} alt="Retirar" onClick={removeDish}/>                  
        <h3>{String(amount).padStart(2, '0')}</h3>          
        <img src={Plus} alt="Adicionar" onClick={addDish}/>                 
      </Container>
  )
}