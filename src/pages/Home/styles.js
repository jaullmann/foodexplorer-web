import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  width: 100%;  
  
  #banner-section {
    margin: 10.25rem auto 3.875rem;
    width: 100%; 
    
    height: 16.25rem;   

    @media (max-width: 93.5rem) {
      padding: 0 4rem;
    }
  }
  
  #banner-slogan {    
    margin: auto;    
    padding-right: 5rem;

    height: 100%; 
    max-width: 85.5rem;
    border-radius: .5rem;

    display: flex;
    flex-direction: column;   
    align-items: flex-end;  
    justify-content: center;
    gap: .5rem;    

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    
    position: relative;       

    h1 {                   
      ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
      z-index:2;     
    }

    h3 {
      width: auto;
      ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      z-index:2;
    }

    img {
      position: absolute;
      left: -3.5rem;
      bottom: 0;      
    }      
    
    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding-right: 3rem;

      #banner-image {
        height: 21rem;
      }      

      h1{
        font-size: 2.2rem;
      }
      h3{
        font-size: 0.89rem;
      }
      
    }
  }  

`