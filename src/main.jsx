import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/auth';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
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
