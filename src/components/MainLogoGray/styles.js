import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  gap: 0.63rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 0.5rem;
  }
  
  > img {
    width: 1.88rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 1.5rem
    }
    
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  > div h1 {
    ${({ theme }) => theme.FONTS.ROBOTO_BOLD}
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 1.5rem;
    width: 9.3rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.32rem;
    }
    
  }   

`