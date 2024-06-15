import { Link } from 'react-router-dom';
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

// export const Container = styled(link)`
export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;  
  gap: 0;

  > svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > div {    
    ${({ theme }) => theme.FONTS.POPPINS_BOLD}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 24px;
  }
  
  cursor: pointer;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}    
  }

`;