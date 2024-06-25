import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import UsuarioLogado from './pages/UsuarioLogado.jsx';
import UsuarioDeslogado from './pages/UsuarioDeslogado.jsx';
import UsuarioArtesao from './pages/UsuarioArtesao.jsx';

// layouts
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

const AppRoutes = () => {
    return (
        <Router>
            <div className='container'>
                <Routes>
                    
                    <Route path="/login" element={<Login/>} />
                    
                    {/* TELAS CONSUMIDOR NÃO LOGADO */}
                    <Route path="/" element={<UsuarioDeslogado />}>
                        <Route path="/" element={<HomeLayout />}/>
                        <Route path="/produto" element={<Produto />} />
                        <Route path="/produto/:id" element={<Produto />} />
                        <Route path="/feira-virtual" element={<FeiraVirtual/>} />
                        <Route path="/seja-vendedor" element={<VendedorPopUp/>}/>
                        <Route path="/sobre" element={<Sobre/>} />
                        <Route path="/carrinho" element={<Carrinho/>} />
                        <Route path="/fale-conosco" element={<Contato_1/>}/>
                        <Route path="/cadastrar-vendedor" element={<CadastroVendedor/>} />
                    </Route>

                    {/* TELAS CONSUMIDOR LOGADO */}
                    <Route path="/consumidor" element={<UsuarioLogado />}>
                        <Route path="/consumidor" element={<HomeLayout />}/>
                        <Route path="/consumidor/produto" element={<Produto />} />
                        <Route path="/consumidor/produto/:id" element={<Produto />} />
                        <Route path="/consumidor/feira-virtual" element={<FeiraVirtual/>} />
                        <Route path="/consumidor/seja-vendedor" element={<VendedorPopUp/>}/>
                        <Route path="/consumidor/sobre" element={<Sobre/>} />
                        <Route path="/consumidor/carrinho" element={<Carrinho/>} />
                        <Route path="/consumidor/fale-conosco" element={<Contato_1/>}/>
                        <Route path="/consumidor/cadastrar-vendedor" element={<CadastroVendedor/>} />
                    </Route>
                    {/*
                        <Route path="/" element={<HomeConsumidor />} />
                        <Route path="/produto" element={<ProdutoConsumidor />} />
                        <Route path="/produto/:id" element={<ProdutoConsumidor />} />
                        <Route path="/feira-virtual" element={<FeiraVirtualConsumidor />} />
                        <Route path="/seja-vendedor" element={<VendedorConsumidor />}/>
                        <Route path="/personalizado" element={<PersonalizadoConsumidor />} />
                        <Route path="/sobre" element={<SobreConsumidor />} />
                        <Route path="/carrinho" element={<CarrinhoConsumidor />} />
                        <Route path="/fale-conosco" element={<Contato_1Consumidor />}/>
                    */}

                    {/* TELAS ARTESAO */}
                    <Route path="/artesao" element={<UsuarioArtesao />}>
                        <Route path="/artesao" element={<HomeLayout />}/>
                        <Route path="/artesao/produto" element={<Produto />} />
                        <Route path="/artesao/produto/:id" element={<Produto />} />
                        <Route path="/artesao/feira-virtual" element={<FeiraVirtual/>} />
                        <Route path="/artesao/seja-vendedor" element={<VendedorPopUp/>}/>
                        <Route path="/artesao/sobre" element={<Sobre/>} />
                        <Route path="/artesao/carrinho" element={<Carrinho/>} />
                        <Route path="/artesao/fale-conosco" element={<Contato_1/>}/>
                        <Route path="/artesao/cadastrar-vendedor" element={<CadastroVendedor/>} />
                        <Route path="/artesao/Cadastro_Produto" element={<CadastroProduto/>} />
                    </Route>

                    <Route path="/Cadastro_Produto" element={<CadastroProduto/>} />
                </Routes>         
            </div>
        </Router>
    );
}

export default AppRoutes;
