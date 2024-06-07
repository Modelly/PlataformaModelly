import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Produto from '../interface/pages/Produto/Produto';
import Home from '../interface/pages/Home/Home';
import Login from '../interface/pages/Login/Login';
import FeiraVirtual from '../interface/pages/FeiraVirtual/FeiraVirtual';
import Personalizado from '../interface/pages/Personalizado/Personalizado';
import Sobre from './pages/Sobre/Sobre';
import Cadastro from './pages/Cadastro/Cadastro';

const AppRoutes = () => {
    return (
        <Router>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produto" element={<Produto />} />
                    <Route path="/personalizado" element={<Personalizado/>} />
                    <Route path="/feira-virtual" element={<FeiraVirtual/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/sobre" element={<Sobre/>} />
                    <Route path="/cadastro" element={<Cadastro/>}/>
                </Routes>         
            </div>
        </Router>
    );
}

export default AppRoutes;
