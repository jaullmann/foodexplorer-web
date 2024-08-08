import { api } from "../../services/api";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { LabeledInput } from "../../components/LabeledInput"
import { SectionLabel } from "../../components/SectionLabel"
import { MainLogo } from "../../components/MainLogo";
import { Button } from "../../components/Button"
import { Container, Form } from "./styles"
import { Link, useNavigate } from 'react-router-dom';


export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Todos os campos devem ser preenchidos!");
    }

    if (name.length < 3) {
      return alert("Nome deve conter ao menos 3 caracteres.");
    }

    if (!email.includes("@")) {
      return alert("Email inválido!");
    }

    if (password.length < 3) {
      return alert("Senha deve conter ao menos 3 caracteres.");
    }
  
    try {
      await api.post("/users", { name, email, password });
      signIn({ email, password });
      alert("Cadastrado efetuado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer o cadastro, tente mais tarde.");
      }
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSignUp();
    }
  }

  return (
    <Container>

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
          altStyle
        />
        <LabeledInput 
          className="labeled-input"
          label={"E-mail"}
          type="text"
          placeholder={"Exemplo: nome@exemplo.com.br"}
          onChange={e => setEmail(e.target.value)}
          altStyle
        />
        <LabeledInput 
          className="labeled-input"
          label={"Senha"}
          type="password"
          placeholder={"No mínimo 6 caracteres"}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          altStyle
        />
        <Button
          title={"Criar conta"}
          onClick={handleSignUp}
        />
        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>

    </Container>   
  )
}