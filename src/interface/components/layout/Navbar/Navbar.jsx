import './Navbar.css';
import logo from '../../../../assets/images/imgs-nav/modelly-logo.png';
import lupa from '../../../../assets/images/imgs-nav/lupa-icon.png';
import cartIcon from '../../../../assets/images/imgs-nav/cart-icon.png';
import heartIcon from '../../../../assets/images/imgs-nav/heart-icon.png';
import userIcon from '../../../../assets/images/imgs-nav/male-user.png'; 
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-top'>
                <Link to="/">
                    <img src={logo} alt="Logo totalmente branco escrito modelli com um gatinho segurando um pincel" className='logo-nav' />
                </Link>
                <div className='search-box'>
                    <input type="text" placeholder='Buscar na Modelly' />
                    <img src={lupa} alt="Lupa de pesquisa" className="lupa-icon" />
                </div>
                <div className='icons'>
                    <Link to="/carrinho">
                        <img src={cartIcon} alt="Carrinho" className="icon" />
                        </Link>
                    <Link to="/Cadastro_Produto">
                        <img src={heartIcon} alt="Favoritos" className="icon" />
                    </Link>
                    <Link to="/login">
                        <img src={userIcon} alt="Ícone de usuário" className="user-icon" />
                        <span>Iniciar Sessão</span>
                    </Link>
                </div>
            </div>
            
            <div className='navbar-bottom'>
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="/personalizado">Personalizado</Link></li>
                    <li className="navbar-item"><Link to="/feira-virtual">Feira Virtual</Link></li>
                    <li className="navbar-item"><Link to="/seja-vendedor">Seja Vendedor</Link></li>
                    <li className="navbar-item"><Link to="/planos-modelly">Planos Modelly</Link></li>
                    <li className="navbar-item"><Link to="/sobre">Sobre</Link></li>
                    <li className="navbar-item"><Link to="/fale-conosco">Fale Conosco</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
