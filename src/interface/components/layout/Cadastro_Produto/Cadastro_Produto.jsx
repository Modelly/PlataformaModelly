import styleCadastroProduto from './Cadastro_Produto.module.css';
import produto from '../../../../assets/images/imgs-produto/produto1.png';
import uploadIcon from '../../../../assets/images/img_cad_produto/iconi.png';
import backgroundImage from '../../../../assets/images/img_cad_produto/image-15.png';

function Cadastro_Produto() {
  return (
    <div className={styleCadastroProduto.bodyHTML}>
      <div className={`${styleCadastroProduto.cadastroProdutoContainer} ${styleCadastroProduto.bodyHtml}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={styleCadastroProduto.produtoImagem}>
          <img src={produto} alt="Produto" />
        </div>
        <form className={styleCadastroProduto.produtoForm}>
          <div className={styleCadastroProduto.formSection}>
            <div className={styleCadastroProduto.fotosProduto}>
              <label>Fotos do Produto</label>
              <div className={styleCadastroProduto.fotosUpload}>
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
            <div className={`${styleCadastroProduto.campoForm} ${styleCadastroProduto.campoNomeProduto}`}>
              <label>Nome do Produto</label>
              <input type="text" placeholder="Digite o nome do produto" />
            </div>
            <div className={`${styleCadastroProduto.campoForm} ${styleCadastroProduto.campoCategoria}`}>
              <label>Categoria</label>
              <select>
                <option>Escultura</option>
              </select>
            </div>
            <div className={`${styleCadastroProduto.campoForm} ${styleCadastroProduto.campoDescricaoProduto}`}>
              <label>Descrição do produto</label>
              <textarea placeholder="Descrição do produto"></textarea>
            </div>
            <div className={`${styleCadastroProduto.campoForm} ${styleCadastroProduto.campoPreco}`}>
              <label>Preço</label>
              <input type="text" placeholder="R$" />
            </div>
            <div className={`${styleCadastroProduto.campoForm} ${styleCadastroProduto.campoEstoque}`}>
              <label>Estoque</label>
              <input type="number" min="0" placeholder="0" />
            </div>
          </div>

          <div className={styleCadastroProduto.formSection}>
            <div className={styleCadastroProduto.campoForm}>
              <label>Envio</label>
              <div className={styleCadastroProduto.envioFields}>
                <div className={`${styleCadastroProduto.campoForm} ${styleCadastroProduto.campoPeso}`}>
                  <label>Peso</label>
                  <input type="text" placeholder="Larg (cm)" />
                </div>
                <label>Tamanho do pacote</label>
                <div className={styleCadastroProduto.tamanhoPacote}>
                  <input type="text" placeholder="Larg (cm)" />
                  <input type="text" placeholder="Compr (cm)" />
                  <input type="text" placeholder="Alt (cm)" />
                </div>
              </div>
            </div>
          </div>

          <div className={styleCadastroProduto.formSection}>
            <div className={styleCadastroProduto.sobEncomenda}>
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

          <button type="submit" className={styleCadastroProduto.button}>Enviar Produto</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro_Produto;
