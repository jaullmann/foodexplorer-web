import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { CartButton } from './components/CartButton';
import { OrdersButton } from './components/OrdersButton';
import { Header } from './components/Header';
import { DishCard } from './components/DishCard';
import { Footer } from './components/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />      
      <CartButton totalDishes={3}/>      
      <OrdersButton totalOrders={2}/>      
      <Header admin={true}/>
      <DishCard 
        title={"Prato do foodexplorer"}
        imageFile={"/src/assets/samples/dish_image_large.png"}
        description={"Descrição genérica de prato para página inicial do foodexplorer."}
        price={25.90}
      />   
      <Footer />
    </ThemeProvider>    
  </React.StrictMode>,
)
