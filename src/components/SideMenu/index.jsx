import { useSearch } from "../../hooks/search";
import { PiX } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { PiNotePencil } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav } from "./styles";
import { ThemeButton } from "../ThemeButton";
import { SearchInput } from "../SearchInput";
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";


export function SideMenu({ admin, closeSideMenu, sideMenuOpen, 
  currentTheme, toggleTheme }) {

  const { searchResult, inputValue, handleInputValue } = useSearch();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {    
    navigate("/");
    signOut();
  }

  function closeMenuAndClearSearch() {    
    closeSideMenu();   
    handleInputValue(""); 
  }

  useEffect(() => {    
  }, [inputValue])

  return (
    <Container data-menu-is-open={sideMenuOpen}>
      <div id="side-menu-top-bar">
        <div>
          <PiX
            onClick={closeSideMenu}
          >
            <span className="sr-only">Fechar menu de navegação lateral</span>
          </PiX> 
          <h1>Menu</h1>
        </div>        
        <ThemeButton
          currentTheme={currentTheme}
          onClick={toggleTheme}
        />       
      </div>      
      <Nav>
        <SearchInput 
          id="side-menu-search-input" 
          isSideMenuOpen={true}
        />
        <div id="side-menu-links">
          { 
            searchResult?.length > 0 
            && 
            <Link 
              to={"/search"}
              id="search-results"
              onClick={closeSideMenu}
            >
              {`${searchResult.length} resultado(s) para "${inputValue}"`}
              <span className="sr-only">Acessar os resultatos da pesquisa realizada</span>
            </Link>
          }
          { 
            (searchResult?.length === 0 && inputValue.length > 2)
            && 
            <Link               
              id="search-results"
              onClick={closeMenuAndClearSearch}
            >
              {`Sem resultados para "${inputValue}"`}
              <span className="sr-only">{`Nenhum resultado encontrado para "${inputValue}"`}</span>
            </Link>
          }
          <Link to={"/favorites"} id="side-menu-favorites">
            <FiHeart />
            <p>Favoritos</p>
            <span className="sr-only">Acessar os favoritos do usuário</span>
          </Link>
          {
            !admin && 
            <Link to={"/orders"} id="side-menu-orders">
              <RxCounterClockwiseClock />
              <p>Meus pedidos</p>
              <span className="sr-only">Acessar histórico de pedidos do usuário</span>
            </Link>
          }
          {
            admin && 
            <Link to={"/new"} id="side-menu-new">
              <PiNotePencil />
              <p>Novo Prato</p>
              <span className="sr-only">Criar um novo produto</span>
            </Link>
          }
          <Link id="side-menu-signout">
            <PiSignOut onClick={handleSignOut}/>
            <p onClick={handleSignOut}>Sair</p>
            <span className="sr-only">Sair da conta</span>
          </Link>          
        </div>
      </Nav>
    </Container>
  );
}
