import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    margin: auto;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Main = styled.main`
    padding: 0 4rem;       

    > a {
        margin: 1.5rem 0 2.625rem;
    }

    #dish-presentation {
        max-width: 85.5rem; 
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 48px;

        > img {
            width: 24.375rem;
            height: 24.375rem;
        }
    }

    #dish-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.5rem;  
    }

    h1 {
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        font-size: 2.5rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
        ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
        font-size: 1.5rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    #ingredients {
        margin-bottom: 1.5rem;

        display: flex; 
        align-items: flex-start;
        flex-wrap: nowrap;
        gap: .75rem;
    }

    #user-action {
        display: flex;
        justify-content: center;
        gap: 33px;
    }

`;