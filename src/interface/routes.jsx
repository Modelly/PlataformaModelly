import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/util/ScrollToTop.jsx';

// paginas por tipo de usuario
import UsuarioLogado from './pages/UsuarioLogado.jsx';
import UsuarioDeslogado from './pages/UsuarioDeslogado.jsx';
import UsuarioArtesao from './pages/UsuarioArtesao.jsx';


import Login from '../interface/components/layout/login/LoginLayout.jsx';

// layouts das paginas
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

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className='container'>
                <Routes>
                    
                    <Route path="/login" element={<Login/>} />
                    
                    {/* TELAS CONSUMIDOR NÃO LOGADO */}
                    <Route path="/" element={<UsuarioDeslogado/>}>
                        <Route path="/" element={<HomeLayout/>}/>
                        <Route path="/sobre" element={<Sobre/>}/>
                        <Route path="/produto" element={<Produto/>}/>
                        <Route path="/carrinho" element={<Carrinho/>}/>
                        <Route path="/categoria" element={<Categoria/>}/>
                        <Route path="/produto/:id" element={<Produto/>}/>
                        <Route path="/fale-conosco" element={<Contato_1/>}/>
                        <Route path="/feira-virtual" element={<FeiraVirtual/>}/>
                        <Route path="/seja-vendedor" element={<VendedorPopUp/>}/>
                        <Route path="/cadastrar-vendedor" element={<CadastroVendedor/>} />
                    </Route>

                    {/* TELAS CONSUMIDOR LOGADO */}
                    <Route path="/consumidor" element={<UsuarioLogado/>}>
                        <Route path="/consumidor" element={<HomeLayout/>}/>
                        <Route path="/consumidor/sobre" element={<Sobre/>}/>
                        <Route path="/consumidor/produto" element={<Produto/>}/>
                        <Route path="/consumidor/carrinho" element={<Carrinho/>}/>
                        <Route path="/consumidor/categoria" element={<Categoria/>}/>
                        <Route path="/consumidor/produto/:id" element={<Produto/>}/>
                        <Route path="/consumidor/fale-conosco" element={<Contato_1/>}/>
                        <Route path="/consumidor/feira-virtual" element={<FeiraVirtual/>}/>
                        <Route path="/consumidor/seja-vendedor" element={<VendedorPopUp/>}/>
                        <Route path="/consumidor/cadastrar-vendedor" element={<CadastroVendedor/>} />
                    </Route>

                    {/* TELAS ARTESAO */}
                    <Route path="/artesao" element={<UsuarioArtesao />}>
                        <Route path="/artesao" element={<HomeLayout/>}/>
                        <Route path="/artesao/sobre" element={<Sobre/>}/>
                        <Route path="/artesao/produto" element={<Produto/>}/>
                        <Route path="/artesao/carrinho" element={<Carrinho/>}/>
                        <Route path="/artesao/categoria" element={<Categoria/>}/>
                        <Route path="/artesao/produto/:id" element={<Produto/>}/>
                        <Route path="/artesao/fale-conosco" element={<Contato_1/>}/>
                        <Route path="/artesao/feira-virtual" element={<FeiraVirtual/>}/>
                        <Route path="/artesao/seja-vendedor" element={<VendedorPopUp/>}/>
                        <Route path="/artesao/Cadastro_Produto" element={<CadastroProduto/>}/>
                        <Route path="/artesao/cadastrar-vendedor" element={<CadastroVendedor/>} />
                    </Route>

                    <Route path="/Cadastro_Produto" element={<CadastroProduto/>} />
                </Routes>         
            </div>
        </Router>
    );
}

export default AppRoutes;
