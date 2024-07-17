import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/auth';
import { BrowserRouter } from "react-router-dom";
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

// import { Home } from './pages/Home';
// import { SignIn } from './pages/SignIn';
// import { DishCreation } from './pages/DishCreation';
// import { DishDetails } from './pages/DishDetails';
// import { Payment } from './pages/Payment';
// import { Orders } from './pages/Orders';

import { register } from 'swiper/element/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>      
      <GlobalStyles />  
        <AuthProvider>
          <Routes /> 
        </AuthProvider>       
    </ThemeProvider>    
  </React.StrictMode>,
)
