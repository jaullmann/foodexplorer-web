import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { PiReceipt } from "react-icons/pi";

export function CartButton({ amount, loading = false, onClick }){

  const { user } = useAuth();
  const admin = user?.role === "admin";

  return (
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
    >
      <PiReceipt />
      <h3>Pedidos ({ amount })</h3>
      {
        admin &&
        <span className="sr-only">Acessar tela de gestão de pedidos</span>
      }
      {
        !admin &&
        <span className="sr-only">Acessar tela de pagamento dos produtos selecionados</span>
      }      
    </Container>
  )
}