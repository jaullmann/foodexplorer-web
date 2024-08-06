import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { useCart } from "../../hooks/cart";
import { useFavorites } from "../../hooks/favorites";
import { Container, Main } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Ingredient } from "../../components/Ingredient";
import { DishCounter } from "../../components/DishCounter";
import { formatCurrency } from "../../functions"


export function DishDetails() {
  
  const [data, setData] = useState(null);
  const [favorite, setFavorite] = useState(false);  
  const [amount, setAmount] = useState(1);  
  const { dishId } = useParams();  
  const { user } = useAuth();
  const { addToCart } = useCart();  
  const { isUserFavorite, addFavorite, deleteFavorite } = useFavorites();  
  const navigate = useNavigate();    
  
  const admin = user.role === "admin"; 
  
  async function toggleUserFavorite() {    
    if (favorite) {
      await deleteFavorite(dishId);      
    } else {
      await addFavorite(dishId);
    }
    setFavorite(!favorite);
  } 

  function handleDish() {
    navigate(`/edit/${dishId}`);
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

  useEffect(() => {
    async function setPreviousFavStatus() {
      const isFavorite = await isUserFavorite(Number(dishId));
      setFavorite(isFavorite);
    }
    setPreviousFavStatus();
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
                {
                  !admin && 
                  <>
                    <DishCounter onAmountChange={setAmount} />
                    <Button 
                      title={"incluir ∙ " + formatCurrency(data.price * amount)} 
                      onClick={() => {                      
                        addToCart({ dishId: dishId, dishAmount: amount})                     
                      }}
                    />
                  </>
                  
                }
                {
                  admin && 
                  <Button 
                    title={"Editar prato"} 
                    onClick={handleDish}
                  />
                }
                <FiHeart
                  id={"fav-button"}
                  onClick={toggleUserFavorite}
                  className={favorite ? "favorite-dish" : ""}
                />
              </div>
            </div>
          </div>
        </Main>       

      }

      <Footer />

    </Container>
  )
}
