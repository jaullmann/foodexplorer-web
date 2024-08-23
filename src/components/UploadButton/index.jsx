import { PiUploadSimple } from "react-icons/pi";
import { Container, Label } from "./styles";

export function UploadButton({ newDish, onChange }) {
  return (
    <Container>
      <h3>Imagem do prato</h3>
      <Label htmlFor="dishImage">
        <PiUploadSimple />
        <input 
          id="dishImage"
          type="file" 
          onChange={onChange}
          accept="image/png, image/jpeg"          
        />
        {newDish && <p>Escolher imagem</p>}
        {!newDish && <p>Alterar imagem</p>}
        <span className="sr-only">Botão para fazer o upload da imagem em formato jpg ou png do produto</span>
      </Label>
    </Container>
  )
}