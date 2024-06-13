import HomeLayout from '../../components/layout/home/HomeLayout'
import Navbar from "../../components/layout/Navbar/Navbar.jsx"
import Footer from "../../components/layout/Footer/Footer.jsx"
import LanguageSelector from "../../components/layout/LanguageSelector/LanguageSelector.jsx"

function Home() {
    return (
        <div>
            <Navbar />
            <LanguageSelector /> {/* Adiciona o seletor de idioma aqui */}
            <HomeLayout />
            <Footer />
        </div>
    )
}

export default Home;