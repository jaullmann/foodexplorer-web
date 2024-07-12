import { api } from "../../services/api";

import { useAuth } from '../../hooks/auth';
import { Container, Main } from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Ingredient } from "../../components/Ingredient";
import { DishCounter } from "../../components/DishCounter";

import { formatCurrency } from "../../functions"
// imagem exemplo para construção do layoyt - excluir **
import SampleImage from "../../assets/samples/dish_image_large_2.png"


export function DishDetails() {    
  const { user } = useAuth();
  const admin = user.role === "admin";

  const [data, setData] = useState(null);    
  const params = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);        
      } catch(e) {
        console.log(e)
        return alert("Erro ao consultar dados do produto");
      }
    }

    fetchProduct();
  }, []);

  return (
    <Container>

      <Header />

      {
        data && 
        <Main>
          <BackButton id="back-button" />
          <div id="dish-presentation">
            <img src={SampleImage} alt="Foto do prato" />
            <div id="dish-details">
              <h1>
                {data.title}
              </h1>
              <p>
                {data.description}
              </p>
              <div id="ingredients">              
                {
                  data.ingredients.map(( ingredient ) => (
                    <Ingredient name={ingredient} />
                  ))
                }
              </div>
              <div id="user-action">
                <DishCounter />
                {!admin && <Button title={"incluir ∙ " + formatCurrency(data.price)} />}
                {admin && <Button title={"Editar prato"} />}
              </div>
            </div>
          </div>  
        </Main>

      }      

      <Footer />

    </Container>
  )
}
