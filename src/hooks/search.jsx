import { api } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from "react";

const SearchContext = createContext({});

function SearchProvider({ children }) {
  
  const [searchResult, setSearchResult] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [lastRoute, setLastRoute] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();

  async function fetchDishes(searchKey) {
    try {      
      const response = await api.get(
        `dishes?search_key=${searchKey}`, 
        { withCredentials: true }
      );
      setSearchResult(response.data);
      navigate("/search");
    } catch (e) {
      navigate("/notfound");
      return alert("Erro ao efetuar a pesquisa de produtos");
    }
  }

  function handleInputValue(value) {
    setInputValue(value);
  }

  useEffect(() => {
    location.pathname !== '/search' && setLastRoute(location.pathname);    
    if (inputValue.length < 3) {
      setSearchResult([]);      
    } else {
      fetchDishes(inputValue);      
    }            
  }, [inputValue]);  

  return (
    <SearchContext.Provider value={{
      searchResult,
      inputValue,
      lastRoute,
      handleInputValue
    }}>
      { children }
    </SearchContext.Provider>
  )  
}

function useSearch() {
  return useContext(SearchContext);
}

export { SearchProvider, useSearch };