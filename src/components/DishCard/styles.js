import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  border-radius: .5rem;
  border: 1px solid grey;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  gap: .9375rem;

  padding: 1.5rem;
  max-width: 19rem;
  /* max-height: 28rem;   */
  background-color: transparent;
  position: relative;
  
  > svg {
    width: 1.5rem;
    height: 1.5rem;     
    position: absolute;
    right: 1.125rem;
    top: 1rem;   
    color: ${({ theme }) => theme.COLORS.LIGHT_300};       

    cursor: pointer;   
  }

  .favorite-dish {
    fill: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > img {
    width: 11rem;
    height: 11rem;
    cursor: pointer;
  }
  
  > h1, h2, h3 {
    text-align: center;    
  }

  > h1 {   
    height: 4.5rem;
    
    ${({ theme }) => theme.FONTS.POPPINS_BOLD}; 
    font-size: 1.5rem;    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;    
    cursor: pointer;   
  }  

  > h3 {
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
    font-size: .875rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};     

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > h2 {
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};     
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 13.125rem;
    min-height: 18.25rem;    
    

    > svg {
      right: 1rem;
      top: 1rem;       
    }

    > img {
      width: 6.5rem;
      height: 6.5rem;
      cursor: pointer;
    }

    > h1 {      
      ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}; 
      font-size: .875rem;
      width: 100%;      
    }  

    > h3 {
      display: none; 
    }

    > h2 {   
      width: 100%;   
      font-size: 1rem; 
    }

    > div {      
      display: flex;            
      flex-direction: column;      
      align-items: center;
      gap: 1rem;

      width: 100%;
    }

  }
  
  `
