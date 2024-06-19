import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Produto from '../interface/pages/Produto/Produto';
import Home from '../interface/pages/Home/Home';
import Login from '../interface/pages/Login/Login';
import FeiraVirtual from '../interface/pages/FeiraVirtual/FeiraVirtual';
import Personalizado from '../interface/pages/Personalizado/Personalizado';
import Sobre from './pages/Sobre/Sobre';
import Cadastro from './pages/Cadastro/Cadastro';
import Carrinho from './pages/Carrinho/Carrinho';
import CadastroProduto from './pages/Cad_Produto/Cad_Product';
import Vendedor from './pages/Vendedor/Vendedor.jsx';
import Popup from './components/layout/pop_vendedor/VendedorLayout.jsx';
import CadastroVendedor from './pages/Cad_Vendedor/Cad_Vendedor.jsx';
import Contato from './pages/Contato/Contato.jsx';
import Contato_1 from './pages/Contato/Contato.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/seja-vendedor" element={<Vendedor/>}/>
                    <Route path="/produto" element={<Produto />} />
                    <Route path="/personalizado" element={<Personalizado/>} />
                    <Route path="/feira-virtual" element={<FeiraVirtual/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/sobre" element={<Sobre/>} />
                    <Route path="/cadastro" element={<Cadastro/>} />
                    <Route path="/carrinho" element={<Carrinho/>} />
                    <Route path="/Cadastro_Produto" element={<CadastroProduto/>} />
                    <Route path="/" element={<Popup/>} />
                    <Route path="/cadastrar-vendedor" element={<CadastroVendedor/>} />
                    <Route path="/fale-conosco" element={<Contato_1/>}/>
                </Routes>         
            </div>
        </Router>
    );
}

export default AppRoutes;
