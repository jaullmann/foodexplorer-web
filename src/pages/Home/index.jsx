import { useEffect } from "react";
import { useFavorites } from "../../hooks/favorites";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { CardsSection } from "../../components/CardsSection";
import { Footer } from "../../components/Footer";
import homeBanner from "../../assets/images/home_banner.png";

export function Home() {    

  const { userFavorites, fetchFavorites } = useFavorites();  

  useEffect(() => {  
      fetchFavorites();      
}, [])

  return(
    <Container>

      <Header />

      <div id="banner-section">
        <div id="banner-slogan">
          <h1>Sabores inigualáveis</h1>
          <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>        
          <img id="banner-image"
            src= {homeBanner}
            alt="Splash de biscoitos coloridos com frutas frescas" 
          />
        </div>  
      </div>

      <CardsSection
        sectionName={"Refeições"} 
        category={"refeicao"} 
        favorites={userFavorites}
      />
      <CardsSection
        sectionName={"Sobremesas"} 
        category={"refeicao"} 
        favorites={userFavorites}
      />
      <CardsSection
        sectionName={"Bebidas"} 
        category={"refeicao"} 
        favorites={userFavorites}
      />
      
      <Footer />

    </Container>
  )
  
}
