import { FiHeart } from "react-icons/fi";
import { PiCameraSlash } from "react-icons/pi";
import { PiPencilSimple } from "react-icons/pi";
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useCart } from "../../hooks/cart";
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
    const navigate = useNavigate();  
    const admin = user.role === "admin"; 
    console.log(imageFile)  

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
        <Container key={String(dishId)} $admin={admin}>
          {admin ? (
              <PiPencilSimple 
                id={`edit-button-dish-${dishId}`}
                onClick={() => handleUpdate(dishId)}
                className={favDish ? "favorite-dish" : ""}
              />
            ) : (
              <FiHeart
                id={`fav-button-dish-${dishId}`}
                onClick={() => toggleFavoriteDish(dishId)}
                className={favDish ? "favorite-dish" : ""}
              />
            )
          } 
          { 
            imageFile &&  
            <img 
              src={imageFile} 
              alt="Foto do produto" 
              onClick={() => handleDetails(dishId)}
            />
          }
          { 
            !imageFile &&  
            <PiCameraSlash
              className="defaultImage"            
              onClick={() => handleDetails(dishId)}
            />
          }
          <div className="dish-title">
            <h1 
              onClick={() => handleDetails(dishId)}>
              {loading ? "Carregando" : title + "\u00A0" + ">"}
            </h1>
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
                  addToCart({ dishId: dishId, dishAmount: amount})                     
                }}         
              />
            </div>     
          }            
        </Container>
    )
}