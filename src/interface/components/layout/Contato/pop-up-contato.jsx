import React from 'react';
import styleContato from './Contato.module.css';
import cat from '../../../../assets/images/cad_vendedor/Logo_Teste.png'
const PopupMensagem = ({ onClose }) => {
  return (
    <div className={styleContato.popupContainer}>
      <div className={styleContato.popup}>
        <img src={cat} alt="Cat" className={styleContato.catImage} />
        <h1>Mensagem Recebida com Sucesso!</h1>
        <p>Obrigado por entrar em contato conosco. Sua mensagem foi recebida e nossa <br/> equipe está aqui para ajudar você. Aguarde enquanto tomamos as medidas<br/> necessárias para resolver sua questão. Vamos mantê-lo informado em breve.<br/> Agradecemos pela sua paciência!</p>
        <button onClick={onClose}>Voltar</button>
      </div>
    </div>
  );
};

export default PopupMensagem;
