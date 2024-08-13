import { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme 
    }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};