import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  function toggleTheme() {
    setTheme((prevTheme) => (
      prevTheme === lightTheme ? darkTheme : lightTheme
    ));
    saveUserTheme();
  };

  function saveUserTheme() {
    let user = JSON.parse(localStorage.getItem("@foodexplorer:user"));
    user.theme = theme.NAME === "lightTheme" ? "darkTheme" : "lightTheme";
    localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
  }

  function loadUserTheme() {
    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"));
    setTheme(() => (
      user.theme === "lightTheme" ? lightTheme : darkTheme
    ));
  }

  useEffect(() => {
    loadUserTheme();
  }, [])

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