import { api } from "../../services/api";
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
            <img 
                src={imageFile}                
                alt={"Visualizar detalhes do prato"}
                onClick={() => handleDishDetails(dishId)}
            />
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