import backgroundPapel from '../../../../../../assets/images/imgs-perfil_vendedor/paper.png';

import styleConfiguracoes from './Configuracoes.module.css';

function Configuracoes(){
       return(
        <section className={styleConfiguracoes.containeree} style={{ backgroundImage: `url(${backgroundPapel})` }}>
            
        </section>
       )

}

export default Configuracoes;