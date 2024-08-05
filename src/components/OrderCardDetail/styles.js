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
  gap: .8125rem;

  img {
    width: 6.25rem;
    height: 6.25rem;
    
    cursor: pointer;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: .25rem
  }
  
  .dish-details {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    cursor: pointer;

    > h2 {    
      font-size: 1.25rem;
      ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > h3 {
      white-space: nowrap;
      font-size: .75rem;
      ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  button {
    font-size: .75rem;
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
    color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
  }

  @media (max-width: ${ DEVICE_BREAKPOINTS.LG }) {    
    max-width: 100%;
  }

  .card-info {
    min-width: 16.5rem;
  }

`