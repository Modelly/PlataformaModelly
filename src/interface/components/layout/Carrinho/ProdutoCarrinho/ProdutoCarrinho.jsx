import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styleProdutoCarrinho from './ProdutoCarrinho.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function ProdutoCarrinho(props) {
    const [quantidade, setQuantidade] = useState(1);
    const [precoTotal, setPrecoTotal] = useState(parseFloat(props.PrecoProduto.replace('R$', '').replace(',', '.')));
    const [disponiveis, setDisponiveis] = useState(100);

    useEffect(() => {
        const precoUnitario = parseFloat(props.PrecoProduto.replace('R$', '').replace(',', '.'));
        setPrecoTotal(precoUnitario * quantidade);

        AOS.init({
            duration: 1200, // Duração das animações
        });
    }, [quantidade, props.PrecoProduto]);

    const handleAdicionar = () => {
        if (disponiveis > 0) {
            setQuantidade(quantidade + 1);
            setDisponiveis(disponiveis - 1);
            props.onAtualizarQuantidade(props.id, quantidade + 1);
        }
    };

    const handleDiminuir = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
            setDisponiveis(disponiveis + 1);
            props.onAtualizarQuantidade(props.id, quantidade - 1);
        } else {
            props.onExcluir(props.id);
        }
    };

    const handleExcluir = () => {
        props.onExcluir(props.id);
    };


    return (
        <div className={styleProdutoCarrinho.produtoCarrinho} data-aos="fade-up" data-aos-delay={props.delay}>
            <img src={props.FotoProduto} alt="fotoProduto" className={styleProdutoCarrinho.fotoProduto} />
            <div className={styleProdutoCarrinho.infosProdutoCarrinho}>
                <h2>{props.NomeProduto}</h2>
                <p>{props.DescricaoProduto}</p>
                <div className={styleProdutoCarrinho.botoesAcao}>
                    <button onClick={handleExcluir}>Excluir</button>
                </div>
            </div>
            <div className={styleProdutoCarrinho.boxPreco}>
                <span>R$ {precoTotal.toFixed(2)}</span>
                <div className={styleProdutoCarrinho.boxQuantidadeDisponiveis}>
                    <span>{disponiveis} disponíveis</span>
                    <div className={styleProdutoCarrinho.botaoQuantidade}>
                        <span onClick={handleDiminuir}>-</span>
                        <span>{quantidade}</span>
                        <span onClick={handleAdicionar}>+</span>
                    </div>
                </div>
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
    onAtualizarQuantidade: PropTypes.func.isRequired,
    delay: PropTypes.func.isRequired,
}

export default ProdutoCarrinho;
