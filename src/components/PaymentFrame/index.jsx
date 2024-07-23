import { api } from "../../services/api";
import { PiClock, PiCheckCircle, PiClockUser, PiForkKnife, PiWarning } from "react-icons/pi";
import { useState, useEffect } from "react";
import { Container } from "./styles";
import { LabeledInput } from "../LabeledInput";
import { LabeledCreditInput } from "../LabeledCreditInput";  
import { PaymentButton } from "../PaymentButton";
import PixIcon from "../../assets/app_icons/pix.svg";
import CreditIcon from "../../assets/app_icons/credit_card.svg";
import QrCode from "../../assets/samples/qr_code.svg";


export function PaymentFrame({ paidOrder=false, orderStatus="preparando", cartData=null }) {

    const [paymentOption, setPaymentOption] = useState("pix");
    const [cardNumber, setCardNumber] = useState("");
    const [cvvNumber, setCvvNumber] = useState("");

    async function placeOrder() {
        const orderData = {
            payment_method: paymentOption === "pix" ? "pix" : "crédito",
            ordered_dishes: cartData.map((dish) => {
                return({
                    dish_id: dish.dish_id,
                    dish_amount: dish.dish_amount,
                    dish_price_paid: dish.dish_price
                })
            })
        }
        console.log(orderData);
        try {
            api.post("orders", { orderData }, { withCredentials: true });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível finalizar o pedido.");
            }
        }
                
    };

    function isValidCardNumber(cardNumber) {
        return cardNumber.length === 19;
    };
    
    function isValidCvv(cvv) {
        return cvv.length === 3;
    };

    return (
        <Container $paymentChoice={paymentOption}>

            {
                !paidOrder &&
                <div id="payment-option">    
                
                    <div 
                        id="pix-btn"
                        onClick={() => setPaymentOption("pix")}
                    >
                        <img 
                            src={PixIcon} 
                            alt="Símbolo do PIX" 
                        />
                        <h3>PIX</h3>
                    </div>
                    <div 
                        id="credit-btn"
                        onClick={() => setPaymentOption("credit")}
                    >
                        <img 
                            src={CreditIcon} 
                            alt="Símbolo de cartão de crédito" 
                        />
                        <h3>Crédito</h3>
                    </div>
                </div>

            }          
            
            {
                !paidOrder &&  
                <div id="frame-pix">
                    <img 
                        src={QrCode} 
                        alt="QrCode para pagamento via PIX" 
                    />
                </div>
            }

            {
               !paidOrder &&  
               <div id="frame-credit">
                    <div id="frame-credit-1">
                        <LabeledCreditInput 
                            label="Número do Cartão"
                            placeholder="0000 0000 0000 0000"
                            inputType={"creditCard"}
                            onChange={e => setCardNumber(e.target.value)}
                            altStyle
                        />
                    </div>
                    <div id="frame-credit-2">
                        <LabeledCreditInput 
                            label="Validade"
                            placeholder="04/29"
                            inputType={"expiryDate"}
                            altStyle
                        />
                        <LabeledCreditInput 
                            label="CVC"
                            placeholder="000"
                            inputType={"cvv"}
                            onChange={e => setCvvNumber(e.target.value)}
                            altStyle
                        />
                    </div>
                    <PaymentButton onClick={placeOrder} />
                </div>
            }

            {
                paidOrder && orderStatus==="pendente" &&
                <div id="frame-waiting" className="placed-order">
                    <PiClock />
                    <h3>Processando pagamento, aguarde.</h3>
                </div>
            }

            {
                paidOrder && orderStatus==="aprovado" &&
                <div id="frame-approved" className="placed-order">
                    <PiCheckCircle />
                    <h3>Pagamento aprovado!</h3>
                </div>
            }

            {
                paidOrder && orderStatus==="preparando" &&
                <div id="frame-preparing" className="placed-order">
                    <PiClockUser />
                    <h3>Pedido em preparação, aguarde.</h3>
                </div>
            }

            {
                paidOrder && orderStatus==="entregue" &&
                <div id="frame-delivered" className="placed-order">
                    <PiForkKnife />
                    <h3>Pedido entregue!</h3>
                </div>
            }

            {
                paidOrder && orderStatus==="cancelado" &&
                <div id="frame-cancelled" className="placed-order">
                    <PiWarning />
                    <h3>Pedido cancelado!</h3>
                </div>
            }            

        </Container>
    )
}