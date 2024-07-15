import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { Container, Main } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Ingredient } from "../../components/Ingredient";
import { DishCounter } from "../../components/DishCounter";
import { formatCurrency } from "../../functions"



export function DishDetails() {
  const { user } = useAuth();
  const admin = user.role === "admin";

  const [data, setData] = useState(null);
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();
  const params = useParams();  

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/dishes/${params.id}`, { withCredentials: true });        
        setData(response.data);
        !response.data && navigate("/notfound");
      } catch (e) {   
        alert("Erro ao obter dados do produto")     
        return navigate("/notfound");                
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
            <img
              src={`${api.defaults.baseURL}/files/${data.image_file}`}
              alt="Foto do prato"
            />
            <div id="dish-details">
              <h1>
                {data.title}
              </h1>
              <p>
                {data.description}
              </p>
              {
                data.ingredients &&
                <div id="ingredients">
                  {
                    data.ingredients.map((ingredient, index) => (
                      <Ingredient 
                        key={index}
                        name={ingredient} 
                      />
                    ))
                  }
                </div>
              }

              <div id="user-action">
                <DishCounter onAmountChange={setAmount} />
                {!admin && <Button title={"incluir ∙ " + formatCurrency(data.price * amount)} />}
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
