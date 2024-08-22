import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    margin: auto;
    width: 100%; 
    min-height: 100svh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;       
`;

export const Main = styled.main`
    padding: 2.625rem 4rem;    
    height: 100%;
    /* width: 100%; */
    max-width: 93.5rem; 
    margin-top: 6.5rem;
    margin-bottom: 2.5rem;
   
    > a {
        margin-bottom: 2.625rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding-left: 1.75rem;
        padding-right: 1.75rem;
    }

    #dish-presentation {
        min-width: 50vw;        
        max-width: 85.5rem; 
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        gap: 3.5vw;

        > img {
            border-radius: 50%;
            width: min(24.375rem, 36vw);
            height: min(24.375rem, 36vw);
        }

        > #default-image {            
            display: flex;
            align-items: center;
            justify-content: center;            
            
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
            background-color: ${({ theme }) => theme.COLORS.DARK_900};

            > svg {
                padding: 20%;
                width: min(24.375rem, 36vw);
                height: min(24.375rem, 36vw);
                fill: ${({ theme }) => theme.COLORS.LIGHT_500};
                filter: drop-shadow(10px 7px 8px rgba(0, 0, 0, 0.5));    
                cursor: default;              
            }
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            flex-direction: column;  
            gap: 2.5rem;

            > img {
                width: max(22rem, 43vw);
                height: max(22rem, 43vw);
            }

            > #default-image {            
            display: flex;
            align-items: center;
            justify-content: center;            
            
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
            background-color: ${({ theme }) => theme.COLORS.DARK_900};

            > svg {
                padding: 20%;
                width: max(22rem, 43vw);
                height: max(22rem, 43vw);
                fill: ${({ theme }) => theme.COLORS.LIGHT_500};                
            }
        }
        }
    }

    #dish-details {       
        width: 100%;        

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1.5rem;  

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            min-width: 65vw;
            align-items: center;
        }

    }

    h1 {
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        font-size: clamp(1.9rem, 1rem + 1.6vw, 2.5rem);
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {       
        text-align: justify;
        ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
        font-size: clamp(1.2rem, .6rem + .8vw, 1.5rem);
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            padding: 0 1.75rem 2.1rem;
            text-align: center;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin-top: 8rem;

        h1, p, #ingredients {
            max-width: 26.75rem; 
        } 
    }
    

    #ingredients {
        margin-bottom: 1.5rem;

        display: flex; 
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 1.2rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
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

    //animation effects

    #dish-image, #default-image {
        /* opacity: 0; */
        animation: grow .7s ease-out forwards;
    }

    #dish-details {
        /* opacity: 0; */
        animation: right-left 1s 0s ease-out forwards;
    }

    .dish-ingredient {
        /* opacity: 0; */
        animation: fade-in .5s ease-out forwards;
    }

`;