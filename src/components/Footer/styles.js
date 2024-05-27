import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Section = styled.footer`
  display: flex;
  align-items: center;    
  justify-content: space-between;

  height: 4.81rem;
  max-width: 70rem;
  padding: 0 1.5rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 2rem;
  }

  > h4 {
    font-size: .875rem;
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}
    color: ${({ theme }) => theme.COLORS.LIGHT_200}
  }

`