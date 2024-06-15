import { Container } from "./styles";
import { PiCaretLeft } from "react-icons/pi";
// import { useNavigate } from "react-router-dom";


export function BackButton() {

  // const navigate = useNavigate()
  // const handlePreviousRoute = () => {
  //   navigate(-1)
  // }

  return (
    // <Container type="button" onClick={handlePreviousRoute}>
    //   <PiCaretLeft />
    //   <div>voltar</div>
    // </Container> 
    <Container type="button">
      <PiCaretLeft />
      <div>voltar</div>
    </Container>   
  )
}