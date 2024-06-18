import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Section = styled.footer` 

  margin: auto;
  padding: 0 4rem;
  width: 100%;
  height: 4.81rem;

  position: absolute;
  bottom: 0;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (max-width: 93.5rem) {
      padding: 0 4rem;
  }

  > div {
    margin: auto;
    
    display: flex;
    align-items: center;    
    justify-content: space-between;

    height: 4.81rem;
    max-width: 85.5rem;
    padding: 0;

    > h4 {
      font-size: .875rem;
      ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}
      color: ${({ theme }) => theme.COLORS.LIGHT_200}
    }
  }    

`