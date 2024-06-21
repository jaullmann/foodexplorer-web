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
    max-width: 85.5rem; 
    margin-bottom: auto;

    display: flex;
    flex-direction: column;

    a {
        margin: 2.5rem 0 1.5rem;
    }
    
    label {
        text-align: left;
        margin-bottom: 2rem;
    }

    form {   
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem; 
        flex-wrap: wrap;  
       
        > .flex-item {
            flex-grow: 1;
            min-width: 500px; 
            max-width: 1000px; 
        }   
    }
    
    #form-upload-image {
             
    }

    #form-dish-name {
        width:
    }

    #form-category {
        
    }

    #form-category {
        
    }

    #form-ingredients > h3 {
        
        min-width: 40.5rem;        

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
        font-size: 1rem;
        margin-bottom: 1rem;
    }    
    
    #ingredients-area {
        height: 3rem;

        padding: .25rem .5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 1rem;        
    }

    #form-price {
        
        width: min-content;
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
            resize: none;

            font-size: 1rem;            
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};            
        }
    }

    #form-buttons {
        
    }   

`