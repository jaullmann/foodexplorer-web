import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function BodyFrame({ mainContent }) {    
    return(        
        <Container>
            <Header />  
            <Main>
              { mainContent }
            </Main>              
            <Footer />
        </Container>        
    )
}
