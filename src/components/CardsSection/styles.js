import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Section = styled.section`
  margin: 2.875rem auto 0;
  display: flex;
  flex-direction: column;
  
  max-width: 70rem;
  position: relative;

  #gradient-left{
    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    width: 17.375rem;
    height: 32rem;
    position: absolute;
    top: 4.7rem;
    z-index: 2;
    pointer-events: none;
  }

  #gradient-right{
    background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
    width: 17.375rem;
    height: 32rem;
    position: absolute;
    top: 4.7rem;
    right: 0;
    z-index: 2;
    pointer-events: none;
  }

  h1 {
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}; 
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};    
    
    margin-bottom: 1.4375rem;
  }

  .swiper-button-prev, .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 2.5rem;
    height: 2.5rem;    
  }

`