import { api } from "../services/api";
import { useAuth } from "./auth";
import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext({});

function FavoritesProvider({ children }) {

  const [favoritesData, setFavoritesData] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);
  const [actionState, setActionState] = useState(false);
  const [lastFavoriteInteracted, setLastFavoriteInteracted] = useState({});
  const { user, signOut } = useAuth();

  async function fetchFavorites() {
    if (user) {
      try {
        const response = await api.get('favorites', { withCredentials: true });
        const favorites = response.data.map((favorite) => {
          return (
            favorite.dish_id
          )
        });
        setFavoritesData(response.data);
        setUserFavorites(favorites);    
      } catch (e) {
        if (e.response?.status !== 401) {
          return alert(e.response.data.message);
        } 
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
      if (e.response?.status === 401) {
        signOut();
      } else {
        return alert(e.response.data.message);
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
      if (e.response?.status === 401) {
        signOut();
      } else {
        return alert(e.response.data.message);
      }
    } 
  }  

  async function isUserFavorite(dishId) {    
    return userFavorites.includes(Number(dishId));
  }

  useEffect(() => {  
    user && fetchFavorites();    
  }, []);

  return (
    <FavoritesContext.Provider value={{
      favoritesData,
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