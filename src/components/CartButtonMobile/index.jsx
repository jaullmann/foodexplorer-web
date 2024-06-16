import { Container } from "./styles";
import Receipt from "../../assets/app_icons/receipt.svg"

export function CartButtonMobile({ totalDishes=10 }) {  
  return (
    <Container id="cart-button-mobile">
      <img src={Receipt} alt="Carrinho de compras"/>
      <div>{totalDishes}</div>
    </Container>
  );
}