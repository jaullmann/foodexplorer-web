import { api } from "../../services/api";
import { PiX } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Container, Nav } from "./styles";
import { SearchInput } from "../SearchInput";




export function SideMenu({ admin, handleCreate, handleSignOut, closeSideMenu, sideMenuOpen }) {
  return (
    <Container data-menu-is-open={sideMenuOpen}>
      <div id="side-menu-top-bar">
        <PiX onClick={closeSideMenu} />
        <h1>Menu</h1>
      </div>
      <Nav>
        <SearchInput id="side-menu-search-input" />
        <div id="side-menu-links">
          {!admin && <Link to={"/favorites"} id="side-menu-favorites">Meus favoritos</Link>}
          {!admin && <Link to={"/orders"} id="side-menu-orders">Meus pedidos</Link>}
          {admin && <button id="side-menu-new" onClick={handleCreate}>Novo prato</button>}
          <button onClick={handleSignOut}>Sair</button>
        </div>
      </Nav>
    </Container>
  );
}
