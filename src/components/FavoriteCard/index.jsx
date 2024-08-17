import { PiCameraSlash } from "react-icons/pi";
import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function FavoriteCard({ dishId, title, imageFile, onDeleteFavorite, ...rest }){

    const { user } = useAuth();
    const navigate = useNavigate();

    async function deleteFavorite(dishKey) {   
        try {
            await api.delete("favorites", {
                data: {                
                    user_id: user.user_id,
                    dish_id: dishKey
                },
                withCredentials: true
            });  
            onDeleteFavorite();
            return alert("Favorito excluído com sucesso!")           
        } catch (e) {                
            return alert("Erro ao excluir favorito do usuário");
        }   
    }

    function handleDishDetails(dishId) {
        navigate(`/description/${dishId}`);
    }

    return(
        <Container {...rest}>            
            {
                imageFile && 
                <img 
                    src={imageFile}                
                    alt={"Foto do produto"}
                    onClick={() => handleDishDetails(dishId)}
                />
            }
            {
                !imageFile &&
                <div className="default-image">
                    <PiCameraSlash 
                        onClick={() => handleDishDetails(dishId)}
                    />
                </div>                
            }
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