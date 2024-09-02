import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  

  opacity: ${({ $isActive }) => (
    $isActive ? 1 : 0
  )};
  visibility: ${({ $isActive }) => (
    $isActive ? 'visible' : 'hidden'
  )};
  
  transition: opacity .2s ease-out, visibility .2s ease-out;

  z-index: 1000;  

  #alert-container {    
    width: 100%;
    height: 100%;
    max-width: 88.5rem;     

    display: flex;
    justify-content: center;
    align-items: center;

    /* background-color: blue;
    opacity: .5;     */
  }

`

export const Alert = styled.div`
  width: 32rem;  
  
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;

  border-radius: .5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};  

  box-shadow: ${({ theme }) => theme.NAME === "lightTheme"
    ? `0.1rem 0.1rem .6rem .4rem ${theme.COLORS.DARK_200}`
    : `0rem 0rem .7rem .2rem ${theme.COLORS.LIGHT_700}`
  };

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 82svw;  
  }
  
  & div:nth-child(2){
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      gap: 1.3rem;
    }

    & h1 {
      width: fit-content;
      text-align: left;
      font-size: 1.3rem;
      ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
      color: ${({ theme }) => theme.COLORS.LIGHT_200};

      @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
        font-size: 1.2rem;
      }
    }

    & svg {
      width: 3.5rem;      
      height: 3.5rem;
      color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    }

    .warning, .error {
      color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    }

    .info {
      color: ${({ theme }) => theme.COLORS.TINTS_MINT_200};
    }   
  }  

  #alert-btn {
    padding: 0 2.5rem;
  }
  
`;