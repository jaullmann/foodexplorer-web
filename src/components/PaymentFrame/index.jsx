import { useState, useEffect } from "react";
import { Container } from "./styles";
import { LabeledInput } from "../LabeledInput";
import { PaymentButton } from "../PaymentButton";
import PixIcon from "../../assets/app_icons/pix.svg";
import CreditIcon from "../../assets/app_icons/credit_card.svg";
import QrCode from "../../assets/samples/qr_code.svg";


export function PaymentFrame() {

    const [paymentOption, setPaymentOption] = useState("pix");

    // useEffect[() => {
    //     function paymentSelect(button) {        
    //         setPaymentOption(button)        
    //     }      
        
    //     paymentSelect("pix");
    // }, []]    

    return (
        <Container $paymentChoice={paymentOption}>

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

            <div id="frame-pix">
                <img 
                    src={QrCode} 
                    alt="QrCode para pagamento via PIX" 
                />
            </div>

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

        </Container>
    )
}