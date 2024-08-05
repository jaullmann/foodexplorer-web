import { Container } from "./styles";
import Receipt from "../../assets/app_icons/receipt.svg"

export function CartButtonMobile({ amount, loading = false, onClick }) {  
  return (
    <Container 
      id="cart-button-mobile"
      type="button"
      disabled={loading}
      onClick={onClick}
    >
      <img src={Receipt} alt="Carrinho de compras"/>
      <div>{amount}</div>
    </Container>
  );
}