import './InfoProduto.css'

import { Link } from 'react-router-dom';

import imagemPrincipal from '../../../../../assets/images/imgs-produto/imagem-principal.png';
import shoppingCart from '../../../../../assets/images/imgs-produto/Shopping-Cart.png';
import mC from '../../../../../assets/images/imgs-produto/m-c.png';
import barcode from '../../../../../assets/images/imgs-produto/Barcode.png';
import pix from '../../../../../assets/images/imgs-produto/pix.png';

function InfoProduto() {
    return(
        <section>
            <p id="caminhoProduto" >início &gt; Bolsas e Carteiras &gt; Bolsa &gt; Bolsa de crochê</p>
            <div className="ProdutoContainer">

                <div className="imagens-produto">
                    <div>
                        <div className="img-ltrl"></div>
                        <div className="img-ltrl"></div>
                        <div className="img-ltrl"></div>
                        <div className="img-ltrl"></div>
                    </div>

                    <img
                        id="img-principal"
                        src={imagemPrincipal}
                        alt="Imagem Principal do Produto"
                    />
                </div>
                
                <aside id="Container-Infos">
                    <div id="Content-InfosProduto">
                        <h2>Bing Bong</h2>
                        <h1 id="preco">R$ 350,00</h1>
                        
                        <p className="InfosProduto">
                            ou 12x sem juros de R$29,17 no cartão
                            
                            <br /><br />
                            
                            <strong>Feito sob encomenda</strong>
                            <br />
                            <span className="subText">10 dias para produção</span>

                            <br /><br />

                            <strong>Feito sob encomenda (Regular)</strong>
                            <br />
                            <span className="subText">Disponível para todo Brasil</span>
                        </p>


                        <a href="#" className="btn" id="btn_roxo">Comprar agora</a>
                        <Link to="/carrinho" className="btn" id="btn_rosa">
                            <img id="CarrinhoIcone" src={shoppingCart} alt="Shopping Cart" />Adicionar ao carrinho
                        </Link>
                        
                        <div id="ContentPagamento">
                            <h4>Meios de pagamento:</h4>
                            <img src={mC} alt="Icone cartão" />
                            <img src={barcode} alt="Icone código boleto" />
                            <img src={pix} alt="icone pix" id="pix" />
                        </div>

                        <div id="Box-InfosPagamento">
                            <div id="textoEsquerda">
                                <p>
                                    <strong>Compra segura e Protegida</strong>
                                    <br />
                                    <span className="subText">Seu pedido ou seu dinheiro de volta</span>
                                </p>
                            </div>

                            <div id="textoDireita">
                                <p>
                                    <strong>Políticas Modelly</strong>
                                    <br />
                                    <span className="subText">Reembolso, troca e devolução</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="Container-PefilLoja">
                        <div>
                            <img id="Foto-perfil" src={imagemPrincipal}></img>

                            <div>
                                <span className="textRosa">Nome da loja</span>
                                <p className="subText">Localização da loja</p>
                            </div>

                            <button>Seguir</button>
                        </div>

                        <div>
                            <span>10 produtos</span>
                            <span>12 avaliações</span>
                            <span>8 coleções</span>
                        </div>

                        <a className="btn" id="btn-ContatarVendedor">Contatar vendedor</a>
                        <a className="btn">Políticas da loja</a>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default InfoProduto;