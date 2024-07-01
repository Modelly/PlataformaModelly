import NavbarDeslogado from "../components/layout/Navbar/deslogado/NavbarDeslogado.jsx"
import Footer from "../components/layout/Footer/Footer.jsx"
import { Outlet } from 'react-router-dom';
import NavbarResponsiva from "../components/layout/Navbar/NavbarResponsiva.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function UsuarioDeslogado() {
    return (
        <div>
            <div className="d-none d-lg-block">
                <NavbarDeslogado />
            </div>
            <div className="d-lg-none">
                <NavbarResponsiva />
            </div>
            <div className="container-fluid">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default UsuarioDeslogado;
