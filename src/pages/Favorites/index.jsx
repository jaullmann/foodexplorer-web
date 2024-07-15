import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { FavoriteCard } from "../../components/FavoriteCard";

export function Favorites() {    

    const [data, setData] = useState();

    useEffect(() => {
        async function fetchFavorites() {
            try {
              const response = await api.get('/favorites', { withCredentials: true });
              setData(response.data);        
            } catch(e) {
              navigate("/notfound");              
              return alert("Erro ao consultar os favoritos do usuário");
            }
          }
      
          fetchFavorites();
    }, [])

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
                                data.map(( favorite ) => (
                                    <FavoriteCard 
                                        key={"fav-dish-" + favorite.dish_id}
                                        dishId={favorite.dish_id}
                                        title={favorite.title}
                                        imageFile={`${api.defaults.baseURL}/files/${favorite.image_file}`}
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
