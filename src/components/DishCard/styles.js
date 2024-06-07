import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .9375rem;

  padding: 1.5rem;
  max-width: 19rem;
  min-height: 28.875rem;  
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

  #fav-button {
    fill: ${({ theme, $favorite }) => $favorite ? theme.COLORS.LIGHT_300 : 'none'};
  }

  > img {
    width: 11rem;
    height: 11rem;
    cursor: pointer;
  }
  
  > h1, h2, h3 {
    text-align: center;
    cursor: pointer;
  }

  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS_BOLD}; 
    font-size: 1.5rem;    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 13.125rem;
    min-height: 18.25rem;
    gap: .75rem;

    > svg {
      right: 1rem;
      top: 1rem;       
    }

    > img {
      width: 5.5rem;
      height: 5.5rem;
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
