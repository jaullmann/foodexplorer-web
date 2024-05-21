import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: fit-content;

  justify-content: center;
  align-items: center;
  gap: 0.63rem;

  > img {
    width: 1.88rem
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  > div h1 {
    ${({ theme }) => theme.FONTS.ROBOTO_BOLD}
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.5rem;
  } 

  > div h3 {
    position: absolute;
    bottom: -0.8rem;    

    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    font-size: 0.75rem;        
  } 
  
`