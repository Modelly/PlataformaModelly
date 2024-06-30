import React from 'react';
import styles from './Popup.module.css';

const PopupCheckout = ({ onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <h2>Compra Finalizada!</h2>
        <p>Obrigado pela sua compra.</p>
        <button onClick={onClose} className={styles.closeButton}>Fechar</button>
      </div>
    </div>
  );
};

export default PopupCheckout;
