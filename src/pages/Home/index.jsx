import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useAuth } from '../../hooks/auth';
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { CardsSection } from "../../components/CardsSection";
import { Footer } from "../../components/Footer";
import homeBanner from "../../assets/images/home_banner.png";

export function Home() {    

  const [userFavorites, setUserFavorites] = useState([]); 
  const { user } = useAuth(); 

  useEffect(() => {
    async function fetchFavorites() {
        try {
          const response = await api.get('/favorites', { withCredentials: true });
          const favorites = response.data.map((favorite) => {
            return (
              favorite.dish_id
            )
          });
          setUserFavorites(favorites);
          console.log(favorites);
        } catch(e) {  
          console.log(e)                   
          return alert("Erro ao consultar os favoritos do usuário");
        }
      }
  
      fetchFavorites();      
}, [])

  return(
    <Container>

      <Header admin={user.role === 'admin'}/>

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
