import { Container } from "./styles";
import Receipt from "../../assets/app_icons/receipt.svg"

export function CartButton({ totalDishes, loading = false, onClick }){
  return (
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
    >
      <img src={Receipt} alt="Carrinho de compras"/>
      <h3>Meu pedido ({ totalDishes })</h3>

    </Container>
  )
}