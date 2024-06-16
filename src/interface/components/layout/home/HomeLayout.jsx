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
    const categories = [
        { name: "Decoração", img: decoracaoImg },
        { name: "Acessórios", img: acessoriosImg },
        { name: "Velas", img: velasImg },
        { name: "Moda", img: modaImg },
        { name: "Pets", img: petsImg },
        { name: "Infantil", img: infantilImg },
        { name: "Sociais", img: sociaisImg },
        { name: "Casa", img: casaImg },
        { name: "Personalizado", img: personalizadoImg },
    ];

    const products = Array(8).fill({ 
        name: "Nome do produto", 
        description: "Descrição do produto", 
        price: "R$00,00", 
        img: productImg 
    });

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
                <h2 className={styleHome.recommendations_heading}>Recomendações Diárias</h2>
                <div className={styleHome.products_container}>
                    {products.map((product, index) => (
                        <div key={index} className={styleHome.product_card}>
                            <Link to="/produto">
                                <img src={product.img} alt={product.name} className={styleHome.product_image} />
                                <p className={styleHome.product_name}>{product.name}</p>
                                <p className={styleHome.product_description}>{product.description}</p>
                                <div className={styleHome.product_footer}>
                                    <p className={styleHome.product_price}>{product.price}</p>
                                    <button className={styleHome.view_more_button}>Ver mais</button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <button className={styleHome.view_more_home}>Ver mais</button>
            <div className={styleHome.promo_section}>
                <div className={styleHome.promo_text}>
                    <h3 className={styleHome.promo_heading} dangerouslySetInnerHTML={{ __html: "Se é especial,<br/> você encontra aqui." }}></h3>
                    <p className={styleHome.promo_paragraph} dangerouslySetInnerHTML={{ __html: "Somos uma plataforma que valoriza e enaltece o trabalho <br/> dos artistas brasileiros, conectando-os com um público<br/> amplo e apreciador da arte feita à mão." }}></p>
                    <a href="/sobre" className={styleHome.promo_link}>Conheça a nossa história</a>
                </div>
                <img src={catImage} alt="Promo Cat" className={styleHome.promo_image} />
            </div>

            <div className={styleHome.help_section}>
                <h2 className={styleHome.help_heading}>Precisa de Ajuda?</h2>
                <div className={styleHome.service_container}>
                    <div className={styleHome.service_item}>
                        <img src={dinheiro} alt="Pagamento" className={styleHome.service_icon} />
                        <div>
                            <h4 className={styleHome.service_title}>Pagamento</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: "Pague suas compras com <br/> rapidez e segurança" }}></p>
                        </div>
                    </div>
                    <div className={styleHome.service_item}>
                        <img src={devolucao} alt="Devolução" className={styleHome.service_icon} />
                        <div>
                            <h4 className={styleHome.service_title}>Devolução</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: "Você pode devolver sua <br/> compra grátis" }}></p>
                        </div>
                    </div>
                    <div className={styleHome.service_item}>
                        <img src={perfil} alt="Perfil" className={styleHome.service_icon} />
                        <div>
                            <h4 className={styleHome.service_title}>Perfil</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: "Personalize seu perfil com <br/> rapidez e segurança" }}></p>
                        </div>
                    </div>
                    <div className={styleHome.service_item}>
                        <img src={categoria} alt="Categorias" className={styleHome.service_icon} />
                        <div>
                            <h4 className={styleHome.service_title}>Categorias</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: "Explore uma variedade <br/> de categorias únicas" }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
