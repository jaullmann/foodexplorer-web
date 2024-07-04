import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 33.125rem;        
    border-radius: .5rem;   

    display: flex;
    flex-direction: column;    

    #payment-option {
        height: 5.125rem;

        display: flex; 
        align-items: center;
        justify-content: center;      
    }
    
    #pix-btn, #credit-btn {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};        
        width: 100%;
        height: 100%;

        display: flex;    
        align-items: center;
        justify-content: center;
        gap: .875rem;

        cursor: pointer;

        > h3 {
            font-size: 1rem;
            ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    #pix-btn {
        border-top-left-radius: .5rem;
        background-color: ${({ theme, $paymentChoice }) => $paymentChoice === "pix" ? theme.COLORS.DARK_800 : "none"};
    }

    #credit-btn {
        border-top-right-radius: .5rem;
        background-color: ${({ theme, $paymentChoice }) => $paymentChoice === "credit" ? theme.COLORS.DARK_800 : "none"};
    }

    #frame-pix {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};    
        border-bottom-left-radius: .5rem;
        border-bottom-right-radius: .5rem;

        height: 100%;
        padding: 3rem 0;

        display: ${({ $paymentChoice }) => $paymentChoice === "pix" ? "flex" : "none"};        
        align-items: center;
        justify-content: center;

        > img {
            height: 15.625rem;
            width: 15.625rem;
        }
    }

    #frame-credit {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};    
        border-bottom-left-radius: .5rem;
        border-bottom-right-radius: .5rem;

        padding: 3.6875rem 5.6875rem 3rem;
        height: 100%;

        display: ${({ $paymentChoice }) => $paymentChoice === "credit" ? "flex" : "none"};        
        flex-direction: column;
        justify-content: space-between;

        gap: 37px;        

        #frame-credit-2 {
            display: flex;
            gap: 1.0625rem;
        }

    }

    .placed-order {
        height: 24.5rem;

        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};    
        border-radius: .5rem;        

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 2.25rem;

        > svg {
            font-size: 8.5rem;
            fill: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        > h3 {
            font-size: 1.5rem;
            ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }
    }
    
`