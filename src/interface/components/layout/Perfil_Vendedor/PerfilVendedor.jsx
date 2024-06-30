import { useState } from 'react';
import stylePerfilVendedor from './perfil_vendedor.module.css';
import iconPedidos from '../../../../assets/images/imgs-perfil_vendedor/Pedidos.png';
import iconContas from '../../../../assets/images/imgs-perfil_vendedor/Contas.png';
import iconProduto from '../../../../assets/images/imgs-perfil_vendedor/Produto.png';
import iconAtendimento from '../../../../assets/images/imgs-perfil_vendedor/Atendimento.png';
import iconDashboard from '../../../../assets/images/imgs-perfil_vendedor/Dashboard.png';
import iconLoja from '../../../../assets/images/imgs-perfil_vendedor/Loja.png';
import iconFreelancer from '../../../../assets/images/imgs-perfil_vendedor/Freelancer.png';

function PerfilVendedor() {
    // Estado para controlar a exibição dos sub-tópicos de Produto e Atendimento
    const [mostrarSubtopicosProduto, setMostrarSubtopicosProduto] = useState(false);
    const [mostrarSubtopicosAtendimento, setMostrarSubtopicosAtendimento] = useState(false);
    const [mostrarSubtopicosLoja, setMostrarSubtopicosLoja] = useState(false);

    return (
        <section className={stylePerfilVendedor.perfilVendedorContainer}>
            <nav className={stylePerfilVendedor.navPerfilVendedor}>
                <button className={stylePerfilVendedor.botaoPerfilVendedor}>Mudar para conta pessoal</button>
                <div className={stylePerfilVendedor.topico}>
                    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconPedidos})` }}></div>
                    <li className={stylePerfilVendedor.pedidos}><a href='#'>Pedidos</a></li>
                </div>
                <div className={stylePerfilVendedor.topico}>
                    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconFreelancer})` }}></div>
                    <li className={stylePerfilVendedor.freelancer}><a href='#'>Freelancer</a></li>
                </div>
                <div className={stylePerfilVendedor.topico}>
                    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconContas})` }}></div>
                    <li className={stylePerfilVendedor.contas}><a href='#'>Contas Bancárias</a></li>
                </div>
                <div className={stylePerfilVendedor.topico} onClick={() => setMostrarSubtopicosProduto(!mostrarSubtopicosProduto)}>
    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconProduto})` }}></div>
    <div>
        <li className={stylePerfilVendedor.produto}><a href='#'>Produto</a></li>
        {mostrarSubtopicosProduto && (
            <div className={stylePerfilVendedor.subtopicosProduto}>
                <li className={stylePerfilVendedor.subtopico} ><a href='#'>Meus Produtos</a></li>
                <li className={stylePerfilVendedor.subtopico}><a href='/artesao/Cadastro_Produto'>+ Adicionar Produto</a></li>
            </div>
        )}
    </div>
</div>

<div className={stylePerfilVendedor.topico} onClick={() => setMostrarSubtopicosAtendimento(!mostrarSubtopicosAtendimento)}>
    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconAtendimento})` }}></div>
    <div>
        <li className={stylePerfilVendedor.atendimento}><a href='#'>Atendimento</a></li>
        {mostrarSubtopicosAtendimento && (
            <div className={stylePerfilVendedor.subtopicosAtendimento}>
                <li className={stylePerfilVendedor.subtopico}><a href='#'>Chats</a></li>
                <li className={stylePerfilVendedor.subtopico}><a href='#'>Feedbacks</a></li>
            </div>
        )}
    </div>
</div>

                <div className={stylePerfilVendedor.topico}>
                    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconDashboard})` }}></div>
                    <li className={stylePerfilVendedor.dashboard}><a href='#'>Dashboard</a></li>
                </div>
                <div className={stylePerfilVendedor.topico}  onClick={() => setMostrarSubtopicosLoja(!mostrarSubtopicosLoja)}>
                    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconLoja})` }}></div>
                    <div>
                    <li className={stylePerfilVendedor.loja}><a href='#'>Loja</a></li>
                    {mostrarSubtopicosLoja && (
            <div className={stylePerfilVendedor.subtopicosLoja}>
                <li className={stylePerfilVendedor.subtopico}><a href='#'>Perfil</a></li>
                <li className={stylePerfilVendedor.subtopico}><a href='#'>Personalizar</a></li>
                <li className={stylePerfilVendedor.subtopico}><a href='#'>Configurações</a></li>
            </div>
        )}
        </div>
         </div>
            </nav>

        </section>
    );
}

export default PerfilVendedor;
