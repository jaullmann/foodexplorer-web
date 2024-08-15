import { Container } from "./styles";

export function Ingredient({ name, ...rest }) {
    return(
        <Container 
            className="dish-ingredient"
            {...rest}
        >
            { name }
        </Container>
    )
}