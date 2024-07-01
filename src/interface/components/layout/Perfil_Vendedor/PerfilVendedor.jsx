import { useState } from 'react';
import { Link } from 'react-router-dom';
import stylePerfilVendedor from './Nav_perfil_vendedor.module.css';
import iconPedidos from '../../../../assets/images/imgs-perfil_vendedor/Pedidos.png';
import iconContas from '../../../../assets/images/imgs-perfil_vendedor/Contas.png';
import iconProduto from '../../../../assets/images/imgs-perfil_vendedor/Produto.png';
import iconAtendimento from '../../../../assets/images/imgs-perfil_vendedor/Atendimento.png';
import iconDashboard from '../../../../assets/images/imgs-perfil_vendedor/Dashboard.png';
import iconLoja from '../../../../assets/images/imgs-perfil_vendedor/Loja.png';
import iconFreelancer from '../../../../assets/images/imgs-perfil_vendedor/Freelancer.png';
import EditarPerfilArtesao from '../Minha_Loja/Loja/Perfil/Editar_Perfil_Artesao';

function PerfilVendedor() {
    // Estado para controlar a exibição dos sub-tópicos de Produto e Atendimento
    const [mostrarSubtopicosProduto, setMostrarSubtopicosProduto] = useState(false);
    const [mostrarSubtopicosAtendimento, setMostrarSubtopicosAtendimento] = useState(false);
    const [mostrarSubtopicosLoja, setMostrarSubtopicosLoja] = useState(false);
    const [Component, SetComponent] = useState();
    return (
        <section className={stylePerfilVendedor.perfilVendedorContainer}>
            <nav className={stylePerfilVendedor.navPerfilVendedor}>
                <button className={stylePerfilVendedor.botaoPerfilVendedor}>Mudar para conta pessoal</button>
                <div className={stylePerfilVendedor.topico}>
                    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconPedidos})` }}></div>
                    <li className={stylePerfilVendedor.pedidos}><Link to='#'>Pedidos</Link></li>
                </div>
                <div className={stylePerfilVendedor.topico}>
                    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconFreelancer})` }}></div>
                    <li className={stylePerfilVendedor.freelancer}><Link to='/artesao/Personalizado'>Freelancer</Link></li>
                </div>
                <div className={stylePerfilVendedor.topico}>
                    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconContas})` }}></div>
                    <li className={stylePerfilVendedor.contas}><Link to='#'>Contas Bancárias</Link></li>
                </div>
                <div className={stylePerfilVendedor.topico} onClick={() => setMostrarSubtopicosProduto(!mostrarSubtopicosProduto)}>
    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconProduto})` }}></div>
    <div>
        <li className={stylePerfilVendedor.produto}><Link to='#'>Produto</Link></li>
        {mostrarSubtopicosProduto && (
            <div className={stylePerfilVendedor.subtopicosProduto}>
                <li className={stylePerfilVendedor.subtopico} ><Link to='#'>Meus Produtos</Link></li>
                <li className={stylePerfilVendedor.subtopico}><Link to='/artesao/Cadastro_Produto'>+ Adicionar Produto</Link></li>
            </div>
        )}
    </div>
</div>

<div className={stylePerfilVendedor.topico} onClick={() => setMostrarSubtopicosAtendimento(!mostrarSubtopicosAtendimento)}>
    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconAtendimento})` }}></div>
    <div>
        <li className={stylePerfilVendedor.atendimento}><Link to='#'>Atendimento</Link></li>
        {mostrarSubtopicosAtendimento && (
            <div className={stylePerfilVendedor.subtopicosAtendimento}>
                <li className={stylePerfilVendedor.subtopico}><Link to='#'>Chats</Link></li>
                <li className={stylePerfilVendedor.subtopico}><Link to='#'>Feedbacks</Link></li>
            </div>
        )}
    </div>
</div>

                <div className={stylePerfilVendedor.topico}>
                    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconDashboard})` }}></div>
                    <li className={stylePerfilVendedor.dashboard}><Link to='#'>Dashboard</Link></li>
                </div>
                <div className={stylePerfilVendedor.topico}  onClick={() => setMostrarSubtopicosLoja(!mostrarSubtopicosLoja)}>
                    <div className={stylePerfilVendedor.icon} style={{ backgroundImage: `url(${iconLoja})` }}></div>
                    <div>
                    <li className={stylePerfilVendedor.loja}><Link to='#'>Loja</Link></li>
                    {mostrarSubtopicosLoja && (
            <div className={stylePerfilVendedor.subtopicosLoja}>
                <li className={stylePerfilVendedor.subtopico} onClick={() => {SetComponent("Perfil")}}>Perfil</li>
                <li className={stylePerfilVendedor.subtopico}>Personalizar</li>
                <li className={stylePerfilVendedor.subtopico}>Configurações</li>
            </div>
        )}
        </div>
         </div>
            </nav>
                    {Component === "Perfil" && (
                      <EditarPerfilArtesao />
                    )}
        </section>
    );
}

export default PerfilVendedor;
