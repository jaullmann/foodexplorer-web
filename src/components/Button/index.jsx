import { Container } from "./styles";

export function Button({ title, loading = false, onClick, color = 'tomato_100', 
  srDescription = "botão", ...rest }) {  
  return (
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
      className={color}
      {...rest}
    >
      { loading? 'Carregando...' : title }
      <span className="sr-only">{srDescription}</span>
    </Container>
  );
}