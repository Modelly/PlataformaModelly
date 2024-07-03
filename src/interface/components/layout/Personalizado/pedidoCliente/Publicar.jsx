import style from "./Publicar.module.css"
import { Link } from "react-router-dom"
import NavbarConsumidor from '../../Navbar/consumidor/NavbarConsumidor'

export default function Publicar(){
    return(
        <>
            <NavbarConsumidor/>
            <section className={style.containerPublicar}>
                <div className={style.boxPublicar}>
                    <h1 className={style.tituloArte}>Título da Arte</h1>
                    <p className={style.descricaoArte}>O cliente deseja uma obra de arte que capture a essência de uma jornada pessoal e significativa. A inspiração para esta peça vem de uma combinação de elementos naturais e urbanos, representando o equilíbrio entre a serenidade da natureza e a energia da cidade.</p>

                    <div className={style.boxEnvio}>
                        <a className={style.editarArte}>Editar</a>
                        <Link to="/consumidor" className={style.publicarArte}>Publicar</Link>
                    </div>
                </div>
            </section>
        </>
        
    )

} 