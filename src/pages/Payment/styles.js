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
    padding: 2.125rem 12.25rem 2.1rem 4rem;
    width: 100%;
    max-width: 93.5rem; 
    margin-bottom: auto;   

    display: flex;
    align-items: center;
    justify-content: space-between;          

    #dishes {
        margin-top: 2rem;
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
`