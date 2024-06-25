import Cadastro_VendedorLayout from "../../components/layout/Cadastro_Vendedor/Cadastro_VendedorLayout";
import Navbar from "../../components/layout/Navbar/deslogado/NavbarDeslogado";
import Footer from "../../components/layout/Footer/Footer";
import styles from './Cad_Vendedor.module.css';

function Cadastro_Vendedor() {
    return (
        <div className={styles.bodyHTML}>
            <Navbar />
            <Cadastro_VendedorLayout/>
            <Footer />
        </div>
    )
}

export default Cadastro_Vendedor;