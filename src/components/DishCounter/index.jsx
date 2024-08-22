import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { useState, useEffect } from "react";
import { Container } from "./styles";


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
        <PiMinusBold
          alt="Retirar" 
          onClick={removeDish}
        >
          <span className="sr-only">Botão de cartão de produto para subtrair um item</span>
        </PiMinusBold>                   
        <h3>{String(amount).padStart(2, '0')}</h3>          
        <PiPlusBold
           alt="Adicionar" 
           onClick={addDish}
        >
          <span className="sr-only">Botão de cartão de produto para adicionar um item</span>
        </PiPlusBold>                 
      </Container>
  )
}