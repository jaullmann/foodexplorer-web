import { PiPlugs } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


export function NotFound() {   

    const navigate = useNavigate()

    return(
        <Container>

            <Header />            

            <Main> 

                <div>
                    <PiPlugs />
                    <h1>Ops... Algo deu errado!</h1>  
                    <button onClick={() => navigate("/")}>Voltar</button>
                </div>                             

            </Main>

            <Footer />

        </Container>        
    )
}
