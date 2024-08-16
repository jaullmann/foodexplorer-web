import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    margin: auto;
    width: 100%; 
    min-height: 100svh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;       
`;

export const Main = styled.main`
    padding: 2.125rem 4rem;
    width: 100%;
    max-width: 93.5rem;    
    margin-bottom: auto; 

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;

    label {
        margin: .5rem 0;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin: 9rem 0 3rem;
    }

    > h1 {
        margin-top: 8rem;
        font-size: 1.7rem;
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        text-align: center;
    }

    .found-dishes {
        width: 100%;

        display: grid;          
        grid-auto-rows: 6.5rem;      
        grid-row-gap: .5rem;  
        grid-template-columns: repeat(5, 19.5%);        
        justify-content: space-between;

        @media(max-width: ${DEVICE_BREAKPOINTS.UL}) {
            grid-template-columns: repeat(4, 24%);   
        }
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
    
    //animation effects    
    
    .search-card {        
        opacity: 0;
        animation: fade-in .2s ease-out forwards;    
    }  
    
`