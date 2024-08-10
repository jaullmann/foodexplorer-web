import { api } from "../../services/api";
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
import { useEffect, useState } from "react";

export function Header(orderStatuses = {}) {
  const { handleInputValue } = useSearch();
  const { user, signOut } = useAuth();
  const { cartAmount } = useCart();
  const [ordersAmount, setOrdersAmount] = useState(0);
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

  useEffect(() => {
    if (admin) {
      async function fetchOrders() {
        try {
          const response = await api.get("/orders", { withCredentials: true });      
          const openOrders = response.data.filter(ord => ord.status !== 'cancelado' && ord.status !== 'entregue')    
          setOrdersAmount(openOrders.length);
        } catch(e) {
          return alert("Erro ao obter dados de pedidos em aberto.")
        }
      } 
      
      admin && fetchOrders();       
    }        
  }, [navigate, orderStatuses])

  return (
    <Section>
      <div className="desktop">
        <MainLogo userRole={admin ? "admin" : "customer"} />
        <SearchInput 
          id="search-input" 
          isSideMenuOpen={false}
        />
        <Link to={"/favorites"} id="favorites">Meus favoritos</Link>
        {!admin && <Link to={"/orders"} id="orders">Meus pedidos</Link>}
        {admin && <Link to={"/new"} id="orders">Novo Prato</Link>}
        {!admin && <CartButton amount={cartAmount} onClick={handlePayment} />}
        {admin && <CartButton amount={ordersAmount} onClick={() => navigate("/orders")} />}
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
            amount={ordersAmount}
            onClick={() => navigate("/orders")}
          />
        )}
      </div>

    </Section>
  );
}
