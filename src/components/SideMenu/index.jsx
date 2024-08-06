import { useSearch } from "../../hooks/search";
import { PiX } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Container, Nav } from "./styles";
import { SearchInput } from "../SearchInput";
import { useEffect } from "react";


export function SideMenu({ admin, handleCreate, handleSignOut, closeSideMenu, sideMenuOpen }) {

  const { searchResult, inputValue } = useSearch();

  useEffect(() => {    
  }, [inputValue])

  return (
    <Container data-menu-is-open={sideMenuOpen}>
      <div id="side-menu-top-bar">
        <PiX onClick={closeSideMenu} />
        <h1>Menu</h1>
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
          <Link to={"/favorites"} id="side-menu-favorites">Meus favoritos</Link>
          {!admin && <Link to={"/orders"} id="side-menu-orders">Meus pedidos</Link>}
          {admin && <button id="side-menu-new" onClick={handleCreate}>Novo prato</button>}
          <button onClick={handleSignOut}>Sair</button>
        </div>
      </Nav>
    </Container>
  );
}
