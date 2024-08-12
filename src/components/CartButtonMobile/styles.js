import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  position: relative;

  > svg {
    font-size: 3.2rem;
    fill: ${({ theme }) => theme.COLORS.LIGHT_200}; 
  }

  > div {
    position: absolute;
    right: -.3rem;  

    width: 1.25rem;
    height: 1.25rem;    
    border-radius: 100%;
    
    align-content: center;    

    ${({ theme }) => theme.FONTS.ROBOTO_MEDIUM}; 
    font-size: .8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};  
    background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};  
  }
`;