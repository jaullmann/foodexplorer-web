import { useState, useEffect } from "react";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { FavoriteCard } from "../../components/FavoriteCard";

export function Favorites() {

    // data sample
    const userFavorites = [
        {
            "user_id": 2,
            "dish_id": 1,
            "title": "Massa aos Quatro Queijos com Filé Mignon",
            "category": "refeição",
            "image_file": "/src/assets/samples/dish_image_large_1.png"
        },
        {
            "user_id": 2,
            "dish_id": 2,
            "title": "Lasanha de Beringela",
            "category": "refeição",
            "image_file": "/src/assets/samples/dish_image_large_2.png"
        },
        {
            "user_id": 2,
            "dish_id": 3,
            "title": "Salada Radish",
            "category": "refeição",
            "image_file": "/src/assets/samples/dish_image_large_3.png"
        },
        {
            "user_id": 2,
            "dish_id": 4,
            "title": "Espaguete à bolonhesa",
            "category": "refeição",
            "image_file": "/src/assets/samples/dish_image_large_1.png"
        },
        {
            "user_id": 2,
            "dish_id": 5,
            "title": "Lasanha de Beringela",
            "category": "refeição",
            "image_file": "/src/assets/samples/dish_image_large_2.png"
        },
        {
            "user_id": 2,
            "dish_id": 6,
            "title": "Lasanha de Frango",
            "category": "refeição",
            "image_file": "/src/assets/samples/dish_image_large_3.png"
        },
        {
            "user_id": 2,
            "dish_id": 7,
            "title": "Espaguete à bolonhesa",
            "category": "refeição",
            "image_file": "/src/assets/samples/dish_image_large_1.png"
        },
        {
            "user_id": 2,
            "dish_id": 8,
            "title": "Lasanha de Beringela",
            "category": "refeição",
            "image_file": "/src/assets/samples/dish_image_large_2.png"
        },
        {
            "user_id": 2,
            "dish_id": 9,
            "title": "Lasanha de Frango",
            "category": "refeição",
            "image_file": "/src/assets/samples/dish_image_large_3.png"
        }

    ]

    return(
        <Container>

            <Header />            

            <Main> 

                <SectionLabel title={"Meus Favoritos"}/>

                <div id="fav-dishes">

                    {
                        userFavorites.map(( favorite ) => (
                            <FavoriteCard 
                                key={"fav-dish-" + favorite.dish_id}
                                dishId={favorite.dish_id}
                                title={favorite.title}
                                imageFile={favorite.image_file}
                            />
                        ))
                    }
                    
                </div>              

                

            </Main>

            <Footer />

        </Container>        
    )
}
