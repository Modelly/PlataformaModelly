import ProdutoLayout from '../../components/layout/Produto/ProdutoLayout';
import Navbar from "../../components/layout/Navbar/deslogado/NavbarDeslogado.jsx"
import Footer from "../../components/layout/Footer/Footer.jsx"

function Produto() {
    return (
        <>
            <Navbar />
            <ProdutoLayout />
            <Footer />
        </>
    )
}

export default Produto;