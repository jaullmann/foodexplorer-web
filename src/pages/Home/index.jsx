import { Container } from "./styles"
import { useState, useEffect } from "react";
import { Header } from "../../components/Header"
import { CardsSection } from "../../components/CardsSection"
import { Footer } from "../../components/Footer"
import homeBanner from "../../assets/images/home_banner.png"

export function Home() {  
  return(
    <Container>

      <Header />

      <div id="banner-section">
        <div id="banner-slogan">
          <h1>Sabores inigualáveis</h1>
          <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>        
          {/* <img id="banner-image"
            src= {homeBanner}
            alt="Imagem de biscoitos coloridos e frutas frescas" 
          /> */}
        </div>  
      </div>
      
      

      <CardsSection sectionName={"Refeições"} />
      <CardsSection sectionName={"Sobremesas"} />
      <CardsSection sectionName={"Bebidas"} />
      
      <Footer />

    </Container>
  )
  
}
