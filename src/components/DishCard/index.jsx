import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { DishCounter } from "../DishCounter";
import { Button } from "../Button";
import { FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";
import { formatCurrency } from "../../functions"


export function DishCard({ dishId, title, imageFile, description, price, favorite = false,
   loading = false, onClick }) {
    
    const { user } = useAuth();
    const admin = user.role === "admin";
    const navigate = useNavigate();   

    function handleDetails(dishId) { 
      navigate(`/description/${dishId}`)    
    }

    return(
        <Container key={String(dishId)} $favorite={favorite}>
          {!admin && <FiHeart id="fav-button"/>}
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