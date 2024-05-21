import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { Button } from './components/Button';
import { Ingredient } from './components/Ingredient';
import { DishCounter } from './components/DishCounter';
import { CartButton } from './components/CartButton';
import { MainLogo } from './components/MainLogo';
import { MainLogoAdmin } from './components/MainLogoAdmin';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button title="Novo prato"/>
      <Ingredient name='pão integral'/>
      <DishCounter amount={4} />
      <CartButton totalDishes={3}/>
      <MainLogo />
      <MainLogoAdmin />
    </ThemeProvider>    
  </React.StrictMode>,
)
