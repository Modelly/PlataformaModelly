import { Link } from 'react-router-dom';
import styleNav from './Navbar.module.css';
import logo from '../../../../assets/images/imgs-nav/modelly-logo.png';
import lupa from '../../../../assets/images/imgs-nav/lupa-icon.png';
import cartIcon from '../../../../assets/images/imgs-nav/cart-icon.png';
import heartIcon from '../../../../assets/images/imgs-nav/heart-icon.png';
import userIcon from '../../../../assets/images/imgs-nav/male-user.png';

const Navbar = () => {
    return (
        <div className={styleNav.navbar_container}>
            <div className={styleNav.navbar_top}>
                <Link to="/">
                    <img src={logo} alt="Logo totalmente branco escrito Modelly com um gatinho segurando um pincel" className={styleNav.logo_nav} />
                </Link>
                <div className={styleNav.search_box}>
                    <input type="text" placeholder="Buscar na Modelly" />
                    <img src={lupa} alt="Lupa de pesquisa" className={styleNav.lupa_icon} />
                </div>
                <div className={styleNav.icons}>
                    <Link to="/carrinho">
                        <img src={cartIcon} alt="Carrinho" className={styleNav.icon} />
                    </Link>
                    <Link to="/Cadastro_Produto">
                        <img src={heartIcon} alt="Favoritos" className={styleNav.icon} />
                    </Link>
                    <Link to="/login" className={styleNav.login_link}>
                        <img src={userIcon} alt="Ícone de usuário" className={styleNav.user_icon} />
                        <span>Iniciar Sessão</span>
                    </Link>
                </div>
            </div>
            <div className={styleNav.navbar_bottom}>
                <ul className={styleNav.navbar_list}>
                    <li className={styleNav.navbar_item}><Link to="/personalizado">Personalizado</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/feira-virtual">Feira Virtual</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/seja-vendedor">Seja Vendedor</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/planos-modelly">Planos Modelly</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/sobre">Sobre</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/fale-conosco">Fale Conosco</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
