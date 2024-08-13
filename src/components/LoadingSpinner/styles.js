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
  background-color: rgba(255, 255, 255, 0.7);
  opacity: ${({ $isVisible }) => (
    $isVisible ? 1 : 0
  )};
  visibility: ${({ $isVisible }) => (
    $isVisible ? 'visible' : 'hidden'
  )};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite ease-in-out;

  @keyframes spin {
    0% { 
      transform: rotate(0deg); 
    }
    100% { 
      transform: rotate(360deg); 
    }
  }
`;