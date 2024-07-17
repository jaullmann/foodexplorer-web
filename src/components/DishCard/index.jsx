import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { DishCounter } from "../DishCounter";
import { Button } from "../Button";
import { FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";
import { formatCurrency } from "../../functions"
import { useEffect, useState } from 'react';


export function DishCard({ dishId, title, imageFile, description, price, favorites,
   loading = false }) {
    
    const [favDish, setFavDish] = useState(false);
    const { user } = useAuth();   
    const navigate = useNavigate();  
    const admin = user.role === "admin";   

    async function toggleFavoriteDish(dishKey) {             
      setFavDish(!favDish);
      if (!favDish) {
        try {
          await api.post("/favorites", {
              dish_id: dishKey
          }, 
          { withCredentials: true });   
        } catch(e) {    
            console.log(e);  
            return alert("Erro ao salvar favorito do usuário");
        }     
      } else {
        try {
          await api.delete("favorites", {
              data: {                
                  user_id: user.user_id,
                  dish_id: dishKey
              },
              withCredentials: true
          });                              
        } catch (e) {    
            console.log(e);  
            return alert("Erro ao excluir favorito do usuário");
        }   
      }
       
    } 

    function handleDetails(dishId) {       
      navigate(`/description/${dishId}`);    
    }

    useEffect(() => {
      setFavDish(favorites.includes(dishId))      
    }, [favorites])

    return(
        <Container key={String(dishId)}>
          {!admin && 
            <FiHeart 
              id={"fav-button-dish-" + dishId} 
              onClick={() => toggleFavoriteDish(dishId)}
              className={favDish? "favorite-dish" : ""}
            />
          }
          {admin && <PiPencilSimple />} 
          <img 
            src={imageFile} 
            alt="Visualizar detalhes do prato" 
            onClick={() => handleDetails(dishId)}
          />
          <h1 onClick={() => handleDetails(dishId)}>
            {loading ? "Carregando" : title + " >"}
          </h1> 
          <h3>
            {loading ? "Carregando" : description}
          </h3>
          <h2>{loading ? "R$ --,--" : formatCurrency(price)}</h2>
          {!admin &&
            <div>
              <DishCounter />
              <Button 
                title={"incluir"}
                loading={loading}    
                onClick={null}          
              />
            </div>     
          }            
        </Container>
    )
}