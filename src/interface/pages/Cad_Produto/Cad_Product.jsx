import CadastroProduto from "../../components/layout/Cadastro_Produto/Cadastro_Produto.jsx";
import Navbar from "../../components/layout/Navbar/deslogado/NavbarDeslogado.jsx";
import Footer from "../../components/layout/Footer/Footer";

function Cad_Produto() {
    return (
        <div>
            <Navbar />
            <CadastroProduto />
            <Footer />
        </div>
    )
}

export default Cad_Produto;