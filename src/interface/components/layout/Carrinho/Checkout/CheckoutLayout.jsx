import React from 'react';
import styles from './Checkout.module.css';
import deliveryIcon from '../../../../../../src/assets/images/imgs-carrinho/caminhaoverde.png';
import paymentIcon from '../../../../../../src/assets/images/imgs-carrinho/cartaoproxoiconpequeno.png';
import reviewIcon from '../../../../../../src/assets/images/imgs-carrinho/revisao-roxo.png';
import pixIcon from '../../../../../../src/assets/images/imgs-carrinho/pix.png';
import creditCardIcon from '../../../../../../src/assets/images/imgs-carrinho/cartãoroxogrande.png';
import boletoIcon from '../../../../../assets/images/imgs-carrinho/boleto.png';
import product1Image from '../../../../../../src/assets/images/imgs-carrinho/foto-produto1.png';
import product2Image from '../../../../../../src/assets/images/imgs-carrinho/foto-produto2.png';
import editIcon from '../../../../../../src/assets/images/imgs-carrinho/lapis.png';
// import errorIcon from '../../../../../../src/assets/images/imgs-carrinho/Error.png';

const CheckoutLayout = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.icon}><img src={deliveryIcon} alt="Entrega" /></div>
        <div className={styles.icon}><img src={paymentIcon} alt="Pagamento" /></div>
        <div className={styles.icon}><img src={reviewIcon} alt="Revisão" /></div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Endereço</div>
        <div className={styles.address}>
          <div>
            <div>
              <strong>Casa</strong>
              <img src={editIcon} alt="Editar" className={styles.editIcon} />
            </div>
            <div>Rua joao gomes filho Nº666</div>
            <div>Vila Clementina - São paulo/SP</div>
            <div>Cep: 04980 - 089</div>
          </div>
          <div>
            <div>
              <strong>Serviço</strong>
              <img src={editIcon} alt="Editar" className={styles.editIcon} />
            </div>
            <div>Rua joao gomes filho Nº666</div>
            <div>Vila Clementina - São paulo/SP</div>
            <div>Cep: 04980 - 089</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Método de Pagamento</div>
        <div className={styles.payment}>
          <div className={styles.paymentMethod}>
            <img src={pixIcon} alt="Pix" />
            <span>Aprovação Imediata</span>
          </div>
          <div className={styles.paymentMethod}>
            <img src={creditCardIcon} alt="Cartão de Crédito" />
            <span>Crédito</span>
          </div>
          <div className={styles.paymentMethod}>
            <img src={boletoIcon} alt="Boleto" />
            <span>Aprovação em 3 dias</span>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Resumo do Pedido</div>
        <div className={styles.summary}>
          <div className={styles.product}>
            <img src={product1Image} alt="Produto 1" className={styles.productImage} />
            <div>Produto 1</div>
            <div>R$ 59</div>
          </div>
          <div className={styles.product}>
            <img src={product2Image} alt="Produto 2" className={styles.productImage} />
            <div>Produto 2</div>
            <div>R$ 59</div>
          </div>
          <div className={styles.product}>
            <div>Frete</div>
            <div>Grátis</div>
          </div>
          <div className={styles.total}>
            <div>Total</div>
            <div>R$ 118,00</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Forma de Pagamento</div>
        <div className={styles.confirmation}>
          <div className={styles.paymentMethod}>
            <img src={pixIcon} alt="Pix" />
            <span>Total: R$ 118,00</span>
          </div>
        </div>
      </div>
      <button className={styles.button}>Finalizar compra</button>
    </div>
  );
};

export default CheckoutLayout;
