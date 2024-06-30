import { useEffect } from 'react';
import { getBasePath } from "../../util/GetBasePath.jsx";
import { useNavigate, useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import catImage from '../../../../assets/images/imgs-vendedor/Logo_Teste.png';

import styleVendedor from './Vendedor.module.css';

const Popup = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const basePath = getBasePath(location.pathname);

  const handleCadastroClick = () => {
    navigate(`${basePath}/cadastrar-vendedor`);
  }

  useEffect(() => {
      AOS.init({
          duration: 1200, // Duração das animações
      });
  }, []);

  return (
    <div className={`${styleVendedor.bodyHTML}`}>
      <div className={`${styleVendedor.mainContainer}`}>
        <div className={`${styleVendedor.popupContainer}`} data-aos="fade-up">
          <div className={styleVendedor.popup}>
            <img src={catImage} alt="Gato" className={styleVendedor.catImage} />
            <h1>Bem-Vindo a Modelly!</h1>
            <p>Para começar, faça o cadastro como vendedor <br />Modelly e preencha algumas informações<br /> necessárias</p>
            <button className={styleVendedor.popupButton} onClick={handleCadastroClick}>Começar Cadastro</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Popup;
