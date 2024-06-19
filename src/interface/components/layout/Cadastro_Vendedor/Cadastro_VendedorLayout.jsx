import { useState } from 'react';
import styleCadastroVendedor from './Cadastro_Vendedor.module.css';
import step1Img from './images/step1.png'; // Adicione a imagem do número 1
import step2Img from './images/step2.png'; // Adicione a imagem do número 2
import step3Img from './images/step3.png'; // Adicione a imagem do número 3

const Cadastro_VendedorLayout = () => {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');

  const handleNext = () => {
    if (step === 1 && selectedOption) {
      if (selectedOption === 'CPF') {
        setStep(2); // Navigate to CPF form
      } else if (selectedOption === 'CNPJ') {
        setStep(3); // Navigate to CNPJ form
      }
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className={styleCadastroVendedor.form_container}>
      <div className={styleCadastroVendedor.steps}>
        <div className={`${styleCadastroVendedor.step} ${step >= 1 ? styleCadastroVendedor.Active : ''}`} onClick={() => setStep(1)}>
          <img src={step1Img} alt="Step 1" className={styleCadastroVendedor.step_image} />
          Escolha um tipo de loja
        </div>
        <div className={`${styleCadastroVendedor.step} ${step >= 2 ? styleCadastroVendedor.Active : ''}`} onClick={() => setStep(2)}>
          <img src={step2Img} alt="Step 2" className={styleCadastroVendedor.step_image} />
          Fornecer Informação
        </div>
        <div className={`${styleCadastroVendedor.step} ${step >= 3 ? styleCadastroVendedor.Active : ''}`} onClick={() => setStep(3)}>
          <img src={step3Img} alt="Step 3" className={styleCadastroVendedor.step_image} />
          Finalizar
        </div>
      </div>

      {step === 1 && (
        <div className={styleCadastroVendedor.step_content}>
          <div className={styleCadastroVendedor.options_container}>
            <label className={styleCadastroVendedor.option}>
              <input type="radio" name="loja" value="CPF" onChange={() => setSelectedOption('CPF')} />
              Pessoa Física (CPF)
            </label>
            <label className={styleCadastroVendedor.option}>
              <input type="radio" name="loja" value="CNPJ" onChange={() => setSelectedOption('CNPJ')} />
              Pessoa Jurídica (CNPJ)
            </label>
          </div>
          <button className={styleCadastroVendedor.next_button} onClick={handleNext}>Próximo</button>
        </div>
      )}

      {step === 2 && selectedOption === 'CPF' && (
        <div className={styleCadastroVendedor.step_content}>
          <form>
            <div className={styleCadastroVendedor.form_group}>
              <label>Nome Completo</label>
              <input type="text" placeholder="Insira o nome" maxLength="100" />
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>Nacionalidade</label>
              <input type="text" value="Brasil" readOnly />
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>CPF</label>
              <input type="text" placeholder="Favor, insira o CPF" maxLength="14" />
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>Data de Nascimento</label>
              <div className={styleCadastroVendedor.date_input}>
                <input type="text" placeholder="Dia" maxLength="2" />
                <input type="text" placeholder="Mês" maxLength="2" />
                <input type="text" placeholder="Ano" maxLength="4" />
              </div>
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>Nome da Loja</label>
              <input type="text" placeholder="Insira o nome da loja" maxLength="35" />
              <small>O Nome da Loja será exibido para os clientes. Capriche!</small>
            </div>
            <div className={styleCadastroVendedor.form_group}>
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
            <div className={styleCadastroVendedor.form_group}>
              <label>E-mail</label>
              <input type="email" value="teste@gmail.com" readOnly />
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>Código de Verificação de E-mail</label>
              <div className={styleCadastroVendedor.verification_group}>
                <input type="text" placeholder="Insira o código de verificação" />
                <button className={styleCadastroVendedor.verify_button}>Enviar</button>
              </div>
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>Telefone</label>
              <input type="text" placeholder="+55 | Insira o Telefone" />
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>Código de Verificação de Telefone</label>
              <div className={styleCadastroVendedor.verification_group}>
                <input type="text" placeholder="Insira o código de verificação" />
                <button className={styleCadastroVendedor.verify_button}>Enviar</button>
              </div>
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <input type="checkbox" />
              <label>Eu li e concordo com Termos de Serviço, Política de Privacidade Modelify, Termos de Serviço Conta de Pagamento Modelify, Política de Privacidade Modelify.</label>
            </div>
            <div className={styleCadastroVendedor.button_group}>
              <button className={styleCadastroVendedor.back_button} onClick={handleBack}>Voltar</button>
              <button className={styleCadastroVendedor.submit_button} type="submit">Enviar</button>
            </div>
          </form>
        </div>
      )}

      {step === 3 && selectedOption === 'CNPJ' && (
        <div className={styleCadastroVendedor.step_content}>
          <form>
            <div className={styleCadastroVendedor.form_group}>
              <label>Nome da Empresa</label>
              <input type="text" placeholder="Insira o nome da empresa" maxLength="100" />
              <label>Razão Social</label>
              <input type="text" placeholder="Insira a Razão Social" maxLength="100" />
              <label>Nome Fantasia</label>
              <input type="text" placeholder="" maxLength="100" />
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>CNPJ</label>
              <input type="text" placeholder="Favor, insira o CNPJ" maxLength="18" />
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>Data de Abertura</label>
              <div className={styleCadastroVendedor.date_input}>
                <input type="text" placeholder="Dia" maxLength="2" />
                <input type="text" placeholder="Mês" maxLength="2" />
                <input type="text" placeholder="Ano" maxLength="4" />
              </div>
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>Nome da Loja</label>
              <input type="text" placeholder="Insira o nome da loja" maxLength="35" />
              <small>O Nome da Loja será exibido para os clientes. Capriche!</small>
            </div>
            <div className={styleCadastroVendedor.form_group}>
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
            <div className={styleCadastroVendedor.form_group}>
              <label>E-mail</label>
              <input type="email" value="teste@gmail.com" readOnly />
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <label>Outro Telefone (Opcional)</label>
              <input type="text" placeholder="+55 | Insira o Telefone" />
            </div>
            <div className={styleCadastroVendedor.form_group}>
              <input type="checkbox" />
              <label>Eu li e concordo com Termos de Serviço, Política de Privacidade Modelly, Termos de Serviço Conta de Pagamento Modelify, Política de Privacidade Modelify.</label>
            </div>
            <div className={styleCadastroVendedor.button_group}>
              <button className={styleCadastroVendedor.back_button} onClick={handleBack}>Voltar</button>
              <button className={styleCadastroVendedor.submit_button} type="submit">Enviar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cadastro_VendedorLayout;
