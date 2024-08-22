import { Container, Input } from "./styles";

export function LabeledInput({ label, placeholder, altStyle = false, ...rest }) {  

  return (
    <Container>
      <label>{label}</label>
      <Input        
        $alternativeStyle={altStyle}
        placeholder={placeholder}        
        {...rest}
      />
      <span className="sr-only">{`Campo de formulário para digitar ${label}`}</span>
    </Container>
  );
}