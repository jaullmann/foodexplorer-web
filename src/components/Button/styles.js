import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  
  // font
  ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}
  font-size: 0.9rem;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  cursor: pointer;

  &.tomato_200 {
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  &.tomato_400 {
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
    
  height: 3rem;
  border: 0;  
  border-radius: 0.3rem; 

  &:disabled {
    opacity: 0.5;
  }  
`;