import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Section = styled.div`    
    margin: 0;
    padding: 0 4rem;
    width: 100%;    

    position: fixed;
    top: 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};    
    z-index: 10;
    
    > .desktop {
        margin: auto;
        max-width: 85.5rem;
        height: 6.5rem;
        
        display: flex;
        align-items: center;    
        justify-content: space-between;
        gap: 1rem; 

        padding: 0; 

        > a {
            font-size: clamp(.6rem, .4rem + .6vw, 1rem);
            ${({ theme }) => theme.FONTS.ROBOTO_MEDIUM};
            color: ${({ theme }) => theme.COLORS.LIGHT_200};
        }
                
        #theme-btn, #sign-out {
            display: flex;
            justify-content: center;
            align-items: center;            
            margin: 0; 
            padding: 0; 
            
            > svg {                  
                font-size: 2rem; 
                color: ${({ theme }) => theme.COLORS.LIGHT_200};  
            }            
        }       

        > a, > button {
            margin: 0; 
            padding: 0; 
        }
    }
        
    > .mobile {
        height: 6.6rem;

        display: none; 
        align-items: center;    
        justify-content: space-between;            
        padding: 0;
        
        #side-menu-btn {
            font-size: 2.7rem;           
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            cursor: pointer;
        }

        #cart-button-mobile {
            img {                    
                width: 3.5rem;
            }
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        > .desktop {
            display: none;
        } 

        > .mobile {
            display: flex;
        }         
    }

    #main-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        gap: 0.625rem;

        img {            
            width: 1.875rem
        }
        
        h1 {
            font-size: 1.5rem;
            width: 9.5rem;
        }
    }    
`;
