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
  const [newAddress, setNewAddress] = useState({
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: ''
  });

  useEffect(() => {
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
    if (Object.values(newAddress).some(field => field)) {
      const fullAddress = `${newAddress.rua} Nº${newAddress.numero}, ${newAddress.bairro} - ${newAddress.cidade}/${newAddress.estado}, CEP: ${newAddress.cep}`;
      setAddressList([...addressList, { id: addressList.length + 1, label: 'Novo Endereço', address: fullAddress }]);
      setNewAddress({
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: ''
      });
    }
    setEditAddress(false);
  };

  const handleDeleteAddress = (id) => {
    setAddressList(addressList.filter(address => address.id !== id));
    if (addressList.length === 1) {
      setEditAddress(false);
    }
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
                <div className={styles.buttonContainer}>
                  <button className={styles.button} onClick={handleEditAddress}>Editar Endereço</button>
                  <button className={styles.button} onClick={handleAddNewAddress}>Adicionar Novo Endereço</button>
                  <button className={styles.button} onClick={handleNext}>Próximo</button>
                </div>
              ) : (
                <div>
                  <input
                    type="text"
                    value={newAddress.rua}
                    onChange={(e) => setNewAddress({ ...newAddress, rua: e.target.value })}
                    placeholder="Rua"
                    className={styles.inputAddress}
                  />
                  <input
                    type="text"
                    value={newAddress.numero}
                    onChange={(e) => setNewAddress({ ...newAddress, numero: e.target.value })}
                    placeholder="Número"
                    className={styles.inputAddress}
                  />
                  <input
                    type="text"
                    value={newAddress.bairro}
                    onChange={(e) => setNewAddress({ ...newAddress, bairro: e.target.value })}
                    placeholder="Bairro"
                    className={styles.inputAddress}
                  />
                  <input
                    type="text"
                    value={newAddress.cidade}
                    onChange={(e) => setNewAddress({ ...newAddress, cidade: e.target.value })}
                    placeholder="Cidade"
                    className={styles.inputAddress}
                  />
                  <input
                    type="text"
                    value={newAddress.estado}
                    onChange={(e) => setNewAddress({ ...newAddress, estado: e.target.value })}
                    placeholder="Estado"
                    className={styles.inputAddress}
                  />
                  <input
                    type="text"
                    value={newAddress.cep}
                    onChange={(e) => setNewAddress({ ...newAddress, cep: e.target.value })}
                    placeholder="CEP"
                    className={styles.inputAddress}
                  />
                  <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleSaveAddress}>Salvar Endereço</button>
                    <button className={styles.button} onClick={handleNext}>Próximo</button>
                  </div>
                </div>
              )}
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
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handlePrevious}>Voltar</button>
              <button className={styles.button} onClick={handleNext}>Próximo</button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Revisão do Pedido</div>
            <div className={styles.reviewContainer}>
              <div className={styles.product}>
                <img src={product1Image} alt="Produto 1" />
                <div className={styles.productDetails}>
                  <h3 className={styles.productTitle}>Título do Produto 1</h3>
                  <p>Quantidade: 1</p>
                  <p>Preço: R$ 100,00</p>
                </div>
              </div>
              <div className={styles.product}>
                <img src={product2Image} alt="Produto 2" />
                <div className={styles.productDetails}>
                  <h3 className={styles.productTitle}>Título do Produto 2</h3>
                  <p>Quantidade: 2</p>
                  <p>Preço: R$ 200,00</p>
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handlePrevious}>Voltar</button>
              <button className={styles.button} onClick={handleFinishPurchase}>Finalizar Compra</button>
            </div>
          </div>
        )}
      </div>
      {showPopup && <Popup onClose={closePopup} />}
    </div>
  );
};

export default CheckoutLayout;
