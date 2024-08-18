import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { useLoading } from "../../hooks/loading";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { SectionLabel } from "../../components/SectionLabel";
import { PaymentFrame } from "../../components/PaymentFrame";
import { OrderCardDetail } from "../../components/OrderCardDetail";
import { formatCurrency } from "../../functions";

export function Payment() {

    const [data, setData] = useState(null);
    const [orderStatus, setOrderStatus] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [paidOrder, setPaidOrder] = useState(false);
    const [proceedPayment, setProceedPayment] = useState(false);
    const [newOrderId, setNewOrderId] = useState("");
    const { orderId } = useParams();
    const { showLoading, hideLoading } = useLoading();
    const { user } = useAuth();
    const navigate = useNavigate();   

    const admin = user.role === "admin";      

    async function fetchOrder() {
        showLoading();
        try {
            const response = await api.get(
                `/orders/${newOrderId || orderId}`, 
                { withCredentials: true }
            );
            setData(response.data.order_details);                
            setOrderStatus(response.data.status);                
            setPaidOrder(true);                   
        } catch (e) {
            return navigate("/notfound");
        } finally {
            hideLoading();
        }
    } 

    async function fetchUserCart() {
        showLoading();
        try {
            const response = await api.get('/cart', { withCredentials: true });
            setData(response.data);
            setPaidOrder(false);                                         
        } catch (e) {            
            return navigate("/notfound");
        } finally {
            hideLoading();
        }        
    }

    function placeNewOrder(orderId) {
        setNewOrderId(orderId);
    }

    useEffect(() => {      
        if (orderId || newOrderId) {            
            fetchOrder();
        } else {            
            fetchUserCart();            
        }            
    }, [newOrderId, navigate]) 
    
    useEffect(() => {
        if (data){
            const total = data.reduce((accum, dish) => accum + (dish.dish_amount * dish.dish_price), 0);
            setTotalPrice(total);            
        }                 
    }, [data]);   

    
    return(
        <Container>

            <Header />

            {
                data &&
                <Main                
                    $proceedPayment={proceedPayment}
                >
                    {
                        data.length > 0 &&
                        <div id="order-details">
                            <SectionLabel title={admin ? "Detalhes do pedido" : "Meu pedido"} />
                            <div id="dishes">                        
                                {                                   
                                    data.map((card, index) => {                                    
                                        return (
                                            <OrderCardDetail
                                                className="order-card"
                                                key={card.dish_id}
                                                dishId={card.dish_id}
                                                title={card.title}
                                                imageFile={
                                                    card.image_file ? 
                                                    `${api.defaults.baseURL}/files/${card.image_file}` 
                                                    : 
                                                    null
                                                }
                                                amount={card.dish_amount}
                                                price={card.dish_price}
                                                paidOrder={paidOrder}
                                                onDeleteCartDish={fetchUserCart}
                                                style={{ animationDelay: `${index * 0.1}s` }} 
                                            />
                                        );
                                    })
                                }
                                
                            </div>
                            <h2 id="total">{"Total: " + formatCurrency(totalPrice)}</h2>
                            <Button 
                                id={"next-btn"} 
                                title={"Avançar >"} 
                                onClick={() => setProceedPayment(true)}                    
                            />
                        </div>
                    }
                    {
                        data.length > 0 &&
                        <div id="order-payment">
                            <SectionLabel 
                                title={paidOrder ? "Situação" : "Pagamento"} 
                            />
                            <PaymentFrame 
                                paidOrder={paidOrder} 
                                orderStatus={orderStatus} 
                                cartData={data}
                                placeNewOrder={placeNewOrder}
                            />
                            <div id="back-btn-frame">
                                <Button 
                                    id="back-btn" 
                                    title={"< Voltar"} 
                                    onClick={() => setProceedPayment(false)}                    
                                />
                            </div>                    
                        </div>
                    }
                {   
                    data.length === 0 &&
                    <h1>Não existem pedidos em aberto até o momento</h1>
                }

                </Main>
            }            

            <Footer />

        </Container>
    )
}