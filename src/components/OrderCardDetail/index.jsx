import { Container } from "./styles";

export function OrderCardDetail({ id, title, imageFile, amount, price }){

  function formatCurrency(number) {
    const formattedNumber = number.toFixed(2);
    const parts = formattedNumber.split('.');
    return `R$ ${parts[0]},${parts[1]}`;
  }
  
  return (
    <Container id={id}> 

      <img 
        src={imageFile} 
        alt={"Miniatura do prato "+ title}
      />
      <div className="card-info">
        <div className="dish-details">        
          <h2>{amount} x {title} </h2>
          <h3>{formatCurrency(amount * price)}</h3>
        </div>
        <button>
          Excluir
        </button>
      </div>
      
    </Container>
  )
}