import styled from "styled-components";

export const Container = styled.div`  
    position: fixed;
    z-index: 20;

    margin-left: 7rem;
    width: 85.5rem;
    
    padding: 1.5rem 1rem;
    border-radius: .5rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;    
    
    > h1 {
        padding: 1.5rem 1rem;
        border-radius: .5rem;

        text-align: center;
        font-size: 1.2rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_1000};
        ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    
`