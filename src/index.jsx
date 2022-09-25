import React from 'react';
import { createRoot } from 'react-dom/client';
import 'assets/styles/font.css';
import AppProvider from 'AppProvider';
import Root from 'views/Root';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppProvider>
      <Root />
    </AppProvider>
  </React.StrictMode>
);
