import PropTypes from 'prop-types';
import styleProdutoCarrinho from './ProdutoCarrinho.module.css';

function ProdutoCarrinho(props) {
    return (
        <div className={styleProdutoCarrinho.produtoCarrinho}>
            <img src={props.FotoProduto} alt="fotoProduto" className={styleProdutoCarrinho.fotoProduto} />
            <div className={styleProdutoCarrinho.infosProdutoCarrinho}>
                <h2>{props.NomeProduto}</h2>
                <p>{props.DescricaoProduto}</p>
                <div className={styleProdutoCarrinho.botoesAcao}>
                    <button>Excluir</button>
                    <button>Salvar</button>
                    <button>Alterar</button>
                </div>
            </div>
            <div className={styleProdutoCarrinho.quantidadeProdutoCarrinho}>
                <div className={styleProdutoCarrinho.botaoQuantidade}>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <span>100 disponíveis</span>
            </div>
            <div className={styleProdutoCarrinho.boxPreco}>
                <span>{props.PrecoProduto}</span>
                <button>Comprar</button>
            </div>
        </div>
    );
}

ProdutoCarrinho.propTypes = {
    FotoProduto: PropTypes.string.isRequired,
    NomeProduto: PropTypes.string.isRequired,
    DescricaoProduto: PropTypes.string.isRequired,
    PrecoProduto: PropTypes.string.isRequired,
}

export default ProdutoCarrinho;
