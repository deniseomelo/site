import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';

export default function EditarProduto({ match }) {
  const [produto, setProduto] = useState({
    codigo: '',
    categoria: '',
    tamanho: '',
    preco: '',
    descricao: '',
  });

  useEffect(() => {
    // Verifique se match e match.params estão definidos antes de acessá-los
    const codigo = match?.params?.codigo;
  
    // Adicione este console.log para verificar o valor de código
    console.log('Código do produto:', codigo);
  
    if (codigo) {
      async function fetchData() {
        try {
          const response = await axios.get(`http://localhost:5000/produto/${codigo}`);
          setProduto(response.data);
        } catch (error) {
          console.error('Erro ao buscar detalhes do produto:', error);
        }
      }
  
      fetchData();
    }
  }, [match]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Use match.params.codigo para obter o código do produto
      await axios.put(`http://localhost:5000/produto/${match.params.codigo}`, produto);
      console.log('Produto atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  return (
    <section className='comp-edicao'>
      
      <img src="../assets/images/logo.png" alt="logo" />
        <div className="page-edicao">
      <form className=" formulario"onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Código</label>
          <input 
          type="text" 
          name="codigo" 
          value={produto.codigo} 
          onChange={handleChange} />
        
          <label>Categoria</label>
          <input 
          type="text" 
          name="categoria" 
          value={produto.categoria} 
          onChange={handleChange} />
        
          <label>Tamanho</label>
          <input 
          type="text" 
          name="tamanho" 
          value={produto.tamanho} onChange={handleChange} />
        
          <label>Preço</label>
          <input 
          type="text" 
          name="preco" 
          value={produto.preco} 
          onChange={handleChange} />
        
          <label>Descrição</label>
          <textarea 
          name="descricao" 
          value={produto.descricao} 
          onChange={handleChange} />
        </div>
        <button type="submit">Atualizar Produto</button>
      </form>
      </div>
    </section>
   
  );
}