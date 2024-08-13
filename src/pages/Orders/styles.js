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
    padding: 2.125rem 4rem;
    width: 100%;
    height: 100%;
    max-width: 93.5rem; 
    margin-top: 6.5rem;
    margin-bottom: auto; 
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.1875rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin: 9rem 0 1rem;
    }

    > h1 {
        margin-top: 8rem;
        font-size: 1.7rem;
        ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        text-align: center;
    }

    #desktop-table-fr {
        max-height: 57vh;
        overflow-y: scroll; 

        &::-webkit-scrollbar {
            width: .6rem;
            background: transparent;
            overflow: scroll;
            overflow: overlay;            
        }
        &::-webkit-scrollbar-track {
            display: block;
            background-color: transparent;            
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.DARK_1000};
            border-radius: .2rem;            
        }
    }

    #desktop-table {
        display: flex;
        border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: .5rem .5rem 0 0; 
    }

    #mobile-table {
        display: none;
    }

    table {        
        width: 100%;                     
        border-collapse: collapse; 
        
        font-size: .875rem;
        text-align: left;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    table th {  
        height: 4rem;      
        padding: 1.3125rem 1.5rem;             
        border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000}; 
        
        ${({ theme }) => theme.FONTS.ROBOTO_BOLD};

        &:nth-child(1) {
            width: 9.5rem;
        }

        &:nth-child(2) {
            width: 8rem;
        }

        &:nth-child(4) {
            width: 12rem;
            border-right: none;
        }        
    }

    table td {
        height: 3.375rem;
        padding: 1rem 1.5rem;
        border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000}; 
        border-top: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};        

        ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
        line-height: 160%;

        &:nth-child(4) {              
            border-right: none;
        }  
        
        .status-div {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: .5rem;            
        }        
        
        .pendente, .cancelado {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};            
        }
        .aprovado {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_CAKE_300};            
        }
        .preparando {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_CARROT_100};            
        }
        .entregue {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_MINT_100};            
        }
    }

    .order-id, .details, .datetime {
            cursor: pointer;
    }

    .status-select-div {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;            
    }

    .status-color-select {
        position: absolute; 
        left: 1rem;
    }

    .status-select {
        appearance: none;
        -webkit-appearance: none;

        width: 11rem;
        padding: .6rem .6rem .6rem 2rem;
        border-radius: .3125rem;

        font-size: .875rem;
        ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        border: none;
        border-radius: none;           
    }
            
    .select-caret-down {
        position: absolute;
        right: .5rem;
        width: 1.5rem;
        height: 1.5rem;                      
        
        fill: ${({ theme }) => theme.COLORS.LIGHT_200};
        pointer-events: none;
    }

    .status-color, .status-color-select {
        width: .5rem;
        height: .5rem;            
        border-radius: 50%;
    }       

    @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
        #desktop-table {
            display: none;            
        }     
        
        h3, div {
            font-size: .875rem;
            ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
            line-height: 160%;
            text-align: left;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        #mobile-table {
            width: 100%;            
            margin-bottom: 3rem;            

            display: flex;
            flex-direction: column;
            gap: 1.0625rem;                  
        }

        .order-card {
            padding: .875rem 1.25rem;

            border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
            border-radius: .5rem;

            display: flex;
            flex-direction: column;
            gap: 1rem;
            cursor: pointer;
        }

        .order-card-header {
            width: 100%;
            /* padding-right: 16vw; */

            display: flex;
            align-items: center;
            justify-content: space-between;            
        }

        .status-div {
            width: max-content;                        

            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: .5rem;
        }

        .status-color {
            width: .5rem;
            height: .5rem;            
            border-radius: 50%;
        }

        .status-select-div {
            margin-bottom: .5rem;
        }

        .status-select {
            width: 100%;            
        }
        
        .pendente, .cancelado {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};            
        }
        .aprovado {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_CAKE_300};        
        }
        .preparando {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_CARROT_100};            
        }
        .entregue {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_MINT_100};            
        }
    }
    
`
