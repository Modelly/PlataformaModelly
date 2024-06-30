import styles from './filtros.module.css';

function Filtros() {
  return (
    <div className={styles.filtro}>
      <label>Data de publicação</label>
      <select>
        <option value="">Em qualquer momento</option>
      </select>

      <label>Modalidade de trabalho</label>
      <div className={styles.botoes}>
        <button>Todos</button>
        <button>Preço Fixo</button>
        <button>Negociação</button>
      </div>

      <label>Localização do cliente</label>
      <div className={styles.localizacao}>
        <select>
          <option value="">Todas as regiões do Brasil</option>
        </select>
        <select>
          <option value="">Estados</option>
        </select>
      </div>

      <button className={styles.salvar}>Salvar Busca</button>
    </div>
  );
}

export default Filtros;
