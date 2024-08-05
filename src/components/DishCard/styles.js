import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  border-radius: .5rem;
  /* border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};  */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 1.2rem;
  max-width: 19rem;
  height: ${({ $admin }) => $admin ? "28rem" : "33.5rem" }; // 32.5rem;  
  background-color: transparent;
  position: relative;

  transition: .3s;

  /* &:hover {
    transition: .3s;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  } */
  
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
    margin-bottom: .5rem;
    border-radius: 50%;
    cursor: pointer;
  }
  
  > h1, h3 {
    text-align: center;    
    margin-bottom: 0.5rem;    
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
    max-height: 5rem;

    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
    font-size: .875rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};     

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > h2 {
    text-align: center; 
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
    margin-top: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 13.125rem;
    height: ${({ $admin }) => $admin ? "22.5rem" : "31rem" };     

    > svg {
      right: 1rem;
      top: 1rem;       
    }

    > img {
      width: 8rem;
      height: 8rem;
      margin-bottom: 0.5rem;
    }

    > h1 {   
      height: 3.2rem;   
      ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}; 
      font-size: 1rem;
      width: 100%;      
    }   

    > h2 {   
      width: 100%;   
      font-size: 1.4rem; 
    }

    > h3 {          
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .add-product {
      width: 100%;
      height: 2.5rem;
    }

    > div {      
      display: flex;            
      flex-direction: column;      
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;

      width: 100%;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: ${({ $admin }) => $admin ? "20rem" : "25.5rem" }; 
    
    > img {
      width: 8.5rem;
      height: 8.5rem;           
    }
    
    > h1 {   
      height: 3.1rem;   
      ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}; 
      font-size: 1rem;
      width: 100%;      
    }   

    > h2 {         
      font-size: 1.3rem; 
    }

    > h3 {
      display: none; 
    }

    .add-product {      
      height: 2rem;
    }

  }

`;
