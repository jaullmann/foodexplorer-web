import { useState } from "react";
import { LabeledInput } from "../../components/LabeledInput"
import { SectionLabel } from "../../components/SectionLabel"
import { MainLogo } from "../../components/MainLogo";
import { Button } from "../../components/Button"
import { Container, Form } from "./styles"
import { Link } from 'react-router-dom';


export function SignUp() {
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
          placeholder={"Exemplo: Maria da Silva"}
        />
        <LabeledInput 
          className="labeled-input"
          label={"E-mail"}
          type="text"
          placeholder={"Exemplo: nome@exemplo.com.br"}
        />
        <LabeledInput 
          className="labeled-input"
          label={"Senha"}
          type="password"
          placeholder={"No mínimo 6 caracteres"}
        />
        <Button
          title={"Criar conta"}
          onClick={null}
        />
        <a href="/login">
          Já tenho uma conta
        </a>
      </Form>

    </Container>   
  )
}