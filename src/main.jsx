import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextProvider from './contexts/ThemeContext'
import ReactGA from 'react-ga4';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

const TRACKING_ID = "G-90V2XLRLKK";
ReactGA.initialize(TRACKING_ID);
