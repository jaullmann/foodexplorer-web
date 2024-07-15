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
    const [totalPrice, setTotalPrice] = useState(0);
    const [paidOrder, setPaidOrder] = useState(false);
    const [proceedPayment, setProceedPayment] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {        
        if (params.id) {            
            async function fetchOrder() {
                try {
                    const response = await api.get(`/orders/${params.id}`, { withCredentials: true });
                    setData(response.data.order_details);
                    setPaidOrder(true);                
                } catch (e) {
                    console.log(e);
                    return navigate("/notfound");
                }
            }

            fetchOrder();
        } else {
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

            fetchUserCart();               
        }               
        
    }, [params.id]) 
    
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
                                            title={card.title}
                                            imageFile={`${api.defaults.baseURL}/files/${card.image_file}`}
                                            amount={card.dish_amount}
                                            price={card.dish_price}
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
                        <PaymentFrame orderStatus={data.status} />
                        <div id="back-btn-frame">
                            <Button 
                                id={"back-btn"} 
                                title={"< Revisar pedido"} 
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