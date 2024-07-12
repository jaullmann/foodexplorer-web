import { Container } from "./styles";

export function FavoriteCard({ title, imageFile }){
    return(
        <Container>
            <img 
                src={imageFile}                
                alt={"Visualizar detalhes do prato"}
                onClick={undefined}
            />
            <div>
                <h2 onClick={undefined}>
                    {title}
                </h2>
                <button onClick={undefined}>
                    Remover dos favoritos
                </button>
            </div>
        </Container>
    )
}