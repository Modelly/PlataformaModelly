import React, { useState } from 'react';
import styles from './arte.module.css';
import boxImg from '../../../../assets/images/imgs-personalizado/box.png';

function Arte() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.arteContainer}>
      <div className={styles.arte}>
        <div className={styles.oR}>
          <h2 className={styles.titlear}>Título da Arte</h2>
          <input className={styles.proposalButton} type="submit" value="Fazer Proposta" />
        </div>
        <div className={styles.tR}>
          <p className={styles.published}>Publicado: há 1 hora</p>
          <p className={styles.proposals}>Propostas: 2</p>
        </div>
        <p className={styles.description}>
          O cliente deseja uma obra de arte que capture a essência de uma jornada <br/>pessoal e significativa. A inspiração para esta peça vem de uma combinação<br/> de elementos naturais e urbanos, representando o equilíbrio entre a <br/>serenidade da natureza e a energia da cidade.
        </p>
        <div className={styles.fR}>
          <div className={styles.tagButtons}>
            <input className={styles.tagButton} type="submit" value="Artesanato" />
            <input className={styles.tagButton} type="submit" value="Amigurumi" />
            <input className={styles.tagButton} type="submit" value="Crochê" />
          </div>
          <div className={styles.report} onClick={handleOpenPopup}>
            <img src={boxImg} alt="Report Icon" />
            <p>Marcar como inapropriado</p>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <button className={styles.closeButton} onClick={handleClosePopup}>×</button>
            <h2 className={styles.titlear}>Marcar a proposta como inapropriada</h2>
            <form>
              <label>
                <input type="radio" name="reason" value="inappropriate" />
                O conteúdo é inapropriado, tem pouca informação ou está mal definido
              </label>
              <label>
                <input type="radio" name="reason" value="services" />
                Está oferecendo seus serviços
              </label>
              <label>
                <input type="radio" name="reason" value="category" />
                Categoria incorreta
              </label>
              <label>
                <input type="radio" name="reason" value="contact" />
                Possui informações de contato ou de pagamento externo
              </label>
              <label>
                <input type="radio" name="reason" value="lowBudget" />
                Pede trabalho gratuito ou baixo orçamento
              </label>
              <label>
                <input type="radio" name="reason" value="other" />
                Outra razão
              </label>
              <textarea placeholder="Mais informações"></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Arte;
