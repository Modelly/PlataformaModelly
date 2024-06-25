import { getBasePath } from "../../../util/GetBasePath.jsx"
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../../../../assets/images/imgs-nav/modelly-logo.png';
import lupa from '../../../../../assets/images/imgs-nav/lupa-icon.png';
import bagIcon from '../../../../../assets/images/imgs-nav/consumidor/atencao-sacola.png';
import heartIcon from '../../../../../assets/images/imgs-nav/heart-icon.png';
import photoPerfil from '../../../../../assets/images/imgs-nav/foto-perfil.png';

import helpIcon from "../../../../../assets/images/imgs-nav/dropdown/Help.png"
import storeIcon from "../../../../../assets/images/imgs-nav/dropdown/Store.png"
import logoutIcon from "../../../../../assets/images/imgs-nav/dropdown/Logout.png"
import settingsIcon from "../../../../../assets/images/imgs-nav/dropdown/Settings.png"

import styleNav from '../Navbar.module.css';

const NavbarArtesao = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const basePath = getBasePath(location.pathname);

    const handleLogout = () => {
        /*Lógica de logout vai vir aqui quando eu terminar o back*/
        navigate(`/`);
    };

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
                    <details className={styleNav.dropdown}>
                            <summary><img src={photoPerfil} alt="Ícone de usuário" className={styleNav.user_iconPerfil} /></summary>
                            <ul className={styleNav.dropdown_menu}>
                                <li>
                                    <img src={settingsIcon} alt="icone de engranagem" />
                                    Configurar Conta
                                </li>
                                <li>
                                    <img src={storeIcon} alt="icone de engranagem" />
                                    Minha Loja
                                </li>
                                <li onClick={() => navigate(`${basePath}/fale-conosco`)}>
                                    <img src={helpIcon} alt="icone de engranagem" />
                                    Ajuda
                                </li>
                                <li onClick={handleLogout}>
                                    <img src={logoutIcon} alt="icone de engranagem" />
                                    Encerrar sessão
                                </li>
                            </ul>
                        </details>
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
