import styleInfoProduto from './InfoProduto.module.css';
import { Link } from 'react-router-dom';

import imagemPrincipal from '../../../../../assets/images/imgs-produto/imagem-principal.png';
import shoppingCart from '../../../../../assets/images/imgs-produto/Shopping-Cart.png';
import mC from '../../../../../assets/images/imgs-produto/m-c.png';
import barcode from '../../../../../assets/images/imgs-produto/Barcode.png';
import pix from '../../../../../assets/images/imgs-produto/pix.png';

function InfoProduto() {
    return(
        <section>
            <p className={styleInfoProduto.caminhoProduto} >início &gt; Bolsas e Carteiras &gt; Bolsa &gt; Bolsa de crochê</p>
            <div className={styleInfoProduto.produtoContainer}>

                <div className={styleInfoProduto.imagensProduto}>
                    <div>
                        <div className={styleInfoProduto.imgLtrl}></div>
                        <div className={styleInfoProduto.imgLtrl}></div>
                        <div className={styleInfoProduto.imgLtrl}></div>
                        <div className={styleInfoProduto.imgLtrl}></div>
                    </div>

                    <img
                        className={styleInfoProduto.imgPrincipal}
                        src={imagemPrincipal}
                        alt="Imagem Principal do Produto"
                    />
                </div>
                
                <aside className={styleInfoProduto.containerInfos}>
                    <div className={styleInfoProduto.contentInfosProduto}>
                        <h2>Bing Bong</h2>
                        <h1 className={styleInfoProduto.preco}>R$ 350,00</h1>
                        
                        <p className={styleInfoProduto.infosProduto}>
                            ou 12x sem juros de R$29,17 no cartão
                            
                            <br /><br />
                            
                            <strong>Feito sob encomenda</strong>
                            <br />
                            <span className={styleInfoProduto.subText}>10 dias para produção</span>

                            <br /><br />

                            <strong>Feito sob encomenda (Regular)</strong>
                            <br />
                            <span className={styleInfoProduto.subText}>Disponível para todo Brasil</span>
                        </p>


                        <a href="#" className={`${styleInfoProduto.btn} ${styleInfoProduto.btnRoxo}`}>Comprar agora</a>
                        <Link to="/carrinho" className={`${styleInfoProduto.btn} ${styleInfoProduto.btnRosa}`}>
                            <img className={styleInfoProduto.carrinhoIcone} src={shoppingCart} alt="Shopping Cart" />Adicionar ao carrinho
                        </Link>
                        
                        <div className={styleInfoProduto.contentPagamento}>
                            <h4>Meios de pagamento:</h4>
                            <img src={mC} alt="Icone cartão" />
                            <img src={barcode} alt="Icone código boleto" />
                            <img src={pix} alt="icone pix" className={styleInfoProduto.pix} />
                        </div>

                        <div className={styleInfoProduto.boxInfosPagamento}>
                            <div className={styleInfoProduto.textoEsquerda}>
                                <p>
                                    <strong>Compra segura e Protegida</strong>
                                    <br />
                                    <span className={styleInfoProduto.subText}>Seu pedido ou seu dinheiro de volta</span>
                                </p>
                            </div>

                            <div className={styleInfoProduto.textoDireita}>
                                <p>
                                    <strong>Políticas Modelly</strong>
                                    <br />
                                    <span className={styleInfoProduto.subText}>Reembolso, troca e devolução</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styleInfoProduto.containerPerfilLoja}>
                        <div>
                            <img className={styleInfoProduto.fotoPerfil} src={imagemPrincipal}></img>

                            <div>
                                <span className={styleInfoProduto.textRosa}>Nome da loja</span>
                                <p className={styleInfoProduto.subText}>Localização da loja</p>
                            </div>

                            <button>Seguir</button>
                        </div>

                        <div>
                            <span>10 produtos</span>
                            <span>12 avaliações</span>
                            <span>8 coleções</span>
                        </div>

                        <a className={`${styleInfoProduto.btn} ${styleInfoProduto.btnContatarVendedor}`}>Contatar vendedor</a>
                        <a className={styleInfoProduto.btn}>Políticas da loja</a>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default InfoProduto;
