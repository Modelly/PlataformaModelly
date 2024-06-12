import React from 'react';
import './Vendedor.css';
import catImage from '../../../../assets/images/imgs-vendedor/Logo_Teste.png'; 
import Footer from '../../../../interface/components/layout/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Popup = () => {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('/cadastrar-vendedor');
  }

  return (
    <div className="main-container">
      <div className="popup-container">
        <div className="popup">
          <img src={catImage} alt="Gato" className="cat-image" />
          <h1>Bem-Vindo a Modelly!</h1>
          <p>Para começar, faça o cadastro como vendedor <br />Modelly e preencha algumas informações<br /> necessárias</p>
          <button onClick={handleCadastroClick}>Começar Cadastro</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Popup;
