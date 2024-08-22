import { FiHeart } from "react-icons/fi";
import { PiCameraSlash } from "react-icons/pi";
import { PiPencilSimple } from "react-icons/pi";
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useCart } from "../../hooks/cart";
import { useFavorites } from "../../hooks/favorites";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { DishCounter } from "../DishCounter";
import { Button } from "../Button";
import { formatCurrency } from "../../functions"
import { useEffect, useState } from 'react';


export function DishCard({ dishId, title, imageFile, description, price, favorites,
   loading = false }) {
    
    const [favDish, setFavDish] = useState(false);
    const [amount, setAmount] = useState(1);  
    const { user } = useAuth();  
    const { addToCart } = useCart();
    const { addFavorite, deleteFavorite } = useFavorites();
    const navigate = useNavigate();  
    const admin = user.role === "admin"; 

    async function toggleFavoriteDish() {             
      setFavDish(!favDish);
      if (!favDish) {
        await addFavorite({
          dishId, 
          dishTitle: title,
          dishImage: imageFile
        })
      } else {
        await deleteFavorite({
          dishId, 
          dishTitle: title,
          dishImage: imageFile
        })
      }       
    } 

    function handleDetails() {       
      navigate(`/description/${dishId}`);    
    }

    function handleUpdate() {
      navigate(`/edit/${dishId}`); 
    }

    useEffect(() => {
      setFavDish(favorites.includes(dishId))      
    }, [favorites])

    return(
        <Container 
          className="dish-card"
          key={String(dishId)} 
          $admin={admin}
        >
          {admin ? (
              <PiPencilSimple 
                id={`edit-button-dish-${dishId}`}
                onClick={() => handleUpdate()}                
              >
                <span className="sr-only">{`Botão para editar ${title}`}</span>
              </PiPencilSimple>
            ) : (
              <FiHeart
                id={`fav-button-dish-${dishId}`}
                onClick={() => toggleFavoriteDish()}
                className={favDish ? "favorite-dish" : ""} 
              >
                <span className="sr-only">{`Botão para adicionar/remover ${title} dos favoritos`}</span>
              </FiHeart>
            )
          } 
          { 
            imageFile &&  
            <>
              <img
                src={imageFile} 
                alt="Foto do produto" 
                onClick={() => handleDetails()}
              />
              <span className="sr-only">{`Acessar página de detalhes de ${title}`}</span>
            </>            
          }
          { 
            !imageFile &&  
            <PiCameraSlash
              className="defaultImage"            
              onClick={() => handleDetails()}
            />
          }
          <div className="dish-title">
            <h1 
              onClick={() => handleDetails(dishId)}>
              {loading ? "Carregando" : title + "\u00A0" + ">"}
            </h1>
            <span className="sr-only">{`Acessar página de detalhes de ${title}`}</span>
          </div>           
          <h3 
            id="dish-description"
          >
            {loading ? "Carregando" : description}
          </h3>
          <h2>{loading ? "R$ --,--" : formatCurrency(price)}</h2>
          {!admin &&
            <div>
              <DishCounter onAmountChange={setAmount}/>
              <Button className={"add-product"}
                title={"incluir"}
                loading={loading}    
                onClick={() => {                      
                  addToCart({ 
                    dishId: dishId, 
                    dishAmount: amount,
                    dishTitle: title,
                    dishImage: imageFile
                  })                        
                }}         
              />
            </div>     
          }            
        </Container>
    )
}