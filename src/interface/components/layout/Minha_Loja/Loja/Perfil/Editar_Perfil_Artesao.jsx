import styleEditarPerfilArtesao from './Editar_perfil_artesao.module.css';
import imgLoja from '../../../../../../assets/images/imgs-perfil_vendedor/Loja.png';
import backgroundPapel from '../../../../../../assets/images/imgs-perfil_vendedor/paper.png';

function EditarPerfilArtesao() {
    return (
        <section className={styleEditarPerfilArtesao.container} style={{ backgroundImage: `url(${backgroundPapel})` }}>
            <article className={styleEditarPerfilArtesao.frameMinhaLoja}>
                <h1 className={styleEditarPerfilArtesao.minhaLoja}>Minha Loja</h1>
                <h3 className={styleEditarPerfilArtesao.subTopicos}>Gerenciar Informações</h3>
                <hr className={styleEditarPerfilArtesao.linha}></hr>
                <div className={styleEditarPerfilArtesao.containerSubTopicos}>
                    <div className={styleEditarPerfilArtesao.containerInformacoesArtesao}>
                        <h3 className={styleEditarPerfilArtesao.subTopicos}>
                            Nome da Loja
                        </h3>
                        <span className={styleEditarPerfilArtesao.informacoesArtesao}>Artes e Encantos</span>
                    </div>
                    <div className={styleEditarPerfilArtesao.containerInformacoesArtesao}>
                        <h3 className={styleEditarPerfilArtesao.subTopicos}>
                            Logo da Loja
                        </h3>
                        <div className={styleEditarPerfilArtesao.fotoLogoLoja}>
                            <img className={styleEditarPerfilArtesao.logoLoja} src={imgLoja} alt="Logo da Loja" />
                        </div>
                        <span className={styleEditarPerfilArtesao.especificacoesFoto}>
                            Tamanho do arquivo: no máximo 1mb<br />
                            Extensão de Arquivo: .JPEG, PNG
                        </span>
                    </div>
                    <div className={styleEditarPerfilArtesao.containerInformacoesArtesao}>
                          <h3 className={styleEditarPerfilArtesao.subTopicos}>Descrição da Loja</h3>
                          <span className={styleEditarPerfilArtesao.descricaoLoja}>
                               Cerâmicas artesanais que trazem a beleza da natureza para o seu lar.
                               Cada peça é única, feita com amor e dedicação.
                          </span>
                    </div>
                <h3 className={styleEditarPerfilArtesao.subTopicos}>Informações de Contato</h3>
                    <div className={styleEditarPerfilArtesao.containerInformacoesArtesao}>
                          <h3 className={styleEditarPerfilArtesao.subTopicos}>Email:</h3>
                          <span className={styleEditarPerfilArtesao.emailExemplo}>emailexemplo@hotmail.com</span>
                    </div>
                    <div className={styleEditarPerfilArtesao.containerInformacoesArtesao}>
                         <h3 className={styleEditarPerfilArtesao.subTopicos}>Telefone:</h3>
                         <span className={styleEditarPerfilArtesao.informacoesArtesao}>+55 (01)12312-1231</span>
                    </div>
                </div>
                <button className={styleEditarPerfilArtesao.botaoEditarInformacoes}>
                    <span className={styleEditarPerfilArtesao.span}>Editar</span>
                </button>
            </article>
        </section>
    );
}

export default EditarPerfilArtesao;
