import React from 'react';
import './Sobre.modules.css';
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
        <div className="root-container">
            <section className="section">
                <div>
                    <h1 className="title">Sobre a Modelly</h1>
                    <p className="text">
                        A Modelly conecta artistas que querem transformar <br/>seus dotes
                        artísticos em sua fonte de renda e <br/>amantes da arte que têm o desejo
                        de se encontrar<br/> em peças únicas do conforto de sua casa,<br/>
                        valorizando o trabalho artesanal.
                    </p>
                </div>
                <img src={CatImage} alt="Gato Estilizado" className="image" />
            </section>

            <section className="section">
                <img src={MarketImage} alt="Quitanda" className="image" />
                <p className="text">
                    Com uma plataforma intuitiva e segura,<br/> oferecemos ferramentas para os
                    artistas <br/>gerenciarem seus negócios e divulgarem seus <br/>produtos,
                    impulsionando o sucesso profissional.
                </p>
            </section>

            <section className="section">
                <p className="text">
                    E para aqueles que admiram esse trabalho,<br/> oferecemos um ambiente
                    imersivo e altamente<br/> personalizado para as necessidades de nossos
                    clientes.
                </p>
                <img src={LineImage} alt="Linha" className="image" />
            </section>

            <div className="mvv-container">
                <div className="mvv-item">
                    <img src={MissionImage} alt="Missão" className="mvv-image" />
                    <h2 className="mvv-title">Missão</h2>
                    <p className="mvv-text">Descrição da missão da<br/> Modelly - Lorem ipsum bla</p>
                </div>
                <div className="mvv-item">
                    <img src={VisionImage} alt="Visão" className="mvv-image" />
                    <h2 className="mvv-title">Visão</h2>
                    <p className="mvv-text">Descrição da Visão da<br/> Modelly - Lorem ipsum bla</p>
                </div>
                <div className="mvv-item">
                    <img src={ValuesImage} alt="Valores" className="mvv-image" />
                    <h2 className="mvv-title">Valores</h2>
                    <p className="mvv-text">Descrição dos Valores da<br/> Modelly - Lorem ipsum bla</p>
                </div>
            </div>

            <section className="section">
                <h2 className="section-title">O que oferecemos?</h2>
                <p className="text">
                    Para artistas: Gerencie seu negócio com facilidade e<br/> promova suas
                    obras para um público amplo, abrindo<br/> caminho para o sucesso
                    profissional em nossa plataforma.
                </p>
                <p className="text">
                    Para clientes: Explore uma vasta coleção de arte <br/>brasileira,
                    descubra novos talentos e adquira produtos <br/>autênticos com
                    conveniência e segurança.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">Nossos parceiros</h2>
                <p className="text">Graças a eles podemos oferecer o melhor!</p>
                <div className="carousel">
                    <div className="carousel-item"><img src={PartnerImage1} alt="Parceiro 1" /></div>
                    <div className="carousel-item"><img src={PartnerImage2} alt="Parceiro 2" /></div>
                    <div className="carousel-item"><img src={PartnerImage3} alt="Parceiro 3" /></div>
                    {/* Adicionar aqui mais imagens de parceiros conforme necessário */}
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Conheça a Equipe de <br/>Desenvolvedores da Modelly</h2>
                <div className="card-container">
                    {[...Array(7)].map((_, index) => (
                        <div className="card" key={index}>
                            <div className="card-header">Nome Sobrenome</div>
                            <div className="card-body">Função</div>
                            <div className="card-footer">
                                <img src={GitHubIcon} alt="GitHub" className="icon" />
                                <img src={LinkedInIcon} alt="LinkedIn" className="icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Sobre;