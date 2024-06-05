import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .94rem;

  padding: 1.5rem;
  width: 19rem;
  height: 28.88rem;
  background-color: transparent;
  position: relative;
  
  > img:nth-child(1) {
    width: 1.5rem;
    cursor: pointer;    
    position: absolute;
    right: 1.125rem;
    top: 1rem;    
  }

  > img:nth-child(2) {
    width: 11rem;
    height: 11rem;
    cursor: pointer;
  }
  
  > h1, h2, h3 {
    text-align: center;
    cursor: pointer;
  }

  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS_BOLD}; 
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};     
  }  

  > h3 {
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
    font-size: .875rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};     
  }

  > h2 {
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};     
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  
  `
