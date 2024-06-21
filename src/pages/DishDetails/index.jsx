import { Container, Main } from "./styles";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Ingredient } from "../../components/Ingredient";
import { DishCounter } from "../../components/DishCounter";
// imagem exemplo para construção do layoyt - excluir **
import SampleImage from "../../assets/samples/dish_image_large_2.png"


export function DishDetails() {  

  return (
    <Container>

      <Header />

      <Main>
        <BackButton id="back-button" />
        <div id="dish-presentation">
          <img src={SampleImage} alt="Foto do prato" />
          <div id="dish-details">
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <div id="ingredients">
              <Ingredient name={"alface"} />
              <Ingredient name={"cebola"} />
              <Ingredient name={"pão naan"} />
              <Ingredient name={"pepino"} />
              <Ingredient name={"rabanete"} />
              <Ingredient name={"tomate"} />
            </div>
            <div id="user-action">
              <DishCounter />
              {!userAdmin && <Button title={"incluir ∙ R$ 25,00"} />}
              {userAdmin && <Button title={"Editar prato"} />}
            </div>
          </div>
        </div>  
      </Main>

      <Footer />

    </Container>
  )
}
