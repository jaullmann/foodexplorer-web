import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    margin: auto;
    width: 100%; 
    min-height: 100svh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;       
`;

export const Main = styled.main`
    padding: 0 4rem 2.1rem;
    width: 100%;
    margin-top: 6.5rem;
    margin-bottom: auto;
    max-width: 93.5rem; 

    display: flex;
    flex-direction: column;    

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin: 9rem 0 3rem;
    }
    
    a {
        width: 100%;
        margin: 2.5rem 0 1.5rem;
    }  
    
    label {
        text-align: left;    
    }

    form {   
        margin-top: 2rem;

        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;         
    }

    #product-image {   
        padding: 1rem;        
        
        display: flex;        
        align-items: center;
        justify-content: center;
                
        border-radius: .5rem;
        border: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        transition: .2s;
        
        position: relative;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            width: 100%;
            height: 40%;          
        }

        > img {
            width: 12.4rem;
            height: 12.4rem;

            border-radius: 50%;           
        }

        #placeholder {
            padding: 2rem;

            width: 12rem;
            height: 12rem;            
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
            border-radius: 50%;        
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            fill: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        &:hover {
            transition: 0.2s;
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500}
        }

        #delete-img-btn {
            position: absolute;
            right: 1rem;
            bottom: 1rem;

            font-size: 2rem;
            padding: .4rem;

            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
            background-color: ${({ theme }) => theme.COLORS.LIGHT_700};

            fill: ${({ theme }) => theme.COLORS.LIGHT_200};
            cursor: pointer;

            transition: 0.2s;

            &:hover {
                transition: 0.2s;
                border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400}
            }
        }
    }

    #form {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 2rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            flex-direction: column; 
            align-items: center;           
        }
    }

    #form-fields {
        width: 100%;        
    }

    #form-section-1 {
        margin-bottom: 2rem;
    }

    #form-section-1, #form-section-2 {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        gap: 1.5rem + 1.5vw;  
        
        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            flex-direction: column;            
        }
    } 
    
    #form-section-1 > div:nth-child(2) {
        flex-grow: 2;
        min-width: 35%;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            width: 100%;
        }
    }

    #form-section-1 > div:nth-child(3) {
        flex-grow: 2;
        max-width: 22.5rem;  
        min-width: 11rem;  
        
        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            max-width: none;
            width: 100%;
        }
    }

    #form-section-2 > div:nth-child(1) {
        flex-grow: 2;
        min-width: 77%;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            max-width: none;
            width: 100%;
        }
    }

    #form-section-2 > div:nth-child(2) {
        flex-grow: 2;
        max-width: 15.625rem;
        min-width: 4rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            max-width: none;
            width: 100%;
        }
    }

    #form-category {
        position: relative;
        width: 35%;

        > h3 {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        > select {
            appearance: none;
            -webkit-appearance: none;
            width: 100%;
            height: 3rem;
            padding: .9rem;

            border: none;
            border-radius: .5rem;
            
            transition: 0.2s;
            border: 1px solid ${({ theme, $alternativeStyle }) => 
                $alternativeStyle ? 'transparent' : theme.COLORS.DARK_900
            };
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            font-size: 1rem;
            ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};             
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            cursor: pointer;              

            &:hover {
                transition: 0.2s;
                border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500}
            }

            &:focus {              
                outline: none; 
                transition: 0.2s;
                border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};      
                background-color: ${({ theme }) => theme.COLORS.DARK_1000};            
            }
        }        
        
        > svg {
            position: absolute;
            top: 3rem;
            right: 1rem;
            fill: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-size: 1.5rem;
            pointer-events: none;            
        }
    }
    
    #form-ingredients > h3 {        
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
        font-size: 1rem;
        margin-bottom: 1rem;
    }    
    
    #ingredients-area {
        min-height: 3rem;
        padding: .25rem .5rem;
        border-radius: .5rem;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        column-gap: 1rem;        
        row-gap: .5rem;
        border: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        
        transition: 0.2s;

        &:hover {
            transition: 0.2s;
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};            
        }

        &:focus, &:focus-within {
            transition: 0.2s;
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
            background-color: ${({ theme, $alternativeStyle }) => 
                $alternativeStyle ? theme.COLORS.DARK_800 : theme.COLORS.DARK_1000
            }; 
        }
    }  

    #form-description {        
        width: 100%;
        
        > h3 {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
            font-size: 1rem;
            margin-bottom: 1rem;
        }        

        > textarea {
            width: 100%;
            padding: .875rem;
            height: 10.75rem;            
            background: none;            
            border: none;
            border-radius: .5rem;
            resize: none;

            font-size: 1rem;            
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            border: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
            transition: 0.2s;
            
            &:hover {
                transition: 0.2s;
                border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};            
            }

            &:focus, &:focus-within {
                transition: 0.2s;
                border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
                background-color: ${({ theme, $alternativeStyle }) => 
                    $alternativeStyle ? theme.COLORS.DARK_800 : theme.COLORS.DARK_1000
                }; 
            }
        }       
    }   

    #form-buttons {        
        height: 3rem;
        display: flex;
        align-items: center;
        align-self: flex-end;
        justify-content: flex-start;
        gap: .5rem + 1.5vw;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            width: 100%;            
        }

        > button {
            @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
                width: 100%;            
            }
        }    
    }  

    #form-price {
        text-align: right;
    }
    
    #new-ingredient {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;      

      height: 2rem;  
      width: fit-content;
      border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_600};

      padding: .625rem 1rem;
      border-radius: .4rem;
      
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

      > input {  
        border: none;   
        width: 5rem;    
        ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};  
        font-size: clamp(.8rem, .4rem + .5vw, 1vw);      
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};       
      }

      > svg {
        font-size: .8rem;
        cursor: pointer;
      }
      
    }    

`