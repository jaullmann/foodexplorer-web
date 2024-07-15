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
    padding: 2.125rem 4rem;
    width: 100%;
    max-width: 93.5rem; 
    margin-bottom: auto; 

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.1875rem;

    > h1 {
        margin-top: 8rem;
        font-size: 1.7rem;
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        text-align: center;
    }

    #fav-dishes {
        width: 100%;

        display: flex;    
        justify-content: flex-start;
        align-items: center;
        gap: 2.1875rem;
        flex-wrap: wrap;

        @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
            gap: .5rem;     
        }  
    }    
    
`