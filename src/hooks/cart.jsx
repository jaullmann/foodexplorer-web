import { api } from "../services/api";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {

    const [cartAmount, setCartAmount] = useState(0);

    
}