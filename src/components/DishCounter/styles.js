import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: fit-content;
  padding: 0.25rem 0;
  
  justify-content: center;
  align-items: center;
  gap: 0.9rem;

  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300}; 

  > img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  > h3 {      
    text-align: center;  
    font-size: 1.25rem;
    ${({ theme }) => theme.FONTS.ROBOTO_BOLD}
  }
`

