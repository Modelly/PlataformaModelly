import React from 'react';
import styles from './PlanosConsumidor.module.css';
import standPurple from '../../../../assets/images/imgs-planos/stand-purple.png';
import standBlue from '../../../../assets/images/imgs-planos/stand-blue.png';
import standPink from '../../../../assets/images/imgs-planos/stand-pink.png';

import Monaliza from '../../../../assets/images/imgs-planos/Dailyart.png';
import Lapis from '../../../../assets/images/imgs-planos/Drawing.png';
import Quadros from '../../../../assets/images/imgs-planos/Gallery.png';

const PlanosConsumidorLayout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Consumidores de Arte </h1>
      <div className={styles.standsContainer}>
        <div className={styles.stand}>
          <h2 className={styles.standTitle}>Plano Admirador</h2>
          <img src={standPurple} alt="Stand Purple" className={styles.standImage} />
          <div className={styles.content1}>
            <img src={Monaliza} alt="Monaliza Icon" className={styles.icon} />
            <button className={`${styles.button} ${styles.buttonPurple}`}>Atualizar Plano</button>
            <p className={styles.description}>
              <strong>Acesso a Eventos:</strong> Acesso prioritário a eventos online gratuitos
              <strong>Personalização de Experiência:</strong> Recomendações personalizadas de produtos
            </p>
          </div>
        </div>
        <div className={styles.stand}>
          <h2 className={styles.standTitle}>Plano Entusiasta</h2>
          <img src={standBlue} alt="Stand Blue" className={styles.standImage} />
          <div className={styles.content2}>
            <img src={Lapis} alt="Lapis Icon" className={styles.icon} />
            <button className={`${styles.button} ${styles.buttonBlue}`}>Atualizar Plano</button>
            <p className={styles.description}>
              <strong>Acesso a Eventos:</strong> Acesso prioritário e descontos em eventos pagos
              <strong>Personalização de Experiência:</strong> Recomendações avançadas e listas de desejos
            </p>
          </div>
        </div>
        <div className={styles.stand}>
          <h2 className={styles.standTitle}>Plano Colecionador</h2>
          <img src={standPink} alt="Stand Pink" className={styles.standImage} />
          <div className={styles.content3}>
            <img src={Quadros} alt="Quadros Icon" className={styles.icon} />
            <button className={`${styles.button} ${styles.buttonPink}`}>Atualizar Plano</button>
            <p className={styles.description}>
              <strong>Acesso a Eventos:</strong> Acesso VIP a todos os eventos, incluindo eventos exclusivos
              <strong>Personalização de Experiência:</strong> Recomendações avançadas, listas de desejos e consultoria de curadoria personalizada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanosConsumidorLayout;
