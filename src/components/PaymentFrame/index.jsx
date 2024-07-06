import { PiClock, PiCheckCircle, PiClockUser, PiForkKnife, PiWarning } from "react-icons/pi";
import { useState, useEffect } from "react";
import { Container } from "./styles";
import { LabeledInput } from "../LabeledInput";
import { PaymentButton } from "../PaymentButton";
import PixIcon from "../../assets/app_icons/pix.svg";
import CreditIcon from "../../assets/app_icons/credit_card.svg";
import QrCode from "../../assets/samples/qr_code.svg";


export function PaymentFrame({ paidOrder=true, orderStatus="entregue" }) {

    const [paymentOption, setPaymentOption] = useState("pix");

    // useEffect[() => {
    //     function paymentSelect(button) {        
    //         setPaymentOption(button)        
    //     }      
            
    //     paymentSelect("pix");
    // }, []]    

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
                        <LabeledInput 
                            label="Número do Cartão"
                            placeholder="0000 0000 0000 0000"
                            altStyle
                        />
                    </div>
                    <div id="frame-credit-2">
                        <LabeledInput 
                            label="Validade"
                            placeholder="04/25"
                            altStyle
                        />
                        <LabeledInput 
                            label="CVC"
                            placeholder="000"
                            altStyle
                        />
                    </div>
                    <PaymentButton />
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