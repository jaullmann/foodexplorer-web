import { api } from "../services/api";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth";

const CartContext = createContext({});

function CartProvider({ children }) {

    const [cartAmount, setCartAmount] = useState(0);
    const [cartData, setCartData] = useState({});
    const [lastProductInteracted, setLastProductInteracted] = useState({});
    const { user, signOut } = useAuth();

    async function fetchCart() {
        if (user) {
            try {
                const response = await api.get(
                    "cart", 
                    { withCredentials: true }
                );
    
                setCartData(response.data);
                
                let totalDishAmount = 0;
                response.data.forEach(dish => {
                  totalDishAmount += dish.dish_amount;
                });
    
                setCartAmount(totalDishAmount);
    
            } catch (e) {  
                if (e.response?.status !== 401) {
                    return alert(e.response.data.message);
                }         
            }
        } else {
            setCartAmount(0);
        }        
    }

    async function addToCart({ dishId, dishAmount, dishTitle, dishImage }) {  
        try {
            await api.post(
                "cart",                
                {
                    dish_id: dishId,
                    dish_amount: dishAmount
                },
                { withCredentials: true }
            )
            fetchCart();
            setLastProductInteracted({ 
                title: dishTitle, 
                amount: dishAmount, 
                image: dishImage 
            });
        } catch (e) {
            if (e.response?.status === 401) {
              signOut();
            } else {
              return alert(e.response.data.message);
            }
        } 
    }

    async function deleteFromCart({ dishId, dishAmount, dishTitle, dishImage }) {    
        try {
            await api.delete("cart", {
                data: {                            
                    dish_id: dishId
                },
                withCredentials: true
            });
            fetchCart(); 
            setLastProductInteracted({ 
                    title: dishTitle, 
                    amount: dishAmount, 
                    image: dishImage 
                });         
        } catch (e) {
            if (e.response?.status === 401) {
                signOut();
            } else {
                return alert(e.response.data.message);
            }
        } 
    }
    
    async function deleteCart() {
        try {
            await api.delete("cart", { withCredentials: true });            
        } catch (e) {
            if (e.response?.status === 401) {
                signOut();
            } else {
                return alert(e.response.data.message);
            }
        } 
        fetchCart();        
    }

    useEffect(() => {
        user && fetchCart();
    }, []);

    return (
        <CartContext.Provider value={{ 
            cartData,
            cartAmount, 
            lastProductInteracted,
            setCartAmount, 
            fetchCart,
            addToCart,
            deleteFromCart,
            deleteCart
        }}>
            { children }
        </CartContext.Provider>
    )   
}

function useCart() {
    return useContext(CartContext);
}

export { CartProvider, useCart };