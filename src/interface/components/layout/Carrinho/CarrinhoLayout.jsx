import { useState } from 'react';
import styleCarrinhoLayout from './CarrinhoLayout.module.css';

import Produto1 from '../../../../assets/images/imgs-carrinho/foto-produto1.png';
import Produto2 from '../../../../assets/images/imgs-carrinho/foto-produto2.png';

import ProdutoCarrinho from './ProdutoCarrinho/ProdutoCarrinho';

const dbProdutoCarrinho = [
    {
        id: '1',
        Foto: Produto1,
        Nome: "Coelho de feltro",
        Descricao: "Essa é uma descricao genérica do produto Coelho de feltro",
        Preco: "R$ 59,00"
    },
    {
        id: '2',
        Foto: Produto2,
        Nome: "Boneca Escolar",
        Descricao: "Essa é uma descricao genérica do produto Boneca Escolar",
        Preco: "R$ 99,90"
    }
]

function CarrinhoLayout() {
    const [produtos, setProdutos] = useState(dbProdutoCarrinho.map(produto => ({ ...produto, quantidade: 1 })));

    const handleExcluirProduto = (id) => {
        setProdutos(produtos.filter(produto => produto.id !== id));
    };

    const handleAtualizarQuantidade = (id, novaQuantidade) => {
        setProdutos(produtos.map(produto => (
            produto.id === id ? { ...produto, quantidade: novaQuantidade } : produto
        )));
    };

    const handleComprarProduto = (id) => {
        console.log(`Redirecionar para a compra do produto com id: ${id}`);
    };

    const calcularPrecoTotal = () => {
        return produtos.reduce((total, produto) => {
            const precoProduto = parseFloat(produto.Preco.replace('R$', '').replace(',', '.'));
            return total + (precoProduto * produto.quantidade);
        }, 0).toFixed(2);
    };

    return (
        <div className={styleCarrinhoLayout.containerCarrinho}>
            <div className={styleCarrinhoLayout.boxCarrinho}>
                <h1 className={styleCarrinhoLayout.titleCarrinho}>Produtos</h1>
                {
                    produtos.map(produto => (
                        <ProdutoCarrinho
                            key={produto.id}
                            id={produto.id}
                            FotoProduto={produto.Foto}
                            NomeProduto={produto.Nome}
                            DescricaoProduto={produto.Descricao}
                            PrecoProduto={produto.Preco}
                            onExcluir={handleExcluirProduto}
                            onComprar={handleComprarProduto}
                            onAtualizarQuantidade={handleAtualizarQuantidade}
                        />
                    ))
                }
                <div className={styleCarrinhoLayout.boxProgresso}>
                    Frete Grátis!
                </div>
            </div>
            <aside className={styleCarrinhoLayout.boxInfoCarrinho}>
                <h1 className={styleCarrinhoLayout.titleCarrinho}>Resumo da compra</h1>
                <div className={styleCarrinhoLayout.boxInfoResumoCompra}>
                    <span>Produtos({produtos.reduce((acc, produto) => acc + produto.quantidade, 0)})</span>
                    <span>R$ {calcularPrecoTotal()}</span>
                </div>
                <div className={styleCarrinhoLayout.boxInfoResumoCompra}>
                    <span>Frete</span>
                    <span>Grátis</span>
                </div>
                <div className={`${styleCarrinhoLayout.boxInfoResumoCompra} ${styleCarrinhoLayout.boxInfoPrecoTotal}`}>
                    <span className={styleCarrinhoLayout.testeeRosa}>Total</span>
                    <span className={styleCarrinhoLayout.boldText}>R$ {calcularPrecoTotal()}</span>
                </div>
                <button>Continuar compra</button>
            </aside>
        </div>
    )
}

export default CarrinhoLayout;
