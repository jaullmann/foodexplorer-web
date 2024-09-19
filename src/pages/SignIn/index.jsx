import { useState } from "react";
import { LabeledInput } from "../../components/LabeledInput"
import { SectionLabel } from "../../components/SectionLabel"
import { MainLogo } from "../../components/MainLogo";
import { Button } from "../../components/Button"
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Container, Form } from "./styles"
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';


export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { signIn } = useAuth();  

  async function handleSignIn() {
    setIsLoading(true);
    const validated = await signIn({ email, password });
    !validated && clearForm();
    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSignIn();
    }
  }

  function clearForm() {
    setEmail("");
    setPassword("");
  }

  return (
    <Container>

      <LoadingSpinner isLoading={isLoading} />
      
      <MainLogo />
      <Form>
        <SectionLabel          
          title="Faça login"
        />
        <LabeledInput 
          className="labeled-input"
          label="E-mail"
          type="text"
          value={email}
          altStyle
          placeholder="Exemplo: nome@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <LabeledInput 
          className="labeled-input"
          label="Senha"
          type="password"
          value={password}
          altStyle
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          id="sign-in"
          title="Entrar"
          onClick={handleSignIn}
          disabled={!(email && password)}
        />
        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>

    </Container>   
  )
}