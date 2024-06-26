import { Container, Input } from "./styles";

export function LabeledInput({ label, placeholder, altStyle = false, ...rest }) {
  return (
    <Container>
      <h3>{label}</h3>
      <Input 
        $alternativeStyle={altStyle} 
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  )
}