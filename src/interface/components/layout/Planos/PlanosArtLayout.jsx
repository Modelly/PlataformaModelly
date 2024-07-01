import React from 'react';
import styles from './PlanosArt.module.css';
import standPurple from '../../../../assets/images/imgs-planos/stand-purple.png';
import standBlue from '../../../../assets/images/imgs-planos/stand-blue.png';
import standPink from '../../../../assets/images/imgs-planos/stand-pink.png';
import standYellow from '../../../../assets/images/imgs-planos/stand-yellow.png';

import GlossPaper from '../../../../assets/images/imgs-planos/GlossPaper.png';
import Paint from '../../../../assets/images/imgs-planos/Paint.png';
import Knitting from '../../../../assets/images/imgs-planos/Knitting.png';
import Sculpture from '../../../../assets/images/imgs-planos/Sculpture.png';

const PlanosArt = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Para Artistas</h1>
      <div className={styles.standsContainer}>
        <div className={styles.stand}>
          <h2 className={styles.standTitle}>Plano Papel</h2>
          <img src={standPurple} alt="Stand Purple" className={styles.standImage} />
          <div className={styles.content1}>
            <img src={GlossPaper} alt="Gloss Paper Icon" className={styles.icon} />
            <button className={`${styles.button} ${styles.buttonPurple}`}>Seu Plano Atual</button>
            <p className={styles.description}>
              Feira de Arte: <strong>15 Espaços no Stand</strong>
              Dashboard:
              <strong>Relatórios mensais de vendas</strong>
              <strong>Artigos e dicas básicas de empreendedorismo</strong>
              <strong>Templates básicos de marketing</strong>
              <strong>Notificações de eventos relevantes</strong>
              <strong>Suporte via e-mail</strong>
              <strong>Portfólio: Montagem básica</strong>
            </p>
          </div>
        </div>
        <div className={styles.stand}>
          <h2 className={styles.standTitle}>Plano Pincel</h2>
          <img src={standBlue} alt="Stand Blue" className={styles.standImage} />
          <div className={styles.content2}>
            <img src={Paint} alt="Paint Icon" className={styles.icon} />
            <button className={`${styles.button} ${styles.buttonBlue}`}>Atualizar Plano</button>
            <p className={styles.description}>
              Feira de Arte: <strong>50 Espaços no Stand</strong>
              Dashboard:
              <strong>Relatórios semanais de vendas</strong>
              <strong>Rastreamento básico de estoque</strong>
              <strong>Acesso a workshops gravados</strong>
              <strong>Templates avançados e sugestões de campanhas</strong>
              <strong>Análise básica de público-alvo</strong>
              <strong>Acesso a calendário personalizado de eventos</strong>
              <strong>Suporte via e-mail e chat</strong>
              <strong>Portfólio: Opções básicas de personalização</strong>
            </p>
          </div>
        </div>
        <div className={styles.stand}>
          <h2 className={styles.standTitle}>Plano Bordado</h2>
          <img src={standPink} alt="Stand Pink" className={styles.standImage} />
          <div className={styles.content3}>
            <img src={Knitting} alt="Knitting Icon" className={styles.icon} />
            <button className={`${styles.button} ${styles.buttonPink}`}>Atualizar Plano</button>
            <p className={styles.description}>
              Feira de Arte: <strong>100 Espaços no Stand</strong>
              Dashboard:
              <strong>Relatórios diários de vendas</strong>
              <strong>Rastreamento básico de estoque</strong>
              <strong>Templates avançados, sugestões de campanhas e análise</strong>
              <strong>Análise avançada de público-alvo</strong>
              <strong>Suporte via e-mail, chat e fórum exclusivo</strong>
              <strong>Portfólio: Opções avançadas de personalização</strong>
            </p>
          </div>
        </div>
        <div className={styles.stand}>
          <h2 className={styles.standTitle}>Plano Escultura</h2>
          <img src={standYellow} alt="Stand Yellow" className={styles.standImage} />
          <div className={styles.content4}>
            <img src={Sculpture} alt="Sculpture Icon" className={styles.icon} />
            <button className={`${styles.button} ${styles.buttonYellow}`}>Atualizar Plano</button>
            <p className={styles.description}>
              Feira de Arte: <strong>200 Espaços no Stand</strong>
              Dashboard:
              <strong>Relatórios em tempo real</strong>
              <strong>Rastreamento avançado de estoque e alertas automáticas</strong>
              <strong>Ferramentas de automação de marketing e análise detalhada</strong>
              <strong>Análise aprofundada e segmentação detalhada do público-alvo</strong>
              <strong>Acesso completo ao calendário, lembretes e integração com outras ferramentas</strong>
              <strong>Suporte prioritário via e-mail, chat, fórum exclusivo e consultoria personalizada</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanosArt;
