import { api } from "../../services/api";
import { PiClock, PiCheckCircle, PiClockUser, PiForkKnife, PiWarning } from "react-icons/pi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { LabeledCreditInput } from "../LabeledCreditInput";  
import { PaymentButton } from "../PaymentButton";
import PixIcon from "../../assets/app_icons/pix.svg";
import CreditIcon from "../../assets/app_icons/credit_card.svg";
import QrCode from "../../assets/samples/qr_code.svg";


export function PaymentFrame({ paidOrder=false, orderStatus="preparando", cartData=null }) {

    const [paymentOption, setPaymentOption] = useState("pix");
    const [cardNumber, setCardNumber] = useState("");
    const [cardDate, setCardDate] = useState("");
    const [cardCvv, setCardCvv] = useState("");

    const navigate = useNavigate();    

    async function placeOrder() {   
        if (!isValidCardNumber() || !isValidCvv() || !isValidDate()) {
            return
        }
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
        
        let orderId;
        try {
            const response = await api.post("orders", orderData, { withCredentials: true });
            orderId = response.data.order_id;            
        } catch (e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Não foi possível finalizar o pedido.");
            }
        }        
        
        try {
            await api.delete("cart", { withCredentials: true });            
        } catch (e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Pedido registrado; erro ao limpar o carrinho de compras.");
            }
        }

        alert(`Pedido efetuado com sucesso!\nNúmero do pedido: ${orderId}`)
        handleOrderDetails(orderId);
    };
    
    function isValidCardNumber() {             
        if (cardNumber.length === 19) {
            return true;
        }
        alert("Erro - número do cartão deve ter 16 dígitos!");
        return false;
    };

    function isValidDate() {
        if (cardDate.length === 5) {
            return true;
        }
        alert("Erro - data de vencimento incompleta!");
        return false;
    }
    
    function isValidCvv() {
        if (String(cardCvv).length === 3) {
            return true;
        }
        alert("Erro - código de segurança deve ter 3 dígitos!");
        return false;
    };

    function isValidCardData() {
        return cardNumber.length === 19 && cardDate.length === 5 && String(cardCvv).length === 3
    }

    function handleOrderDetails(orderId) {
        navigate(`/orders/${orderId}`)
    }    

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
                            value={cardNumber}
                            onChange={setCardNumber}
                            altStyle
                        />
                    </div>
                    <div id="frame-credit-2">
                        <LabeledCreditInput 
                            label="Validade"
                            placeholder="04/29"                            
                            inputType={"expiryDate"}
                            value={cardDate}
                            onChange={setCardDate}
                            altStyle
                        />
                        <LabeledCreditInput 
                            label="CVV"
                            placeholder="000"
                            inputType={"cvv"}
                            value={cardCvv}
                            onChange={setCardCvv}
                            altStyle
                        />
                    </div>
                    <PaymentButton onClick={placeOrder} disabled={!isValidCardData()} />
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