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
    padding: 2.625rem 4rem;
    width: 100%;
    max-width: 93.5rem; 
    margin-bottom: auto; 
    margin-top: 15rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.1875rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding-left: 1.75rem;
        padding-right: 1.75rem;
    }
         
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

        button {
            font-size: 1.5rem;
            ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
            color: ${({ theme }) => theme.COLORS.LIGHT_200};
        }
    }
    
     
`