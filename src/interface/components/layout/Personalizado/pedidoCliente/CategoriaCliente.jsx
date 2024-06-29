import style from './CategoriaCliente.module.css'
import womanImg2 from '../../../../../assets/images/pedido-personalizado/womanImg2.png'
import { Link } from 'react-router-dom'
import NavbarConsumidor from '../../Navbar/consumidor/NavbarConsumidor'


export default function CategoriaCliente() {


  return (
    <>
    <NavbarConsumidor />
      <div className={style.containerInicial}>
      <div className={style.boxImg}>
        <img src={womanImg2} alt="" />
      </div>
      <div className={style.boxDescricao}>
        <div>
          <h1 className={style.titulo}>Em busca de um artista para criar uma peça personalizada que capture sua essência? </h1>
          <p className={style.descricao}>Encontre os melhores profissionais na Modelly. Feito a mão para você!</p>
        </div>
        <Link to={'/pedido-personalizado/Categorias'}>
          <a className={style.btnComecar}>Começar</a>
        </Link>
      </div>
    </div>
    </>
    
  )
}
