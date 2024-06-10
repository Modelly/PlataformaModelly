
import React from 'react';
import './Cadastro_Produto.css';
import produto from '../../../../assets/images/imgs-produto/produto1.png';
import uploadIcon from '../../../../assets/images/img_cad_produto/iconi.png';
import backgroundImage from '../../../../assets/images/img_cad_produto/image-15.png';

function Cadastro_Produto() {
  return (
    <div className="cadastro-produto-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="produto-imagem">
        <img src={produto} alt="Produto" />
      </div>
      <form className="produto-form">
        <div className="form-section">
          <div className="fotos-produto">
            <label>Fotos do Produto</label>
            <div className="fotos-upload">
              <input type="file" id="upload1" />
              <label htmlFor="upload1">
                <img src={uploadIcon} alt="Upload" />
              </label>
              <input type="file" id="upload2" />
              <label htmlFor="upload2">
                <img src={uploadIcon} alt="Upload" />
              </label>
              <input type="file" id="upload3" />
              <label htmlFor="upload3">
                <img src={uploadIcon} alt="Upload" />
              </label>
              <input type="file" id="upload4" />
              <label htmlFor="upload4">
                <img src={uploadIcon} alt="Upload" />
              </label>
            </div>
          </div>
          <div className="campo-form campo-nome-produto">
            <label>Nome do Produto</label>
            <input type="text" placeholder="Digite o nome do produto" />
          </div>
          <div className="campo-form campo-categoria">
            <label>Categoria</label>
            <select>
              <option>Escultura</option>
            </select>
          </div>
          <div className="campo-form campo-descricao-produto">
            <label>Descrição do produto</label>
            <textarea placeholder="Descrição do produto"></textarea>
            </div>
            <div className="campo-form campo-preco">
                <label>Preço</label>
                <input type="text" placeholder="R$" />
                </div>
                <div className="campo-form campo-estoque">
                <label>Estoque</label>
                <input type="number" min="0" placeholder="0" />
                </div>
        </div>

        <div className="campo-form campo-envio">
            <label>Envio</label>
            <div className="envio-fields">
                <div className="campo-form campo-peso">
                <label>Peso</label>
                <input type="text" placeholder="Larg (cm)" />
                </div>
                <label>Tamanho do pacote</label>
                <div className="campo-form tamanho-pacote">
                <input type="text" placeholder="Larg (cm)" />
                <input type="text" placeholder="Compr (cm)" />
                <input type="text" placeholder="Alt (cm)" />
                </div>
            </div>
            </div>

        <div className="form-section">
          <div className="sob-encomenda">
            <label>Sob encomenda</label>
            <div>
              <input type="radio" id="sob-encomenda-sim" name="sob-encomenda" value="sim" />
              <label htmlFor="sob-encomenda-sim">Sim</label>
              <input type="radio" id="sob-encomenda-nao" name="sob-encomenda" value="nao" />
              <label htmlFor="sob-encomenda-nao">Não</label>
            </div>
          </div>
          <p>Eu preciso de 3 dias de prazo de postagem (Você pode preencher entre 3 e 15)</p>
        </div>

        <button type="submit">Enviar Produto</button>
      </form>
    </div>
  );
}

export default Cadastro_Produto;
