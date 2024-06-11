import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  gap: 0.88rem;

  height: 3rem;
  width: 36.3125rem; 
  padding: 0.75rem 1.5rem;
  border-radius: 0.3rem;  

  font-size: 1.5rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  background-color: ${({ theme}) => theme.COLORS.DARK_900};

  > button {
    display: flex;
    flex-direction: column;
    
    > svg {
      height: 1.5rem;
      width: 1.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

`

export const Input = styled.input`
  all: unset;
  width: 55%;
  height: 100%;
  text-align: center;  

  ${({ theme}) => theme.FONTS.ROBOTO_REGULAR};
  font-size: 1rem;
  font-weight: 400;   

  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};  

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