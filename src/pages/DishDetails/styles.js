import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    margin: auto;
    width: 100%; 
    min-height: 100svh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;       
`;

export const Main = styled.main`
    padding: 2.625rem 4rem;    
    height: 100%;
    max-width: 93.5rem; 

    margin-bottom: auto;
   
    > a {
        margin-bottom: 2.625rem;
    }

    #dish-presentation {        
        max-width: 85.5rem; 
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        gap: 3.5vw;

        > img {
            width: min(24.375rem, 36vw);
            height: min(24.375rem, 36vw);
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            flex-direction: column;  
            gap: 1.5rem;

            > img {
                width: max(16.5rem, 41vw);
                height: max(16.5rem, 41vw);
            }
        }
    }

    #dish-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: .9rem + .9vw;  

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        align-items: center;
      }

    }

    h1 {
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        font-size: clamp(1.71rem, 1rem + 1.6vw, 2.5rem);
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
        ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
        font-size: clamp(.9rem, .6rem + .8vw, 1.5rem);
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            text-align: center;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        h1, p, #ingredients {
            max-width: 26.75rem; 
        } 
    }
    

    #ingredients {
        margin-bottom: 1.5rem;

        display: flex; 
        align-items: flex-start;
        flex-wrap: wrap;
        gap: .75rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            justify-content: center;
        }
    }

    #user-action {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    svg {
        width: 2.2rem;
        height: 2.2rem;                       
        color: ${({ theme }) => theme.COLORS.LIGHT_300};       

        cursor: pointer;   
    }

    .favorite-dish {
        fill: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

`;