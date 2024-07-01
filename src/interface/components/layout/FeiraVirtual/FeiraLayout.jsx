import { useEffect } from 'react';

import styleFeira from './FeiraLayout.module.css'; 
import video from "../../../../assets/videos/video-feira.mp4"
import iconeTicket from "../../../../assets/images/imgs-feira/Ticket.png";
import iconeFeira from "../../../../assets/images/imgs-feira/feiraIcone.png";
import conjuntoImage from "../../../../assets/images/imgs-feira/artes-conjunto.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

function FeiraLayout() {

    useEffect(() => {
        AOS.init({
            duration: 1200, // Duração das animações
        });
    }, []);

    return (
        <>
            <section className={`${styleFeira.sectionFeira} ${styleFeira.ConteinerBemVindoFeira}`}>
                <div className={styleFeira.bemVindoContent}>
                    <div className={styleFeira.textContent} data-aos="fade-left" >
                        <h1 className={styleFeira.TitleRosa}>Bem-vindo(a) à<br />nossa Feira Virtual</h1>
                        <p className={styleFeira.NormalText}>Explore uma experiência única de compras<br /> online, onde você pode encontrar uma ampla<br /> variedade de obras de arte originais e<br /> exclusivas.</p>
                        <div className={`${styleFeira.btnBox}`}>
                            <button>
                                <img src={iconeFeira} alt="Icone feira" />
                                Inscrição Expositor(a)
                            </button>
                            <button>
                                <img src={iconeTicket} alt="icone ticket" />
                                Convite Consumidor(a)
                            </button>
                        </div>
                    </div>
                    <div className={styleFeira.videoBox} data-aos="fade-right">
                        <video width="600" height="338" className={styleFeira.video} autoPlay>
                        <source src={video} type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                </div>
            </section>
            <section className={`${styleFeira.sectionFeira} ${styleFeira.containerComoFunciona}`} data-aos="fade-up">
                <img src={conjuntoImage} alt="imagens de exemplo para arte" />
                <div>
                    <h1 className={styleFeira.TitleRoxo}>Como funciona a Feira Virtual?</h1>
                    <p className={styleFeira.NormalText}>Em nossa Feira, os clientes podem explorar uma diversidade de estilos artísticos navegando pelos estandes virtuais. Eles podem interagir diretamente com os criadores através do chat ao vivo e mensagens diretas, fazendo perguntas e obtendo informações sobre as obras. Após encontrar a peça perfeita, os clientes podem realizar compras seguras diretamente em nosso site, com opções de pagamento confiáveis. </p>
                    <br />
                    <p className={styleFeira.NormalText}>
                        Garantimos que a obra seja enviada com segurança para o endereço do cliente, proporcionando uma experiência tranquila e protegida. Após a compra, os clientes podem deixar seu feedback e avaliação sobre a experiência de compra e a obra adquirida, contribuindo para a comunidade de artistas e melhorando sua própria experiência como cliente.
                    </p>
                </div>
            </section>
        </>
    )
}

export default FeiraLayout;
