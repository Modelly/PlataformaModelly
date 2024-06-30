import React, { useState, useEffect } from 'react';
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
import Popup from './PoppupCheckout.jsx';

const CheckoutLayout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [addressList, setAddressList] = useState([
    {
      id: 1,
      label: 'Casa',
      address: 'Rua João Gomes Filho Nº666, Vila Clementina - São Paulo/SP, CEP: 04980-089',
    },
  ]);
  const [newAddress, setNewAddress] = useState('');

  useEffect(() => {
    // Obter endereço atual da máquina (substitua por API real, se necessário)
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setAddressList([{
        id: 1,
        label: 'Local Atual',
        address: `Lat: ${latitude}, Long: ${longitude}`,
      }]);
    });
  }, []);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleFinishPurchase = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentStep(1);
    setSelectedPaymentMethod('');
  };

  const handleEditAddress = () => {
    setEditAddress(true);
  };

  const handleSaveAddress = () => {
    if (newAddress) {
      setAddressList([...addressList, { id: addressList.length + 1, label: 'Novo Endereço', address: newAddress }]);
      setNewAddress('');
    }
    setEditAddress(false);
  };

  const handleDeleteAddress = (id) => {
    setAddressList(addressList.filter(address => address.id !== id));
  };

  const handleAddNewAddress = () => {
    setEditAddress(true);
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
            <div className={styles.addressContainer}>
              {addressList.map((address) => (
                <div key={address.id} className={styles.address}>
                  <strong>{address.label}</strong>
                  <div>{address.address}</div>
                  <button className={styles.button} onClick={() => handleDeleteAddress(address.id)}>Excluir</button>
                </div>
              ))}
              {!editAddress ? (
                <>
                  <button className={styles.button} onClick={handleEditAddress}>Editar Endereço</button>
                  <button className={styles.button} onClick={handleAddNewAddress}>Adicionar Novo Endereço</button>
                </>
              ) : (
                <div>
                  <input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder="Digite o novo endereço"
                    className={styles.inputAddress}
                  />
                  <button className={styles.button} onClick={handleSaveAddress}>Salvar Endereço</button>
                </div>
              )}
              <div className={styles.navigationButtons}>
                <button className={styles.button} onClick={handleNext}>Próximo</button>
              </div>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Método de Pagamento</div>
            <div className={styles.payment}>
              <div
                className={styles.paymentMethod}
                onClick={() => handlePaymentMethodChange('pix')}
                style={{ backgroundColor: selectedPaymentMethod === 'pix' ? '#f0f0f0' : 'transparent' }}
              >
                <img src={pixIcon} alt="Pix" style={{ width: '40px', height: '40px' }} />
                <span>{selectedPaymentMethod === 'pix' && 'Selecionado'}</span>
              </div>
              <div
                className={styles.paymentMethod}
                onClick={() => handlePaymentMethodChange('credit')}
                style={{ backgroundColor: selectedPaymentMethod === 'credit' ? '#f0f0f0' : 'transparent' }}
              >
                <img src={creditCardIcon} alt="Cartão de Crédito" style={{ width: '40px', height: '40px' }} />
                <span>{selectedPaymentMethod === 'credit' && 'Selecionado'}</span>
              </div>
              <div
                className={styles.paymentMethod}
                onClick={() => handlePaymentMethodChange('boleto')}
                style={{ backgroundColor: selectedPaymentMethod === 'boleto' ? '#f0f0f0' : 'transparent' }}
              >
                <img src={boletoIcon} alt="Boleto" style={{ width: '40px', height: '40px' }} />
                <span>{selectedPaymentMethod === 'boleto' && 'Selecionado'}</span>
              </div>
            </div>
            {selectedPaymentMethod === 'credit' && (
              <div className={styles.installments}>
                <label htmlFor="installments">Parcelas:</label>
                <select id="installments">
                  <option value="1">1x sem juros</option>
                  <option value="2">2x sem juros</option>
                  <option value="3">3x sem juros</option>
                </select>
              </div>
            )}
            <div className={styles.navigationButtons}>
              <button className={styles.button} onClick={handleNext}>Próximo</button>
              <button className={styles.button} onClick={handlePrevious}>Voltar</button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Revisão</div>
            <div className={styles.review}>
              <div className={styles.reviewItem}>
                <strong>Endereço:</strong>
                <span>{addressList.find((addr) => addr.label === 'Casa')?.address}</span>
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
