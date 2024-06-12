import React, {useState} from 'react';
import './Cadastro_Vendedor.css';
const Cadastro_VendedorLayout = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="form-container">
      <h1>Página de Cadastro de Vendedor</h1>
      <div className="steps">
        <div className={`step ${step >= 1 ? 'active' : ''}`} onClick={() => setStep(1)}>1 Escolha um tipo de loja</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`} onClick={() => setStep(2)}>2 Fornecer Informação</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`} onClick={() => setStep(3)}>3 Finalizar</div>
      </div>

      {step === 1 && (
        <div className="step-content">
          <h2>Escolha um tipo de loja</h2>
          <button onClick={handleNext}>Próximo</button>
        </div>
      )}

      {step === 2 && (
        <div className="step-content">
          <h2>Fornecer Informação</h2>
          <form>
            <div className="form-group">
              <label>Nome Completo</label>
              <input type="text" placeholder="Insira o nome" maxLength="100" />
            </div>
            <div className="form-group">
              <label>Nacionalidade</label>
              <input type="text" value="Brasil" readOnly />
            </div>
            <div className="form-group">
              <label>CPF</label>
              <input type="text" placeholder="Favor, insira o CPF" maxLength="14" />
            </div>
            <div className="form-group">
              <label>Data de Nascimento</label>
              <div className="date-input">
                <input type="text" placeholder="Dia" maxLength="2" />
                <input type="text" placeholder="Mês" maxLength="2" />
                <input type="text" placeholder="Ano" maxLength="4" />
              </div>
            </div>
            <div className="form-group">
              <label>Nome da Loja</label>
              <input type="text" placeholder="Insira o nome da loja" maxLength="35" />
              <small>O Nome da Loja será exibido para os clientes. Capriche!</small>
            </div>
            <div className="form-group">
              <label>Contato (Nome e Endereço)</label>
              <input type="text" placeholder="Nome Completo" maxLength="35" />
              <input type="text" placeholder="+55 | Telefone" />
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Estado" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento (Opcional)" />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" value="teste@gmail.com" readOnly />
            </div>
            <div className="form-group">
              <label>Código de Verificação de E-mail</label>
              <div className="verification-group">
                <input type="text" placeholder="Insira o código de verificação" />
                <button className="verify-button">Enviar</button>
              </div>
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <input type="text" placeholder="+55 | Insira o Telefone" />
            </div>
            <div className="form-group">
              <label>Código de Verificação de Telefone</label>
              <div className="verification-group">
                <input type="text" placeholder="Insira o código de verificação" />
                <button className="verify-button">Enviar</button>
              </div>
            </div>
            <div className="form-group">
              <input type="checkbox" />
              <label>Eu li e concordo com Termos de Serviço, Política de Privacidade Modelify, Termos de Serviço Conta de Pagamento Modelify, Política de Privacidade Modelify.</label>
            </div>
            <div className="button-group">
              <button className="back-button" onClick={handleBack}>Voltar</button>
              <button className="submit-button" onClick={handleNext}>Enviar</button>
            </div>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="step-content">
          <h2>Finalizar</h2>
        </div>
      )}
    </div>
  );
};

export default Cadastro_VendedorLayout;
