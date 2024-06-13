import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;;
  gap: 0.5rem;  

  > h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
    font-size: 1rem;  
  }
`

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: .75rem .875rem;
  border: ${({ theme, $loginScreenInput }) => 
    $loginScreenInput ? '1px solid ' + theme.COLORS.LIGHT_100 : 'none'
  };
  border-radius: ${({ $loginScreenInput }) => 
    $loginScreenInput ? '5px' : '.5rem'
  };

  color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
  background-color: ${({ theme, $loginScreenInput }) => 
    $loginScreenInput ? 'transparent' : theme.COLORS.DARK_900
  };

  ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}; 
  font-size: 1rem;  

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    background-color: ${({ theme, $loginScreenInput }) => 
      $loginScreenInput ? theme.COLORS.DARK_800 : theme.COLORS.DARK_1000
    };
   
  }

`