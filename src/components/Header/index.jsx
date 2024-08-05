import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useSearch } from "../../hooks/search";
import { Section } from "./styles";
import { MainLogo } from "../MainLogo";
import { SearchInput } from "../SearchInput";
import { CartButtonMobile } from "../CartButtonMobile";
import { CartButton } from "../CartButton";
import { SideMenu } from "../SideMenu";
import SignOut from "../../assets/app_icons/sign_out.svg";
import Menu from "../../assets/app_icons/menu.svg";
import { useState } from "react";

export function Header() {
  const { handleInputValue } = useSearch();
  const { user, signOut } = useAuth();
  const { cartAmount } = useCart();
  const [orders, setOrders] = useState(0);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const navigate = useNavigate();
  const admin = user?.role === "admin";

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handlePayment() {
    handleInputValue("");
    navigate("/payment");
  }

  function handleCreate() {
    handleInputValue("");
    navigate("/new", { state: { newDish: true } });
  }

  function openSideMenu() {
    setIsSideMenuOpen(true);
  }

  function closeSideMenu() {
    setIsSideMenuOpen(false);
  }

  return (
    <Section>
      <div className="desktop">
        <MainLogo userRole={admin ? "admin" : "customer"} />
        <SearchInput id="search-input" />
        <Link to={"/favorites"} id="favorites">Meus favoritos</Link>
        {!admin && <Link to={"/orders"} id="orders">Meus pedidos</Link>}
        {admin && <Link to={"/new"} id="orders">Novo Prato</Link>}
        {!admin && <CartButton amount={cartAmount} onClick={handlePayment} />}
        {admin && <CartButton amount={orders} onClick={() => navigate("/orders")} />}
        <button id="sign-out" onClick={handleSignOut}>
          <img src={SignOut} alt="Sair" />
        </button>
      </div>
      <div className="mobile">
        <button id="side-menu-btn" onClick={openSideMenu}>
          <img src={Menu} alt="Menu lateral" />
        </button>
        <SideMenu
          admin={admin}
          handleCreate={handleCreate}
          handleSignOut={handleSignOut}
          closeSideMenu={closeSideMenu}
          sideMenuOpen={isSideMenuOpen}
        />
        <MainLogo userRole={admin ? "admin" : "customer"} />
        {!admin && (
          <CartButtonMobile
            amount={cartAmount}
            onClick={handlePayment}
          />
        )}
        {admin && (
          <CartButtonMobile
            amount={orders}
            onClick={() => navigate("/orders")}
          />
        )}
      </div>
    </Section>
  );
}
