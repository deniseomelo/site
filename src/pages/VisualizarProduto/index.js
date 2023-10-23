import './index.scss';
import { Link } from 'react-router-dom';


export default function VisualizarProduto(){
    return(
       <section className='pagina-VisualizarProduto'>
        
        <img src="./assets/images/logo.png" alt="logo"/>

         <div className="page">
            <h1>Buscar Produtos</h1>
  <div className="buscar-barra">
    <input type="text" placeholder="Buscar Produto"/>
    <button>Buscar</button>
  </div>
  <div className="produto-lista">
    <div className="produto">
      <img src="./assets/images/macacao.png" alt="Produto-1"/>
      
      <p><strong>Código:</strong> 1</p>
      <p><strong>Categoria:</strong> Feminino</p>
      <p><strong>Tamanho:</strong> M</p>
      <p><strong>Preco:</strong> R$200.99</p>
      <p><strong>Descrição:</strong> Macação Sabrina.</p>
      <button className="editar-button">Editar</button>
      <button className="deletar-button">Apagar</button>
    </div>
    <div className="produto">
      <img src="./assets/images/jaqueta.png" alt="Product 2"/>
      <p><strong>Codigo:</strong> 6</p>
      <p><strong>Categoria:</strong> Maculino</p>
      <p><strong>Tamanho:</strong> G</p>
      <p><strong>Preco:</strong> R$300.99</p>
      <p><strong>Descrição:</strong> Jaqueta Básica.</p>
      <button className="editar-button">Editar</button>
      <button className="deletar-button">Excluir</button>
      
    </div>
  </div>
  <Link to='/Menu' className="link-voltar">Voltar para página Menu</Link>
</div>  
    </section>


    );
}