// AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/util/ScrollToTop.jsx';

import UsuarioLogado from './pages/UsuarioLogado.jsx';
import UsuarioDeslogado from './pages/UsuarioDeslogado.jsx';
import UsuarioArtesao from './pages/UsuarioArtesao.jsx';

import Login from '../interface/components/layout/login/LoginLayout.jsx';
import HomeLayout from '../interface/components/layout/home/HomeLayout.jsx';
import Produto from '../interface/components/layout/Produto/ProdutoLayout.jsx';
import FeiraVirtual from '../interface/components/layout/FeiraVirtual/FeiraLayout.jsx';
import Sobre from '../interface/components/layout/Sobre/Sobre_Layout.jsx';
import Carrinho from '../interface/components/layout/Carrinho/CarrinhoLayout.jsx';
import CadastroProduto from '../interface/components/layout/Cadastro_Produto/Cadastro_Produto.jsx';
import VendedorPopUp from './components/layout/pop_vendedor/VendedorLayout.jsx';
import CadastroVendedor from '../interface/components/layout/Cadastro_Vendedor/Cadastro_VendedorLayout.jsx';
import Contato_1 from '../interface/components/layout/Contato/ContatoLayout.jsx';
import Categoria from './components/layout/Categoria/Categoria.jsx';
import PersonalizadoLayout from './components/layout/Personalizado/PersonalizadoLayout.jsx';
import CategoriaCliente from './components/layout/Personalizado/pedidoCliente/CategoriaCliente.jsx';
import FormularioServicos from './components/layout/Personalizado/pedidoCliente/FormularioServicos.jsx';
import EscolhaCategoria from './components/layout/Personalizado/pedidoCliente/EscolhaCategoria.jsx';
import Publicar from './components/layout/Personalizado/pedidoCliente/Publicar.jsx';
import CheckoutLayout from './components/layout/Carrinho/Checkout/CheckoutLayout.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className='container'>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    
                    {/* Rotas para usuários não logados */}
                    <Route path="/" element={<UsuarioDeslogado />}>
                        <Route index element={<HomeLayout />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/produto" element={<Produto />} />
                        <Route path="/carrinho" element={<Carrinho />} />
                        <Route path="/categoria" element={<Categoria />} />
                        <Route path="/produto/:id" element={<Produto />} />
                        <Route path="/fale-conosco" element={<Contato_1 />} />
                        <Route path="/feira-virtual" element={<FeiraVirtual />} />
                        <Route path="/seja-vendedor" element={<VendedorPopUp />} />
                        <Route path="/cadastrar-vendedor" element={<CadastroVendedor />} />
                    </Route>

                    {/* Rotas para usuários logados */}
                    <Route path="/consumidor" element={<UsuarioLogado />}>
                        <Route index element={<HomeLayout />} />
                        <Route path="/consumidor/sobre" element={<Sobre />} />
                        <Route path="/consumidor/produto" element={<Produto />} />
                        <Route path="/consumidor/carrinho" element={<Carrinho />} />
                        <Route path="/consumidor/categoria" element={<Categoria />} />
                        <Route path="/consumidor/produto/:id" element={<Produto />} />
                        <Route path="/consumidor/fale-conosco" element={<Contato_1 />} />
                        <Route path="/consumidor/feira-virtual" element={<FeiraVirtual />} />
                        <Route path="/consumidor/seja-vendedor" element={<VendedorPopUp />} />
                        <Route path="/consumidor/cadastrar-vendedor" element={<CadastroVendedor />} />
                        <Route path="/consumidor/pedido-personalizado" element={<CategoriaCliente />} />
                    </Route>

                    {/* Rotas para artesãos */}
                    <Route path="/artesao" element={<UsuarioArtesao />}>
                        <Route index element={<HomeLayout />} />
                        <Route path="/artesao/sobre" element={<Sobre />} />
                        <Route path="/artesao/produto" element={<Produto />} />
                        <Route path="/artesao/carrinho" element={<Carrinho />} />
                        <Route path="/artesao/categoria" element={<Categoria />} />
                        <Route path="/artesao/produto/:id" element={<Produto />} />
                        <Route path="/artesao/fale-conosco" element={<Contato_1 />} />
                        <Route path="/artesao/feira-virtual" element={<FeiraVirtual />} />
                        <Route path="/artesao/seja-vendedor" element={<VendedorPopUp />} />
                        <Route path="/artesao/Cadastro_Produto" element={<CadastroProduto />} />
                        <Route path="/artesao/Personalizado" element={<PersonalizadoLayout />} />
                        <Route path="/artesao/cadastrar-vendedor" element={<CadastroVendedor />} />
                        <Route path="/artesao/pedido-personalizado" element={<CategoriaCliente />} />
                    </Route>

                    {/* Rota para checkout */}
                    <Route path="/checkout" element={<CheckoutLayout />} />
                 

                    {/* Rotas para pedido personalizado */}
                    <Route path="/pedido-personalizado" element={<CategoriaCliente />} />
                    <Route path="/pedido-personalizado/categorias" element={<EscolhaCategoria />} />
                    <Route path="/pedido-personalizado/formulario" element={<FormularioServicos />} />
                    <Route path="/pedido-personalizado/publicar" element={<Publicar />} />
                  
                </Routes>         
            </div>
        </Router>
    );
}

export default AppRoutes;
