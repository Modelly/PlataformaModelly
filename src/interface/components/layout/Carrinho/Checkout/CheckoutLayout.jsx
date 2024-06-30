import React, { useState } from 'react';
import styles from './Checkout.module.css';
import deliveryIcon from '../../../../../../src/assets/images/imgs-carrinho/caminhaoroxo.png';
import paymentIcon from '../../../../../../src/assets/images/imgs-carrinho/cartaoproxoiconpequeno.png';
import reviewIcon from '../../../../../../src/assets/images/imgs-carrinho/revisao-roxo.png';
import deliveryIconGreen from '../../../../../../src/assets/images/imgs-carrinho/caminhaoverde.png'; 
import paymentIconGreen from '../../../../../../src/assets/images/imgs-carrinho/cartaoverdeiconpequeno.png';
import pixIcon from '../../../../../../src/assets/images/imgs-carrinho/pix.png';
import creditCardIcon from '../../../../../../src/assets/images/imgs-carrinho/cartãoroxogrande.png';
import boletoIcon from '../../../../../assets/images/imgs-carrinho/boleto.png';
import product1Image from '../../../../../../src/assets/images/imgs-carrinho/foto-produto1.png';
import product2Image from '../../../../../../src/assets/images/imgs-carrinho/foto-produto2.png';
import editIcon from '../../../../../../src/assets/images/imgs-carrinho/lapis.png';
import Popup from './PoppupCheckout';

const CheckoutLayout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleFinishPurchase = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentStep(1); // Resetando o passo para o início após a compra
    setSelectedPaymentMethod(''); // Resetando o método de pagamento selecionado
  };

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.formulario}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <img src={currentStep > 1 ? deliveryIconGreen : deliveryIcon} alt="Entrega" />
          </div>
          <div className={currentStep > 1 ? styles.lineGreen : styles.line}></div>
          <div className={styles.icon}>
            <img src={currentStep > 2 ? paymentIconGreen : paymentIcon} alt="Pagamento" />
          </div>
          <div className={currentStep > 2 ? styles.lineGreen : styles.line}></div>
          <div className={styles.icon}>
            <img src={reviewIcon} alt="Revisão" />
          </div>
        </div>
        {currentStep === 1 && (
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
            <button className={styles.button} onClick={handleNext}>Próximo</button>
          </div>
        )}
        {currentStep === 2 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Método de Pagamento</div>
            <div className={styles.payment}>
              <div className={styles.paymentMethod} onClick={() => handlePaymentMethodChange('pix')}>
                <img src={pixIcon} alt="Pix" style={{ width: '40px', height: '40px' }} />
                <span>Aprovação Imediata</span>
              </div>
              <div className={styles.paymentMethod} onClick={() => handlePaymentMethodChange('credit')}>
                <img src={creditCardIcon} alt="Cartão de Crédito" style={{ width: '40px', height: '40px' }} />
                <span>Crédito</span>
              </div>
              <div className={styles.paymentMethod} onClick={() => handlePaymentMethodChange('boleto')}>
                <img src={boletoIcon} alt="Boleto" style={{ width: '40px', height: '40px' }} />
                <span>Aprovação em 3 dias</span>
              </div>
            </div>
            {selectedPaymentMethod === 'credit' && (
              <div className={styles.installments}>
                <label htmlFor="installments">Parcelas:</label>
                <select id="installments">
                  <option value="1">1x sem juros</option>
                  <option value="2">2x sem juros</option>
                  <option value="3">3x sem juros</option>
                  {/* Adicione mais opções conforme necessário */}
                </select>
              </div>
            )}
            <button className={styles.button} onClick={handleNext}>Próximo</button>
            <button className={styles.button} onClick={handlePrevious}>Voltar</button>
          </div>
        )}
        {currentStep === 3 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Revisão</div>
            <div className={styles.review}>
              <div className={styles.reviewItem}>
                <strong>Endereço:</strong>
                <span>Rua João Gomes Filho Nº666, Vila Clementina - São Paulo/SP, CEP: 04980-089</span>
              </div>
              <div className={styles.reviewItem}>
                <strong>Método de Pagamento:</strong>
                <span>{selectedPaymentMethod === 'pix' ? 'Pix' : selectedPaymentMethod === 'credit' ? 'Cartão de Crédito' : 'Boleto'}</span>
              </div>
              {selectedPaymentMethod === 'credit' && (
                <div className={styles.reviewItem}>
                  <strong>Parcelas:</strong>
                  <span>{document.getElementById('installments').value}x sem juros</span>
                </div>
              )}
            </div>
            <button className={styles.button} onClick={handleFinishPurchase}>Finalizar Compra</button>
            <button className={styles.button} onClick={handlePrevious}>Voltar</button>
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
      </div>
      {showPopup && <Popup message="Compra efetuada com sucesso!" onClose={closePopup} />}
    </div>
  );
};

export default CheckoutLayout;

