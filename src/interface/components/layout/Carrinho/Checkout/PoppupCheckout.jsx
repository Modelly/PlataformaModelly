import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ closePopup }) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <h2>Compra Finalizada</h2>
        <p>Obrigado por sua compra!</p>
        <button className={styles.button} onClick={closePopup}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
