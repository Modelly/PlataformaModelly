import CarrinhoLayout from "../../components/layout/Carrinho/CarrinhoLayout";
import Navbar from "../../components/layout/Navbar/deslogado/NavbarDeslogado";
import Footer from "../../components/layout/Footer/Footer";

function Carrinho() {
    return (
        <div>
            <Navbar />
            <CarrinhoLayout />
            <Footer />
        </div>
    )
}

export default Carrinho;