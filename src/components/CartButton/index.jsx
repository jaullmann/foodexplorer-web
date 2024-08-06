import { Container } from "./styles";
import Receipt from "../../assets/app_icons/receipt.svg"

export function CartButton({ amount, loading = false, onClick }){

  return (
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
    >
      <img 
        src={Receipt} 
        alt="Ícone de recibo"
      />
      <h3>Pedidos ({ amount })</h3>

    </Container>
  )
}