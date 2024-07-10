import styled from "styled-components";

export const Label = styled.label`

  display: block;

  width: max-content;
  text-align: left;

  ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
  font-size: 2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
  
`