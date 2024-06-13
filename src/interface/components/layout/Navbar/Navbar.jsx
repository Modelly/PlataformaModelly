import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styleNav from './Navbar.module.css';
import logo from '../../../../assets/images/imgs-nav/modelly-logo.png';
import lupa from '../../../../assets/images/imgs-nav/lupa-icon.png';
import cartIcon from '../../../../assets/images/imgs-nav/cart-icon.png';
import heartIcon from '../../../../assets/images/imgs-nav/heart-icon.png';
import userIcon from '../../../../assets/images/imgs-nav/male-user.png';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div className={styleNav.navbar_container}>
            <div className={styleNav.navbar_top}>
                <Link to="/">
                    <img src={logo} alt={t('navbar.logoAlt')} className={styleNav.logo_nav} />
                </Link>
                <div className={styleNav.search_box}>
                    <input type="text" placeholder={t('navbar.searchPlaceholder')} />
                    <img src={lupa} alt={t('navbar.searchAlt')} className={styleNav.lupa_icon} />
                </div>
                <div className={styleNav.icons}>
                    <Link to="/carrinho">
                        <img src={cartIcon} alt={t('navbar.cartAlt')} className={styleNav.icon} />
                    </Link>
                    <Link to="/Cadastro_Produto">
                        <img src={heartIcon} alt={t('navbar.favoritesAlt')} className={styleNav.icon} />
                    </Link>
                    <Link to="/login" className={styleNav.login_link}>
                        <img src={userIcon} alt={t('navbar.userAlt')} className={styleNav.user_icon} />
                        <span>{t('navbar.login')}</span>
                    </Link>
                </div>
            </div>
            <div className={styleNav.navbar_bottom}>
                <ul className={styleNav.navbar_list}>
                    <li className={styleNav.navbar_item}><Link to="/personalizado">{t('navbar.personalized')}</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/feira-virtual">{t('navbar.virtualFair')}</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/seja-vendedor">{t('navbar.beSeller')}</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/planos-modelly">{t('navbar.modellyPlans')}</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/sobre">{t('navbar.about')}</Link></li>
                    <li className={styleNav.navbar_item}><Link to="/fale-conosco">{t('navbar.contact')}</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
