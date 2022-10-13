import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components";
import Home from './pages/Home';
import Error404 from './pages/Error404'
import { sizes } from '../src/utils/sizes.js'


const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

