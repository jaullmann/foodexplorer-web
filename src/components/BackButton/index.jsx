import { Button } from "./styles";
import { PiCaretLeft } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


export function BackButton() {

  const navigate = useNavigate()  

  return (
    <Button 
      type="button" 
      onClick={() => {
        navigate(-1)
      }}
    >
      <PiCaretLeft />
      <div>voltar</div>
    </Button> 
  )
}