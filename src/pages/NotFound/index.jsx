import { PiPlugs } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


export function NotFound() {   

    return(
        <Container>

            <Header />            

            <Main> 

                <div>
                    <PiPlugs />
                    <h1>Ops... Página não encontrada!</h1>  
                    <Link to="/" >Voltar para a Home</Link>
                </div>                             

            </Main>

            <Footer />

        </Container>        
    )
}
