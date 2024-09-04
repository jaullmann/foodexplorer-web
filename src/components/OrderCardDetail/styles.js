import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  max-width: 25.5rem;  
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: .8125rem;
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;

  img {
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 50%;
    
    cursor: pointer;
  }

  svg {
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 50%;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
    fill: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  .card-info {    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: .25rem
  }
  
  .dish-details {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;    

    cursor: pointer;

    > h2 {    
      width: 100%;     
      font-size: 1.25rem;
      ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};      
    }

    > p {
      text-align: right;
      white-space: nowrap;      
      font-size: .85rem;
      ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    @media (max-width: ${ DEVICE_BREAKPOINTS.LG }) {    
      width: 50svw;
    }
  }

  button {
    font-size: .75rem;
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
    color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
  }

  @media (max-width: ${ DEVICE_BREAKPOINTS.LG }) {    
    width: 80svw;
    max-width: 100%;
    overflow-x: hidden;
  }

  .card-info {
    min-width: 16.5rem;
  }

`