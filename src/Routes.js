import React from "react";
import {BrowserRouter,Routes, Route } from 'react-router-dom';

import Formulario from './components/forms/index.jsx';
import Tabela from '../src/components/table/index.jsx';
import Edit from '../src/components/edit/index.jsx';

export default function Rotas(){
    return(
        <BrowserRouter>

            <Routes>
                <Route path='/adicionar' element={<Formulario/>}/>
                <Route path='/' element={<Tabela/>}/>
                <Route path='/:id' element={<Edit/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}