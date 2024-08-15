import styled from "styled-components";

export const Container = styled.div`    
    width: max-content;
    height: 2rem;
    padding: 0rem 0.5rem;
    border-radius: 0.3rem;     

    display: flex;
    justify-content: center;
    align-items: center;

    // font
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}
    font-size: 0.9rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    opacity: 0;
    animation: fade-in .5s ease-out forwards;
`