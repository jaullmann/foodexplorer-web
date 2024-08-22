import { Container } from "./styles";
import { MdHexagon } from "react-icons/md";

export function LoadingSpinner({ isLoading }) {

  return (
    <Container $isVisible={isLoading}>      
      <MdHexagon id='inner-hexagon'/>
      <MdHexagon id='outer-hexagon'/>      
    </Container>
  );
};