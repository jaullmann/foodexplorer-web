import { Container } from "./styles";
import Receipt from "../../assets/app_icons/receipt.svg"

export function PaymentButton({ loading = false, onClick }){
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
      <h3>Finalizar pagamento</h3>

    </Container>
  )
}