import { Container } from "./styles";
import { DishCounter } from "../DishCounter";
import { Button } from "../Button";
import Heart from "../../assets/app_icons/heart.svg";
import Pencil from "../../assets/app_icons/pencil.svg";


export function DishCard({ title, imageFile, description, price, favorite = false,
   loading = false, admin=false, onClick }) {

    function formatCurrency(number) {
      const formattedNumber = number.toFixed(2);
      const parts = formattedNumber.split('.');
      return `R$ ${parts[0]},${parts[1]}`;
    }

    return(
        <Container>
          {!admin && <img src={Heart} alt="Favoritar prato"/>}
          {admin && <img src={Pencil} alt="Editar prato"/>} 
          <img 
            src={imageFile} 
            alt="Visualizar detalhes do prato" 
            onClick={onClick}
          />
          <h1 onClick={onClick}>{loading ? "Carregando" : title + " >"}</h1> 
          <h3 onClick={onClick}>{loading ? "Carregando" : description}</h3>
          <h2>{loading ? "R$ --,--" : formatCurrency(price)}</h2>
          <div>
            <DishCounter />
            <Button 
              title={"incluir"}
              loading={loading}    
              onClick={null}          
            />
          </div>                 
        </Container>
    )
}