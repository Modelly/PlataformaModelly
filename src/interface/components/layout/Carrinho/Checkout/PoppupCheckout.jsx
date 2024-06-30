import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ message, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <h2>{message}</h2>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
