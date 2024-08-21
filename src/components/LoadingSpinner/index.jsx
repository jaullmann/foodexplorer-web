import { Container, Spinner } from "./styles";
import { MdHexagon } from "react-icons/md";

export function LoadingSpinner({ isLoading }) {

  return (
    <Container $isVisible={isLoading}>      
      <MdHexagon />
      <Spinner />      
    </Container>
  );
};