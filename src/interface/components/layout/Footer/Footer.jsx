import footerBg from '../../../../assets/images/imgs-footer/footer-bg.png';
import logo from '../../../../assets/images/imgs-footer/logo-footer.png';
import visaIcon from '../../../../assets/images/imgs-footer/Visa.png';
import mastercardIcon from '../../../../assets/images/imgs-footer/MasterCard.png';
import amexIcon from '../../../../assets/images/imgs-footer/amex.png';
import dinersIcon from '../../../../assets/images/imgs-footer/discovery.png';
import barcodeIcon from '../../../../assets/images/imgs-footer/boleto.png';
import pixIcon from '../../../../assets/images/imgs-footer/pix.png';
import instagramIcon from '../../../../assets/images/imgs-footer/Instagram.png';
import tiktokIcon from '../../../../assets/images/imgs-footer/TikTok.png';
import githubIcon from '../../../../assets/images/imgs-footer/GitHub.png';
import linktreeIcon from '../../../../assets/images/imgs-footer/Linktree.png';
import linkedinIcon from '../../../../assets/images/imgs-footer/LinkedIn.png';
import styleFooter from './Footer.module.css';
import '../../../../../src/App.css';

const Footer = () => {
    return (
        <footer className={styleFooter.footer} style={{ backgroundImage: `url(${footerBg})` }}>
            <div className={styleFooter.footer_content}>
                <div className={`${styleFooter.footer_column} ${styleFooter.customer_service}`}>
                    <img src={logo} alt="Logo" className={styleFooter.footer_logo} />
                    <h4>Atendimento ao Cliente</h4>
                    <ul>
                        <li><a href="#">Venda na Modelly</a></li>
                        <li><a href="#">Fale Conosco</a></li>
                        <li><a href="#">Planos Modelly</a></li>
                        <li><a href="#">Preferências de Cookies</a></li>
                    </ul>
                </div>
                <div className={`${styleFooter.footer_column} ${styleFooter.about}`}>
                    <h4>Sobre a Modelly</h4>
                    <ul>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Políticas</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Parcerias</a></li>
                    </ul>
                </div>
                <div className={`${styleFooter.footer_column} ${styleFooter.payment_methods}`}>
                    <h4>Formas de Pagamento</h4>
                    <div className={styleFooter.payment_icons}>
                        <img src={visaIcon} alt="Visa" />
                        <img src={mastercardIcon} alt="Mastercard" />
                        <img src={amexIcon} alt="American Express" />
                        <img src={dinersIcon} alt="Discover" />
                        <img className={styleFooter.img_barcode} src={barcodeIcon} alt="Barcode" />
                        <img className={styleFooter.pix_pix} src={pixIcon} alt="Pix" />
                    </div>
                </div>
                <div className={`${styleFooter.footer_column} ${styleFooter.follow_us}`}>
                    <h4>Siga-nos</h4>
                    <div className={styleFooter.social_icons}>
                        <a href="https://www.instagram.com"><img src={instagramIcon} alt="Instagram" /><span>Instagram</span></a>
                        <a href="https://www.tiktok.com"><img src={tiktokIcon} alt="TikTok" /><span>TikTok</span></a>
                        <a href="https://www.linkedin.com"><img src={linkedinIcon} alt="LinkedIn" /><span>LinkedIn</span></a>
                        <a href="https://www.github.com"><img src={githubIcon} alt="GitHub" /><span>GitHub</span></a>
                        <a href="https://www.linktree.com"><img src={linktreeIcon} alt="Linktree" /><span>Linktree</span></a>
                    </div>
                </div>
            </div>
            <div className={styleFooter.footer_bottom}>
                <span>© 2024 Modelly. Todos os direitos reservados.</span>
            </div>
        </footer>
    );
};

export default Footer;
