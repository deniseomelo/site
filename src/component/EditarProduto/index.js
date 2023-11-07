import './index.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditarProduto({ match }) {
  const [produto, setProduto] = useState({
    codigo: '',
    categoria: '',
    tamanho: '',
    preco: '',
    descricao: '',
  });

  useEffect(() => {
   
    const codigo = match.params.codigo;
    axios.put(`http://localhost:5000/produto/${codigo}`)
      .then((response) => {
        setProduto(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do produto:', error);
      });
  }, [match.params.codigo]);

 
  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.put(`http://localhost:5000/produto/${match.params.codigo}`, produto)
      .then(() => {
        console.log('Produto atualizado com sucesso');
       
      })
      .catch((error) => {
        console.error('Erro ao atualizar o produto:', error);
      });
  };

  // Atualize o estado do produto conforme o usuário preenche o formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Editar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Código:</label>
          <input type="text" name="codigo" value={produto.codigo} onChange={handleChange} />
        </div>
        <div>
          <label>Categoria:</label>
          <input type="text" name="categoria" value={produto.categoria} onChange={handleChange} />
        </div>
        <div>
          <label>Tamanho:</label>
          <input type="text" name="tamanho" value={produto.tamanho} onChange={handleChange} />
        </div>
        <div>
          <label>Preço:</label>
          <input type="text" name="preco" value={produto.preco} onChange={handleChange} />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea name="descricao" value={produto.descricao} onChange={handleChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}



