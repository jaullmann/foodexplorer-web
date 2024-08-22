import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useSearch } from "../../hooks/search";
import { useTheme } from '../../hooks/theme';
import { Section } from "./styles";
import { MainLogo } from "../MainLogo";
import { SearchInput } from "../SearchInput";
import { CartButtonMobile } from "../CartButtonMobile";
import { CartButton } from "../CartButton";
import { ThemeButton } from "../ThemeButton";
import { SideMenu } from "../SideMenu";
import { LoadingSpinner } from "../LoadingSpinner";
import { InteractionAlert } from "../InteractionAlert";
import { StyledAlert } from "../StyledAlert";
import { FiMenu } from "react-icons/fi";
import { PiSignOut } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { PiNotePencil } from "react-icons/pi";
import { useEffect, useState } from "react";

export function Header({ orderStatuses = {}, isLoading = false }) {
  const { handleInputValue } = useSearch();
  const { user, signOut } = useAuth();
  const { cartAmount } = useCart();
  const { toggleTheme, theme } = useTheme();
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

      <LoadingSpinner isLoading={isLoading}/>   
      <InteractionAlert />
      <StyledAlert />  

      <div className="desktop">
        <MainLogo userRole={admin ? "admin" : "customer"} />
        <SearchInput 
          id="search-input" 
          isSideMenuOpen={false}
        />
        <Link to={"/favorites"} className="header-link"> 
          <FiHeart />
          <h2 className="link-text">Meus favoritos</h2>
          <span className="sr-only">Acessar os favoritos do usuário</span>
        </Link>            
        {
          !admin && 
          <Link to={"/orders"} className="header-link"> 
            <RxCounterClockwiseClock />
            <h2 className="link-text">Meus pedidos</h2>
            <span className="sr-only">Acessar histórico de pedidos do usuário</span>
          </Link>
        }        
        {
          admin && 
          <Link to={"/new"} className="header-link"> 
            <PiNotePencil />
            <h2 className="link-text">Novo Prato</h2>
            <span className="sr-only">Criar um novo produto</span>
          </Link>
        }
        {
          !admin && 
          <CartButton amount={cartAmount} onClick={handlePayment} />
        }
        {
          admin && 
          <CartButton amount={ordersAmount} onClick={() => navigate("/orders")} />
        }
        <button id="theme-btn">
          <ThemeButton
            currentTheme={theme.NAME} 
            onClick={toggleTheme}
          > 
            <span className="sr-only">Alterar entre o tema visual claro e escuro</span>           
          </ThemeButton>                    
        </button>
        <button id="sign-out">
          <PiSignOut
            onClick={handleSignOut}
          >
            <span className="sr-only">Sair da conta</span>    
          </PiSignOut>            
        </button>                  
      </div>
      
      <div className="mobile">
        <FiMenu
          id="side-menu-btn" 
          onClick={openSideMenu}
        >
          <span className="sr-only">Abrir menu de navegação lateral</span>
        </FiMenu>         
        <SideMenu
          admin={admin}                   
          closeSideMenu={closeSideMenu}
          sideMenuOpen={isSideMenuOpen}
          currentTheme={theme.NAME}
          toggleTheme={toggleTheme}
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
