import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    margin: auto;
    width: 100%; 
    min-height: 100svh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;       
`;

export const Main = styled.main`
    padding: 2.125rem 4rem 2.1rem 4rem;
    width: 100%;
    max-width: 93.5rem; 
    margin-bottom: auto;   

    display: flex;
    align-items: flex-start;
    justify-content: space-between;  
    gap: 2.5vw;      

    > h1 {
        width: 100vw;
        margin-top: 8rem;
        font-size: 1.7rem;
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        text-align: center;
    }

    #order-details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .section-label {
        padding-bottom: 2rem;
    }

    #dishes {    
        width: 27.5rem;    
        max-height: 57vh;
        padding-right: 2.5rem;
        overflow-y: scroll;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0;
        
        &::-webkit-scrollbar {
        width: .5rem;
        background: transparent;
        overflow: scroll;
        overflow: overlay;
        }
        &::-webkit-scrollbar-track {
            display: block;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.DARK_1000};
            border-radius: 10px;
        }

    }

    > div > h2 {
        margin-top: 2rem;
        font-size: 1.25rem;
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }   
    
    #next-btn, #back-btn {
        display: none;              
    }

    #order-payment {     
        margin-right: 8rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;        
    }
    

    @media (max-width: ${ DEVICE_BREAKPOINTS.LG }) {

        padding: 2.125rem 4rem 2.1rem;

        #order-details, #dishes, .section-label {
            width: 100%;
        }

        #order-details {
            display: ${({ $proceedPayment }) => $proceedPayment ? "none" : "flex"};
        }
        
        #order-payment {
            width: 100%;
            margin: 0;

            display: ${({ $proceedPayment }) => $proceedPayment ? "flex" : "none"};
            align-items: center;

            > label {
                min-width: 26rem; 
                width: 60vw;
            }
        }

        #next-btn, #back-btn {   
            display: block;         
            margin-top: 2.9375rem;
            margin-bottom: 3.625rem;
            align-self: flex-end;
            
            width: 100%;
            max-width: 13.5rem;                   
        }    
        
        #back-btn-frame {
            display: flex;
            justify-content: flex-start;
            min-width: 26rem; 
            width: 60vw;
        } 
        
    }
    
`