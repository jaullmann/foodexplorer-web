import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Section = styled.div`    
    margin: 0;
    padding: 0 4rem;
    width: 100%;    

    position: fixed;
    top: 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};    
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
            display: flex;
            justify-content: center;  
            width: 2rem;                        
        }

        > a {            
            font-size: 1rem;
            ${({ theme}) => theme.FONTS.ROBOTO_REGULAR};
            color: ${({ theme }) => theme.COLORS.LIGHT_300};    
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

        #side-menu {
            display: ${({ $sideMenuVisible }) => $sideMenuVisible ? "flex": "none" };
            flex-direction: column;
            align-items: center;
            position: fixed;
            width: 100svw;
            height: 100svh;            

            top: 0;
            left: 0;
            z-index: 999;

            background-color: ${({ theme }) => theme.COLORS.DARK_400};
            
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
                }

                > h1 {
                    font-size: 1.325rem;
                    ${({ theme}) => theme.FONTS.ROBOTO_REGULAR};
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                }
            }          
            
            #side-menu-bottom-bar {
                width: 100%;
                height: 100%;
                padding: 2.25rem 1.75rem;

                #side-menu-links {
                    margin-top: 2.25rem;

                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    

                    a {
                        width: 100%;
                        padding: .625rem 0;

                        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
                    }

                    button {
                        padding: .625rem 0;
                    }

                    a, button {
                        font-size: 1.5rem;
                        ${({ theme}) => theme.FONTS.POPPINS_REGULAR};
                        color: ${({ theme }) => theme.COLORS.LIGHT_300};
                    }
                }
            }          

        }

        #side-menu-btn {
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

            #side-menu-btn {
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