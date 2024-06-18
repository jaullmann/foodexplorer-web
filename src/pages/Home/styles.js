import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  width: 100%;  
  
  #banner-section {
    margin: 10.25rem auto 3rem;
    width: 100%; 
    
    height: 16.25rem;   

    @media (max-width: 93.5rem) {
      padding: 0 4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin: 3.5rem auto 3.875rem;
      height: 12rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      margin: 2.75rem auto 3.875rem;
      height: 7.5rem;
    }

  }
  
  #banner-slogan {    
    margin: auto;    
    padding: 0 3% 0 50%;

    height: 100%; 
    max-width: 85.5rem;
    border-radius: .5rem;

    display: flex;
    flex-direction: column;   
    align-items: left;  
    justify-content: center;
    gap: .5rem;    

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    
    position: relative;       

    h1 {              
      ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
      font-size: 2.5rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
      z-index:2;  

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        font-size: 1.9rem;
      }
      
      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 1.4rem;
      }
    }

    h3 {      
      ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      z-index:2;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        font-size: .85rem;
      }

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: .75rem;
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      height: 7.5rem;   
      padding: 0 10% 0 40%;      
    }

    #banner-image {
      height: 25.375rem;
      position: absolute;
      left: -2.5rem;
      bottom: 0;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) { 
        height: 15rem;
        left: -2.2rem;        
      }   
      
      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) { 
        height: 9.3125rem;
        left: -2.5rem;
      }        
      
    }  

  }   

`;