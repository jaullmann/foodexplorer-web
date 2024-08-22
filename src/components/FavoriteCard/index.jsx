import { PiCameraSlash } from "react-icons/pi";
import { useFavorites } from "../../hooks/favorites";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function FavoriteCard({ dishId, title, imageFile, onDeleteFavorite, ...rest }){
    
    const navigate = useNavigate();
    const { deleteFavorite } = useFavorites();

    async function deleteFavoriteCard() {   
        await deleteFavorite({
            dishId, 
            dishTitle: title,
            dishImage: imageFile
        });
        onDeleteFavorite();            
    }

    function handleDishDetails() {
        navigate(`/description/${dishId}`);
    }

    return(
        <Container {...rest}>            
            {
                imageFile && 
                <>
                    <img 
                        src={imageFile}                
                        alt={"Foto do produto"}
                        onClick={() => handleDishDetails()}
                    />
                    <span className="sr-only">{`Acessar página de detalhes de ${title}`}</span>
                </>                
            }
            {
                !imageFile &&
                <div className="default-image">
                    <PiCameraSlash 
                        onClick={() => handleDishDetails()}
                    />
                    <span className="sr-only">{`Acessar página de detalhes de ${title}`}</span>                    
                </div>                
            }
            <div>
                <h2 onClick={() => handleDishDetails()}>
                    {title}
                    <span className="sr-only">{`Acessar página de detalhes de ${title}`}</span>
                </h2>
                <button onClick={() => deleteFavoriteCard()}>
                    Remover dos favoritos
                    <span className="sr-only">{`Remover ${title} dos favoritos`}</span>
                </button>
            </div>            
        </Container>
    )
}