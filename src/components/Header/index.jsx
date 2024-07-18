import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Section } from "./styles";
import { MainLogo } from "../MainLogo";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { CartButtonMobile } from "../CartButtonMobile";
import { CartButton } from "../CartButton";
import { useState, useEffect } from "react";
import SignOut from "../../assets/app_icons/sign_out.svg"
import Menu from "../../assets/app_icons/menu.svg"


export function Header() {

    const { user, signOut } = useAuth();
    const [cartAmount, setCartAmount] = useState(0);
    const navigate = useNavigate();
    const admin = user?.role === "admin" ? true : false

    async function fetchCart() {
        try {
            const response = await api.get("cart", { withCredentials: true });
            let totalDishAmount = 0;
            response.data.forEach(dish => {
                totalDishAmount += dish.dish_amount;
            });
            setCartAmount(totalDishAmount);          
        }   catch(e) {  
            console.log(e)                   
            return alert("Erro ao consultar os favoritos do usuário");
        }
    }

    useEffect(() => {       
        fetchCart();      
    }, [])

    function handleSignOut() {
        navigate('/')
        signOut();
    }

    return (
        <Section>            
            <div className="desktop">   
                <MainLogo userRole={admin ? "admin" : "customer"} />
                <SearchInput id="search-input" />
                {!admin && <Link to={"/favorites"} id="favorites">Meus favoritos</Link>}
                {!admin && <Link to={"/orders"} id="orders">Meus pedidos</Link>}
                {!admin && <CartButton totalDishes={cartAmount} onClick={() => navigate("/payment")} />}
                {admin && <Button title={'Novo prato'} />}
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
                {!admin && <CartButtonMobile totalDishes={cartAmount} onClick={() => navigate("/payment")} />}
                {admin && <div/>}
            </div>                
        </Section>
    );
}