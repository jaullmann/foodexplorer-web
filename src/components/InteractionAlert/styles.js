import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  

  opacity: ${({ $isActive }) => (
    $isActive ? 1 : 0
  )};
  visibility: ${({ $isActive }) => (
    $isActive ? 'visible' : 'hidden'
  )};
  transition: opacity 1s ease, visibility 1s ease;

  z-index: 1000;
  pointer-events: none;  

  #alert-container {    
    width: 100%;
    height: 20%;
    max-width: 88.5rem; 
    margin-top: 6.5rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    /* background-color: blue;
    opacity: .5;     */
  }

`

export const Alert = styled.div`
  /* width: 24rem; */  
  margin-right: 7%;
  padding: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  border-radius: .5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};  

  box-shadow: ${({ theme }) => theme.NAME === "lightTheme"
    ? `0 0 .5rem .2rem ${theme.COLORS.DARK_200}`
    : `0 0 .5rem .3rem ${theme.COLORS.DARK_1000}`
  };

  animation: fade-in 2s 2s ease-in-out forwards;

  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  h1 {
    font-size: 1.2rem;
    ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`;