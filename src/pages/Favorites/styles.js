import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    margin: auto;
    width: 100%; 
    min-height: 100dvh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;       
`;

export const Main = styled.main`
    padding: 2.125rem 4rem;
    width: 100%;
    max-width: 93.5rem; 
    margin-top: 6.5rem;
    margin-bottom: auto; 

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.1875rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin: 8rem 0 3rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding-left: 1.75rem;
        padding-right: 1.75rem;
    }

    > h1 {
        margin-top: 8rem;
        font-size: 1.7rem;
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-align: center;
    }

    label:nth-child(2), 
    label:nth-child(4), 
    label:nth-child(6) {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500}; 
    }

    .fav-dishes {
        width: 100%;

        display: grid;          
        grid-auto-rows: 7rem;        
        grid-template-columns: repeat(4, 24%);           
        justify-content: space-between;
        
        @media(max-width: ${DEVICE_BREAKPOINTS.XL}) {
            grid-template-columns: repeat(3, 31%);    
        }
        @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
            grid-template-columns: repeat(2, 48%);        
        }         
        @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
            grid-template-columns: repeat(1, 100%);         
        } 
             
    }  
    
    .fav-dishes:nth-child(7) {
        margin-bottom: 1.5rem;
    }
    
    //animation effects

    .favorite-card {        
        opacity: 0;
        animation: right-left .2s ease-out forwards;    
    }  
`