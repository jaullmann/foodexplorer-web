import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/auth';
import { Routes } from './routes';
import { ThemeProvider } from './hooks/theme';
import { AlertsProvider } from './hooks/alerts';
import { StyledAlert } from './components/StyledAlert';
import { register } from 'swiper/element/bundle';
import GlobalStyles from './styles/global';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlertsProvider>
      <ThemeProvider>      
        <GlobalStyles />  
        <AuthProvider>
          <StyledAlert />         
          <Routes />                 
        </AuthProvider>       
      </ThemeProvider>
    </AlertsProvider>
    
  </React.StrictMode>,
)
