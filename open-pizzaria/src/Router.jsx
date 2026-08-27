import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './Components/Menu/Index';
import Sobre from './pages/Sobre'
import Cardapio from './pages/Cardapio';
import Users from './pages/Users';
import Comentarios from "./pages/Comentarios"

export default function Router() {
  return (
    <BrowserRouter> 

     <Menu />
        <Routes>
            <Route path="/" element={ <Home /> } />
             <Route path="/sobre" element={ <Sobre /> } />
              <Route path="/Cardapio" element={ <Cardapio /> } />
               <Route path="/Users" element={ <Users /> } />
               <Route path="/Comentarios" element={ <Comentarios /> } />



        </Routes>
    </BrowserRouter>
  )
}


