import sc from '../../../../../assets/images/imgs-produto/s-c.png';
import './Descricao.css'

const dbDescricao = [
    {
        titulo: "Características do produto",
        descricao: "material X, feito da forma y, z."
    },
    {
        titulo: "Tamanho do produto",
        descricao: "Largura Xcm x Ycm"
    },
    {
        titulo: "Cores do produto",
        descricao: "Cores e detalhes"
    },
    {
        titulo: "Sobre a Loja",
        descricao: "Nós somos a loja ta, temos uma missão de fazer isso e aquilo, nossa visão é de realizar tais coisas Nossos valores são x, y e z. Se você se identifica com a nossa loja, encomende nossos produtos e entre em contato com a gente pelo chat!"
    },
    {
        titulo: "Código do Produto:",
        descricao: "17RD51F"
    },
    {
        titulo: "Adicionado em:",
        descricao: "10/10/2022"
    },
]

function Descricao() {
    return(
        <div id="ContainerDescricao">
            <h2>Descrição</h2>

            {
                // Função map que pega do Data Base o título e a descrição de cada item!
                dbDescricao.map((itemDesc, index) => (
                    <p key={index}>
                        <strong>{itemDesc.titulo}</strong>
                        <br />
                        {itemDesc.descricao}
                    </p>
                ))
            }

            <a className="a">
                <img id="car" src={sc} alt="s-c" />
                Comprar produto
            </a>
        </div>
    )
}

export default Descricao;