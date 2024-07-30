import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Section = styled.section`
  margin: auto;
  padding: 0 4rem 2.9375rem;
  width: 100%;
   
  > #slider, h1 {    
    margin: auto;
    max-width: 85.5rem;
    position: relative;    
  }

  #gradient-layer {
    position: absolute;    
    left: 0;
    padding: 0 .5rem;
    top: 0;
    
    width: 100%; 
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.COLORS.DARK_100} 5%, 
      transparent 30%,
      transparent 70%,
      ${({ theme }) => theme.COLORS.DARK_100} 95%
    );

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {        
        background: linear-gradient(90deg, 
          ${({ theme }) => theme.COLORS.DARK_100} 5%, 
          transparent 15%,
          transparent 80%,
          ${({ theme }) => theme.COLORS.DARK_100} 95%
        );
    
      }
    
    z-index: 1;

    pointer-events: none;

    > svg {
      height: 2.5rem;
      width: 2.5rem;
      fill: ${({ theme }) => theme.COLORS.LIGHT_300};        
      cursor: pointer;
    }
  }

  h1 {
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}; 
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};    
    
    margin-bottom: 1.4375rem;
  }

  .swiper-button-prev, .swiper-button-next {
    color: transparent;
    width: 3.5rem;
    height: 5rem;
    top: 47%;  
  }

`