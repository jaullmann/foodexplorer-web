import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  padding: 4.0625rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13%;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {    
    height: 100vh;

    flex-direction: column;
    justify-content: flex-start;
    padding: 9.875rem 0;
    gap: 4.5625rem;
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

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > a {
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: .875rem;
  } 

  > button {
    width: 100%;
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
