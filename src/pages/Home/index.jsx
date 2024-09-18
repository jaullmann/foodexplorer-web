import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useFavorites } from "../../hooks/favorites";
import { useAuth } from "../../hooks/auth";
import { useAlerts } from "../../hooks/alerts";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { CardsSection } from "../../components/CardsSection";
import { Footer } from "../../components/Footer";
import homeBanner from "../../assets/images/home_banner.png";

export function Home() {    

  const [data, setData] = useState(null);  
  const [isLoading, setIsLoading] = useState(false);
  const { userFavorites, fetchFavorites } = useFavorites();
  const { showAlert } = useAlerts();
  const { user } = useAuth();

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const response = await api.get("dishes", { withCredentials: true });
      setData(response.data);
    } catch (e) {
      if (e.response) {
          showAlert({message: e.response.data.message});
      } else {
          showAlert({message: "Erro ao obter dados dos produtos."});
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
    user && fetchFavorites();
  }, []);

  return(
    
    <Container>

      <Header isLoading={isLoading}/> 

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

      {
        data &&
        <CardsSection
          dishesData={data}
          sectionName={"Refeições"} 
          category={"refeicao"} 
          favorites={userFavorites}
        />
      }
      
      {
        data &&
        <CardsSection
          dishesData={data}
          sectionName={"Sobremesas"} 
          category={"sobremesa"} 
          favorites={userFavorites}
        />
      }
      

      {
        data &&
        <CardsSection
          dishesData={data}
          sectionName={"Bebidas"} 
          category={"bebida"} 
          favorites={userFavorites}
        />
      }
      
      
      <Footer />

    </Container>
  )
  
}
