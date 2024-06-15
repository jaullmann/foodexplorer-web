import { useState } from "react";
import { LabeledInput } from "../../components/LabeledInput"
import { SectionLabel } from "../../components/SectionLabel"
import { MainLogo } from "../../components/MainLogo";
import { Button } from "../../components/Button"
import { Container, Form } from "./styles"
import { Link } from 'react-router-dom';


export function SignIn() {
  return (
    <Container>

      <MainLogo />
      <Form>
        <SectionLabel          
          title={"Faça login"} 
        />
        <LabeledInput 
          className="labeled-input"
          label={"E-mail"}
          type="text"
          loginScreen
          placeholder={"Exemplo: nome@exemplo.com.br"}
        />
        <LabeledInput 
          className="labeled-input"
          label={"Senha"}
          type="password"
          loginScreen
          placeholder={"No mínimo 6 caracteres"}
        />
        <Button
          title={"Entrar"}
          onClick={null}
        />
        <a href="/signUp">
          Criar uma conta
        </a>
      </Form>

    </Container>   
  )
}