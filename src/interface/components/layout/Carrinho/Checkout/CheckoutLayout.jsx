import React, { useState } from 'react';
import styles from './Checkout.module.css';
import deliveryIcon from '../../../../../../src/assets/images/imgs-carrinho/caminhaoroxo.png';
import paymentIcon from '../../../../../../src/assets/images/imgs-carrinho/cartaoproxoiconpequeno.png';
import reviewIcon from '../../../../../../src/assets/images/imgs-carrinho/revisao-roxo.png';
import deliveryIconGreen from '../../../../../../src/assets/images/imgs-carrinho/caminhaoverde.png'; 
import paymentIconGreen from '../../../../../../src/assets/images/imgs-carrinho/cartaoverdeiconpequeno.png'
import pixIcon from '../../../../../../src/assets/images/imgs-carrinho/pix.png';
import creditCardIcon from '../../../../../../src/assets/images/imgs-carrinho/cartãoroxogrande.png';
import boletoIcon from '../../../../../assets/images/imgs-carrinho/boleto.png';
import product1Image from '../../../../../../src/assets/images/imgs-carrinho/foto-produto1.png';
import product2Image from '../../../../../../src/assets/images/imgs-carrinho/foto-produto2.png';
import editIcon from '../../../../../../src/assets/images/imgs-carrinho/lapis.png';
const CheckoutLayout = () => {
    const [step, setStep] = useState(1);
  
    const handleNext = () => {
      setStep(step + 1);
    };
  
    const handleBack = () => {
      setStep(step - 1);
    };
  
    return (
      <div className={styles.checkoutContainer}>
        <div className={styles.formulario}>
          <div className={styles.header}>
            <div className={step > 1 ? styles.iconGreen : styles.icon}>
              <img src={step > 1 ? deliveryIconGreen : deliveryIcon} alt="Entrega" />
            </div>
            <div className={step > 1 ? styles.lineGreen : styles.line}></div>
            <div className={step > 2 ? styles.iconGreen : styles.icon}>
              <img src={step > 2 ? paymentIconGreen : paymentIcon} alt="Pagamento" />
            </div>
            <div className={step > 2 ? styles.lineGreen : styles.line}></div>
            <div className={step > 3 ? styles.iconGreen : styles.icon}>
              <img src={step > 3 ? reviewIconGreen : reviewIcon} alt="Revisão" />
            </div>
          </div>
          {step === 1 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Endereço</div>
              <div className={styles.address}>
                <div>
                  <strong>Casa</strong>
                  <div>
                    <span>Rua João Gomes Filho Nº666</span>
                    <span>Vila Clementina - São Paulo/SP</span>
                    <span>CEP: 04980-089</span>
                  </div>
                  <img src={editIcon} alt="Editar" className={styles.editIcon} />
                </div>
                <div>
                  <strong>Serviço</strong>
                  <div>
                    <span>Rua João Gomes Filho Nº666</span>
                    <span>Vila Clementina - São Paulo/SP</span>
                    <span>CEP: 04980-089</span>
                  </div>
                  <img src={editIcon} alt="Editar" className={styles.editIcon} />
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleNext}>Próximo</button>
              </div>
            </div>
          )}
          {step === 2 && (
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
              <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleBack}>Voltar</button>
                <button className={styles.button} onClick={handleNext}>Próximo</button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Revisão</div>
              <div className={styles.review}>
                <div>
                  <strong>Endereço de Entrega:</strong>
                  <p>Casa: Rua João Gomes Filho Nº666, Vila Clementina - São Paulo/SP, CEP: 04980-089</p>
                  <p>Serviço: Rua João Gomes Filho Nº666, Vila Clementina - São Paulo/SP, CEP: 04980-089</p>
                </div>
                <div>
                  <strong>Método de Pagamento:</strong>
                  <p>Cartão de Crédito</p> {/* Assumindo que o usuário selecionou Cartão de Crédito */}
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleBack}>Voltar</button>
                <button className={styles.button} onClick={handleNext}>Finalizar Compra</button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.resumo}>
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
          {step === 2 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Forma de Pagamento</div>
              <div className={styles.confirmation}>
                <div className={styles.paymentMethod}>
                  <img src={pixIcon} alt="Pix" />
                  <span>Total: R$ 118,00</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default CheckoutLayout;
  