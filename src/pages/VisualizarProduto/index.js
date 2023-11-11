import './index.scss';
import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';



export default function VisualizarProduto() {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [termoBusca, setTermoBusca] = useState('');
  
  

  const buscarProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/produto'); // Verifique a URL
      const produtos = response.data;
  
      if (termoBusca) {
        // Filtra os produtos com base na descrição
        const produtosFiltrados = produtos.filter((produto) =>
          produto.descricao.toLowerCase().includes(termoBusca.toLowerCase())
        );
        setListaProdutos(produtosFiltrados);
      } else {
        setListaProdutos(produtos);
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  async function remover(codigo) {
    console.log('Excluindo produto com ID:', codigo);
    try {
      let r = await axios.delete(`http://localhost:5000/produto/${codigo}`); // Adicione uma barra (/) entre "produto" e o ID
      console.log('Resposta da exclusão:', r);
      alert('Deseja Realmente Apagar?');
      buscarProdutos();
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []); // Quando a tela carregar



  return (
    <section className="pagina-VisualizarProduto">
      <img src="./assets/images/logo.png" alt="logo" />
      <div className="page">
        <h1>Buscar Produtos</h1>
        <div className="buscar-barra">
          <input
            type="text"
            placeholder="Buscar Por Descrição"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
          <button onClick={buscarProdutos}>Buscar</button>
        </div>
        <div className="produto-lista">
        {listaProdutos.map((produto) => (
            <div className="produto" key={produto.id}>
              <img src={produto.imagem} alt={`Produto-${produto.id}`} />
              
              <p>
                <strong>Categoria:</strong> {produto.categoria}
              </p>
              <p>
                <strong>Tamanho:</strong> {produto.tamanho}
              </p>
              <p>
                <strong>Preço:</strong> R${produto.preco}
              </p>
              <p>
                <strong>Descrição:</strong> {produto.descricao}
              </p>
              <Link to={`/editar-produto/${produto.codigo}`} className="editar-button">Editar</Link>
              <button onClick={() => remover(produto.codigo)} className="deletar-button">Excluir</button>

            </div>
          ))}
        </div>
        <Link to="/Menu" className="link-voltar">
          Voltar para página Menu
        </Link>
      </div>
    </section>
  );
}
