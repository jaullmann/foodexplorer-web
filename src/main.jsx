import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { Header } from './components/Header';
import { CardsSection } from './components/CardsSection';
import { Footer } from './components/Footer';
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
      <Header admin={false}/>
      <CardsSection sectionName={"Refeições"}/>   
      <Footer />
    </ThemeProvider>    
  </React.StrictMode>,
)
