import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from "styled-components";
import Home from './pages/Home';
import { sizes } from '../src/utils/sizes.js'


const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    max-width: ${sizes.desktop};
    min-width: ${sizes.mobile};
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
);

