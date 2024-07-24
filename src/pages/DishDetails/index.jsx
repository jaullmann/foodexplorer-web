import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { useCart } from "../../hooks/cart";
import { Container, Main } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";
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
  const [favDish, setFavDish] = useState(false);  
  const { dishId } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  async function toggleFavoriteDish(dishKey) {             
    setFavDish(!favDish);
    if (!favDish) {
      try {
        await api.post("/favorites", {
            dish_id: dishKey
        }, 
        { withCredentials: true });   
      } catch(e) {    
          console.log(e);  
          return alert("Erro ao salvar favorito do usuário");
      }     
    } else {
      try {
        await api.delete("favorites", {
            data: {                
                user_id: user.user_id,
                dish_id: dishKey
            },
            withCredentials: true
        });                              
      } catch (e) {    
          console.log(e);  
          return alert("Erro ao excluir favorito do usuário");
      }   
    }       
  } 

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/dishes/${dishId}`, { withCredentials: true });        
        setData(response.data);
        !response.data && navigate("/notfound");
      } catch (e) {   
        alert("Erro ao obter informações do produto")     
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
                {
                  !admin && 
                  <Button 
                    title={"incluir ∙ " + formatCurrency(data.price * amount)} 
                    onClick={() => {                      
                      addToCart({ dishId: dishId, dishAmount: amount})                     
                    }}
                  />
                }
                {
                  admin && 
                  <Button title={"Editar prato"} />
                }
                {admin ? (
                    <PiPencilSimple />
                  ) : (
                    <FiHeart
                      id={`fav-button-dish-${dishId}`}
                      onClick={() => toggleFavoriteDish(dishId)}
                      className={favDish ? "favorite-dish" : ""}
                    />
                  )
                } 
              </div>
            </div>
          </div>
        </Main>       

      }

      <Footer />

    </Container>
  )
}
