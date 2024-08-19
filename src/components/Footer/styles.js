import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Section = styled.footer` 

  margin: 0;
  padding: 0 4rem;
  width: 100%;
  height: 4.81rem;

  /* position: absolute;
  bottom: 0;   */

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  box-shadow: ${({ theme }) => theme.NAME === "lightTheme"
    ? `-0.125rem -0.125rem 0.3rem 0.125rem ${theme.COLORS.DARK_600}`
    : `-0.125rem -0.125rem 1rem .5rem ${theme.COLORS.DARK_900}`
  };

  @media (max-width: 93.5rem) {
      padding: 0 4rem;
  }

  > div {
    margin: auto;
    
    display: flex;
    align-items: center;    
    justify-content: space-between;
    gap: .7rem;

    height: 4.81rem;
    max-width: 85.5rem;
    padding: 0;

    > h4 {      
      font-size: clamp(.75rem, .4rem + 0.3vw, .875rem);
      ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}
      text-align: right;

      color: ${({ theme }) => theme.COLORS.LIGHT_200}
    }
  }  
  

`