import NavbarConsumidor from "../components/layout/Navbar/consumidor/NavbarConsumidor.jsx"
import Footer from "../components/layout/Footer/Footer.jsx"
import { Outlet } from 'react-router-dom';

function UsuarioLogado() {
    return (
        <div>
            <NavbarConsumidor />
            <Outlet />
            <Footer />
        </div>
    )
}

export default UsuarioLogado;