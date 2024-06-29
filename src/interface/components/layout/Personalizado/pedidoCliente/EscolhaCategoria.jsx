import style from './EscolhaCategoria.module.css';
import womanImg2 from '../../../../../assets/images/pedido-personalizado/womanImg2.png';
import { Link } from 'react-router-dom';
import NavbarConsumidor from '../../Navbar/consumidor/NavbarConsumidor'

export default function EscolhaCategoria() {
  return (
    <>
      <NavbarConsumidor/>
      <div className={style.containerInicial}>
      <div className={style.boxImg}>
        <img src={womanImg2} alt="" />
      </div>
      <div className={style.boxDescricao}>
        <h1 className={style.titulo}>Escolha a categoria que melhor te atende</h1>
        <div className={style.categorias}>
          <div className={style.categoriaColuna}>
          <label>
              <input type="checkbox" name="categoria" value="Joaleria" />
              Joaleria
            </label>
            <label>
              <input type="checkbox" name="categoria" value="casa-lar" />
              Casa e Lar
            </label>
            <label>
              <input type="checkbox" name="categoria" value="arte-colecionaveis" />
              Arte e Colecionáveis
            </label>
            <label>
              <input type="checkbox" name="categoria" value="roupa" />
              Roupa
            </label>
            <label>
              <input type="checkbox" name="categoria" value="pets" />
              Pets
            </label>
            <label>
              <input type="checkbox" name="categoria" value="casamento" />
              Casamento
            </label>
            <label>
              <input type="checkbox" name="categoria" value="eletronicos" />
              Eletrônicos
            </label>
          </div>
          <div className={style.categoriaColuna}>
            <label>
              <input type="checkbox" name="acessorios" value="livros-filmes-musica" />
              Acessórios
            </label>
            <label>
              <input type="checkbox" name="categoria" value="livros-filmes-musica" />
              Livros, Filmes e Música
            </label>
            <label>
              <input type="checkbox" name="categoria" value="brinquedos-jogos" />
              Brinquedos e Jogos
            </label>
            <label>
              <input type="checkbox" name="categoria" value="calcados" />
              Calçados
            </label>
            <label> 
              <input type="checkbox" name="categoria" value="artes-papel-festas" />
              Artes de Papel e Festas
            </label>
            <label>
              <input type="checkbox" name="categoria" value="presentes" />
              Presentes
            </label>
            <label>
              <input type="checkbox" name="categoria" value="outros" />
              Outros
            </label>
          </div>
        </div>
        <Link to={'/pedido-personalizado/formulario'}>
        <a className={style.btnComecar}>Continuar</a>
        </Link>
      </div>
    </div>
    </>
    
  );
}
