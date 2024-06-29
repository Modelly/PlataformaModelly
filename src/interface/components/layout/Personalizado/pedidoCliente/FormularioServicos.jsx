import { Link } from 'react-router-dom';
import Linhas from '../../../../../assets/images/pedido-personalizado/LinhasImg.png' // ajuste o caminho para a imagem
import style from './FormularioServicos.module.css';
import NavbarConsumidor from '../../Navbar/consumidor/NavbarConsumidor'

export default function FormularioServicos() {
  return (
    <>
      <NavbarConsumidor/>
      <div className={style.containerInicial}>
        <div className={style.boxImg}>
          <img src={Linhas} alt="" />
        </div>
        <div className={style.boxDescricao}>
          <div className={style.textos}>
            <h1 className={style.titulo}>Explique como você quer sua peça: </h1>
            <p className={style.descricao}>Encontre os melhores profissionais na Modelly. Feito a mão para você!</p>
          </div>
          <div className={style.formContainer}>
            <div className={style.formGroup}>
              <label htmlFor="title">Título do projeto</label>
              <input type="text" id="title" name="title" placeholder="Título do projeto" className={style.input} />
            </div>
            <div className={style.formGroup}>
              <label htmlFor="description">Descreva o projeto com as suas palavras</label>
              <textarea id="description" name="description" placeholder="Descreva o projeto" className={style.textarea} />
            </div>
            <div className={style.formGroup}>
              <label htmlFor="files">Anexar arquivos</label>
              <input type="file" id="files" name="files" multiple className={style.inputFile} />
            </div>
            <div className={style.formGroup}>
              <label htmlFor="context">Contexto geral do projeto</label>
              <textarea id="context" name="context" placeholder="Contexto do projeto" className={style.textarea} />
            </div>
          </div>
          <Link to={'/pedido-personalizado/publicar'}>
            <a className={style.btnComecar}>Publicar</a>
          </Link>
        </div>
      </div>
    </>
  );
}
