import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`    
    min-width: 14.375rem;
    padding: 0;   
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 100%;
    }
    
    > h3 {
        margin-bottom: 1rem;
        font-size: 1rem;
        ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    
`

export const Button = styled.button`
    width: 100%;
    height: 3rem;    
    border-radius: .5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
       justify-content: flex-start; 
       padding-left: 2rem; 
    }

    > svg {
        height: 1.5rem;
        width: 1.5rem;
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > p {        
        font-size: .875rem;
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`