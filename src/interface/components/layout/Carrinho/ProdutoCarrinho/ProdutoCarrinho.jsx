import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styleProdutoCarrinho from './ProdutoCarrinho.module.css';

function ProdutoCarrinho(props) {
    const [quantidade, setQuantidade] = useState(1);
    const [precoTotal, setPrecoTotal] = useState(parseFloat(props.PrecoProduto.replace('R$', '').replace(',', '.')));

    useEffect(() => {
        const precoUnitario = parseFloat(props.PrecoProduto.replace('R$', '').replace(',', '.'));
        setPrecoTotal(precoUnitario * quantidade);
    }, [quantidade, props.PrecoProduto]);

    const handleAdicionar = () => {
        setQuantidade(quantidade + 1);
    };

    const handleDiminuir = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        } else {
            props.onExcluir(props.id);
        }
    };

    const handleExcluir = () => {
        props.onExcluir(props.id);
    };

    const handleComprar = () => {
        props.onComprar(props.id);
    };

    return (
        <div className={styleProdutoCarrinho.produtoCarrinho}>
            <img src={props.FotoProduto} alt="fotoProduto" className={styleProdutoCarrinho.fotoProduto} />
            <div className={styleProdutoCarrinho.infosProdutoCarrinho}>
                <h2>{props.NomeProduto}</h2>
                <p>{props.DescricaoProduto}</p>
                <div className={styleProdutoCarrinho.botoesAcao}>
                    <button onClick={handleExcluir}>Excluir</button>
                </div>
            </div>
            <div className={styleProdutoCarrinho.quantidadeProdutoCarrinho}>
                <div className={styleProdutoCarrinho.botaoQuantidade}>
                    <span onClick={handleDiminuir}>-</span>
                    <span>{quantidade}</span>
                    <span onClick={handleAdicionar}>+</span>
                </div>
                <span>100 disponíveis</span>
            </div>
            <div className={styleProdutoCarrinho.boxPreco}>
                <span>R$ {precoTotal.toFixed(2)}</span>
                <button onClick={handleComprar}>Comprar</button>
            </div>
        </div>
    );
}

ProdutoCarrinho.propTypes = {
    id: PropTypes.string.isRequired,
    FotoProduto: PropTypes.string.isRequired,
    NomeProduto: PropTypes.string.isRequired,
    DescricaoProduto: PropTypes.string.isRequired,
    PrecoProduto: PropTypes.string.isRequired,
    onExcluir: PropTypes.func.isRequired,
    onComprar: PropTypes.func.isRequired,
}

export default ProdutoCarrinho;
