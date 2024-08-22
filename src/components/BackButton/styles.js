import { Link } from 'react-router-dom';
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

// export const Container = styled(link)`
export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;  
  gap: .25rem;

  opacity: 0;
  animation: fade-in 1s ease-out forwards;

  > svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 1.375rem;
      height: 1.375rem;
    }
  }

  > div {    
    ${({ theme }) => theme.FONTS.POPPINS_BOLD}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.5rem;
  }
  
  cursor: pointer;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}    
  }

`;