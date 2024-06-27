import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { getBasePath } from "../../../util/GetBasePath.jsx"

import mC from '../../../../../assets/images/imgs-produto/m-c.png';
import pix from '../../../../../assets/images/imgs-produto/pix.png';
import barcode from '../../../../../assets/images/imgs-produto/Barcode.png';
import shoppingCart from '../../../../../assets/images/imgs-produto/Shopping-Cart.png';
import imagemPrincipal from '../../../../../assets/images/imgs-produto/imagem-principal.png';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styleInfoProduto from './InfoProduto.module.css';


function InfoProduto() {

    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const location = useLocation();
    const basePath = getBasePath(location.pathname);

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/produtos/${id}`, {
                    headers: {
                        'ngrok-skip-browser-warning': 'true'
                      }
                });
                if (!response.ok) {
                    throw new Error('Erro ao buscar produto');
                }
                const data = await response.json();
                setTimeout(() => {
                    setProduto(data);
                    setIsLoading(false)
                }, 800)
                
            } catch (error) {
                console.error('Erro ao buscar produto:', error);
                try {
                    const localResponse = await fetch('/data/products.json');
                    if (!localResponse.ok) {
                        throw new Error('Erro ao buscar produto local');
                    }
                    const localData = await localResponse.json();
                    const foundProduct = localData.find(p => p.pk_id_produto === parseInt(id));
                    setTimeout(() => {
                        setProduto(foundProduct);
                        setIsLoading(false);
                    }, 800);
                } catch (localError) {
                    console.error('Erro ao buscar produto local:', localError);
                    setIsLoading(false);
                }
            }
        };

        fetchProduto();
    }, [id]);

    if (isLoading) {
        return (
            <section>
                <Skeleton height={20} width={300}/>
                <div className={styleInfoProduto.produtoContainer}>
                    <div className={styleInfoProduto.imagensProduto}>
                        <div>
                            <Skeleton height={90} width={90} count={4} style={{marginTop: 10}}/>

                        </div>
                        <Skeleton height={900} width={700} />
                    </div>
                    <aside className={styleInfoProduto.containerInfos}>
                        <Skeleton height={40} width={270} count={8} style={{marginTop: 10}} />
                        <Skeleton height={280} width={320} style={{marginTop: 10}} />

                    </aside>
                </div>
            </section>
        );
    }

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

                    <a href={produto.nome_produto === "Boneco Bing Bong" ? "https://lumalabs.ai/capture/B1FC17F8-6910-4B02-82EF-F4936D2EFC06" : ""} target='_blank' rel="noopener noreferrer">
                    <img
                        className={styleInfoProduto.imgPrincipal}
                        src={produto.foto_produto}
                        alt="Imagem Principal do Produto"
                    />
                    </a>
                    
                </div>
                
                <aside className={styleInfoProduto.containerInfos}>
                    <div className={styleInfoProduto.contentInfosProduto}>
                        <h2>{produto.nome_produto}</h2>
                        <h1 className={styleInfoProduto.preco}>R$ {produto.preco_produto.toFixed(2)}</h1>
                        
                        <p className={styleInfoProduto.infosProduto}>
                            ou 12x sem juros de R${(produto.preco_produto / 12).toFixed(2)} no cartão
                            
                            <br /><br />
                            
                            <strong>Feito sob encomenda</strong>
                            <br />
                            <span className={styleInfoProduto.subText}>{produto.tempo_producao} dias para produção</span>

                            <br /><br />

                            <strong>Feito sob encomenda (Regular)</strong>
                            <br />
                            <span className={styleInfoProduto.subText}>Disponível para todo Brasil</span>
                        </p>


                        <a href="#" className={`${styleInfoProduto.btn} ${styleInfoProduto.btnRoxo}`}>Comprar agora</a>
                        <Link to={`${basePath}/carrinho`} className={`${styleInfoProduto.btn} ${styleInfoProduto.btnRosa}`}>
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
                                <span className={styleInfoProduto.textRosa}>{produto.loja.nome_loja}</span>
                                <p className={styleInfoProduto.subText}>Localização da loja</p>
                            </div>

                            <button>Seguir</button>
                        </div>

                        <div>
                            <span>{produto.loja.qtd_produtos} produtos</span>
                            <span>12 avaliações</span>
                            <span>{produto.loja.qtd_colecao} coleções</span>
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
