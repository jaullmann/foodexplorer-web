import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { CartButton } from './components/CartButton';
import { OrdersButton } from './components/OrdersButton';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />      
      <CartButton totalDishes={3}/>      
      <OrdersButton totalOrders={2}/>      
      <Header admin={true}/>      
      <Footer />
    </ThemeProvider>    
  </React.StrictMode>,
)
