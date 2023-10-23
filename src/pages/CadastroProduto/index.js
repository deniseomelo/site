import './index.scss';
import { Link } from 'react-router-dom';


export default function CadastroProduto(){
    return(
       <section className='pagina-CadastroProduto'>
        
        <img src="./assets/images/logo.png" alt="logo"/>
          <div className="page-cadastro">
            <form id="cadastroForm" enctype="multipart/form-data">
                <h1>Cadastro de Produtos</h1>
                <div className="form-group">
                    <label for="codigo">Código do Produto:</label>
                    <input type="text" id="codigo" name="codigo" required/>
                </div>
                <div className="form-group">
                    <label for="categoria">Categoria:</label>
                    <input type="text" id="categoria" name="categoria" required/>
                </div>
                <div className="form-group">
                    <label for="tamanho">Tamanho:</label>
                    <input type="text" id="tamanho" name="tamanho" required/>
                </div>
                <div className="form-group">
                    <label for="preco">Preço:</label>
                    <input type="number" id="preco" name="preco" step="0.01" required/>
                </div>
                <div className="form-group">
                    <label for="descricao">Descrição:</label>
                    <textarea id="descricao" name="descricao" rows="4" required></textarea>
                </div>
                <div className="form-group">
                    <label for="foto">Foto do Produto:</label>
                    <input type="file" id="foto" name="foto" accept="image/*" required/>
                </div>
                <div className="form-group">
                    <button type="button" id="cadastrar">Cadastrar</button>     
                </div>
                <Link to='/Menu' className="link-voltar">Voltar para página Menu</Link>
            </form>
            
        </div>
        
       </section>

    );
}