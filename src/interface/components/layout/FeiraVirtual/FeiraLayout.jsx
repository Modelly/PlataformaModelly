import './FeiraLayout.css'
import conjuntoImage from "../../../../assets/images/imgs-feira/artes-conjunto.png"
import iconeFeira from "../../../../assets/images/imgs-feira/feiraIcone.png"
import iconeTicket from "../../../../assets/images/imgs-feira/Ticket.png"
import videoImg from '../../../../assets/images/imgs-feira/video.png'

function FeiraLayout() {
    return (
        <>
            <section id="Conteiner-BemVindoFeira" className='sectionFeira'>
                <div className="bem-vindo-content">
                    <div className="text-content">
                        <h1 id="TitleRosa">Bem-vindo(a) à<br />nossa Feira Virtual</h1>
                        <p className='NormalText'>Explore uma experiência única de compras<br /> online, onde você pode encontrar uma ampla<br /> variedade de obras de arte originais e<br /> exclusivas.</p>
                        <div id="btn-box">
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
                    <img src={videoImg} alt="Vídeo da Feira" className="video-img" />
                </div>
                <article>
                    <div id="VideoFeira"></div>
                </article>
            </section>
            <section className='sectionFeira' id="container-ComoFunciona">
                <img src={conjuntoImage} alt="imagens de exemplo para arte" />
                <div>
                    <h1 id="TitleRoxo">Como funciona a Feira Virtual?</h1>
                    <p className='NormalText'>Em nossa Feira, os clientes podem explorar uma diversidade de estilos artísticos navegando pelos estandes virtuais. Eles podem interagir diretamente com os criadores através do chat ao vivo e mensagens diretas, fazendo perguntas e obtendo informações sobre as obras. Após encontrar a peça perfeita, os clientes podem realizar compras seguras diretamente em nosso site, com opções de pagamento confiáveis. </p>
                    <br />
                    <p className='NormalText'>
                        Garantimos que a obra seja enviada com segurança para o endereço do cliente, proporcionando uma experiência tranquila e protegida. Após a compra, os clientes podem deixar seu feedback e avaliação sobre a experiência de compra e a obra adquirida, contribuindo para a comunidade de artistas e melhorando sua própria experiência como cliente.
                    </p>
                </div>
            </section>
        </>
    )
}

export default FeiraLayout;
