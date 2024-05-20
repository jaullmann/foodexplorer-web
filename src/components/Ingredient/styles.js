import styled from "styled-components";

export const Container = styled.div`    
    width: fit-content;
    height: 2rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.3rem; 

    // font
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}
    font-size: 0.9rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`