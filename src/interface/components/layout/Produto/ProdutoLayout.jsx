import styleProduto from "./ProdutoLayout.module.css";
import InfoProduto from "./InfoProduto/InfoProduto";
import Descricao from "./Descricao/Descricao";

import produto1 from '../../../../assets/images/imgs-produto/produto1.png';
import produto2 from '../../../../assets/images/imgs-produto/produto2.png';
import produto3 from '../../../../assets/images/imgs-produto/produto3.png';
import produto4 from '../../../../assets/images/imgs-produto/produto4.png';
import produto5 from '../../../../assets/images/imgs-produto/produto5.png';
import produto6 from '../../../../assets/images/imgs-produto/produto6.png';

const dbProducts = [
  {
    price: "R$ 200,00",
    img_bg: produto1
  },
  {
    price: "R$ 200,00",
    img_bg: produto2
  },
  {
    price: "R$ 200,00",
    img_bg: produto3
  },
  {
    price: "R$ 200,00",
    img_bg: produto4
  },
  {
    price: "R$ 1.200,00",
    img_bg: produto5
  },
  {
    price: "R$ 300,00",
    img_bg: produto6
  },
]

function Produto() {
  return (
    <main className={styleProduto.main}>
      <InfoProduto />
      <div className={styleProduto.container}>
        <Descricao />
        <div className={styleProduto.containerProdutosSimilares}>
          <h3>Produto similar da loja</h3>
          <div className={styleProduto.similarProducts}>
            {
              dbProducts.map((produto, index) => (
                <a 
                  key={index} 
                  className={styleProduto.priceProduct} 
                  style={{ backgroundImage: `url(${produto.img_bg})` }}
                >
                  <span>{produto.price}</span>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default Produto;
