import React from 'react';
import styles from './arte.module.css';
import boxImg from '../../../../assets/images/imgs-personalizado/box.png';

function Arte() {
  return (
    <div className={styles.arte}>
      <div className={styles.oR}>
        <h2 className={styles.title}>Título da Arte</h2>
        <input className={styles.proposalButton} type="submit" value="Fazer Proposta" />
      </div>
      <div className={styles.tR}>
        <p className={styles.published}>Publicado: há 1 hora</p>
        <p className={styles.proposals}>Propostas: 2</p>
      </div>
    
    
      <p className={styles.description}>
        O cliente deseja uma obra de arte que capture a essência de uma jornada pessoal e significativa. A inspiração para esta peça vem de uma combinação de elementos naturais e urbanos, representando o equilíbrio entre a serenidade da natureza e a energia da cidade.
      </p>
      <div className={styles.fR}>
        <div className={styles.tagButtons}>
          <input className={styles.tagButton} type="submit" value="Artesanato" />
          <input className={styles.tagButton} type="submit" value="Amigurumi" />
          <input className={styles.tagButton} type="submit" value="Crochê" />
        </div>
        <div className={styles.report}>
          <img src={boxImg} alt="Report Icon" />
          <p>Marcar como inapropriado</p>
        </div>
      </div>
    </div>
  );
}

export default Arte;
