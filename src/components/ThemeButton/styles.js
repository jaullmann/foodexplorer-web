import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > svg {
    width: 2rem;
    height: 2rem;
  }   

  cursor: pointer;
`