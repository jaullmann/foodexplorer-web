import { api } from "../../services/api";
import { PiClock, PiCheckCircle, PiClockUser, PiForkKnife, PiWarning } from "react-icons/pi";
import { MdOutlinePix } from "react-icons/md";
import { PiCreditCard } from "react-icons/pi";
import { useCart } from "../../hooks/cart";
import { useState } from "react";
import { useAlerts } from "../../hooks/alerts";
import { Container } from "./styles";
import { LabeledCreditInput } from "../LabeledCreditInput";  
import { PaymentButton } from "../PaymentButton";
import { LoadingSpinner } from "../LoadingSpinner";
import QrCode from "../../assets/samples/qr_code.svg";


export function PaymentFrame({ paidOrder=false, orderStatus="preparando", cartData=null, placeNewOrder }) {

    const [paymentOption, setPaymentOption] = useState("pix");
    const [cardNumber, setCardNumber] = useState("");
    const [cardDate, setCardDate] = useState("");
    const [cardCvv, setCardCvv] = useState("");    
    const [isLoading, setIsLoading] = useState(false);  
    const { deleteCart } = useCart();
    const { showAlert } = useAlerts();        

    async function placeOrder() {   
        if (!isValidCardNumber() || !isValidCvv() || !isValidDate()) {
            return
        }
        const orderData = {
            payment_method: paymentOption === "pix" ? "pix" : "credit",
            ordered_dishes: cartData.map((dish) => {
                return({
                    dish_id: dish.dish_id,
                    dish_amount: dish.dish_amount,
                    dish_price_paid: dish.dish_price
                })
            })
        }
        
        let orderId;
        setIsLoading(true);
        try {
            const response = await api.post("orders", orderData, { withCredentials: true });
            orderId = response.data.order_id;            
        } catch (e) {
            if (e.response) {
                showAlert({message: e.response.data.message});
            } else {
                showAlert({message: "Não foi possível finalizar o pedido. Tente mais tarde."});
            }
        }        
        await deleteCart();
        await placeNewOrder(orderId);
        setIsLoading(false);        
        showAlert({message: `Pedido efetuado com sucesso!\nNúmero do pedido: ${orderId}`, type: "info"})        
    };
    
    function isValidCardNumber() {             
        if (cardNumber.length === 19) {
            return true;
        }
        showAlert({message: "Erro - número do cartão deve ter 16 dígitos!", type: "warning"});
        return false;
    };

    function isValidDate() {
        if (cardDate.length === 5) {
            return true;
        }
        showAlert({message: "Erro - data de vencimento incompleta!", type: "warning"});
        return false;
    }
    
    function isValidCvv() {
        if (String(cardCvv).length === 3) {
            return true;
        }
        showAlert({message: "Erro - código de segurança deve ter 3 dígitos!", type: "warning"});
        return false;
    };

    function isValidCardData() {
        return cardNumber.length === 19 && cardDate.length === 5 && String(cardCvv).length === 3
    }    

    return (
        <Container $paymentChoice={paymentOption}>

            <LoadingSpinner isLoading={isLoading}/>            

            {
                !paidOrder &&
                <div id="payment-option">    
                
                    <div 
                        id="pix-btn"
                        onClick={() => setPaymentOption("pix")}
                    >
                        <MdOutlinePix />
                        <h3>PIX</h3>
                    </div>
                    <div 
                        id="credit-btn"
                        onClick={() => setPaymentOption("credit")}
                    >
                        <PiCreditCard />
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
                    <PaymentButton 
                        onClick={placeOrder} 
                        disabled={!isValidCardData()} 
                    />
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