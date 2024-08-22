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

  background-color: rgba(255, 255, 255, 0.4);  
  opacity: ${({ $isVisible }) => (
    $isVisible ? 1 : 0
  )};
  visibility: ${({ $isVisible }) => (
    $isVisible ? 'visible' : 'hidden'
  )};
  transition: opacity .3s ease, visibility .3s ease;
  z-index: 999;  

  #inner-hexagon {    
    position: absolute;

    width: 12rem;
    height: 12rem;  
    fill: ${({ theme }) => theme.NAME === "lightTheme"
      ? theme.COLORS.TINTS_CAKE_200
      : theme.COLORS.TINTS_CAKE_100
    };    
    rotate: 90deg;
    animation: spin 1.4s ease-in-out infinite;    
    
    z-index: 10000;

    @keyframes spin {
      0% { 
        transform: rotate(0deg); 
      }
      80% { 
        transform: rotate(120deg); 
      }
      100% { 
        transform: rotate(120deg); 
      }
    }
  }

  #outer-hexagon {
    fill: ${({ theme }) => theme.NAME === "lightTheme"
      ? theme.COLORS.TINTS_CAKE_100
      : theme.COLORS.TINTS_CAKE_200
    };       
    
    width: 28rem;
    height: 28rem; 
    rotate: 90deg; 
    animation: explode 1.4s .35s ease-out infinite;
    position: relative;  
    
    opacity: 0;

    @keyframes explode {
      0% { 
        scale: 0;
        opacity: 1; 
      }
      100% { 
        scale: 1; 
        opacity: 0;
      }
    }
  }

`;

