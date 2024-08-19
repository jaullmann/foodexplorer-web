import { PiCameraSlash } from "react-icons/pi";
import { useFavorites } from "../../hooks/favorites";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function FavoriteCard({ dishId, title, imageFile, onDeleteFavorite, ...rest }){
    
    const navigate = useNavigate();
    const { deleteFavorite } = useFavorites();

    async function deleteFavoriteCard(dishKey) {   
        await deleteFavorite(dishKey);
        onDeleteFavorite();            
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
                <button onClick={() => deleteFavoriteCard(dishId)}>
                    Remover dos favoritos
                </button>
            </div>
        </Container>
    )
}