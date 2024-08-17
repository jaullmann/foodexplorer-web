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
  background-color: rgba(255, 255, 255, 0.6);
  opacity: ${({ $isVisible }) => (
    $isVisible ? 1 : 0
  )};
  visibility: ${({ $isVisible }) => (
    $isVisible ? 'visible' : 'hidden'
  )};
  transition: opacity .4s ease, visibility .4s ease;
  z-index: 999;
`;

export const Spinner = styled.div`
  border: 1rem solid ${({ theme }) => theme.COLORS.DARK_800};
  border-top: 1rem solid ${({ theme }) => theme.COLORS.LIGHT_200};  
  border-radius: 50%;
  width: 7rem;
  height: 7rem;  
  animation: spin 1s ease-out infinite;

  @keyframes spin {
    0% { 
      transform: rotate(0deg); 
    }
    100% { 
      transform: rotate(360deg); 
    }
  }
`;