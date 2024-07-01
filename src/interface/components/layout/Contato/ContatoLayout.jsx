import { useState } from 'react';
import styleContato from './Contato.module.css';
import PopupMensagem from './pop-up-contato'; 

const Contato = () => {
  const [filePreview, setFilePreview] = useState(null);
  const [showPopup, setShowPopup] = useState(false); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFilePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para envio do formulário
    console.log('Formulário enviado com sucesso!');
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false); 
  };

  return (
    <div className={styleContato.contact_form}>
      <h2 className={styleContato.h2o}>Entre em contato</h2>
      <p className={styleContato.pp}>Essas informações vão nos auxiliar com o seu atendimento.</p>

      <form onSubmit={handleSubmit}>
        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="fullName">Nome Completo</label>
          <input type="text" className={`${styleContato.input} ${styleContato.fullName}`} name="fullName" required />
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="cpfCnpj">CPF/CNPJ</label>
          <input type="text" className={`${styleContato.input} ${styleContato.cpfCnpj}`} name="cpfCnpj" />
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="email">E-mail</label>
          <input type="email" className={`${styleContato.input} ${styleContato.email}`} name="email" required />
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="phone">Telefone</label>
          <input type="tel" className={`${styleContato.input} ${styleContato.phone}`} name="phone" />
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="accessPlatform">Plataforma de acesso</label>
          <select className={`${styleContato.input} ${styleContato.select}`} name="accessPlatform" required>
            <option value="">Selecione</option>
            <option value="web">Web</option>
            <option value="app">App</option>
          </select>
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="message">Mensagem</label>
          <textarea className={`${styleContato.input} ${styleContato.message}`} name="message" rows="5" required></textarea>
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="files">Arquivos</label>
          <div className={styleContato.input_arquivo}>
            <input type="file" className={`${styleContato.input} ${styleContato.files}`} name="files" multiple onChange={handleFileChange} />
            {filePreview && <img src={filePreview} alt="Prévia do arquivo" className={styleContato.file_preview} />}
            <span className={styleContato.arquivo_selecionado}>
              <span className={styleContato.icone_nuvem}></span>
              <div className={styleContato.texto_upload}>
                <span className={styleContato.linha_1}>Solte fotos ou vídeos aqui ou</span>
                <span className={styleContato.linha_2}>procure no seu computador</span>
              </div>
            </span>
          </div>
        </div>

        <div className={styleContato.form_actions}>
          <button type="submit" className={`${styleContato.button} ${styleContato.submit_button}`}>Enviar</button>
          <button type="button" className={`${styleContato.button} ${styleContato.cancel_button}`}>Cancelar</button>
        </div>
      </form>

      {showPopup && <PopupMensagem onClose={closePopup} />}
    </div>
  );
};

export default Contato;
