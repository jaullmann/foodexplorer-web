import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Label = styled.label`

  display: block;

  width: max-content;
  text-align: left;

  ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  font-size: clamp(1.4rem, .5rem + 2vw, 2rem);

  color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
  
`