import { api } from "../services/api";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

function CartProvider({ children }) {

    const [cartAmount, setCartAmount] = useState(0);
    const [cartData, setCartData] = useState({});
    const [lastProductInteracted, setLastProductInteracted] = useState({});

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

        } catch (e) {  
            if (e.response) {
                return alert(e.response.data.message);
            } else {
                return alert('Erro ao consultar dados do pedido');
            }            
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
            if (e.response) {
                alert(e.response.data.message);
            } else {
                return alert('Erro ao adicionar item ao pedido');
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
        } catch(e) {
          console.log(e);  
          return alert("Erro ao excluir produto do pedido");
        }
    }
    
    async function deleteCart() {
        try {
            await api.delete("cart", { withCredentials: true });            
        } catch (e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Erro ao excluir itens do pedido.");
            }
        }
        fetchCart();        
    }

    useEffect(() => {
        fetchCart();
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