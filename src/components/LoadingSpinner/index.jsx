import { Container, Spinner } from "./styles";

export function LoadingSpinner({ isLoading }) {

  return (
    <Container $isVisible={isLoading}>
      <Spinner />
    </Container>
  );
};