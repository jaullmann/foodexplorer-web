import { Container, Alert } from "./styles";
import { useState, useEffect } from "react";
import { useFavorites } from "../../hooks/favorites";
import { useCart } from "../../hooks/cart";

export function InteractionAlert() {

  const { userFavorites, lastFavoriteInteracted, actionState } = useFavorites();
  const { cartAmount, lastProductInteracted } = useCart();  
  const [favoritesState, setFavoritesState] = useState(0);
  const [cartState, setCartState] = useState(0);
  const [showAlert, setShowAlert]  = useState(false);
  const [message, setMessage] = useState("");
  const [alertImage, setAlertImage] = useState("");

  function setCartAlertMessage(text) {
    setMessage(text);    
    lastProductInteracted.title && setShowAlert(true);    
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  }  

  function setFavoriteAlertMessage(text) {
    setMessage(text);    
    setShowAlert(true);    
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  }  

  function handleFavoritesUpdate() {        
    if (userFavorites?.length > favoritesState && lastFavoriteInteracted.title) {
      setAlertImage(lastFavoriteInteracted.image);
      setFavoriteAlertMessage(`${lastFavoriteInteracted.title} adicionado aos favoritos`);      
    } else if (userFavorites?.length < favoritesState && lastFavoriteInteracted.title) {
      setAlertImage(lastFavoriteInteracted.image);
      setFavoriteAlertMessage(`${lastFavoriteInteracted.title} removido dos favoritos`);      
    } else {
      return
    } 
    setFavoritesState(userFavorites.length);    
  }

  function handleCartUpdate() {
    if (cartAmount > cartState  && lastProductInteracted) {
      setAlertImage(lastProductInteracted.image);
      setCartAlertMessage(`
        ${lastProductInteracted.amount} X 
        ${lastProductInteracted.title} 
        ${lastProductInteracted.amount === 1 ? `adicionado` : `adicionados`} ao pedido
      `);       
    } else if (cartAmount < cartState && lastProductInteracted) {
      setAlertImage(lastProductInteracted.image);
      setCartAlertMessage(`
        ${lastProductInteracted.amount} X 
        ${lastProductInteracted.title} 
        ${lastProductInteracted.amount === 1 ? `removido` : `removidos`} do pedido
      `);      
    } else {
      return
    }   
    setCartState(cartAmount);    
  }

  useEffect(() => {
    handleFavoritesUpdate();
    handleCartUpdate();
  }, [actionState, userFavorites, cartAmount]);

  useEffect(() => {
    setShowAlert(false);
    setMessage("");    
    userFavorites?.length > 0 && setFavoritesState(userFavorites.length);
    setCartState(cartAmount);
  }, []); 

  return (
    <Container $isActive={showAlert}>
      <div id="alert-container">
        <Alert>
          {
            alertImage &&
            <img 
              src={alertImage} 
              alt="Foto do produto"  
            />
          }          
          <h1>
            {message}
          </h1>
        </Alert>
      </div>      
    </Container>
  );
};
