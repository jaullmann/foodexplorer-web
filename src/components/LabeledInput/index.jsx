import { Container, Input } from "./styles";

export function LabeledInput({ label, placeholder, loginScreen = false, ...rest }) {
  return (
    <Container>
      <h3>{label}</h3>
      <Input 
        $loginScreenInput={loginScreen} 
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  )
}