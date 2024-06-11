import './CarrinhoLayout.css'

import Produto1 from '../../../../assets/images/imgs-carrinho/foto-produto1.png'
import Produto2 from '../../../../assets/images/imgs-carrinho/foto-produto2.png'

import ProdutoCarrinho from './ProdutoCarrinho/ProdutoCarrinho';

const dbProdutoCarrinho = [
    {
        Foto: Produto1,
        Nome: "Coelho de feltro",
        Descricao: "Essa é uma descricao genérica do produto Coelho de feltro",
        Preco: "R$ 59,00"
    },
    {
        Foto: Produto2,
        Nome: "Boneca Escolar",
        Descricao: "Essa é uma descricao genérica do produto Boneca Escolar",
        Preco: "R$ 99,90"
    }
]

function CarrinhoLayout() {
    return (
        <div id='ContainerCarrinho'>
            <div id='BoxCarrinho'>
                <h1 className="TitleCarrinho">Produtos</h1>
                {
                    dbProdutoCarrinho.map((produto, index) => (
                        <ProdutoCarrinho key={index}
                            FotoProduto={produto.Foto}
                            NomeProduto={produto.Nome}
                            DescricaoProduto={produto.Descricao}
                            PrecoProduto={produto.Preco}
                        />
                    ))
                }
            </div>
            <aside id='BoxInfoCarrinho'>
                <h1 className="TitleCarrinho">Resumo da compra</h1>
                <div className='Box-InfoResumoCompra'>
                    <span>Produtos(2)</span>
                    <span>R$ 158,90</span>
                </div>
                <div className='Box-InfoResumoCompra'>
                    <span>Frete</span>
                    <span>Grátis</span>
                </div>
                <div className='Box-InfoResumoCompra' id="BoxInforPrecoTotal">
                    <span id='Testrosa'>Total</span>
                    <span id='boldText'>R$ 158,90</span>
                </div>
                <button>Continuar compra</button>

            </aside>
        </div>
    )
}

export default CarrinhoLayout;