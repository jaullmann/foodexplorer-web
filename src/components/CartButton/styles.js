import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  min-width: 10rem;  
  
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 10.5rem;
  height: 3.5rem;
  padding: 0.75rem;
  border-radius: 0.3rem;
    
  > h3 { 
    width: max-content;  
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}
    font-size: 0.9rem;
  }

  > svg {
    font-size: 2rem;    
  }

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`