import React, { useState } from 'react';
import './Contato.css';

const Contato = () => {
  const [filePreview, setFilePreview] = useState(null);

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

  return (
    <div id="contact-form">
      <h2>Entre em contato</h2>
      <p>Essas informações vão nos auxiliar com o seu atendimento.</p>

      <form>
        <div className="form-group">
          <label htmlFor="fullName">Nome Completo</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>

        <div className="form-group">
          <label htmlFor="cpfCnpj">CPF/CNPJ</label>
          <input type="text" id="cpfCnpj" name="cpfCnpj" />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input type="tel" id="phone" name="phone" />
        </div>

        <div className="form-group">
          <label htmlFor="accessPlatform">Plataforma de acesso</label>
          <select id="accessPlatform" name="accessPlatform" required>
            <option value="">Selecione</option>
            <option value="web">Web</option>
            <option value="app">App</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="files">Arquivos</label>
          <div className="input-arquivo">
            <input type="file" id="files" name="files" multiple onChange={handleFileChange} />
            {filePreview && <img src={filePreview} alt="Prévia do arquivo" style={{ maxWidth: '100%', maxHeight: '200px', margin: '10px auto', display: 'block' }} />}
            <span className="arquivo-selecionado">
              <span className="icone-nuvem"></span>
              <div className="texto-upload">
                <span className="linha-1">Solte fotos ou vídeos aqui ou</span>
                <span className="linha-2">procure no seu computador</span>
              </div>
            </span>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit">Enviar</button>
          <button type="button">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
