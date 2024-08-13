import { Container, Spinner } from "./styles";

export function LoadingSpinner({ isVisible }) {
  return (
    <Container $isVisible={isVisible}>
      <Spinner />
    </Container>
  );
};