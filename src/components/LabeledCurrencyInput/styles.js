import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  gap: 1rem;  

  > label {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
    font-size: 1rem;  
  }
`

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: .75rem .875rem;
  border: ${({ theme, $alternativeStyle }) => 
    $alternativeStyle ? '1px solid ' + theme.COLORS.LIGHT_100 : 'none'
  };
  border-radius: ${({ $alternativeStyle }) => 
    $alternativeStyle ? '5px' : '.5rem'
  };

  color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
  background-color: ${({ theme, $alternativeStyle }) => 
    $alternativeStyle ? 'transparent' : theme.COLORS.DARK_900
  };

  ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
  font-size: 1rem;  

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    background-color: ${({ theme, $alternativeStyle }) => 
      $alternativeStyle ? theme.COLORS.DARK_800 : theme.COLORS.DARK_1000
    };
   
  }

`