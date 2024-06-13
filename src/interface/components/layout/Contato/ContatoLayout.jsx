import { useState } from 'react';
import styleContato from './Contato.module.css';

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
    <div className={styleContato.contact_form}>
      <h2 className='h2'>Entre em contato</h2>
      <p className='p'>Essas informações vão nos auxiliar com o seu atendimento.</p>

      <form>
        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="fullName">Nome Completo</label>
          <input type="text" className={`${styleContato.fullName} ${styleContato.input}`} name="fullName" required />
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="cpfCnpj">CPF/CNPJ</label>
          <input type="text" className={`${styleContato.cpfCnpj} ${styleContato.input}`} name="cpfCnpj" />
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="email">E-mail</label>
          <input type="email" className={`${styleContato.email} ${styleContato.input}`} name="email" required />
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="phone">Telefone</label>
          <input type="tel" className={`${styleContato.phone} ${styleContato.input}`} name="phone" />
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="accessPlatform">Plataforma de acesso</label>
          <select className={`${styleContato.accessPlatform} ${styleContato.select}`} name="accessPlatform" required>
            <option value="">Selecione</option>
            <option value="web">Web</option>
            <option value="app">App</option>
          </select>
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="message">Mensagem</label>
          <textarea className={`${styleContato.message} ${styleContato.select}`} name="message" rows="5" required></textarea>
        </div>

        <div className={styleContato.form_group}>
          <label className={styleContato.label} htmlFor="files">Arquivos</label>
          <div className={styleContato.input_arquivo}>
            <input type="file" className={`${styleContato.files} ${styleContato.input}`} name="files" multiple onChange={handleFileChange} />
            {filePreview && <img src={filePreview} alt="Prévia do arquivo" style={{ maxWidth: '100%', maxHeight: '200px', margin: '10px auto', display: 'block' }} />}
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
          <button type="submit">Enviar</button>
          <button type="button">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
