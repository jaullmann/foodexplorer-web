import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { FavoriteCard } from "../../components/FavoriteCard";

export function Favorites() {    

    const [data, setData] = useState();
    const navigate = useNavigate();

    async function fetchFavorites() {
        try {
          const response = await api.get('favorites', { withCredentials: true });
          setData(response.data);        
        } catch(e) {
          navigate("/notfound");              
          return alert("Erro ao consultar os favoritos do usuário");
        }
      }

    useEffect(() => {
        fetchFavorites();
    }, []);

    return(
        
        <Container>

            <Header />  

            {
                data &&                 
                <Main>
                
                    {
                        data.length > 0 &&
                        <SectionLabel title={"Meus Favoritos"}/>  
                    }                  

                    {
                        data.length > 0 &&
                        <div id="fav-dishes">
                            {
                                data.map(( favorite, index ) => (
                                    <FavoriteCard 
                                        className="favorite-card"
                                        key={"fav-dish-" + favorite.dish_id}
                                        dishId={favorite.dish_id}
                                        title={favorite.title}
                                        imageFile={
                                            favorite.image_file ? 
                                                `${api.defaults.baseURL}/files/${favorite.image_file}` 
                                                : 
                                                null
                                        }   
                                        onDeleteFavorite={fetchFavorites}
                                        style={{ animationDelay: `${index * 0.1}s` }}                                  
                                    />
                                ))
                            }                    
                        </div>
                    }

                    {
                        data.length === 0 &&                    
                        <h1>Sem favoritos até o momento</h1>
                    }                                               

                </Main>

            }           
            
            <Footer />

        </Container>        
    )
}
