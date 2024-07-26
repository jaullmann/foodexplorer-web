import { PiUploadSimple } from "react-icons/pi";
import { Container, Button } from "./styles";

export function UploadButton({ newDish = true, onChange, ...rest }) {
  return (
    <Container>
      <h3>Imagem do prato</h3>
      <Button onChange={onChange}>
        <PiUploadSimple />
        <input type="file" onChange={onchange}/>
        {newDish && <p>Selecione imagem</p>}
        {!newDish && <p>Selecione imagem para alterá-la</p>}
      </Button>
    </Container>
  )
}