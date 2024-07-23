import { Container } from "./styles";
import Receipt from "../../assets/app_icons/receipt.svg"

export function PaymentButton({ loading = false, onClick, disabled, ...rest }){
  return (
    <Container
      type="button"
      disabled={loading || disabled}
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