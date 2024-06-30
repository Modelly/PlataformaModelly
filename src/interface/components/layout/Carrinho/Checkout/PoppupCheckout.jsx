import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2>Compra Finalizada!</h2>
        <p>Obrigado por sua compra. Você receberá um e-mail de confirmação em breve.</p>
        <button className={styles.button} onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
