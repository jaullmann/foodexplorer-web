import { Container, Alert } from "./styles";
import { useState, useEffect } from "react";
import { useFavorites } from "../../hooks/favorites";
import { useCart } from "../../hooks/cart";

export function InteractionAlert() {

  const { userFavorites } = useFavorites();
  const { cartAmount } = useCart();  
  const [favoritesState, setFavoritesState] = useState(0);
  const [cartState, setCartState] = useState(0);
  const [showAlert, setShowAlert]  = useState(false);
  const [message, setMessage] = useState("");

  function setAlertMessage(text) {
    setMessage(text);    
    setShowAlert(true);    
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }  

  function handleFavoritesUpdate() {
    if (userFavorites.length > favoritesState) {
      setAlertMessage("Favorito adicionado com sucesso!");
      setFavoritesState(userFavorites.length);
    }
    if (userFavorites.length < favoritesState) {
      setAlertMessage("Favorito removido com sucesso!");
      setFavoritesState(userFavorites.length);
    }      
  }

  function handleCartUpdate() {
    if (cartAmount > cartState) {
      setAlertMessage("Produto(s) adicionado(s) ao pedido!");
      setCartState(cartAmount);
    }
    if (cartAmount < cartState) {
      setAlertMessage("Produto(s) removido(s) do pedido!");
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
          <h1>
            {message}
          </h1>
        </Alert>
      </div>      
    </Container>
  );
};
