import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Section = styled.section`
  margin: 2.875rem auto 0;
  display: flex;
  flex-direction: column;
  
  max-width: 70rem;
  position: relative;

  #gradient-left, #gradient-right {
    width: 17.375rem;
    height: 32rem;
    position: absolute;
    top: 4.7rem;
    padding: 1.1875rem; 
    pointer-events: none;
    display: flex;
    align-items: center;

    > svg {
      height: 2.5rem;
      width: 2.5rem;
      fill: ${({ theme }) => theme.COLORS.LIGHT_300};        
      cursor: pointer;
    }
  }

  #gradient-left{     
    justify-content: left;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    z-index: 2;    
  }

  #gradient-right{
    justify-content: right;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
    right: 0;
    z-index: 2;    
  }

  h1 {
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}; 
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};    
    
    margin-bottom: 1.4375rem;
  }

  .swiper-button-prev, .swiper-button-next {
    color: transparent;
    width: 2.5rem;
    height: 2.5rem;
    top: 16.7rem;  
  }

`