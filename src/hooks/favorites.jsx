import { api } from "../services/api";
import { useAuth } from "./auth";
import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext({});

function FavoritesProvider({ children }) {

  const [userFavorites, setUserFavorites] = useState([]);
  const [actionState, setActionState] = useState(false);
  const [lastFavoriteInteracted, setLastFavoriteInteracted] = useState({});
  const { user } = useAuth();

  async function fetchFavorites() {
    try {
      const response = await api.get('favorites', { withCredentials: true });
      const favorites = response.data.map((favorite) => {
        return (
          favorite.dish_id
        )
      });
      setUserFavorites(favorites)      
    } catch (e) {
      if (e.response) {
        return alert(e.response.data.message);
      } else {
        return alert('Erro ao consultar os favoritos do cliente');
      }
    }
  }

  async function addFavorite({ dishId, dishTitle, dishImage }) {
    try {
      await api.post("/favorites", {
            dish_id: dishId
        }, 
        { withCredentials: true }); 
      setLastFavoriteInteracted({ 
        title: dishTitle,           
        image: dishImage 
      });      
      await fetchFavorites();
      setActionState(!actionState);
    } catch (e) {
      if (e.response) {
        return alert(e.response.data.message);
      } else {
        return alert('Erro ao salvar favorito do cliente');
      }
    } 
  }

  async function deleteFavorite({ dishId, dishTitle, dishImage }) {
    try {
      await api.delete("favorites", {
          data: {                
                user_id: user.user_id,
                dish_id: dishId
          },
          withCredentials: true
      });
      setLastFavoriteInteracted({ 
        title: dishTitle,           
        image: dishImage 
      }); 
      await fetchFavorites();
      setActionState(!actionState);                         
    } catch (e) {
      if (e.response) {
        return alert(e.response.data.message);
      } else {
        return alert('Erro ao excluir favorito do cliente');
      }
    }
  }  

  async function isUserFavorite(dishId) {    
    return userFavorites.includes(Number(dishId));
  }

  useEffect(() => {  
    fetchFavorites();    
  }, []);

  return (
    <FavoritesContext.Provider value={{
      userFavorites,
      lastFavoriteInteracted,
      actionState,
      fetchFavorites,
      addFavorite,
      deleteFavorite,
      isUserFavorite
    }}>
      { children }      
    </FavoritesContext.Provider>
  )
}

function useFavorites() {
  return useContext(FavoritesContext);
}

export { FavoritesProvider, useFavorites };