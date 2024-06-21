import styled from "styled-components";

export const Container = styled.div`    
    width: max-content;
    height: 2rem;
    padding: .625rem 1rem;
    border-radius: 0.5rem; 

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    
    // font
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}
    font-size: 1rem;

    border: ${({ theme, $toAdd }) => $toAdd ? 
            '1px dashed' + theme.COLORS.LIGHT_600 : 
            theme.COLORS.LIGHT_600 
        };

    background-color: ${({ theme, $toAdd }) => $toAdd ? 
            'transparent' : 
            theme.COLORS.LIGHT_600 
        };
    color: ${({ theme, $toAdd }) => $toAdd ? 
            theme.COLORS.LIGHT_500 : 
            theme.COLORS.LIGHT_100 
        };
    
    button {
        width: min-content;
        height: min-content;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg {
        fill: ${({ theme, $toAdd }) => $toAdd ? 
            theme.COLORS.LIGHT_500 : 
            theme.COLORS.LIGHT_100 
        };
    }
`