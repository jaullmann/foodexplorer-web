// botão criado para a primeira versão do programa, sem o extra mile.

import { Container } from "./styles";
import Receipt from "../../assets/app_icons/receipt.svg"

export function OrdersButton({ totalOrders, loading = false, onClick }){
  return (
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
    >
      <img 
        src={Receipt} 
        alt="Pedidos"
      />
      <h3>Pedidos ({ totalOrders })</h3>
    </Container>
  )
}