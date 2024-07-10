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
    padding: 2.125rem 4rem;
    width: 100%;
    max-width: 93.5rem; 
    margin-bottom: auto; 
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.1875rem;

    #desktop-table {
        max-height: 56svh;;

        display: flex;
        border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: .5rem; 
        overflow-y: scroll; 

        &::-webkit-scrollbar {
            width: .4rem;
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
            border-radius: 10px;            
        }
    }

    #mobile-table {
        display: none;
    }

    table {        
        width: 100%;                     
        border-collapse: collapse; 
        
        font-size: .875rem;
        text-align: left;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
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
        cursor: pointer;

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

        .status-color {
            width: .5rem;
            height: .5rem;            
            border-radius: 50%;
        }
        
        .pendente, .cancelado {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};            
        }
        .preparando {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_CARROT_100};            
        }
        .aprovado, .entregue {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_MINT_100};            
        }
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
            /* height: 65svh; */
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
        
        .pendente, .cancelado {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};            
        }
        .preparando {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_CARROT_100};            
        }
        .aprovado, .entregue {            
            background-color: ${({ theme }) => theme.COLORS.TINTS_MINT_100};            
        }
    }
    
`
