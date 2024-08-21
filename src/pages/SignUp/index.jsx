import { api } from "../../services/api";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useAlerts } from "../../hooks/alerts";
import { LabeledInput } from "../../components/LabeledInput"
import { SectionLabel } from "../../components/SectionLabel"
import { MainLogo } from "../../components/MainLogo";
import { Button } from "../../components/Button"
import { Container, Form } from "./styles"
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Link, useNavigate } from 'react-router-dom';


export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [isLoading, setIsLoading] = useState(false);

  const { showAlert } = useAlerts();
  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function handleSignUp() {
    if (password.length < 6) {
      clearPassword();
      return showAlert({message: "Senha deve conter ao menos 6 caracteres."});
    }   

    if (name.length < 5) {
      return showAlert({message: "Nome deve conter ao menos 5 caracteres."});
    }

    if (!(email.includes("@") && email.includes(".") && email.length > 5)) {
      return showAlert({message: "Email inválido!"});
    }   

    if (!name || !email || !password) {
      return showAlert({message: "Todos os campos devem ser preenchidos!"});
    }
  
    try {
      setIsLoading(true);
      await api.post("/users", { name, email, password });
      await signIn({ email, password });
      showAlert({message: "Cadastrado efetuado com sucesso!", type: "info", buttonText: "Entrar"});
      navigate("/");
    } catch (error) {
      if (error.response) {
        showAlert({message: error.response.data.message});
      } else {
        showAlert({message: "Não foi possível fazer o cadastro, tente mais tarde."});
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSignUp();
    }
  }

  function clearPassword(){
    setPassword("");
  }

  return (
    <Container>

      <LoadingSpinner isLoading={isLoading} />

      <MainLogo />
      <Form>
        <SectionLabel          
          title={"Crie sua conta"} 
        />
        <LabeledInput 
          className="labeled-input"
          label={"Seu nome"}
          type="text"
          placeholder={"Exemplo: Maria Silva"}
          onChange={e => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          altStyle
        />
        <LabeledInput 
          className="labeled-input"
          label={"E-mail"}
          type="text"
          placeholder={"Exemplo: nome@exemplo.com.br"}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          altStyle
        />
        <LabeledInput 
          className="labeled-input"
          label={"Senha"}
          value={password}
          type="password"
          placeholder={"No mínimo 6 caracteres"}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          altStyle
        />
        <Button
          title={"Criar conta"}
          onClick={handleSignUp}
          disabled={!(name && email && password)}
        />
        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>

    </Container>   
  )
}