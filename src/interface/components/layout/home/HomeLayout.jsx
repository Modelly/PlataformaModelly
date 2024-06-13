import { useTranslation } from 'react-i18next';
import bannerImage from '../../../../assets/images/imgs-home/banner-image.png';
import decoracaoImg from '../../../../assets/images/imgs-home/decoracao.png';
import acessoriosImg from '../../../../assets/images/imgs-home/acessorios.png';
import velasImg from '../../../../assets/images/imgs-home/velas.png';
import modaImg from '../../../../assets/images/imgs-home/moda.png';
import petsImg from '../../../../assets/images/imgs-home/pets.png';
import infantilImg from '../../../../assets/images/imgs-home/infantil.png';
import sociaisImg from '../../../../assets/images/imgs-home/sociais.png';
import casaImg from '../../../../assets/images/imgs-home/casa.png';
import personalizadoImg from '../../../../assets/images/imgs-home/personalizado.png';
import productImg from '../../../../assets/images/imgs-home/product.png';
import catImage from '../../../../assets/images/imgs-home/cat-image.png';
import dinheiro from '../../../../assets/images/imgs-home/Banknotes.png';
import perfil from '../../../../assets/images/imgs-home/Artist.png';
import devolucao from '../../../../assets/images/imgs-home/devolucao.png';
import categoria from '../../../../assets/images/imgs-home/Categorize.png';
import { Link } from 'react-router-dom';
import styleHome from './HomeLayout.module.css';

const HomeLayout = () => {
    const { t } = useTranslation();

    const categories = [
        { name: t('categories.decoracao'), img: decoracaoImg },
        { name: t('categories.acessorios'), img: acessoriosImg },
        { name: t('categories.velas'), img: velasImg },
        { name: t('categories.moda'), img: modaImg },
        { name: t('categories.pets'), img: petsImg },
        { name: t('categories.infantil'), img: infantilImg },
        { name: t('categories.sociais'), img: sociaisImg },
        { name: t('categories.casa'), img: casaImg },
        { name: t('categories.personalizado'), img: personalizadoImg },
    ];

    const products = Array(8).fill({ name: t('product.name'), description: t('product.description'), price: t('product.price'), img: productImg });

    return (
        <div className={styleHome.home_container}>
            <div className={styleHome.home_bannerImage_container}>
                <img src={bannerImage} alt="Banner" className={styleHome.banner_image} />
            </div>
            <div className={styleHome.categories_container}>
                {categories.map((category, index) => (
                    <div key={index} className={styleHome.category_item}>
                        <img src={category.img} alt={category.name} className={styleHome.category_image} />
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
            <div className={styleHome.recommendations_container}>
                <h2 className={styleHome.recommendations_heading}>{t('recommendations')}</h2>
                <div className={styleHome.products_container}>
                    {products.map((product, index) => (
                        <div key={index} className={styleHome.product_card}>
                            <Link to="/produto">
                                <img src={product.img} alt={product.name} className={styleHome.product_image} />
                                <p className={styleHome.product_name}>{product.name}</p>
                                <p className={styleHome.product_description}>{product.description}</p>
                                <div className={styleHome.product_footer}>
                                    <p className={styleHome.product_price}>{product.price}</p>
                                    <button className={styleHome.view_more_button}>{t('buttons.view_more')}</button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <button className={styleHome.view_more_home}>{t('buttons.view_more')}</button>
            <div className={styleHome.promo_section}>
                <div className={styleHome.promo_text}>
                    <h3 className={styleHome.promo_heading} dangerouslySetInnerHTML={{ __html: t('promo.heading') }}></h3>
                    <p className={styleHome.promo_paragraph} dangerouslySetInnerHTML={{ __html: t('promo.paragraph') }}></p>
                    <a href="/sobre" className={styleHome.promo_link}>{t('promo.link')}</a>
                </div>
                <img src={catImage} alt="Promo Cat" className={styleHome.promo_image} />
            </div>

            <div className={styleHome.help_section}>
                <h2 className={styleHome.help_heading}>{t('help.heading')}</h2>
                <div className={styleHome.service_container}>
                    <div className={styleHome.service_item}>
                        <img src={dinheiro} alt="Pagamento" className={styleHome.service_icon} />
                        <div>
                            <h4 className={styleHome.service_title}>{t('help.payment.title')}</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: t('help.payment.text') }}></p>
                        </div>
                    </div>
                    <div className={styleHome.service_item}>
                        <img src={devolucao} alt="Devolução" className={styleHome.service_icon} />
                        <div>
                            <h4 className={styleHome.service_title}>{t('help.return.title')}</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: t('help.return.text') }}></p>
                        </div>
                    </div>
                    <div className={styleHome.service_item}>
                        <img src={perfil} alt="Perfil" className={styleHome.service_icon} />
                        <div>
                            <h4 className={styleHome.service_title}>{t('help.profile.title')}</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: t('help.profile.text') }}></p>
                        </div>
                    </div>
                    <div className={styleHome.service_item}>
                        <img src={categoria} alt="Categorias" className={styleHome.service_icon} />
                        <div>
                            <h4 className={styleHome.service_title}>{t('help.categories.title')}</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: t('help.categories.text') }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
