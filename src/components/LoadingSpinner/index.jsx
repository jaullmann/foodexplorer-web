import { useLoading } from "../../hooks/loading";
import { Container, Spinner } from "./styles";

export function LoadingSpinner() {

  const { loading } = useLoading();

  return (
    <Container $isVisible={loading}>
      <Spinner />
    </Container>
  );
};