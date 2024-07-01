// HomeLayout.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { getBasePath } from "../../util/GetBasePath.jsx";

import RoundedCategory from '../../common/Categories/roundedCategory/RoundedCategory.jsx';
import SectionCategories from '../../common/Categories/sectionCategories/SectionCategories.jsx';
import SectionProductsVertical from '../../common/Products/sectionProducts/VerticalSection/SectionProductsVertical.jsx';
import SectionProductsHorizontal from '../../common/Products/sectionProducts/HorizontalSection/SectionProductsHorizontal.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Loja1imgProd1 from '../../../../assets/images/imgs-home/PerfilLojas/Loja1/img1.png'
import Loja1imgProd2 from '../../../../assets/images/imgs-home/PerfilLojas/Loja1/img2.png'
import Loja1imgProd3 from '../../../../assets/images/imgs-home/PerfilLojas/Loja1/img3.png'
import Loja1imgProd4 from '../../../../assets/images/imgs-home/PerfilLojas/Loja1/img4.png'
import PerfilLoja1 from '../../../../assets/images/imgs-home/PerfilLojas/Loja1/FotoPerfil.png'

import Loja2imgProd1 from '../../../../assets/images/imgs-home/PerfilLojas/Loja2/img1.png'
import Loja2imgProd2 from '../../../../assets/images/imgs-home/PerfilLojas/Loja2/img2.png'
import Loja2imgProd3 from '../../../../assets/images/imgs-home/PerfilLojas/Loja2/img3.png'
import Loja2imgProd4 from '../../../../assets/images/imgs-home/PerfilLojas/Loja2/img4.png'
import PerfilLoja2 from '../../../../assets/images/imgs-home/PerfilLojas/Loja2/FotoPerfil.png'

import Loja3imgProd1 from '../../../../assets/images/imgs-home/PerfilLojas/Loja3/img1.png'
import Loja3imgProd2 from '../../../../assets/images/imgs-home/PerfilLojas/Loja3/img2.png'
import Loja3imgProd3 from '../../../../assets/images/imgs-home/PerfilLojas/Loja3/img3.png'
import Loja3imgProd4 from '../../../../assets/images/imgs-home/PerfilLojas/Loja3/img4.png'
import PerfilLoja3 from '../../../../assets/images/imgs-home/PerfilLojas/Loja3/FotoPerfil.png'

import Loja4imgProd1 from '../../../../assets/images/imgs-home/PerfilLojas/Loja4/img1.webp'
import Loja4imgProd2 from '../../../../assets/images/imgs-home/PerfilLojas/Loja4/img2.jpeg'
import Loja4imgProd3 from '../../../../assets/images/imgs-home/PerfilLojas/Loja4/img3.jpg'
import Loja4imgProd4 from '../../../../assets/images/imgs-home/PerfilLojas/Loja4/img4.jpg'
import PerfilLoja4 from '../../../../assets/images/imgs-home/PerfilLojas/Loja4/FotoPerfil.avif'


import Paper from '../../../../assets/images/imgs-home/categorias/RoundedCategory/Paper.png';
import Bisque from '../../../../assets/images/imgs-home/categorias/RoundedCategory/Bisque.png';
import Feltro from '../../../../assets/images/imgs-home/categorias/RoundedCategory/Feltro.png';
import Wood from '../../../../assets/images/imgs-home/categorias/RoundedCategory/Wood.png';

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
import SectionLoja from '../../common/Sections/LojasSection/SectionLoja.jsx';

const HomeLayout = () => {
    const location = useLocation();
    const basePath = getBasePath(location.pathname);
    
    const categories = [
        { 
            name: "Decoração",
            img: decoracaoImg,
            path: `${basePath}/categoria/Decoracao`,
            duration: "0"
        },
        { 
            name: "Acessórios",
            img: acessoriosImg,
            path: `${basePath}/categoria/Acessorios`,
            duration: "50"
        },
        { 
            name: "Velas",
            img: velasImg,
            path: `${basePath}/categoria/Velas`,
            duration: "100"
        },
        { 
            name: "Moda",
            img: modaImg,
            path: `${basePath}/categoria/Moda`,
            duration: "150"
        },
        { 
            name: "Pets",
            img: petsImg,
            path: `${basePath}/categoria/Pets`,
            duration: "200"
        },
        { 
            name: "Infantil",
            img: infantilImg,
            path: `${basePath}/categoria/Infantil`,
            duration: "250"
        },
        { 
            name: "Sacolas",
            img: sociaisImg,
            path: `${basePath}/categoria/Sacolas`,
            duration: "300"
        },
        { 
            name: "Casa",
            img: casaImg,
            path: `${basePath}/categoria/Casa`,
            duration: "350"
        },
        { 
            name: "Personalizado",
            img: personalizadoImg,
            path: `${basePath}/personalizado`,
            duration: "400"
        },
    ];

    const roundedCategories = [
        {
            category: "madeira",
            image: Wood,
            basePath: `${basePath}`,
            delay: "0"
        },
        {
            category: "feltro",
            image: Feltro,
            basePath: `${basePath}`,
            delay: "100"
        },
        {
            category: "biscuit",
            image: Bisque,
            basePath: `${basePath}`,
            delay: "200"
        },
        {
            category: "papel",
            image: Paper,
            basePath: `${basePath}`,
            delay: "300"
        }
    ]

    const LojasCard = [
        {
            image1: Loja1imgProd1,
            image2: Loja1imgProd2,
            image3: Loja1imgProd3,
            image4: Loja1imgProd4,
            PerfilImg: PerfilLoja1,
            name: "Otakupel",
            basePath: `${basePath}`
        },
        {
            image1: Loja2imgProd1,
            image2: Loja2imgProd2,
            image3: Loja2imgProd3,
            image4: Loja2imgProd4,
            PerfilImg: PerfilLoja2,
            name: "ArteTaku",
            basePath: `${basePath}`
        },
        {
            image1: Loja3imgProd1,
            image2: Loja3imgProd2,
            image3: Loja3imgProd3,
            image4: Loja3imgProd4,
            PerfilImg: PerfilLoja3,
            name: "AnimalArte",
            basePath: `${basePath}`
        },
        {
            image1: Loja4imgProd1,
            image2: Loja4imgProd2,
            image3: Loja4imgProd3,
            image4: Loja4imgProd4,
            PerfilImg: PerfilLoja4,
            name: "HandHalf",
            basePath: `${basePath}`
        }
    ]
    
    const promoTextVariants = {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0 },
    };
    
    const promoImageVariants = {
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0 },
    };

    useEffect(() => {
        AOS.init({
            duration: 1200, // Duração das animações
        });
    }, []);

    return (
        <div className={styleHome.home_container}>
            <div className={styleHome.home_bannerImage_container} data-aos="fade-down">
                <img src={bannerImage} alt="Banner" className={styleHome.banner_image} />
                <h1 className={styleHome.banner_heading}>Seja bem-vindo(a)</h1>
                <h2 className={styleHome.banner_subheading}>Conectando artistas,<br/>encantando o mundo!</h2>
            </div>
            <div className={styleHome.categories_container}>
                {categories.map((category, index) => (
                    <Link to={category.path} key={index} className={styleHome.category_item} data-aos="fade-up" data-aos-delay={category.duration}>
                        <img 
                            src={category.img} 
                            alt={category.name} 
                            className={styleHome.category_image} 
                        />
                        <p>
                            {category.name}
                        </p>
                    </Link>
                ))}
            </div>

            {/* Seção dos produtos! */}
            <div className={styleHome.recommendations_container}>
                <h2 className={styleHome.recommendations_heading}>Lojas!</h2>
                <SectionLoja DataBase={LojasCard} />

                <h2 className={styleHome.recommendations_heading}>Recomendações Diárias</h2>
                <SectionProductsVertical startIndex={0} limit={8} />
                <SectionProductsHorizontal startIndex={8} limit={4} />
                <SectionProductsVertical startIndex={12} limit={8} />
                <SectionCategories 
                    DataBase={roundedCategories}
                    CategoryComponent={RoundedCategory}
                />
            </div>
            

            <motion.div 
                className={styleHome.promo_section}
                initial="hidden"
                whileInView="visible"
            >
                <motion.div 
                    className={styleHome.promo_text}
                    variants={promoTextVariants}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={styleHome.promo_heading} dangerouslySetInnerHTML={{ __html: "Se é especial,<br/> você encontra aqui." }}></h3>
                    <p className={styleHome.promo_paragraph} dangerouslySetInnerHTML={{ __html: "Somos uma plataforma que valoriza e enaltece o trabalho <br/> dos artistas brasileiros, conectando-os com um público<br/> amplo e apreciador da arte feita à mão." }}></p>
                    <a href="/Sobre" className={styleHome.promo_link}>Conheça a nossa história</a>
                </motion.div>
                <motion.img 
                    src={catImage} 
                    alt="Promo Cat" 
                    className={styleHome.promo_image}
                    variants={promoImageVariants}
                    transition={{ duration: 0.6 }}
                />
            </motion.div>

            <div className={styleHome.help_section} data-aos="fade-down">
                <h2 className={styleHome.help_heading}>Precisa de Ajuda?</h2>
                <div className={styleHome.service_container}>
                    <div className={styleHome.service_item} data-aos="fade-down">
                        <img src={dinheiro} alt="Pagamento" className={styleHome.service_icon} data-aos-delay="200"/>
                        <div>
                            <h4 className={styleHome.service_title}>Pagamento</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: "Pague suas compras com <br/> rapidez e segurança" }}></p>
                        </div>
                    </div>
                    <div className={styleHome.service_item} data-aos="fade-down" data-aos-delay="100">
                        <img src={devolucao} alt="Devolução" className={styleHome.service_icon} />
                        <div>
                            <h4 className={styleHome.service_title}>Devolução</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: "Você pode devolver sua <br/> compra grátis" }}></p>
                        </div>
                    </div>
                    <div className={styleHome.service_item} data-aos="fade-down">
                        <img src={perfil} alt="Perfil" className={styleHome.service_icon} />
                        <div>
                            <h4 className={styleHome.service_title}>Perfil</h4>
                            <p className={styleHome.service_text} dangerouslySetInnerHTML={{ __html: "Personalize seu perfil com <br/> rapidez e segurança" }}></p>
                        </div>
                    </div>
                    <div className={styleHome.service_item} data-aos="fade-down">
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