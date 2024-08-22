// botão criado para a primeira versão do programa, sem o extra mile.

import { Container } from "./styles";
import Receipt from "../../assets/app_icons/receipt.svg"

export function PaymentButton({ loading = false, onClick, disabled, ...rest }){
  return (
    <Container
      type="button"
      disabled={loading || disabled}
      onClick={onClick}
      {...rest}
    >
      
      <img 
        src={Receipt} 
        alt="Ícone de recibo"
      />
      <h3>Finalizar pagamento</h3>
      <span className="sr-only">Botão para efetuar pagamento do pedido</span>

    </Container>
  )
}