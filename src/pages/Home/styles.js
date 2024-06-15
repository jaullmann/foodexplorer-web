import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  #banner-section {
    margin: 10.25rem auto 3.875rem;   
    
    width: max-content;
    height: 16.25rem;

    display: flex;
    flex-direction: column;   
    align-items: center;  
    justify-content: center;
  }
  
  #banner-slogan { 
    margin: auto;
    
    height: 100%; 
    width: auto;

    display: flex;
    flex-direction: column;   
    align-items: center;  
    justify-content: center;
    gap: 1rem;
    
    position: relative;       

    h1 {     
      width: auto; 
      ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};      
    }

    h3 {
      width: auto;
      ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    img {
      position: absolute;
      left: 0
    }      
  }  

`