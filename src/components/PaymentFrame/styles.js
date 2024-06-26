import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 33.125rem;
    height: 28.875rem;
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
        width: 100%;
        height: 100%;

        display: flex;    
        align-items: center;
        justify-content: center;
        gap: .875rem;

        > h3 {
            font-size: 1rem;
            ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    #credit-btn {
        background-color: ${({ theme }) => theme.COLORS.DARK_800}
    }

    #frame-pix {
        height: 22.75rem;
        display: none;    
        align-items: center;
        justify-content: center;
    }

    #frame-credit {
        padding: 3.6875rem 5.6875rem 3rem;

        height: 22.75rem;
        display: flex;
        flex-direction: column;

        gap: 37px;        

        #frame-credit-2 {
            display: flex;
            gap: 1.0625rem;
        }

    }
`