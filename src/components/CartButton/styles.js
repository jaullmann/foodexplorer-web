import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: max-content;  
  
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 13.5rem;
  height: 3.5rem;
  padding: 0.75rem;
  border-radius: 0.3rem;
  
  // font
  > h3 { 
    width: max-content;  
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}
    font-size: 0.9rem;
  }

  > img {
    font-size: 0.9rem;
    width: 2rem;    
  }

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`