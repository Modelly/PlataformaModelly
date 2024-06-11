import PropTypes from 'prop-types';
import "./ProdutoCarrinho.css"

function ProdutoCarrinho(props) {
    return (
        <div id="ProdutoCarrinho">
            <img src={props.FotoProduto} alt="fotoProduto" />
            <div id="InfosProdutoCarrinho">
                <h2>{props.NomeProduto}</h2>
                <p>{props.DescricaoProduto}</p>
                <div>
                    <button>Excluir</button>
                    <button>Salvar</button>
                    <button>Alterar</button>
                </div>
            </div>
            <div id="QuantidadeProdutoCarrinho">
                <div>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <span>100 disponiveis</span>
            </div>
            <div id="BoxPreco">
                <span>{props.PrecoProduto}</span>
                <button>Comprar</button>
            </div>
        </div>
    )
}

export default ProdutoCarrinho;

ProdutoCarrinho.propTypes = {
    FotoProduto: PropTypes.string.isRequired,
    NomeProduto: PropTypes.string.isRequired,
    DescricaoProduto: PropTypes.string.isRequired,
    PrecoProduto: PropTypes.string.isRequired,
}