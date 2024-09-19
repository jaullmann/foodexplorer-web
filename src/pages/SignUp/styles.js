import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100svh;
  padding: 4.0625rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12%;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {    
    height: 100vh;

    flex-direction: column;
    justify-content: flex-start;
    padding: 9.875rem 0;
    gap: 4.5625rem;
  }  

  form {
    animation: fade-in-light 80ms ease-out forwards;
  } 

  #main-logo {
    cursor: default;
  }

`

export const Form = styled.form`
  width: 29.75rem;
  padding: 4rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  box-shadow: ${({ theme }) => theme.NAME === "lightTheme"
    ? `0.125rem 0.125rem 0.3rem 0.125rem ${theme.COLORS.DARK_700}`
    : "none"
  };

  > a {
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 1rem;
  } 

  > button {
    width: 100%;
    margin-top: 1.7rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {   
    padding: 0;
    max-width: 19.75rem;

    background-color: transparent;    
    
    label {
      display: none;
    }

    .labeled-input {
      width: 100%;
    }

    button {
      height: 3rem;      
    }
  }
 
`
