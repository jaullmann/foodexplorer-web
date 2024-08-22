import { Container } from "./styles";
import { PiReceipt } from "react-icons/pi";

export function CartButtonMobile({ amount, loading = false, onClick }) {  

  return (
    <Container 
      id="cart-button-mobile"
      type="button"
      disabled={loading}
      onClick={onClick}
    >
      <PiReceipt />
      <div>{amount}</div>
      <span className="sr-only">Botão para pagamento dos produtos selecionados</span>
    </Container>
  );
}