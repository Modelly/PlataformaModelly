import styleCarrinhoLayout from './CarrinhoLayout.module.css';

import Produto1 from '../../../../assets/images/imgs-carrinho/foto-produto1.png';
import Produto2 from '../../../../assets/images/imgs-carrinho/foto-produto2.png';

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
        <div className={styleCarrinhoLayout.containerCarrinho}>
            <div className={styleCarrinhoLayout.boxCarrinho}>
                <h1 className={styleCarrinhoLayout.titleCarrinho}>Produtos</h1>
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
                <div className={styleCarrinhoLayout.boxProgresso}>
                    <progress className={styleCarrinhoLayout.progress} value="70" max="100"></progress>
                    Frete Grátis!
                </div>
            </div>
            <aside className={styleCarrinhoLayout.boxInfoCarrinho}>
                <h1 className={styleCarrinhoLayout.titleCarrinho}>Resumo da compra</h1>
                <div className={styleCarrinhoLayout.boxInfoResumoCompra}>
                    <span>Produtos(2)</span>
                    <span>R$ 158,90</span>
                </div>
                <div className={styleCarrinhoLayout.boxInfoResumoCompra}>
                    <span>Frete</span>
                    <span>Grátis</span>
                </div>
                <div className={`${styleCarrinhoLayout.boxInfoResumoCompra} ${styleCarrinhoLayout.boxInfoPrecoTotal}`}>
                    <span className={styleCarrinhoLayout.testeeRosa}>Total</span>
                    <span className={styleCarrinhoLayout.boldText}>R$ 158,90</span>
                </div>
                <button>Continuar compra</button>
            </aside>
        </div>
    )
}

export default CarrinhoLayout;
