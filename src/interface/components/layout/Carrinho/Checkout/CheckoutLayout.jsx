import { useState, useEffect } from 'react';

import Popup from './PoppupCheckout';

import AOS from 'aos';
import 'aos/dist/aos.css';

import boletoIcon from '../../../../../assets/images/imgs-carrinho/boleto.png';
import pixIcon from '../../../../../../src/assets/images/imgs-carrinho/pix.png';
import reviewIcon from '../../../../../../src/assets/images/imgs-carrinho/revisao-roxo.png';
import deliveryIcon from '../../../../../../src/assets/images/imgs-carrinho/caminhaoroxo.png';
import product1Image from '../../../../../../src/assets/images/imgs-carrinho/foto-produto1.png';
import product2Image from '../../../../../../src/assets/images/imgs-carrinho/foto-produto2.png';
import deliveryIconGreen from '../../../../../../src/assets/images/imgs-carrinho/caminhaoverde.png';
import creditCardIcon from '../../../../../../src/assets/images/imgs-carrinho/cartãoroxogrande.png';
import paymentIcon from '../../../../../../src/assets/images/imgs-carrinho/cartaoproxoiconpequeno.png';
import paymentIconGreen from '../../../../../../src/assets/images/imgs-carrinho/cartaoverdeiconpequeno.png';

import styles from './Checkout.module.css';

const CheckoutLayout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [addressList, setAddressList] = useState([
    {
      id: 1,
      label: 'Casa',
      address: 'Rua João Gomes Filho Nº666<br />Vila Clementina - São Paulo/SP<br />CEP: 04980-089',
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
    AOS.init({
        duration: 1000
    });
  }, [])

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
      const fullAddress = `${newAddress.rua} Nº${newAddress.numero}<br />${newAddress.bairro} - ${newAddress.cidade}/${newAddress.estado}<br />CEP: ${newAddress.cep}`;
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

  const totalAmount = 400; 

  return (
    <div className={styles.checkoutContainer} data-aos="fade-up">
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
                  <div dangerouslySetInnerHTML={{ __html: address.address }} />
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
                    <button className={styles.button} onClick={() => setEditAddress(false)}>Cancelar</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className={styles.section} data-aos="fade">
            <div className={styles.sectionTitle}>Pagamento</div>
            <div className={styles.payment}>
              <div className={styles.paymentMethod} onClick={() => handlePaymentMethodChange('pix')}>
                <img src={pixIcon} alt="PIX" />
                <span>PIX</span>
              </div>
              <div className={styles.paymentMethod} onClick={() => handlePaymentMethodChange('cartao')}>
                <img src={creditCardIcon} alt="Cartão de Crédito" />
                <span>Cartão de Crédito</span>
              </div>
              <div className={styles.paymentMethod} onClick={() => handlePaymentMethodChange('boleto')}>
                <img src={boletoIcon} alt="Boleto" />
                <span>Boleto</span>
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
            <div className={styles.sectionTitle}>Revisão</div>
            <div className={styles.reviewContainer}>
              <div>
                <strong>Endereço de Entrega:</strong>
                <p dangerouslySetInnerHTML={{ __html: addressList[0].address }} />
              </div>
              <div>
                <strong>Produtos:</strong>
                <div className={styles.product} data-aos="fade-left">
                  <img src={product1Image} alt="Produto 1" />
                  <div className={styles.productDetails}>
                    <div className={styles.productTitle}>Produto 1</div>
                    <div>Descrição do produto 1</div>
                    <div>R$ 200,00</div>
                  </div>
                </div>
                <div className={styles.product} data-aos="fade-left" data-aos-delay="100">
                  <img src={product2Image} alt="Produto 2" />
                  <div className={styles.productDetails}>
                    <div className={styles.productTitle}>Produto 2</div>
                    <div>Descrição do produto 2</div>
                    <div>R$ 200,00</div>
                  </div>
                </div>
              </div>
              <div>
                <strong>Método de Pagamento:</strong>
                <p>{selectedPaymentMethod}</p>
              </div>
              <div className={styles.totalPrice}>Total: R$ {totalAmount},00</div>
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
