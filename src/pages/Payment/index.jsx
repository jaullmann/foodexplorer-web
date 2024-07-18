import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const { orderId } = useParams();

    async function fetchOrder() {
        try {
            const response = await api.get(`/orders/${orderId}`, { withCredentials: true });
            setData(response.data.order_details);                
            setOrderStatus(response.data.status);                
            setPaidOrder(true);                   
        } catch (e) {
            return navigate("/notfound");
        }
    } 

    async function fetchUserCart() {
        try {
            const response = await api.get('/cart', { withCredentials: true });
            setData(response.data);
            setPaidOrder(false);                                         
        } catch (e) {
            console.log(e);
            return navigate("/notfound");
        }                
    }

    useEffect(() => {      
        if (orderId) {            
            fetchOrder();
        } else {            
            fetchUserCart();               
        }               
        
    }, []) 
    
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
                    
                    <div id="order-details">
                        <SectionLabel title={"Meu pedido"} />
                        <div id="dishes">                        
                            {                                   
                                data.map((card) => {                                    
                                    return (
                                        <OrderCardDetail
                                            key={card.dish_id}
                                            dishId={card.dish_id}
                                            title={card.title}
                                            imageFile={`${api.defaults.baseURL}/files/${card.image_file}`}
                                            amount={card.dish_amount}
                                            price={card.dish_price}
                                            paidOrder={paidOrder}
                                            onDeleteCartDish={fetchUserCart}
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
                    
                    <div id="order-payment">
                        <SectionLabel title={paidOrder ? "Situação" : "Pagamento"} />
                        <PaymentFrame paidOrder={paidOrder} orderStatus={orderStatus} />
                        <div id="back-btn-frame">
                            <Button 
                                id={"back-btn"} 
                                title={"< Voltar"} 
                                onClick={() => setProceedPayment(false)}                    
                            />
                        </div>                    
                    </div>

                </Main>
            }            

            <Footer />

        </Container>
    )
}