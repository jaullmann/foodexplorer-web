import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useSearch } from "../../hooks/search";
import { useNavigate } from "react-router-dom";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { SearchCard } from "../../components/SearchCard";

export function SearchResults() {

  const { searchResult, inputValue, lastRoute } = useSearch();
  const [dishes, setDishes] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const navigate = useNavigate();

  function handleEmptySearch() {
    if (!inputValue) {
      navigate(lastRoute);
    }
  }

  function splitResultsByCategory() {
    const filteredDishes = searchResult.filter(r => r.category === "refeicao");
    const filteredDesserts = searchResult.filter(r => r.category === "sobremesa");
    const filteredDrinks = searchResult.filter(r => r.category === "bebida");
    setDishes(filteredDishes);
    setDesserts(filteredDesserts);
    setDrinks(filteredDrinks);
  }
  
  useEffect(() => {
    splitResultsByCategory();
    handleEmptySearch()   
  }, [inputValue]);

  return (
    <Container> 

      <Header />

      {
        searchResult &&
        <Main>
          {
            searchResult.length > 0 &&
            <h1 id="results">{`Resultados para "${inputValue}"`}</h1>
          }
          {
            dishes.length > 0 &&
            <>
              <SectionLabel title={"Refeições"} />
              <div className={"found-dishes"}>
              {
                dishes.map((foundProduct, index) => (
                  <SearchCard
                    className={"search-card"}
                    key={"found-dish-" + foundProduct.dish_id}
                    dishId={foundProduct.dish_id}
                    title={foundProduct.title}
                    imageFile={
                      foundProduct.image_file ? 
                          `${api.defaults.baseURL}/files/${foundProduct.image_file}` 
                          : 
                          null
                    }   
                    style={{ animationDelay: `${index * 0.1}s` }} 
                  />
                ))
              }
              </div>
            </>            
          }
          {
            desserts.length > 0 &&
            <>
              <SectionLabel title={"Sobremesas"} />
              <div className={"found-dishes"}>
              {
                desserts.map((foundProduct, index) => (
                  <SearchCard
                    className={"search-card"}
                    key={"found-dish-" + foundProduct.dish_id}
                    dishId={foundProduct.dish_id}
                    title={foundProduct.title}
                    imageFile={
                      foundProduct.image_file ? 
                          `${api.defaults.baseURL}/files/${foundProduct.image_file}` 
                          : 
                          null
                    }   
                    style={{ animationDelay: `${index * 0.1}s` }} 
                  />
                ))
              }
              </div>
            </>            
          }
          {
            drinks.length > 0 &&
            <>
              <SectionLabel title={"Bebidas"} />
              <div className={"found-dishes"}>
              {
                drinks.map((foundProduct, index) => (
                  <SearchCard
                    className={"search-card"}
                    key={"found-dish-" + foundProduct.dish_id}
                    dishId={foundProduct.dish_id}
                    title={foundProduct.title}
                    imageFile={
                      foundProduct.image_file ? 
                          `${api.defaults.baseURL}/files/${foundProduct.image_file}` 
                          : 
                          null
                    }   
                    style={{ animationDelay: `${index * 0.1}s` }} 
                  />
                ))
              }
              </div>
            </>            
          }
          {
            searchResult.length === 0 &&
            <h1 id="no-results">Sem resultados para a pesquisa</h1>
          }
        </Main>

      }
      
      <Footer />

    </Container>
  );
}
