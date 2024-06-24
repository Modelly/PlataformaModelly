import React from 'react';
import styles from './Sobre.module.css';
import CatImage from '../../../../assets/images/img_sobre/cat.png';
import MarketImage from '../../../../assets/images/img_sobre/market.png';
import LineImage from '../../../../assets/images/img_sobre/line.png';
import MissionImage from '../../../../assets/images/img_sobre/mission.png';
import VisionImage from '../../../../assets/images/img_sobre/vision.png';
import ValuesImage from '../../../../assets/images/img_sobre/value.png';
import GitHubIcon from '../../../../assets/images/imgs-footer/GitHub.png';
import LinkedInIcon from '../../../../assets/images/imgs-footer/LinkedIn.png';
import PartnerImage1 from '../../../../assets/images/img_sobre/Parceiro.png';
import PartnerImage2 from '../../../../assets/images/img_sobre/Parceiro.png';
import PartnerImage3 from '../../../../assets/images/img_sobre/Parceiro.png';

const Sobre = () => {
    return (
        <div className={styles.rootContainer}>
            {/* Texto à esquerda e Gato à direita */}
            <section className={styles.section}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Sobre a Modelly</h1>
                    <p className={styles.text}>
                        A Modelly conecta artistas que querem transformar <br/>seus dotes
                        artísticos em sua fonte de renda e <br/>amantes da arte que têm o desejo
                        de se encontrar<br/> em peças únicas do conforto de sua casa,<br/>
                        valorizando o trabalho artesanal.
                    </p>
                </div>
                <img src={CatImage} alt="Gato Estilizado" className={styles.CatImage} />
            </section>

            {/* Quitanda à esquerda e texto à direita */}
            <section className={styles.section}>
                <img src={MarketImage} alt="Quitanda" className={styles.MarketImage} />
                <div className={styles.textContainer}>
                    <p className={styles.textqui}>
                        Com uma plataforma intuitiva e segura,<br/> oferecemos ferramentas para os
                        artistas <br/>gerenciarem seus negócios e divulgarem seus <br/>produtos,
                        impulsionando o sucesso profissional.
                    </p>
                </div>
            </section>

            {/* Texto à esquerda e Linha à direita */}
            <section className={styles.section}>
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        E para aqueles que admiram esse trabalho,<br/> oferecemos um ambiente
                        imersivo e altamente<br/> personalizado para as necessidades de nossos
                        clientes.
                    </p>
                </div>
                <img src={LineImage} alt="Linha" className={styles.image} />
            </section>

            <div className={styles.mvvContainer}>
                <div className={styles.mvvItem}>
                    <img src={MissionImage} alt="Missão" className={styles.mvvImage} />
                    <h2 className={styles.mvvTitle}>Missão</h2>
                    <p className={styles.mvvText}>Descrição da missão da<br/> Modelly - Lorem ipsum bla</p>
                </div>
                <div className={styles.mvvItem}>
                    <img src={VisionImage} alt="Visão" className={styles.mvvImage} />
                    <h2 className={styles.mvvTitle}>Visão</h2>
                    <p className={styles.mvvText}>Descrição da Visão da<br/> Modelly - Lorem ipsum bla</p>
                </div>
                <div className={styles.mvvItem}>
                    <img src={ValuesImage} alt="Valores" className={styles.mvvImage} />
                    <h2 className={styles.mvvTitle}>Valores</h2>
                    <p className={styles.mvvText}>Descrição dos Valores da<br/> Modelly - Lorem ipsum bla</p>
                </div>
            </div>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>O que oferecemos?</h2>
                <p className={styles.text}>
                    Para artistas: Gerencie seu negócio com facilidade e<br/> promova suas
                    obras para um público amplo, abrindo<br/> caminho para o sucesso
                    profissional em nossa plataforma.
                </p>
                <p className={styles.text}>
                    Para clientes: Explore uma vasta coleção de arte <br/>brasileira,
                    descubra novos talentos e adquira produtos <br/>autênticos com
                    conveniência e segurança.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Nossos parceiros</h2>
                <p className={styles.text}>Graças a eles podemos oferecer o melhor!</p>
                <div className={styles.carousel}>
                    <div className={styles.carouselItem}><img src={PartnerImage1} alt="Parceiro 1" /></div>
                    <div className={styles.carouselItem}><img src={PartnerImage2} alt="Parceiro 2" /></div>
                    <div className={styles.carouselItem}><img src={PartnerImage3} alt="Parceiro 3" /></div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Conheça a Equipe de <br/>Desenvolvedores da Modelly</h2>
                <div className={styles.cardContainer}>
                    {[...Array(7)].map((_, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.cardHeader}>Nome Sobrenome</div>
                            <div className={styles.cardBody}>Função</div>
                            <div className={styles.cardFooter}>
                                <img src={GitHubIcon} alt="GitHub" className={styles.icon} />
                                <img src={LinkedInIcon} alt="LinkedIn" className={styles.icon} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Sobre;
