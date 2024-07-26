import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useSearch } from "../../hooks/search";
import { Section } from "./styles";
import { MainLogo } from "../MainLogo";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { CartButtonMobile } from "../CartButtonMobile";
import { CartButton } from "../CartButton";
import SignOut from "../../assets/app_icons/sign_out.svg"
import Menu from "../../assets/app_icons/menu.svg"


export function Header() {

    const { handleInputValue } = useSearch();
    const { user, signOut } = useAuth();
    const { cartAmount } = useCart();
    const navigate = useNavigate();
    const admin = user?.role === "admin"

    function handleSignOut() {
        navigate('/')
        signOut();
    }

    function handlePayment() {
        handleInputValue("");
        navigate("/payment");
    }

    function handleCreate() {
        handleInputValue("");
        navigate("/new");
    }

    return (
        <Section>            
            <div className="desktop">   
                <MainLogo userRole={admin ? "admin" : "customer"} />
                <SearchInput id="search-input" />
                {!admin && <Link to={"/favorites"} id="favorites">Meus favoritos</Link>}
                {!admin && <Link to={"/orders"} id="orders">Meus pedidos</Link>}
                {!admin && <CartButton totalDishes={cartAmount} onClick={handlePayment} />}
                {admin && <Button title={'Novo prato'} onClick={handleCreate} />}
                <button 
                    id="sign-out"
                    onClick={handleSignOut}
                >
                    <img src={SignOut} alt="Sair" />
                </button>                
            </div>
            <div className="mobile">
                <button id="side-menu">
                    <img src={Menu} alt="Menu lateral" />  
                </button>                
                <MainLogo />
                {!admin && <CartButtonMobile totalDishes={cartAmount} onClick={handlePayment} />}
                {admin && <div/>}
            </div>                
        </Section>
    );
}