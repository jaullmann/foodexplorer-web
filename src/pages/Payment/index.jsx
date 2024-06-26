import { useState, useEffect } from "react";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { OrderCardDetail } from "../../components/OrderCardDetail";

export function Payment() {

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
        {
            id: 4, 
            title: "Prato food explorer 4", 
            imageFile: "/src/assets/samples/dish_image_large_3.png", 
            amount: 4,
            price: 24.90
        },

    ] 
    
    return(
        <Container>

            <Header />

            <Main>
                <div id="order-details">
                    <SectionLabel title={"Meu pedido"} />
                    <div id="dishes">                        
                        {
                            cardsData.map((card) => (                            
                                <OrderCardDetail
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
                </div>
                <div id="order-payment">

                </div>
            </Main>

            <Footer />

        </Container>
    )
}