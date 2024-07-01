import React from 'react';
import stylesPlanoCons from './PlanosConsumidor.module.css';  
import standPurple from '../../../../assets/images/imgs-planos/stand-purple.png';
import standBlue from '../../../../assets/images/imgs-planos/stand-blue.png';
import standPink from '../../../../assets/images/imgs-planos/stand-pink.png';

import Monaliza from '../../../../assets/images/imgs-planos/Dailyart.png';
import Lapis from '../../../../assets/images/imgs-planos/Drawing.png';
import Quadros from '../../../../assets/images/imgs-planos/Gallery.png';

const PlanosConsumidorLayout = () => {
  return (
    <div className={stylesPlanoCons.containera}>
      <h1 className={stylesPlanoCons.title}>Consumidores de Arte </h1>
      <div className={stylesPlanoCons.standsContainer}>
        <div className={stylesPlanoCons.stand}>
          <h2 className={stylesPlanoCons.standTitle}>Plano Admirador</h2>
          <img src={standPurple} alt="Stand Purple" className={stylesPlanoCons.standImage} />
          <div className={stylesPlanoCons.content1}>
            <img src={Monaliza} alt="Monaliza Icon" className={stylesPlanoCons.icon} />
            <button className={`${stylesPlanoCons.button} ${stylesPlanoCons.buttonPurple}`}>Atualizar Plano</button>
            <p className={stylesPlanoCons.description}>
              <strong>Acesso a Eventos:</strong> Acesso prioritário a eventos online gratuitos
              <strong>Personalização de Experiência:</strong> Recomendações personalizadas de produtos
            </p>
          </div>
        </div>
        <div className={stylesPlanoCons.stand}>
          <h2 className={stylesPlanoCons.standTitle}>Plano Entusiasta</h2>
          <img src={standBlue} alt="Stand Blue" className={stylesPlanoCons.standImage} />
          <div className={stylesPlanoCons.content2}>
            <img src={Lapis} alt="Lapis Icon" className={stylesPlanoCons.icon} />
            <button className={`${stylesPlanoCons.button} ${stylesPlanoCons.buttonBlue}`}>Atualizar Plano</button>
            <p className={stylesPlanoCons.description}>
              <strong>Acesso a Eventos:</strong> Acesso prioritário e descontos em eventos pagos
              <strong>Personalização de Experiência:</strong> Recomendações avançadas e listas de desejos
            </p>
          </div>
        </div>
        <div className={stylesPlanoCons.stand}>
          <h2 className={stylesPlanoCons.standTitle}>Plano Colecionador</h2>
          <img src={standPink} alt="Stand Pink" className={stylesPlanoCons.standImage} />
          <div className={stylesPlanoCons.content3}>
            <img src={Quadros} alt="Quadros Icon" className={stylesPlanoCons.icon} />
            <button className={`${stylesPlanoCons.button} ${stylesPlanoCons.buttonPink}`}>Atualizar Plano</button>
            <p className={stylesPlanoCons.description}>
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
