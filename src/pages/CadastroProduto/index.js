import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.scss';



    export default function CadastroProduto() {
    const [codigo, setCodigo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
  
    async function salvarProduto() {
      const body = {
        codigo,
        categoria,
        tamanho,
        preco,
        descricao,
      };
  
      try {
        const response = await axios.post('http://localhost:5000/produto/', body);
        const id = response.data.id;
        alert('Produto cadastrado. Id ' + id);
      } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
      }
    }
  
    return (
        <section className="pagina-CadastroProduto">
        <img src="./assets/images/logo.png" alt="logo" />
        <div className="page-cadastro">
          <form id="cadastroForm" encType="multipart/form-data">
            <h1 className="titulo">Cadastro de Produtos</h1>
            <div className="form-group">
              <label htmlFor="codigo">Código do Produto:</label>
              <input
                type="text"
                id="codigo"
                name="codigo"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="categoria">Categoria:</label>
              <input
                type="text"
                id="categoria"
                name="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tamanho">Tamanho:</label>
              <input
                type="text"
                id="tamanho"
                name="tamanho"
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="preco">Preço:</label>
              <input
                type="number"
                id="preco"
                name="preco"
                step="0.01"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descrição:</label>
              <textarea
                id="descricao"
                name="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="button"
                id="cadastrar"
                className="cadastrar-btn"
                onClick={salvarProduto}
              >
                Cadastrar
              </button>
            </div>
            <div class="form-group">
                    <label for="foto">Foto do Produto:</label>
                    <input type="file" id="foto" name="foto" accept="image/*" required/>
                </div>
            <Link to="/Menu" className="link-voltar">Voltar para página Menu</Link>
          </form>
        </div>
      </section>
    )
    }