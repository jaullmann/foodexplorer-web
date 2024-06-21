import { PiUploadSimple } from "react-icons/pi";
import { Container, Button } from "./styles";

export function UploadButton({ newDish = true, onClick }) {
  return (
    <Container
        onClick={onClick}
    >
      <h3>Imagem do prato</h3>
      <Button>
        <PiUploadSimple />
        {newDish && <p>Selecione imagem</p>}
        {!newDish && <p>Selecione imagem para alterá-la</p>}
      </Button>
    </Container>
  )
}