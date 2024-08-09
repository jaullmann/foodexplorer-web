import { PiCameraSlash } from "react-icons/pi";
import { useSearch } from '../../hooks/search';
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function SearchCard({ dishId, title, imageFile, ...rest }){

    const { handleInputValue } = useSearch();
    const navigate = useNavigate();    

    function handleDishDetails(dishId) { 
        handleInputValue("");
        navigate(`/description/${dishId}`);
    }

    return(
        <Container>
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
                <h2 
                    onClick={() => handleDishDetails(dishId)}
                >
                    {title}
                </h2>
            </div>
        </Container>
    )
}