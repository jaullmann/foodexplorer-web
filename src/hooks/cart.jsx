import { api } from "../services/api";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {

    const [cartAmount, setCartAmount] = useState(0);

    async function fetchCart() {
        try {
            const response = await api.get(
                'cart', 
                { withCredentials: true }
            );

            let totalDishAmount = 0;
            response.data.forEach(dish => {
              totalDishAmount += dish.dish_amount;
            });

            setCartAmount(totalDishAmount);

        } catch (error) {  
            if (error.response) {
                alert(error.response.data.message);
            } else {
                return alert('Erro ao consultar dados do carrinho de compras');
            }            
        }
    }

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <CartContext.Provider value={{ 
            cartAmount, 
            setCartAmount, 
            fetchCart 
        }}>
            {children}
        </CartContext.Provider>
    )   
}

function useCart() {
    return useContext(CartContext);
}

export { CartProvider, useCart };