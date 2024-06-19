import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  width: max-content;
  padding: 0 1.8rem;
  
  // font
  ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}
  font-size: clamp(.59rem, .7rem + .4vw, 0.9rem);
  text-align: center;
  vertical-align: center;

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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) { 
    height: 2rem;
    padding: 0 1rem;
    font-size: .875rem;
  }
`;