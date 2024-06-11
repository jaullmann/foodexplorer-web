import { Container } from "./styles";
import { DishCounter } from "../DishCounter";
import { Button } from "../Button";
import { FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";


export function DishCard({ title, imageFile, description, price, favorite = false,
   loading = false, admin = false, onClick }) {

    function formatCurrency(number) {
      const formattedNumber = number.toFixed(2);
      const parts = formattedNumber.split('.');
      return `R$ ${parts[0]},${parts[1]}`;
    }

    return(
        <Container $favorite={favorite}>
          {!admin && <FiHeart id="fav-button"/>}
          {admin && <PiPencilSimple />} 
          <img 
            src={imageFile} 
            alt="Visualizar detalhes do prato" 
            onClick={onClick}
          />
          <h1 onClick={onClick}>
            {loading ? "Carregando" : title + " >"}
          </h1> 
          <h3>
            {loading ? "Carregando" : description}
          </h3>
          <h2>{loading ? "R$ --,--" : formatCurrency(price)}</h2>
          {!admin &&
            <div>
              <DishCounter />
              <Button 
                title={"incluir"}
                loading={loading}    
                onClick={null}          
              />
            </div>     
          }            
        </Container>
    )
}