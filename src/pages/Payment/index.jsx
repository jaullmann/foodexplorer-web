import { useState, useEffect } from "react";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { SectionLabel } from "../../components/SectionLabel";
import { PaymentFrame } from "../../components/PaymentFrame";
import { OrderCardDetail } from "../../components/OrderCardDetail";

export function Payment() {

    const [paidOrder, setPaidOrder] = useState(false);
    const [proceedPayment, setProceedPayment] = useState(false);

    function formatCurrency(number) {
        const formattedNumber = number.toFixed(2);
        const parts = formattedNumber.split('.');
        return `R$ ${parts[0]},${parts[1]}`;
    }
    
    // temporary var for testing
    const cardsData = [
        {
            id: 1, 
            title: "Prato food explorer 1", 
            imageFile: "/src/assets/samples/dish_image_large_1.png", 
            amount: 3,
            price: 23.90
        },
        {
            id: 2, 
            title: "Prato food explorer 2", 
            imageFile: "/src/assets/samples/dish_image_large_2.png", 
            amount: 1,
            price: 22.90
        },
        {
            id: 3, 
            title: "Prato food explorer 3", 
            imageFile: "/src/assets/samples/dish_image_large_3.png", 
            amount: 4,
            price: 24.90
        },
        // {
        //     id: 4, 
        //     title: "Prato food explorer 4", 
        //     imageFile: "/src/assets/samples/dish_image_large_4.png", 
        //     amount: 4,
        //     price: 27.90
        // },{
        //     id: 5, 
        //     title: "Prato food explorer 5", 
        //     imageFile: "/src/assets/samples/dish_image_large_5.png", 
        //     amount: 1,
        //     price: 21.90
        // }
    ] 
    
    return(
        <Container>

            <Header />

            <Main
                $orderPaid={paidOrder}
                $proceedPayment={proceedPayment}
            >

                <div id="order-details">
                    <SectionLabel title={"Meu pedido"} />
                    <div id="dishes">                        
                        {
                            cardsData.map((card) => (                            
                                <OrderCardDetail
                                    key={card.id}
                                    id={card.id}
                                    title={card.title}
                                    imageFile={card.imageFile}
                                    amount={card.amount}
                                    price={card.price}  
                                />                            
                            ))
                        }
                    </div>
                    <h2>{"Total: " + formatCurrency(102.60)}</h2>
                    <Button 
                        id={"next-btn"} 
                        title={"Avançar >"} 
                        onClick={() => setProceedPayment(true)}                    
                    />
                </div>
                
                <div id="order-payment">
                    <SectionLabel title={paidOrder ? "Situação" : "Pagamento"} />
                    <PaymentFrame />
                    <div id="back-btn-frame">
                        <Button 
                            id={"back-btn"} 
                            title={"< Revisar pedido"} 
                            onClick={() => setProceedPayment(false)}                    
                        />
                    </div>                    
                </div>

            </Main>

            <Footer />

        </Container>
    )
}