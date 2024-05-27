import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  position: relative;

  > img {
    width: 2rem;
    height: 2rem;
  }

  > div {
    position: absolute;
    right: -.5rem;
    top: -.4rem;

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