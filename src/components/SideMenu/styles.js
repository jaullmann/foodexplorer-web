import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`  

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    position: fixed;
    top: 1svh;
    left: 0;

    width: 70%;
    height: 98svh;
    z-index: 999;

    display: flex;
    flex-direction: column;
    align-items: center;    
    
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    transform: translateX(-102%);
    transition: transform 0.4s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
      transition: transform 0.4s ease-in-out;
    }

    box-shadow: ${({ theme }) => theme.NAME === "lightTheme"
      ? `0.125rem 0.125rem 0.3rem 0.125rem ${theme.COLORS.DARK_400}`
      : `0.125rem 0.125rem 0.3rem 0.125rem ${theme.COLORS.DARK_1000}`
    };

    #side-menu-top-bar {
      width: 100%;
      padding: 4rem 1.75rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;      
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-top-right-radius: .5rem;
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        > svg {
          font-size: 1.8rem;
          fill: ${({ theme }) => theme.COLORS.LIGHT_200};
          cursor: pointer;
        }

        > h1 {
          font-size: 1.325rem;
          ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
          color: ${({ theme }) => theme.COLORS.LIGHT_200};
        }
      }      
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    height: 100svh;
    top: 0;
    left: 0;   
    border-radius: 0;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 2.25rem 1.75rem;

  > div:nth-child(1) {
    max-width: none;
    width: 100%;
  }

  #side-menu-links {
    margin-top: 2.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {     
      width: 100%;
      padding: .8rem 0;

      display: flex;
      align-items: center;
      gap: 1rem;

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    button {
      padding: 0.625rem 0;
    }

    #search-results {
      margin-top: -2rem;
      padding-bottom: 3rem;
      width: 100%;
      text-align: left;
      font-size: 1.3rem;      
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      ${({ theme }) => theme.FONTS.POPPINS_BOLD};
    }

    a, button {
      font-size: 1.5rem;
      ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    svg {
      font-size: 1.5rem;
    }    
  }
`;
