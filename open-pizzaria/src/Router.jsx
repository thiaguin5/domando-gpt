import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './Components/Menu/Index';
import Sobre from './pages/Sobre'

export default function Router() {
  return (
    <BrowserRouter> 

     <Menu />
        <Routes>
            <Route path="/" element={ <Home /> } />
             <Route path="/sobre" element={ <Sobre /> } />

        </Routes>
    </BrowserRouter>
  )
}


