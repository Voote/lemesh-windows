import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import Header from './omponents/atoms/Header';

const AppProvider = ({ children }) => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  </Router>
);
export default AppProvider;
