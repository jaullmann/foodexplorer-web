import { MdClose } from "react-icons/md";
import { Container } from "./styles";
import { PiX, PiPlus } from "react-icons/pi";

export function IngredientEditing({ name = "", onClick }) {
    return(
        <Container>
            <>
                <p>{ name }</p>
                <MdClose 
                    onClick={onClick}
                />
            </>            
        </Container>
    )
}