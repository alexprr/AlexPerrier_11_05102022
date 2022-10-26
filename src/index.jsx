// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Global Style
import { createGlobalStyle } from "styled-components";

// Components
import Home from './pages/Home'
import Error404 from './pages/Error404'
import About from './pages/About';
import Housing from './pages/Housing'

// Utils
import { sizes } from '../src/utils/sizes.js'



const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    min-width: ${sizes.mobile};
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }

  ul, li {
    list-style-type: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path='/housing/:id' element={<Housing />}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

