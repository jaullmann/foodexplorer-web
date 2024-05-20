import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0.5px solid yellow;
    }

    :root {
        font-size: 16px;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 12px;
        }
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
        
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        background-color: initial; /* or 'transparent' */
        border: none;
        outline: none;
        box-shadow: none;

        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.8);
    }
`