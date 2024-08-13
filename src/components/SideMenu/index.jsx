import { useSearch } from "../../hooks/search";
import { PiX } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { PiNotePencil } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Container, Nav } from "./styles";
import { ThemeButton } from "../ThemeButton";
import { SearchInput } from "../SearchInput";
import { useEffect } from "react";


export function SideMenu({ admin, handleSignOut, closeSideMenu, sideMenuOpen, 
  currentTheme, toggleTheme }) {

  const { searchResult, inputValue } = useSearch();

  useEffect(() => {    
  }, [inputValue])

  return (
    <Container data-menu-is-open={sideMenuOpen}>
      <div id="side-menu-top-bar">
        <div>
          <PiX onClick={closeSideMenu} />
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
            searchResult.length > 0 
            && 
            <Link 
              to={"/search"}
              id="search-results"
              onClick={closeSideMenu}
            >
              {`${searchResult.length} resultado(s) para "${inputValue}"`}
            </Link>
          }
          <Link to={"/favorites"} id="side-menu-favorites">
            <FiHeart />
            <p>Favoritos</p>
          </Link>
          {
            !admin && 
            <Link to={"/orders"} id="side-menu-orders">
              <RxCounterClockwiseClock />
              <p>Meus pedidos</p>
            </Link>
          }
          {
            admin && 
            <Link to={"/new"} id="side-menu-new">
              <PiNotePencil />
              <p>Novo Prato</p>
            </Link>
          }
          <Link id="side-menu-signout">
            <PiSignOut onClick={handleSignOut}/>
            <p onClick={handleSignOut}>Sair</p>
          </Link>          
        </div>
      </Nav>
    </Container>
  );
}
