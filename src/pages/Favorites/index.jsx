import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useFavorites } from "../../hooks/favorites";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { FavoriteCard } from "../../components/FavoriteCard";

export function Favorites() {    

    const [data, setData] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { fetchFavorites, favoritesData, userFavorites } = useFavorites();   
    
    function splitFavoritesByCategory() {
        if (!data) return; 
        const filteredDishes = data.filter(r => r.category === "refeicao");
        const filteredDesserts = data.filter(r => r.category === "sobremesa");
        const filteredDrinks = data.filter(r => r.category === "bebida");
        setDishes(filteredDishes);
        setDesserts(filteredDesserts);
        setDrinks(filteredDrinks);
    }

    async function fetchUserFavorites() {
        setIsLoading(true);
        await fetchFavorites();
        setData(favoritesData);        
        setIsLoading(false);
    }

    useEffect(() => {
        fetchUserFavorites();
    }, []);

    useEffect(() => {    
        if (favoritesData) {
            setData(favoritesData);
        }
    }, [favoritesData]);

    useEffect(() => {
        if (data) {
            splitFavoritesByCategory();
        }
    }, [data]);

    return(
        
        <Container>            

            <Header isLoading={isLoading}/>           

            {
                data &&                 
                <Main>
                
                    {
                        data.length > 0 &&
                        <SectionLabel title={"Meus Favoritos"}/>  
                    }                  

                    {
                        dishes.length > 0 &&
                        <>
                            <SectionLabel title={"Refeições"}/>
                            <div className="fav-dishes">
                                {
                                    dishes.map(( favorite, index ) => (
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
                        </>                        
                    }

                    {
                        desserts.length > 0 &&
                        <>
                            <SectionLabel title={"Sobremesas"}/>
                            <div className="fav-dishes">
                                {
                                    desserts.map(( favorite, index ) => (
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
                        </>                        
                    }

                    {
                        drinks.length > 0 &&
                        <>
                            <SectionLabel title={"Bebidas"}/>
                            <div className="fav-dishes">
                                {
                                    drinks.map(( favorite, index ) => (
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
                        </>                        
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
