import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 100%;  
  min-width: max-content;
  
  align-items: center;
  justify-content: center;  
  gap: .6rem;
  
  height: 3.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.3rem;
  
  // font
  > h3 {      
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