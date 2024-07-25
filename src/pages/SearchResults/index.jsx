import { api } from "../../services/api";
import { useEffect } from "react";
import { useSearch } from "../../hooks/search";
import { useNavigate } from "react-router-dom";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { FavoriteCard } from "../../components/FavoriteCard";

export function SearchResults() {

  const { searchResult, inputValue } = useSearch();
  const navigate = useNavigate();

  function handleEmptySearch() {
    if (!inputValue) {
      navigate("/");
    }
  }

  useEffect(() => { 
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
            <SectionLabel title={`Resultados para "${inputValue}"`} />
          }
          {
            searchResult.length > 0 &&
            <div id="found-dishes">
              {
                searchResult.map((foundDish) => (
                  <FavoriteCard
                    key={"found-dish-" + foundDish.dish_id}
                    dishId={foundDish.dish_id}
                    title={foundDish.title}
                    imageFile={`${api.defaults.baseURL}/files/${foundDish.image_file}`}
                  />
                ))
              }
            </div>
          }
          {
            searchResult.length === 0 &&
            <h1>Não há pratos com o nome ou ingrediente pesquisado</h1>
          }
        </Main>

      }
      
      <Footer />

    </Container>
  );
}
