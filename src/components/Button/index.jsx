import { Container } from "./styles";

export function Button({ title, loading = false, onClick, color = 'tomato_100', ...rest }) {  
  return (
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
      className={color}
      {...rest}
    >
      { loading? 'Carregando...' : title }
    </Container>
  );
}