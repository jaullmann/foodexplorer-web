import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "./styles";

export function FavoriteCard({ dishId, title, imageFile }){

    const { user } = useAuth();
    const navigate = useNavigate();

    async function deleteFavorite(dishKey) {        
        try {
            await api.delete("favorites", {                
                user_id: user.user_id,
                dishKey
            }, 
            { withCredentials: true });   
        } catch(e) {    
            console.log(e);  
            return alert("Erro ao excluir favorito do usuário");
        }
        
    } 

    function handleDishDetails(dishId) { 
        navigate(`/description/${dishId}`);
    }

    return(
        <Container>
            <img 
                src={imageFile}                
                alt={"Visualizar detalhes do prato"}
                onClick={() => handleDishDetails(dishId)}
            />
            <div>
                <h2 onClick={() => handleDishDetails(dishId)}>
                    {title}
                </h2>
                <button onClick={() => deleteFavorite(dishId)}>
                    Remover dos favoritos
                </button>
            </div>
        </Container>
    )
}