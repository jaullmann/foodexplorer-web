import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  gap: 0.88rem;

  height: 3rem;
  width: 100%;
  max-width: 35rem;
  padding: 0.75rem 1rem;
  border-radius: 0.3rem;  

  font-size: 1.5rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_00};
  background-color: ${({ theme}) => theme.COLORS.DARK_900};

  > button {
    display: flex;
    flex-direction: column;
    
    > svg {
      height: 1.5rem;
      width: 1.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > svg:hover {
      transform: scale(1.1);
    }
  }

  transition: 0.2s;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_900};

  &:hover {
    transition: 0.2s;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};            
  }

  &:focus, &:focus-within {
    transition: 0.2s;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: ${({ theme }) => theme.COLORS.DARK_300}; 
  }

`

export const Input = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  text-align: center;  

  ${({ theme}) => theme.FONTS.ROBOTO_REGULAR};
  font-size: clamp(1rem, .5rem + .5vw, 1.3rem);  

  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};  

  overflow: hidden;
    text-overflow: ellipsis;

  transition: 0.2s ease-in-out;
    
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500}; 
    overflow: hidden;
    text-overflow: ellipsis;   
    transition: 0.2s ease-in-out; 
  }

  &:focus, &:not(:placeholder-shown) {
    width: 100%;
    text-align: center;
    transition: 0.3s ease-in-out;
    &::placeholder {
      color: transparent; 
      transition: 0.2s ease-in-out;
    }

  } 

`