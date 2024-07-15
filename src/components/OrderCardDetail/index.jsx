import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { formatCurrency } from "../../functions";

export function OrderCardDetail({ id, title, imageFile, amount, price, paidOrder }){

  const navigate = useNavigate();

  function handleDishDetails(dishId) { 
    navigate(`/description/${dishId}`);
  }
  
  return (
    <Container id={id}> 

      <img 
        src={imageFile} 
        alt={"Miniatura do prato "+ title}
        onClick={() => handleDishDetails(id)}
      />
      <div className="card-info">
        <div 
          className="dish-details"
          onClick={() => handleDishDetails(id)}
        >        
          <h2>{amount} x {title} </h2>
          <h3>{formatCurrency(amount * price)}</h3>
        </div>
        {!paidOrder && <button>Excluir</button>}        
      </div>
      
    </Container>
  )
}