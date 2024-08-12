import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;  

  justify-content: center;
  align-items: center;
  gap: 1.1875rem;

  width: 20.5rem;
  cursor: pointer;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: .675rem;
    width: 20rem;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: .9rem;
    width: 19.4rem;
  }

  > img {
    width: 3rem;    
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  > div h1 {
    ${({ theme }) => theme.FONTS.ROBOTO_BOLD}
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.625rem;
    width: max-content;    
  } 

  > div h3 {
    position: absolute;
    bottom: -0.8rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      bottom: 0.4rem;    
      right: -2.6rem;
    }

    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    font-size: 0.75rem;        
  }

  .customer {
    display: none;
  }

`