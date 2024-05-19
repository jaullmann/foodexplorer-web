import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { Button } from './components/Button';
import { Ingredient } from './components/Ingredient';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button title="Novo prato"/>
      <Ingredient name='pão integral'/>
    </ThemeProvider>    
  </React.StrictMode>,
)
