import NavbarArtesao from "../components/layout/Navbar/artesao/NavbarArtesao.jsx"
import Footer from "../components/layout/Footer/Footer.jsx"
import { Outlet } from 'react-router-dom';

function UsuarioArtesao() {
    return (
        <div>
            <NavbarArtesao />
            <Outlet />
            <Footer />
        </div>
    )
}

export default UsuarioArtesao;