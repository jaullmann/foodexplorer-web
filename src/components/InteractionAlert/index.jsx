import { Container, Alert } from "./styles";
import { useState, useEffect } from "react";
import { useFavorites } from "../../hooks/favorites";
import { useCart } from "../../hooks/cart";

export function InteractionAlert() {

  const { userFavorites, lastFavoriteInteracted } = useFavorites();
  const { cartAmount, lastProductInteracted } = useCart();  
  const [favoritesState, setFavoritesState] = useState(0);
  const [cartState, setCartState] = useState(0);
  const [showAlert, setShowAlert]  = useState(false);
  const [message, setMessage] = useState("");
  const [productImage, setProductImage] = useState(null);

  function setAlertMessage(text) {
    setMessage(text);    
    setShowAlert(true);    
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }  

  function handleFavoritesUpdate() {
    if (userFavorites.length > favoritesState && lastFavoriteInteracted) {
      setAlertMessage(`${lastFavoriteInteracted.title} adicionado aos favoritos`);
      setFavoritesState(userFavorites.length);
    }
    if (userFavorites.length < favoritesState && lastFavoriteInteracted) {
      setAlertMessage(`${lastFavoriteInteracted.title} removido dos favoritos`);
      setFavoritesState(userFavorites.length);
    }      
  }

  function handleCartUpdate() {
    if (cartAmount > cartState & lastProductInteracted) {
      setAlertMessage(`
        ${lastProductInteracted.amount} X 
        ${lastProductInteracted.title} 
        ${lastProductInteracted.amount === 1 ? `adicionado` : `adicionados`} ao pedido
      `);
      setCartState(cartAmount);
    }
    if (cartAmount < cartState) {
      setAlertMessage(`
        ${lastProductInteracted.amount} X 
        ${lastProductInteracted.title} 
        ${lastProductInteracted.amount === 1 ? `removido` : `removidos`} do pedido
      `);
      setCartState(cartAmount);
    }      
  }

  useEffect(() => {
    handleFavoritesUpdate();
    handleCartUpdate();
  }, [userFavorites, cartAmount]);

  useEffect(() => {
    setShowAlert(false);
    setMessage("");    
    setFavoritesState(userFavorites.length);
    setCartState(cartAmount);
  }, []); 

  return (
    <Container $isActive={showAlert}>
      <div id="alert-container">
        <Alert>
          <img 
            src={lastProductInteracted.image} 
            alt="Foto do produto"  />
          <h1>
            {message}
          </h1>
        </Alert>
      </div>      
    </Container>
  );
};
