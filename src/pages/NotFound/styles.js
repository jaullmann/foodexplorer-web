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
    margin-top: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.1875rem;  
    
    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        svg {
            font-size: 8rem;
            fill: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        h1 {
            font-size: 2.2rem;
            ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        a {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
    
     
`