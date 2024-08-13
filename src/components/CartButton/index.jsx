import { Container } from "./styles";
import { PiReceipt } from "react-icons/pi";

export function CartButton({ amount, loading = false, onClick }){

  return (
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
    >
      <PiReceipt />
      <h3>Pedidos ({ amount })</h3>

    </Container>
  )
}