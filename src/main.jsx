import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/auth';
import { Routes } from './routes';
import { ThemeProvider } from './hooks/theme';
import { LoadingProvider } from './hooks/loading';
import { register } from 'swiper/element/bundle';
import GlobalStyles from './styles/global';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>      
      <GlobalStyles />  
        <AuthProvider>
          <LoadingProvider>
            <Routes /> 
          </LoadingProvider> 
        </AuthProvider>       
    </ThemeProvider>
  </React.StrictMode>,
)
