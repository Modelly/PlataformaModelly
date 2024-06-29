import React, { useState } from 'react';
import styles from "./Personalizado.module.css";
import alertImg from "../../../../assets/images/imgs-personalizado/alert.png";
import closeImg from "../../../../assets/images/imgs-personalizado/close.png";
import searchImg from "../../../../assets/images/imgs-personalizado/lupa.png";
import Arte from "./arte.module";
import Filtros from "./filtro";

function PersonalizadoLayout() {
  const [alertVisible, setAlertVisible] = useState(true);

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <main className={styles.mainper}>
      {alertVisible && (
        <div id="alerta" className={styles.alerta}>
          <img className={styles.alertaImg} src={alertImg} alt="Alerta" />
          <div id="texto" className={styles.texto}>
            <h3 className={styles.title3}>Não perca nada!</h3>
            <p className={styles.prgf}>
              Habilite as notificações e receba instantaneamente pedidos sobre sua
              categoria.
            </p>
            <button className={styles.ativarButton}>Ativar</button>
          </div>
          <img className={styles.close} src={closeImg} alt="Fechar" onClick={closeAlert} />
        </div>
      )}

      <h2 className={styles.titleper}>Encontre Trabalho</h2>
      <section className={styles.section}>
        <Filtros />
        <div id="pqs" className={styles.pqs}>
          <div id="pesquisar" className={styles.pesquisar}>
            <input className={styles.poppinsMedium} type="text" placeholder="Buscar" />
            <img src={searchImg} alt="lupa" />
          </div>
          <div className={styles.pBtns}>
            <input className={styles.rs} type="submit" value="Artesanato" />
            <input className={styles.a} type="submit" value="Amigurumi" />
            <input className={styles.vd} type="submit" value="Crochê" />
          </div>

          <div className={styles.artes}>
            <div className={styles.arte}>
              <Arte />
            </div>
            <div className={styles.arte}>
              <Arte />
            </div>
            <div className={styles.arte}>
              <Arte />
            </div>
            <div className={styles.arte}>
              <Arte />
            </div>
            <div className={styles.arte}>
              <Arte />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PersonalizadoLayout;
