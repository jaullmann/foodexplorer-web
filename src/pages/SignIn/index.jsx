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

  function handleSignIn() {
    setIsLoading(true);
    signIn({ email, password });    
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSignIn();
    }
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
          altStyle
          placeholder="Exemplo: nome@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <LabeledInput 
          className="labeled-input"
          label="Senha"
          type="password"
          altStyle
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          title="Entrar"
          onClick={handleSignIn}
        />
        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>

    </Container>   
  )
}