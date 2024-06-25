import { Link } from 'react-router-dom';
import styleNav from '../Navbar.module.css';
import logo from '../../../../../assets/images/imgs-nav/modelly-logo.png';
import lupa from '../../../../../assets/images/imgs-nav/lupa-icon.png';
import bagIcon from '../../../../../assets/images/imgs-nav/consumidor/atencao-sacola.png';
import heartIcon from '../../../../../assets/images/imgs-nav/heart-icon.png';
import photoPerfil from '../../../../../assets/images/imgs-nav/foto-perfil.png';

const NavbarArtesao = () => {
    return (
        <div className={styleNav.navbar_container}>
            <div className={styleNav.navbar_top}>
                <Link to="/artesao">
                    <img src={logo} alt="Logo totalmente branco escrito Modelly com um gatinho segurando um pincel" className={styleNav.logo_nav} />
                </Link>
                <div className={styleNav.search_box}>
                    <input type="text" placeholder="Buscar na Modelly" />
                    <img src={lupa} alt="Lupa de pesquisa" className={styleNav.lupa_icon} />
                </div>
                <div className={styleNav.icons}>
                    <Link to="/artesao/Cadastro_Produto">
                        <img src={heartIcon} alt="Favoritos" className={styleNav.iconConsumidor} />
                    </Link>
                    <Link to="/artesao/carrinho">
                        <img src={bagIcon} alt="Carrinho" className={styleNav.iconConsumidor} />
                    </Link>
                    <div>
                        <img src={photoPerfil} alt="Ícone de usuário" className={styleNav.user_iconPerfil} />
                    </div>
                </div>
            </div>
            <div className={styleNav.navbar_bottom}>
                <ul className={styleNav.navbar_list}>
                    <li className={styleNav.navbar_item}><Link to="/personalizado">Personalizado</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/feira-virtual">Feira Virtual</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/seja-vendedor">Minha Loja</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/planos-modelly">Planos Modelly</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/sobre">Sobre</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/fale-conosco">Fale Conosco</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavbarArtesao;
