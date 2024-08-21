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

    box-shadow: ${({ theme }) => theme.NAME === "lightTheme"
      ? `0.125rem 0.125rem 0.3rem 0.125rem ${theme.COLORS.DARK_600}`
      : `0.125rem 0.125rem 1rem .5rem ${theme.COLORS.DARK_900}`
    };

    @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
        height: 7.125rem;
    }

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0 1.75rem;
    }
    
    > .desktop {
        margin: auto;
        max-width: 85.5rem;
        height: 6.5rem;
        
        display: flex;
        align-items: center;    
        justify-content: space-between;
        gap: 1rem; 

        padding: 0; 

        > .header-link {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .8rem;            
            svg {
                font-size: 1.75rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_200};
            }
            
            h2 {
                width: min-content;
                font-size: clamp(.5rem, .4rem + .7vw, 1rem);
                ${({ theme }) => theme.FONTS.ROBOTO_MEDIUM};
                color: ${({ theme }) => theme.COLORS.LIGHT_200};
            }            
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
     
        @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
            .link-text {
                display: none;
            }
        }
    }    
        
    > .mobile {
        height: 100%;        

        display: none; 
        align-items: center;    
        justify-content: space-between; 
        
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            padding-bottom: 1rem;
            align-items: flex-end; 
        }        
        
        #side-menu-btn {
            font-size: 3rem;           
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
