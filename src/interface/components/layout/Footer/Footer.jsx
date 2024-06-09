import footerBg from '../../../../assets/images/imgs-footer/footer-bg.png';
import visaIcon from '../../../../assets/images/imgs-footer/Visa.png';
import mastercardIcon from '../../../../assets/images/imgs-footer/MasterCard.png';
import amexIcon from '../../../../assets/images/imgs-footer/amex.png';
import dinersIcon from '../../../../assets/images/imgs-footer/discovery.png';
import instagramIcon from '../../../../assets/images/imgs-footer/Instagram.png';
import tiktokIcon from '../../../../assets/images/imgs-footer/TikTok.png';
import GithubIcon from '../../../../assets/images/imgs-footer/GitHub.png';
import LinktreeIcon from '../../../../assets/images/imgs-footer/Linktree.png';
import LinkedinIcon from '../../../../assets/images/imgs-footer/LinkedIn.png';
import './Footer.css';
import '../../../../../src/App.css';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={footerBg} alt="Footer Background" className='footer-background' />
            <div className='footer-content'>
                <div className='footer-column'>
                    <h4>Atendimento ao Cliente</h4>
                    <ul>
                        <li><a href="#">Venda na Modelly</a></li>
                        <li><a href="#">Fale Conosco</a></li>
                        <li><a href="#">Planos Modelly</a></li>
                        <li><a href="#">Preferências e Cookies</a></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4>Sobre a Modelly</h4>
                    <ul>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Políticas Modelly</a></li>
                        <li><a href="#">Políticas de Privacidade</a></li>
                        <li><a href="#">Parceiros</a></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4>Métodos de Pagamento</h4>
                    <div className='payment-icons'>
                        <img src={visaIcon} alt="Visa" />
                        <img src={mastercardIcon} alt="Mastercard" />
                        <img src={amexIcon} alt="American Express" />
                        <img src={dinersIcon} alt="Diners Club" />
                    </div>
                </div>
                <div className='footer-column'>
                    <h4>Siga-nos</h4>
                    <div className='social-icons'>
                        <img src={instagramIcon} alt="Instagram" />
                        <img src={tiktokIcon} alt="TikTok" />
                        <img src={GithubIcon} alt="Github" />
                        <img src={LinktreeIcon} alt="Linktree" />
                        <img src={LinkedinIcon} alt="Linkedin" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

