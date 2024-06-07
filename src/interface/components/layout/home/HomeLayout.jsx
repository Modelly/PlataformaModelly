import React from 'react';
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
import './Home.css';

const categories = [
    { name: 'Decoração', img: decoracaoImg },
    { name: 'Acessórios', img: acessoriosImg },
    { name: 'Velas', img: velasImg },
    { name: 'Moda', img: modaImg },
    { name: 'Pets', img: petsImg },
    { name: 'Infantil', img: infantilImg },
    { name: 'Sociais', img: sociaisImg },
    { name: 'Casa', img: casaImg },
    { name: 'Personalizado', img: personalizadoImg },
];

const products = Array(8).fill({ name: 'Nome do produto', description: 'Descrição do produto', price: 'R$00,00', img: productImg });

const HomeLayout = () => {
    return (
        <div className='home-container'>
            <div className='home-bannerImage-container'>
                <img src={bannerImage} alt="Banner" className='banner-image' />
            </div>
            <div className='categories-container'>
                {categories.map((category, index) => (
                    <div key={index} className='category-item'>
                        <img src={category.img} alt={category.name} className='category-image' />
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
            <div className='recommendations-container'>
                <h2 className='recommendations-heading'>Recomendações Diárias</h2>
                <div className='products-container'>
                    {products.map((product, index) => (
                        <div key={index} className='product-card'>
                            <Link to="/produto">
                                <img src={product.img} alt={product.name} className='product-image' />
                                <p className='product-name'>{product.name}</p>
                                <p className='product-description'>{product.description}</p>
                                <div className='product-footer'>
                                    <p className='product-price'>{product.price}</p>
                                    <button className='view-more-button'>Ver mais</button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <button className='view-more-home'>Ver mais</button>
            <div className='promo-section'>
                <div className='promo-text'>
                    <h3 className='promo-heading'>Se é especial,<br/> você encontra aqui.</h3>
                    <p className='promo-paragraph'>
                        Somos uma plataforma que valoriza e enaltece o trabalho <br/> dos artistas brasileiros,
                        conectando-os com um público<br/> amplo e apreciador da arte feita à mão.
                    </p>
                    <a href="/sobre" className='promo-link'>Conheça a nossa história</a>
                </div>
                <img src={catImage} alt="Promo Cat" className='promo-image' />
            </div>

            <div className='help-section'>
                <h2 className='help-heading'>Precisa de Ajuda?</h2>
                <div className='service-container'>
                    <div className='service-item'>
                        <img src={dinheiro} alt="Pagamento" className='service-icon' />
                        <div>
                            <h4 className='service-title'>Pagamento</h4>
                            <p className='service-text'>Pague suas compras com <br/> rapidez e segurança</p>
                        </div>
                    </div>
                    <div className='service-item'>
                        <img src={devolucao} alt="Devolução" className='service-icon' />
                        <div>
                            <h4 className='service-title'>Devolução</h4>
                            <p className='service-text'>Você pode devolver sua  <br/> compra grátis</p>
                        </div>
                        
                    </div>
                    <div className='service-item'>
                        <img src={perfil} alt="Perfil" className='service-icon' />
                        <div>
                            <h4 className='service-title'>Perfil</h4>
                            <p className='service-text'>Personalize seu perfil com  <br/>  rapidez e segurança</p>
                        </div>
                        
                    </div>
                    <div className='service-item'>
                        <img src={categoria} alt="Categorias" className='service-icon' />
                        <div>
                            <h4 className='service-title'>Categorias</h4>
                            <p className='service-text'>Explore uma variedade <br/> de categorias únicas</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
