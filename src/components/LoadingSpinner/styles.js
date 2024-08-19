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

  background-color: rgba(255, 255, 255, 0.3);
  opacity: ${({ $isVisible }) => (
    $isVisible ? 1 : 0
  )};
  visibility: ${({ $isVisible }) => (
    $isVisible ? 'visible' : 'hidden'
  )};
  transition: opacity .3s ease, visibility .3s ease;
  z-index: 999;
`;

export const Spinner = styled.div`
  border: 1rem solid ${({ theme }) => theme.COLORS.TINTS_CAKE_300};
  border-top: 1rem solid ${({ theme }) => theme.COLORS.DARK_500};  
  border-radius: 50%;
  width: 8rem;
  height: 8rem;  
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { 
      transform: rotate(0deg); 
    }
    100% { 
      transform: rotate(360deg); 
    }
  }
`;