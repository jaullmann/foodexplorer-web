import { PiPlugs } from "react-icons/pi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


export function NotFound() {   

    const { user } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/"); 
        }
    }, [user])

    return(
        user && 
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
