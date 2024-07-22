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
    </Container>
  )
};