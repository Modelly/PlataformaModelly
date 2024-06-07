import "./ProdutoLayout.css";
import React from 'react';

// Importando imagens
import imagemPrincipal from '../../../../assets/images/imgs-produto/imagem-principal.png';
import shoppingCart from '../../../../assets/images/imgs-produto/Shopping-Cart.png';
import mC from '../../../../assets/images/imgs-produto/m-c.png';
import barcode from '../../../../assets/images/imgs-produto/Barcode.png';
import pix from '../../../../assets/images/imgs-produto/pix.png';
import sc from '../../../../assets/images/imgs-produto/s-c.png';

function Produto() {
  return (
    <main>
      <div id="p1">
        <p id="p-i">início &gt; Bolsas e Carteiras &gt; Bolsa &gt; Bolsa de crochê</p>
        <div className="prod-pg">
          <div className="imgs-ltrl">
            <div className="img-ltrl"></div>
            <div className="img-ltrl"></div>
            <div className="img-ltrl"></div>
            <div className="img-ltrl"></div>
          </div>

          <img
            id="img-p"
            src={imagemPrincipal}
            alt="imagem-principal"
          />

          <div id="txt">
            <h2>Bing Bong</h2>
            <h1 id="g">R$ 350</h1>
            <p className="c">ou 12x sem juros de R$29,17 no cartão</p>
            <p>
              <b>Feito sob encomenda</b>
            </p>
            <p className="c">10 dias para produção</p>
            <p>
              <b>Feito sob encomenda (Regular)</b>
            </p>
            <p className="c">Disponível para todo Brasil</p>
            <a id="rx">Comprar agora</a>
            <a id="rs">
              <img id="car" src={shoppingCart} alt="Shopping Cart" />
              <a>Adicionar ao carrinho</a>
            </a>
            <div id="m-p">
              <h4>Meios de pagamento:</h4>
              <img src={mC} alt="m-c" />
              <img src={barcode} alt="Barcode" />
              <img id="pix" src={pix} alt="pix" />
            </div>
            <div className="t">
              <div id="t1">
                <p>
                  <b>Compra segura e Protegida</b>
                </p>
                <p className="c">Seu pedido ou seu dinheiro de volta</p>
              </div>
              <div id="t2">
                <p>
                  <b>Políticas Modelly</b>
                </p>
                <p className="c">Reembolso, troca e devolução</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="p2">
        <div id="desc">
          <h2>Descrição</h2>
          <span>
            <p>
              <b>Características do produto</b>
            </p>
            <p>material X, feito da forma y, z.</p>
          </span>

          <span>
            <p>
              <b>Tamanho do produto</b>
            </p>
            <p>Largura Xcm x Ycm</p>
          </span>

          <span>
            <p>
              <b>Cores do produto</b>
            </p>
            <p>Cores e detalhes</p>
          </span>

          <span>
            <p>
              <b>Sobre a Loja</b>
            </p>
            <p>
              Nós somos a loja ta, temos uma missão de fazer isso e aquilo,
              nossa visão é de realizar tais coisas Nossos valores são x, y e z.
              Se você se identifica com a nossa loja, encomende nossos produtos
              e entre em contato com a gente pelo chat!
            </p>
          </span>

          <span>
            <p>
              <b>Código do Produto:</b>
            </p>
            <p>17RD51F</p>
          </span>

          <span>
            <p>
              <b>Adicionado em: </b>
            </p>
            <p>10/10/2022</p>
          </span>

          <a className="a">
            <img id="car" src={sc} alt="s-c" />
            <a>Comprar produto</a>
          </a>
        </div>
        <div id="dir">
          <div id="p-l">
            <div id="l1">
              <div id="p-p">
                <div id="p"></div>
                <div>
                  <p className="r">Nome da loja</p>
                  <p className="cz">Localização da loja</p>
                </div>
              </div>
              <a>Seguir</a>
            </div>

            <div id="l2">
              <span>10 produtos</span>
              <span>12 avaliações</span>
              <span>8 coleções</span>
            </div>

            <div id="l3">
              <a>Contatar vendedor</a>
            </div>

            <div id="l4">Políticas da loja</div>
          </div>
          <h3>Produto similar da loja</h3>
          <div id="o-p">
            <div id="p01" className="o-p">
              <a>R$ 200,00</a>
            </div>
            <div id="p02" className="o-p">
              <a>R$ 200,00</a>
            </div>
            <div id="p3" className="o-p">
              <a>R$ 200,00</a>
            </div>
            <div id="p4" className="o-p">
              <a>R$ 200,00</a>
            </div>
            <div id="p5" className="o-p">
              <a>R$ 200,00</a>
            </div>
            <div id="p6" className="o-p">
              <a>R$ 200,00</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Produto;
