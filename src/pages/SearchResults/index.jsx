import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { FavoriteCard } from "../../components/FavoriteCard";

export function SearchResults() {
  const [data, setData] = useState([]);
  const { dishQuery: inputText } = useParams();
  const navigate = useNavigate();

  async function fetchDishes(searchKey) {
    try {
      const response = await api.get(`dishes?search_key=${searchKey}`, { withCredentials: true });
      setData(response.data);
    } catch (e) {
      navigate("/notfound");
      return alert("Erro ao efetuar a pesquisa de produtos");
    }
  }

  useEffect(() => {
    if (inputText) {
      fetchDishes(inputText);
    }
  }, [inputText]);

  return (
    <Container>

      <Header />

      {
        data &&
        <Main>
          {
            data.length > 0 &&
            <SectionLabel title={`Resultados para "${inputText}"`} />
          }
          {
            data.length > 0 &&
            <div id="found-dishes">
              {
                data.map((foundDish) => (
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
            data.length === 0 &&
            <h1>Não há pratos com o nome ou ingrediente pesquisado</h1>
          }
        </Main>

      }
      
      <Footer />

    </Container>
  );
}
