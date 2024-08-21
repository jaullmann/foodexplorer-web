import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.5);  
  opacity: ${({ $isVisible }) => (
    $isVisible ? 1 : 0
  )};
  visibility: ${({ $isVisible }) => (
    $isVisible ? 'visible' : 'hidden'
  )};
  transition: opacity .3s ease, visibility .3s ease;
  z-index: 999;  

  svg {    
    position: absolute;

    width: 7.5rem;
    height: 7.5rem;  
    fill: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    rotate: 90deg;
    animation: spin 2.5s linear infinite;
    opacity: .8;

    @keyframes spin {
      0% { 
        transform: rotate(0deg); 
      }
      100% { 
        transform: rotate(360deg); 
      }
    }
  }
`;

export const Spinner = styled.div`
  border: .6rem solid ${({ theme }) => theme.COLORS.DARK_600};
  border-top: .6rem solid transparent;    
  border-radius: 50%;
  width: 10rem;
  height: 10rem;  
  animation: counter-spin 1.5s linear infinite;
  position: relative;   

  @keyframes counter-spin {
    0% { 
      transform: rotate(0deg); 
    }
    100% { 
      transform: rotate(360deg); 
    }
  }


`;