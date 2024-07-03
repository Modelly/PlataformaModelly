import React from 'react';
import style from './freelancer.module.css';
import LogoBanner from '../../../../../assets/images/img_freelancer/Logo_banner.png';
import Line  from '../../../../../assets/images/img_freelancer/barra-esquerda.png';
import Comunic  from '../../../../../assets/images/img_freelancer/Chat.png';
import Book  from '../../../../../assets/images/img_freelancer/Book.png';
import Temp from '../../../../../assets/images/img_freelancer/Deadline.png';
import Lapis from'../../../../../assets/images/img_freelancer/Drawing.png';
import FeedbackCarousel from'../../Perfil_Loja/feedback/FeedbackCarousel';

import { Link, useLocation } from 'react-router-dom';
import { getBasePath } from "../../../util/GetBasePath.jsx";
import SectionLoja from '../../../common/Sections/LojasSection/SectionLoja.jsx';
import SearchBar from './SearchBar';

import Loja1imgProd1 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja1/img1.png';
import Loja1imgProd2 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja1/img2.png';
import Loja1imgProd3 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja1/img3.png';
import Loja1imgProd4 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja1/img4.png';
import PerfilLoja1 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja1/FotoPerfil.png';

import Loja2imgProd1 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja2/img1.png';
import Loja2imgProd2 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja2/img2.png';
import Loja2imgProd3 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja2/img3.png';
import Loja2imgProd4 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja2/img4.png';
import PerfilLoja2 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja2/FotoPerfil.png';

import Loja3imgProd1 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja3/img1.png';
import Loja3imgProd2 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja3/img2.png';
import Loja3imgProd3 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja3/img3.png';
import Loja3imgProd4 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja3/img4.png';
import PerfilLoja3 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja3/FotoPerfil.png';

import Loja4imgProd1 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja4/img1.webp';
import Loja4imgProd2 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja4/img2.jpeg';
import Loja4imgProd3 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja4/img3.jpg';
import Loja4imgProd4 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja4/img4.jpg';
import PerfilLoja4 from '../../../../../assets/images/imgs-home/PerfilLojas/Loja4/FotoPerfil.avif';


function Freelancer() {
    const location = useLocation();
    const basePath = getBasePath(location.pathname);

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
    ];

    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.left}>
                    <h2 className={style.titulo}>Solicite aqui sua arte personalizada!</h2>
                    <p className={style.info}>Clicando no botão abaixo você será redirecionado(a) para um formulário, para que os artistas entendam melhor seu pedido!</p>
                    <Link to={`${basePath}/pedido-personalizado`}>
                        <button className={style.botao}>Clique aqui</button>
                    </Link>
                </div>
                <img className={style.right} src={LogoBanner} alt="Banner" />
            </div>
            
            <div className={style.lojas}>
                <h2 className={style.titulo2}>Explore novos artesãos</h2>
                <SearchBar lojas={LojasCard} />
                <div className={style.cardsLoja}>
                    <SectionLoja DataBase={LojasCard} />
                    <SectionLoja DataBase={LojasCard} />
                </div>
            </div>
            < div className={style.divisao}>
                <img src={Line}/>            
                <button className={style.botao}>Veja mais artes</button>
                <img src={Line}/>
            </div>
            <section className={style.ben}>
                <h2 className={style.titulo2}>Benefícios</h2>
                <div className={style.beneficios}>
                    <div className={style.infosLeft}>
                        <div className={style.card}>
                            <img src={Comunic} alt="Comunic" />
                            <p className={style.info}> <span className={style.rosa}> Comunicação: </span>Garantimos uma comunicação fluida, atendendo suas expectativas.</p>
                        </div>
                        <div className={style.card}>
                            <img src={Book} alt="Comunic" />
                            <p className={style.info}> <span className={style.rosa}>Portfólio Atualizado:</span> Nossos artistas tem portfólios  cativantes, assegurando uma variedade de estilos e trabalhos para você.</p>
                        </div>
                    </div>
                    <div className={style.infosRight}>
                        <div className={style.card}>
                            <img src={Temp} alt="Comunic" />
                            <p className={style.info}> <span className={style.rosa}> Comprometimento: </span> Nossos artistas estão comprometidos em entregar seu produto dentro dos prazos acordados.</p>
                        </div>
                        <div className={style.card}>
                            <img src={Lapis} alt="Comunic" />
                            <p className={style.info}> <span className={style.rosa}>Habilidades Artísticas:</span>   Temos uma ampla gama de talentos atendendo suas necessidades específicas de personalização.</p>
                        </div>
                    </div>   
                </div>
            </section>    
    </div>
    );
}

export default Freelancer;
