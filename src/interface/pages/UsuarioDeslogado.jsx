import NavbarDeslogado from "../components/layout/Navbar/deslogado/NavbarDeslogado.jsx"
import Footer from "../components/layout/Footer/Footer.jsx"
import { Outlet } from 'react-router-dom';

function UsuarioDeslogado() {
    return (
        <div>
            <NavbarDeslogado />
            <Outlet/>
            <Footer />
        </div>
    )
}


export default UsuarioDeslogado;