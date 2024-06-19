import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Section = styled.div`    
    margin: 0;
    padding: 0 4rem;
    width: 100%;

    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};    
    
    > .desktop {
        margin: auto;
        max-width: 85.5rem;
        height: 6.5rem;
        
        display: flex;
        align-items: center;    
        justify-content: space-between;
        gap: 2rem;

        padding: 0;
    
        #sign-out {
            display: flex;
            justify-content: center;  
            width: 2rem;                        
        }

        > button {
            width: 13.5rem;
            padding: 0;
        }        
    }
    
    > .mobile {
        
        display: none;
        align-items: center;    
        justify-content: space-between;            
        
        margin-top: 3.75rem;
        margin-bottom: 2rem;
        padding: 0;
        
        display: none;

        #side-menu {
            display: flex;
            justify-content: center;            
        }

        #cart-button-mobile {
            img {                    
                width: 3.5rem;
            }
        }

        > button {
            width: 2.5rem;

            > img{
                width: 100%;
            }
        }

   

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            margin: 3.75rem 0;
            display: none;
            align-items: center;    
            justify-content: space-between;            
            
            /* margin-top: 3.75rem; */
            margin-bottom: 2rem;
            padding: 0;
            
            display: none;

            #side-menu {
                display: flex;
                justify-content: center;            
            }

            > img {
                width: 1.5rem;
            }

            > div {
                width: 2rem;
                height: 2rem;
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
        gap: .625rem;

        img {            
            width: 1.875rem
        }
        
        h1 {
            font-size: 1.5rem;
            width: 9.5rem;
        }
    }

`