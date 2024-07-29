import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`    
    max-width: 15rem;
    padding: 0;   
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: none;
        width: 100%;
    }
    
    > h3 {
        margin-bottom: 1rem;
        font-size: 1rem;
        ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    position: relative;    
`

export const Label = styled.label`
    width: 100%;
    height: 3rem;    
    padding: 0 2rem;
    border-radius: .5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
       justify-content: flex-start; 
       padding-left: 2rem; 
    }

    input {
        display: none;
    }

    > svg {
        height: 1.5rem;
        width: 1.5rem;
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > p {   
        width: max-content;     
        font-size: .875rem;
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`