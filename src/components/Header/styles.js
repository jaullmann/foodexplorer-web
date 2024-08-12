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
        gap: 2rem;

        padding: 0;        
    
        #sign-out {            
            width: 6rem;
            height: 2rem;    
            
            fill: ${({ theme }) => theme.COLORS.LIGHT_200};
            cursor: pointer;
        }

        > a {            
            font-size: 1rem;
            ${({ theme}) => theme.FONTS.ROBOTO_REGULAR};
            color: ${({ theme }) => theme.COLORS.LIGHT_200};    
            white-space: nowrap;

            @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
                width: 3rem;                
                font-size: .7rem;
                ${({ theme}) => theme.FONTS.ROBOTO_BOLD};
                white-space: pre-line;
            }
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
