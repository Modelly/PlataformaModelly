import HomeLayout from '../../components/layout/home/HomeLayout'
import Navbar from "../../components/layout/Navbar/Navbar.jsx"
import Footer from "../../components/layout/Footer/Footer.jsx"

function Home() {
    return (
        <div>
            <Navbar />
            <HomeLayout />
            <Footer />
        </div>
    )
}

export default Home;