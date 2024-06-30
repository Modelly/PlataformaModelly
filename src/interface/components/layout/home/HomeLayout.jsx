// HomeLayout.jsx
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { getBasePath } from "../../util/GetBasePath.jsx";
import SectionProducts from '../../common/Products/sectionProducts/SectionProducts';

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
    const location = useLocation();
    const basePath = getBasePath(location.pathname);
    
    const categories = [
        { name: "Decoração", img: decoracaoImg, path: `${basePath}/categoria/Decoracao` },
        { name: "Acessórios", img: acessoriosImg, path: `${basePath}/categoria/Acessorios` },
        { name: "Velas", img: velasImg, path: `${basePath}/categoria/Velas` },
        { name: "Moda", img: modaImg, path: `${basePath}/categoria/Moda` },
        { name: "Pets", img: petsImg, path: `${basePath}/categoria/Pets` },
        { name: "Infantil", img: infantilImg, path: `${basePath}/categoria/Infantil` },
        { name: "Sacolas", img: sociaisImg, path: `${basePath}/categoria/Sacolas` },
        { name: "Casa", img: casaImg, path: `${basePath}/categoria/Casa` },
        { name: "Personalizado", img: personalizadoImg, path: `${basePath}/personalizado` },
    ];

    const categoryImgVariants = {
        hidden: { scale: 0, rotate: 800, opacity: 0 },
        visible: { scale: 1, rotate: 0, opacity: 1 },
    };

    const categoryTextVariants = {
        hidden: { scale: 0.4, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    };
    
    const promoTextVariants = {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0 },
    };
    
    const promoImageVariants = {
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className={styleHome.home_container}>
            <div className={styleHome.home_bannerImage_container}>
                <img src={bannerImage} alt="Banner" className={styleHome.banner_image} />
                <h1 className={styleHome.banner_heading}>Seja bem-vindo(a)</h1>
                <h2 className={styleHome.banner_subheading}>Conectando artistas,<br/>encantando o mundo!</h2>
            </div>
            <div className={styleHome.categories_container}>
                {categories.map((category, index) => (
                    <Link to={category.path} key={index} className={styleHome.category_item}>
                        <motion.img 
                            src={category.img} 
                            alt={category.name} 
                            className={styleHome.category_image} 
                            initial="hidden"
                            whileInView="visible"
                            variants={categoryImgVariants}
                            transition={{ duration: 0.7 }} 
                        />
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            variants={categoryTextVariants}
                            transition={{ duration: 0.7 }}
                        >
                            {category.name}
                        </motion.p>
                    </Link>
                ))}
            </div>

            {/* Seção com 8 produtos! */}
            <div className={styleHome.recommendations_container}>
                <h2 className={styleHome.recommendations_heading}>Recomendações Diárias</h2>
                <SectionProducts />
            </div>
                <button className={styleHome.view_more_home}>Ver mais</button>

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