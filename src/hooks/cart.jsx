import { api } from "../services/api";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {

    const [cartAmount, setCartAmount] = useState(0);
    const [cartData, setCartData] = useState({});

    async function fetchCart() {
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

        } catch (error) {  
            if (error.response) {
                alert(error.response.data.message);
            } else {
                return alert('Erro ao consultar dados do pedido');
            }            
        }
    }

    async function addToCart({dishId, dishAmount}) {  
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
        } catch (error) {  
            if (error.response) {
                alert(error.response.data.message);
            } else {
                return alert('Erro ao adicionar item ao pedido');
            }            
        }
    }

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <CartContext.Provider value={{ 
            cartData,
            cartAmount, 
            setCartAmount, 
            fetchCart,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )   
}

function useCart() {
    return useContext(CartContext);
}

export { CartProvider, useCart };