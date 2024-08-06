import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100svh;
    z-index: 999;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
      transition: transform 0.3s ease-in-out;
    }

    #side-menu-top-bar {
      width: 100%;
      padding: 4rem 1.75rem 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};

      > svg {
        font-size: 1.8rem;
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
        cursor: pointer;
      }

      > h1 {
        font-size: 1.325rem;
        ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
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
      padding: 0.625rem 0;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    button {
      padding: 0.625rem 0;
    }

    #search-results {
      margin-top: -2rem;
      padding-bottom: 3rem;
      width: 100%;
      text-align: center;
      font-size: 1.3rem;
      /* text-decoration: underline; */
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      ${({ theme }) => theme.FONTS.POPPINS_BOLD};
    }

    a, button {
      font-size: 1.5rem;
      ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    #side-menu-new {
      width: 100%;
      padding: 0.625rem 0;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      text-align: left;
    }
  }
`;
