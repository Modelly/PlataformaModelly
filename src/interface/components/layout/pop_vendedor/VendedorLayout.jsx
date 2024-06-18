import styleVendedor from './Vendedor.module.css';
import catImage from '../../../../assets/images/imgs-vendedor/Logo_Teste.png';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Popup = () => {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('/cadastrar-vendedor');
  }

  return (
    <div className={`${styleVendedor.bodyHTML}`}>
      <div className={`${styleVendedor.mainContainer}`}>
        <div className={`${styleVendedor.popupContainer}`}>
          <div className={styleVendedor.popup}>
            <img src={catImage} alt="Gato" className={styleVendedor.catImage} />
            <h1>Bem-Vindo a Modelly!</h1>
            <p>Para começar, faça o cadastro como vendedor <br />Modelly e preencha algumas informações<br /> necessárias</p>
            <button className={styleVendedor.popupButton} onClick={handleCadastroClick}>Começar Cadastro</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    
  );
};

export default Popup;
