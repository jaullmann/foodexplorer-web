import { PiUploadSimple } from "react-icons/pi";
import { Container, Label } from "./styles";

export function UploadButton({ newDish = true, onChange, ...rest }) {
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
        {newDish && <p>Selecione imagem</p>}
        {!newDish && <p>Selecione nova imagem</p>}
      </Label>
    </Container>
  )
}