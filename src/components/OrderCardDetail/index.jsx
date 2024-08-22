import { PiCameraSlash } from "react-icons/pi";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/cart";
import { Container } from "./styles";
import { formatCurrency } from "../../functions";

export function OrderCardDetail({ dishId, title, imageFile, amount, price, 
  paidOrder, onDeleteCartDish, ...rest }){

  const navigate = useNavigate();
  const { fetchCart, deleteFromCart } = useCart();

  async function removeDish(dishId) {   
    await deleteFromCart({
      dishId,
      dishAmount: amount,
      dishTitle: title,
      dishImage: imageFile
    }) 
    await fetchCart();
    onDeleteCartDish();      
  }

  function handleDishDetails(dishId) { 
    navigate(`/description/${dishId}`);
  } 
  
  return (
    <Container {...rest}> 
      {
        imageFile &&
        <>
          <img 
            src={imageFile} 
            alt={"Miniatura do prato "+ title}
            onClick={() => handleDishDetails(dishId)}
          />
          <span className="sr-only">{`Acessar página de detalhes de ${title}`}</span>
        </>        
      }
      {
        !imageFile &&
        <>
          <PiCameraSlash           
            onClick={() => handleDishDetails(dishId)}
          />
          <span className="sr-only">{`Acessar página de detalhes de ${title}`}</span>
        </>        
      }
      
      <div className="card-info">
        <div 
          className="dish-details"
          onClick={() => handleDishDetails(dishId)}
        >        
          <h2>{amount} x {title} </h2>
          <p>{formatCurrency(amount * price)}</p>
          <span className="sr-only">{`Acessar página de detalhes de ${title}`}</span>
        </div>
        {!paidOrder && 
          <button 
            onClick={() => removeDish(dishId)}>
            Excluir
            <span className="sr-only">{`Botão para excluir ${title} do pedido atual`}</span>
          </button>}        
      </div>      
    </Container>
  )
}