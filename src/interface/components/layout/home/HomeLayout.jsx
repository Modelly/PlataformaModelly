import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getBasePath } from "../../util/GetBasePath.jsx"
import { truncateDescription } from '../../util/TruncateDescription.jsx';

import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import modaImg from '../../../../assets/images/imgs-home/moda.png';
import petsImg from '../../../../assets/images/imgs-home/pets.png';
import casaImg from '../../../../assets/images/imgs-home/casa.png';
import perfil from '../../../../assets/images/imgs-home/Artist.png';
import velasImg from '../../../../assets/images/imgs-home/velas.png';
import sociaisImg from '../../../../assets/images/imgs-home/sociais.png';
import catImage from '../../../../assets/images/imgs-home/cat-image.png';
import dinheiro from '../../../../assets/images/imgs-home/Banknotes.png';
import devolucao from '../../../../assets/images/imgs-home/devolucao.png';
import infantilImg from '../../../../assets/images/imgs-home/infantil.png';
import categoria from '../../../../assets/images/imgs-home/Categorize.png';
import decoracaoImg from '../../../../assets/images/imgs-home/decoracao.png';
import acessoriosImg from '../../../../assets/images/imgs-home/acessorios.png';
import bannerImage from '../../../../assets/images/imgs-home/banner-image.png';
import personalizadoImg from '../../../../assets/images/imgs-home/personalizado.png'; 

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

    const MAX_LENGHT = 20;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://98b4-177-9-31-79.ngrok-free.app/produtos', {
                headers: {
                    'ngrok-skip-browser-warning': 'true'
                  }
            });
            setTimeout(() => {
                setProducts(response.data);
                setLoading(false);
            }, 1000) 
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            // Carregando dados localmente
            const localResponse = await fetch('/data/products.json');
            if (localResponse.ok) {
                const localData = await localResponse.json();
                setTimeout(() => {
                    setProducts(localData);
                    setLoading(false);
                }, 1000);
            } else {
                console.error('Erro ao buscar produtos localmente:', error);
                setLoading(false);
            }
        }
    };

    const location = useLocation();
    const basePath = getBasePath(location.pathname);

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
                {loading ? (
                        Array(8).fill().map((_, index) => (
                            <div key={index} className={styleHome.skeleton_card}>
                                <Skeleton height={200} />
                                <Skeleton count={2} style={{ marginTop: 10 }} />
                                <Skeleton width={250} style={{ marginTop: 10 }} />
                            </div>
                        ))
                    ) :(
                    products.map((product) => (
                        <div key={product.pk_id_produto} className={styleHome.product_card}>
                            <Link to={`${basePath}/produto/${product.pk_id_produto}`}>
                                <img src={product.foto_produto} alt={product.nome_produto} className={styleHome.product_image} />
                                <p className={styleHome.product_name}>{product.nome_produto}</p>
                                <p className={styleHome.product_description}>{truncateDescription(product.descricao_produto, MAX_LENGHT)}</p>
                                <div className={styleHome.product_footer}>
                                    <p className={styleHome.product_price}>R$ {product.preco_produto.toFixed(2)}</p>
                                    <button className={styleHome.view_more_button}>Ver mais</button>
                                </div>
                            </Link>
                        </div>
                    )))}
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
