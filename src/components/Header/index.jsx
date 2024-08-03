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
import { PiX } from "react-icons/pi";
import SignOut from "../../assets/app_icons/sign_out.svg"
import Menu from "../../assets/app_icons/menu.svg"
import { useState } from "react";


export function Header() {

    const { handleInputValue } = useSearch();
    const { user, signOut } = useAuth();
    const { cartAmount } = useCart();
    const [ isSideMenuVisible, setIsSideMenuVisible ] = useState(false);
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
        navigate("/new", { state: { newDish: true } });
    }   

    function openSideMenu() {
        setIsSideMenuVisible(true);        
    }

    function closeSideMenu() {
        setIsSideMenuVisible(false);        
    }

    return (
        <Section $sideMenuVisible={isSideMenuVisible}>            
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
                <div id="side-menu">
                    <div id={"side-menu-top-bar"}>
                        <PiX onClick={closeSideMenu}/>
                        <h1>Menu</h1>
                    </div>
                    <div id={"side-menu-bottom-bar"}>
                        <SearchInput id="side-menu-search-input" />
                        <div id={"side-menu-links"}>
                            {!admin && <Link to={"/favorites"} id="side-menu-favorites">Meus favoritos</Link>}
                            {!admin && <Link to={"/orders"} id="side-menu-orders">Meus pedidos</Link>}
                            {admin && <button id="side-menu-new" onClick={handleCreate}>Novo prato</button>}
                            <button onClick={handleSignOut}>Sair</button>
                        </div>
                    </div>                    
                </div>
                <button id="side-menu-btn" onClick={openSideMenu}>
                    <img src={Menu} alt="Menu lateral" />  
                </button>                
                <MainLogo />
                {!admin && <CartButtonMobile totalDishes={cartAmount} onClick={handlePayment} />}
                {admin && <div/>}
            </div>                
        </Section>
    );
}