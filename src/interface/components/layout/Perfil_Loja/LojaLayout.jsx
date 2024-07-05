import styleLoja from './LojaLayout.module.css'
import Banner from '../../../../assets/images/img_perfil/capa.png'
import Foto_Perfil from '../../../../assets/images/img_perfil/foto-perfil.png'
import Rodape from '../../../../assets/images/img_perfil/rodape.png'
import Msg from '../../../../assets/images/img_perfil/Plane.png'
import certificado from '../../../../assets/images/img_perfil/Certificate.png'
import Compartilhar from'../../../../assets/images/img_perfil/share.png'
import Produto1 from'../../../../assets/images/img_perfil/produto1.png'
import Produto2 from'../../../../assets/images/img_perfil/produto2.png'
import Produto3 from'../../../../assets/images/img_perfil/produto3.png'
import Produto4 from'../../../../assets/images/img_perfil/produto4.png'
import Produto5 from'../../../../assets/images/img_perfil/produto5.png'
import Produto6 from'../../../../assets/images/img_perfil/produto6.png'
import Produto7 from'../../../../assets/images/img_perfil/produto7.png'
import Produto8 from'../../../../assets/images/img_perfil/produto8.png'
import SectionProducts from '../../common/Sections/ProductsSection/VerticalSection/SectionProductsVertical'
import Lupa from '../../../../assets/images/imgs-personalizado/lupa.png'
import NavBar from './nav-bar/nav-bar'
import FeedbackCarousel from'./feedback/FeedbackCarousel'

function Perfil(){
    return( 
        <div className={styleLoja.conteiner}>
            <section className={styleLoja.perfil}>
                <div className={styleLoja.imgsPerfil}>
                    <div className={styleLoja.capaImg}><img src={Banner}/></div>
                    <div className={styleLoja.perfilImg}><img src={Foto_Perfil}/></div>
                </div> 
                
                <div className={styleLoja.descricao}>
                        <p className={styleLoja.descricaoPerfil}>
                             Consequatur, numquam quisquam iste nihil accusamus eius beatae! Voluptate quis reprehenderit dolorum!atus repellat necessitatibus quam accusamus! Consequatur, numquam quisquam iste nihil accusamus eius beatae! Voluptate quis reprehenderit dolorum!atus repellat necessitatibus quam accusamus! Consequatur, numquam quisquam iste nihil accusamus eius beatae! Voluptate quis reprehenderit dolorum!atus repellat necessitatibus quam accusamus! Consequatur, numquam quisquam iste nihil accusamus eius beatae! Voluptate quis reprehenderit dolorum!atus repellat necessitatibus quam accusamus! Consequatur, numquam quisquam iste nihil accusamus eius beatae! Voluptate quis reprehenderit dolorum!atus repellat necessitatibus quam accusamus! 
                        </p>
                </div>
 
                <div className={styleLoja.infosPerfil}>
                    <div className={styleLoja.nomeEloc}>
                        <h1 className={styleLoja.nomePerfil}>Artes da diow</h1>
                        <p className={styleLoja.localizacao}>São Paulo - Sp</p>
                    </div>

                    <ul className={styleLoja.barraInfos}>
                        <li><button className={styleLoja.seguir}> Seguir </button></li>
                        <li>000 Produtos</li>
                        <li>000 Coleções</li>
                        <li>000 Seguidores</li>
                        <li><img src={Compartilhar}/></li>
                    </ul>
                </div>

                <div className={styleLoja.rodape}>
                    <img src={Rodape}/>
                    <div className={styleLoja.avaliacao}>
                        <div className={styleLoja.msg}>
                            <img src={Msg} />
                            <h3 className={styleLoja.titulo}>Respostas rápidas</h3>
                            <p className={styleLoja.subtitulo}>Tem um histórico de resposta rápida às mensagens.</p>
                        </div>
                        <div className={styleLoja.certificado}>
                            <img src={certificado} />
                            <h3 className={styleLoja.titulo}>Avaliações excelentes</h3>
                            <p className={styleLoja.subtitulo}>A classificação média das avaliações é de 4,8 ou superior.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styleLoja.areas}>
                
                <NavBar/>
            </section>
            <section className={styleLoja.destaque}>
                <h1 className={ styleLoja.tituloProduto}>Descubra obras destaques do artista</h1>
                <div className={styleLoja.materiais}>
                    <button className={styleLoja.btn1}>Feltro</button>
                    <button className={styleLoja.btn2} >Lã</button>
                    <button className={styleLoja.btn3}>Por encomenda</button>
                    <button className={styleLoja.btn4}>Premiun</button>
                    <button className={styleLoja.btn5}>recomendação Modelly</button>
                </div>
                <div className={styleLoja.produtosD}>
                    <div className={styleLoja.box1}>
                        <div className={styleLoja.produto4}>
                            <img  className={styleLoja.produtoG} src={Produto6} />
                            <div className={styleLoja.produtoTag1} >R$ 150,00</div>
                        </div>
                        <div className={styleLoja.produto1}>
                            <img  className={styleLoja.produtoP} src={Produto1} />
                            <div className={styleLoja.produtoTag2}>R$ 200,00</div>
                        </div>
                    </div>
                     <div className={styleLoja.box2}>
                        <div className={styleLoja.produto3}>
                            <img  className={styleLoja.produtoP} src={Produto3} />
                            <div className={styleLoja.produtoTag3}>R$ 100,00</div>
                        </div>
                        
                        <div className={styleLoja.produto2}>
                            <img  className={styleLoja.produtoG} src={Produto8} />
                            <div className={styleLoja.produtoTag4}>R$ 50,00</div>
                        </div>
                    </div>    
                    <div className={styleLoja.box3}>
                        <div className={styleLoja.produto5}>
                            <img  className={styleLoja.produtoG} src={Produto2} />
                            <div className={styleLoja.produtoTag5}>R$ 200,00</div>
                        </div>
                        <div className={styleLoja.produto6}>
                            <img  className={styleLoja.produtoP} src={Produto5} />
                            <div className={styleLoja.produtoTag6}>R$ 150,00</div>
                        </div>
                    </div>
                    <div className={styleLoja.box4}>
                    <div className={styleLoja.produto8}>
                            <img  className={styleLoja.produtoP} src={Produto7}  />
                            <div className={styleLoja.produtoTag7}>R$80,00</div>
                        </div>
                        <div className={styleLoja.produto7}>
                            <img  className={styleLoja.produtoG} src={Produto4} />
                            <div className={styleLoja.produtoTag8}>R$ 300,00</div>
                        </div>
                    </div>
                </div>
                <h1 className={styleLoja.tituloProduto}>Produtos Diow</h1>
                <div className={styleLoja.busca}>
                    <input className={styleLoja.search} type="text" id="search-bar" placeholder="Buscar produtos nessa loja"/>
                    <img src={Lupa} />
                </div>
                <div className={styleLoja.produtos}>
                <SectionProducts startIndex={0} limit={8} />
    
                </div>
                
                <FeedbackCarousel/>
            </section>
           
        </div>
    );
}
export default Perfil;