import { PiCameraSlash } from "react-icons/pi";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/cart";
import { Container } from "./styles";
import { formatCurrency } from "../../functions";

export function OrderCardDetail({ dishId, title, imageFile, amount, price, paidOrder, onDeleteCartDish }){

  const navigate = useNavigate();
  const { fetchCart } = useCart();

  async function deleteCartDish(dishId) {
    if (!confirm("Deseja realmente retirar esse produto do seu pedido?")) {
      return
    }
    try {
      await api.delete("cart", {
        data: {                            
            dish_id: dishId
        },
        withCredentials: true
      });
      fetchCart();
      onDeleteCartDish();
      alert("Produto(s) removido(s) do pedido!")
    } catch(e) {
      console.log(e);  
      return alert("Erro ao excluir produto do pedido");
    }
  }

  function handleDishDetails(dishId) { 
    navigate(`/description/${dishId}`);
  } 
  
  return (
    <Container> 
      {
        imageFile &&
        <img 
          src={imageFile} 
          alt={"Miniatura do prato "+ title}
          onClick={() => handleDishDetails(dishId)}
        />
      }
      {
        !imageFile &&
        <PiCameraSlash           
          onClick={() => handleDishDetails(dishId)}
        />
      }
      
      <div className="card-info">
        <div 
          className="dish-details"
          onClick={() => handleDishDetails(dishId)}
        >        
          <h2>{amount} x {title} </h2>
          <h3>{formatCurrency(amount * price)}</h3>
        </div>
        {!paidOrder && 
          <button onClick={() => deleteCartDish(dishId)}>
            Excluir
          </button>}        
      </div>      
    </Container>
  )
}