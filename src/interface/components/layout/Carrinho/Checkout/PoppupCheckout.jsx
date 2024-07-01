import { useEffect } from 'react';
import PropTypes from 'prop-types';

import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Popup.module.css';

const Popup = ({ onClose }) => {

  useEffect(() => {
    AOS.init({
        duration: 800
    });
  }, [])

  return (
    <div className={styles.popup} data-aos="fade">
      <div className={styles.popupContent}>
        <h2>Compra Finalizada!</h2>
        <p>Obrigado por sua compra. <br/>Você receberá um e-mail de confirmação em breve.</p>
        <button className={styles.button} onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  onClose: PropTypes.func
}

export default Popup;
