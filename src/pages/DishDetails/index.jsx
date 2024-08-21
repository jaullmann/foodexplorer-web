import { FiHeart } from "react-icons/fi";
import { PiCameraSlash } from "react-icons/pi";
import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { useCart } from "../../hooks/cart";
import { useAlerts } from "../../hooks/alerts";
import { useFavorites } from "../../hooks/favorites";
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
  
  const [data, setData] = useState(null);
  const [favorite, setFavorite] = useState(false);  
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(1);  
  const { dishId } = useParams();  
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { showAlert } = useAlerts();
  const { isUserFavorite, addFavorite, deleteFavorite, userFavorites } = useFavorites();  
  const navigate = useNavigate();    
  
  const admin = user.role === "admin"; 
  
  async function toggleUserFavorite() {    
    if (favorite) {
      await deleteFavorite({
        dishId, 
        dishTitle: data.title,
        dishImage: data.image_file ? `${api.defaults.baseURL}/files/${data.image_file}` : null
      });      
    } else {
      await addFavorite({
        dishId, 
        dishTitle: data.title,
        dishImage: data.image_file ? `${api.defaults.baseURL}/files/${data.image_file}` : null
      });
    }
    setFavorite(!favorite);
  } 

  function handleDish() {
    navigate(`/edit/${dishId}`);
  }

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      try {        
        const response = await api.get(`/dishes/${dishId}`, { withCredentials: true });        
        setData(response.data);        
        !response.data && navigate("/notfound");
      } catch (e) {   
        showAlert({message: "Erro ao obter informações do produto"});
        return navigate("/notfound");                
      } finally {
        setIsLoading(false);
      }
    }  
    fetchProduct();         

  }, []);

  useEffect(() => {
    async function setFavoriteStatus() {
      const isFavorite = await isUserFavorite(dishId);        
      setFavorite(isFavorite);
    }
    setFavoriteStatus();

  }, [userFavorites])

  return (
    <Container>

      <Header isLoading={isLoading}/>  

      {
        data && 

        <Main>
          <BackButton id="back-button" />
          <div id="dish-presentation">            
            {
              data.image_file &&
              <img
                id="dish-image"
                src={`${api.defaults.baseURL}/files/${data.image_file}`}
                alt="Foto do prato"
              />
            }
            {
              !data.image_file &&
              <div id="default-image">
                <PiCameraSlash />
              </div>              
            }

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
                        style={{ animationDelay: `${index * 0.1}s` }} 
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
                        addToCart({ 
                          dishId: dishId, 
                          dishAmount: amount,
                          dishTitle: data.title,
                          dishImage: data.image_file  ? 
                            `${api.defaults.baseURL}/files/${data.image_file}` 
                            : null
                        });                     
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
      <span />

      <Footer />

    </Container>
  )
}
