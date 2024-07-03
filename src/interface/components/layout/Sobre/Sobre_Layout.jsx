import CatImage from '../../../../assets/images/img_sobre/cat.png';
import MarketImage from '../../../../assets/images/img_sobre/market.png';
import LineImage from '../../../../assets/images/img_sobre/line.png';
import MissionImage from '../../../../assets/images/img_sobre/mission.png';
import VisionImage from '../../../../assets/images/img_sobre/vision.png';
import ValuesImage from '../../../../assets/images/img_sobre/value.png';
import GitHubIcon from '../../../../assets/images/imgs-footer/GitHub.png';
import LinkedInIcon from '../../../../assets/images/imgs-footer/LinkedIn.png';
import PartnerImage1 from '../../../../assets/images/img_sobre/Parceiro.png';
import futura from './futura.png'


import fotoMatt from '../../../../assets/images/img-equipe/MatheusMorgado.png'
import fotoPamela from '../../../../assets/images/img-equipe/Pamela.png'
import fotoJoao from '../../../../assets/images/img-equipe/JoaoLucas.png'
import fotoJhonathan from '../../../../assets/images/img-equipe/Jhonatan.png'
import fotoGiovana from '../../../../assets/images/img-equipe/GiovanaTavares.png'
import fotoGabSantos from '../../../../assets/images/img-equipe/GabSantos.png'
import fotoGabLopes from '../../../../assets/images/img-equipe/GabLopes.png'
import fotoBenHur from '../../../../assets/images/img-equipe/BenHur.png'

import styles from './Sobre.module.css';

const Sobre = () => {
    const dbEquipe = [
        {
            nome: "Matheus Ribeiro Morgado",
            funcao: "Dev FullStack",
            linkGitHub: "https://github.com/mathmorgado",
            linkLinkedin: "https://www.linkedin.com/in/mathmorgado/",
            foto: fotoMatt
        },
        {
            nome: "Gabriel Lopes Valentin Barboza",
            funcao: "UI/UX | Dev Frontend | Financeiro",
            linkGitHub: "https://github.com/gabvalentinbarboza",
            linkLinkedin: "https://linkedin.com/in/gabriel-lopes-01b0311a1",
            foto: fotoGabLopes
        },
        {
            nome: "Gabriel Santos de Oliveira",
            funcao: "UI/UX | Dev Frontend | Scrum Master",
            linkGitHub: "https://github.com/R2oock",
            linkLinkedin: "https://www.linkedin.com/in/gabriel-santos-9ab449266/",
            foto: fotoGabSantos
        },
        {
            nome: "Giovanna Carolina Pereira Tavares",
            funcao: "Dev Backend | Banco de Dados",
            linkGitHub: "https://github.com/diow123",
            linkLinkedin: "https://www.linkedin.com/in/giovanna--tavares/",
            foto: fotoGiovana
        },
        {
            nome: "Jhonatan Gomes",
            funcao: "Dev Frontend",
            linkGitHub: "https://github.com/Jhonatangomes007",
            linkLinkedin: "http://linkedin.com/in/jhonatangomes-ti",
            foto: fotoJhonathan
        },
        {
            nome: "João Silva",
            funcao: "Dev Frontend",
            linkGitHub: "https://github.com/Guiado011",
            linkLinkedin: "linkedin.com/in/joão-silva-a80701300",
            foto: fotoJoao
        },
        {
            nome: "Pamela Miranda de Oliveira ",
            funcao: "Dev Frontend",
            linkGitHub: "https://github.com/pamyszz",
            linkLinkedin: " https://www.linkedin.com/in/pamelami/",
            foto: fotoPamela

        },
        {
            nome: "Ben Hur ",
            funcao: "Dev Frontend",
            linkGitHub: "#",
            linkLinkedin: " #",
            foto: fotoBenHur
        }
    ]

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
                    <p className={styles.text}>
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
                    <p className={styles.mvvText}>Na Modelly, apoiamos o crescimento sustentável dos artesãos.
</p>
                </div>
                <div className={styles.mvvItem}>
                    <img src={VisionImage} alt="Visão" className={styles.mvvImage} />
                    <h2 className={styles.mvvTitle}>Visão</h2>
                    <p className={styles.mvvText}>Ser a plataforma líder global em comercialização de artesanato</p>
                </div>
                <div className={styles.mvvItem}>
                    <img src={ValuesImage} alt="Valores" className={styles.mvvImage} />
                    <h2 className={styles.mvvTitle}>Valores</h2>
                    <p className={styles.mvvText}>Crescimento sustentável para artesãos com um ambiente igualitário para todos os artistas.</p>
                    </div>
                </div>

            <section className={styles.sectionColumn}>
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

            <section className={styles.sectionColumn}>
            <h2 className={styles.sectionTitle}>Visão futura</h2>
                <div className={styles.section}>
                <img src={futura} alt="Ícone de Futuro" className={styles.mvvImage1} />
                    <div className={styles.textContainer}>
                    <p className={styles.text123}>
                            Trazendo algumas novidades à plataforma, nós temos a ideia de expandir para outros horizontes, como artes 3D, produção de música, arte digital, e muito mais. Queremos também trazer um sistema de leilão, uma oficina de arte, e um aplicativo para celulares e tablets.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.sectionColumn}>
            <h2 className={styles.sectionTitle}>Parceria Autonomy</h2>
                <div className={styles.section}>
                    <img src={PartnerImage1} alt="Autonomy" className={styles.partnerImage} />
                    <div className={styles.textContainer}>
                        <p className={styles.text12}>
                            Essa colaboração promete ser altamente benéfica, pois<br/> a Autonomy traz uma solução especializada em gestão financeira<br/> para microempreendedores e empreendedores, permitindo<br/> que os vendedores da Modelly gerenciem seus lucros de forma mais eficiente e estratégica. 
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.sectionColumn}>
                <h2 className={styles.sectionTitle}>Conheça a Equipe de <br/>Desenvolvedores da Modelly</h2>
                <div className={styles.cardContainer}>
                    {dbEquipe.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.cardHeader}>
                                <img src={item.foto} className={styles.imgIntegrante} alt="imagem integrante" />
                            </div>
                            <div className={styles.cardBody}>{item.nome} <br /> {item.funcao}</div>
                            <div className={styles.cardFooter}>
                                <a href={item.linkGitHub}><img src={GitHubIcon} alt="GitHub" className={styles.icon} /></a>
                                <a href={item.linkLinkedin}><img src={LinkedInIcon} alt="LinkedIn" className={styles.icon} /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Sobre;
