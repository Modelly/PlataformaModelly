import { useState, useEffect } from 'react';
import { getBasePath } from '../../util/GetBasePath';
import { useNavigate, useLocation } from 'react-router-dom';
import styleCarrinhoLayout from './CarrinhoLayout.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Produto1 from '../../../../assets/images/imgs-carrinho/foto-produto1.png';
import Produto2 from '../../../../assets/images/imgs-carrinho/foto-produto2.png';

import ProdutoCarrinho from './ProdutoCarrinho/ProdutoCarrinho';

const dbProdutoCarrinho = [
    {
        id: '1',
        Foto: Produto1,
        Nome: "Coelho de feltro",
        Descricao: "Essa é uma descricao genérica do produto Coelho de feltro",
        Preco: "R$ 59,00",
        delay: "300"
    },
    {
        id: '2',
        Foto: Produto2,
        Nome: "Boneca Escolar",
        Descricao: "Essa é uma descricao genérica do produto Boneca Escolar",
        Preco: "R$ 99,90",
        delay: "400"
    }
];

function CarrinhoLayout() {
    const [produtos, setProdutos] = useState(dbProdutoCarrinho.map(produto => ({ ...produto, quantidade: 1 })));
    const navigate = useNavigate();

    const location = useLocation();
    const basePath = getBasePath(location.pathname);

    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

    const handleExcluirProduto = (id) => {
        setProdutos(produtos.filter(produto => produto.id !== id));
    };

    const handleAtualizarQuantidade = (id, novaQuantidade) => {
        setProdutos(produtos.map(produto => (
            produto.id === id ? { ...produto, quantidade: novaQuantidade } : produto
        )));
    };

    const handleComprarProduto = () => {
        navigate(`${basePath}/checkout`);
    };

    const calcularPrecoTotal = () => {
        return produtos.reduce((total, produto) => {
            const precoProduto = parseFloat(produto.Preco.replace('R$', '').replace(',', '.'));
            return total + (precoProduto * produto.quantidade);
        }, 0).toFixed(2);
    };

    return (
        <div className={styleCarrinhoLayout.containerCarrinho}>
            <div className={styleCarrinhoLayout.boxCarrinho} data-aos="fade-right">
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
                            delay={produto.delay}
                        />
                    ))
                }
                <div className={styleCarrinhoLayout.boxProgresso}>
                    Frete Grátis!
                </div>
            </div>
            <aside className={styleCarrinhoLayout.boxInfoCarrinho} data-aos="fade-left">
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
                <button onClick={handleComprarProduto}>Continuar compra</button>
            </aside>
        </div>
    )
}

export default CarrinhoLayout;