import { Container } from "./styles";
import { PiX, PiPlus } from "react-icons/pi";

export function IngredientEditing({ name = "", toAdd = false }) {
    return(
        <Container $toAdd={toAdd}>
            {!toAdd && 
                <>
                    <p>{ name }</p>
                    <button>
                        <PiX />
                    </button>
                </>
                
            }
            {toAdd &&
                <>
                    <p>Adicionar</p>
                    <button>
                        <PiPlus />
                    </button>
                </>                
            }
            
        </Container>
    )
}