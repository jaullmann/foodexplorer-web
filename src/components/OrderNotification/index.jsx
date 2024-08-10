import { Container } from "./styles";

export function OrderNotification({ message }) {
    return(
        <Container>
            <h1>
                {message}
            </h1>
        </Container>
    )
}