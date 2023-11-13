import { salvar, listar, BuscarPorEmail, remover, alterar } from "../repository/usuarioRepository.js";


import { Router } from "express";

const endpoints = Router();


endpoints.post('/usuarios', async (req, res) => {
    try {
      const usuario = await salvar(req.body);
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar usuário.' });
    }
  });
  
  // Endpoint para listar todos os usuários
  endpoints.get('/usuarios', async (req, res) => {
    try {
      const usuarios = await listar();
      res.json(usuarios);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao listar usuários.' });
    }
  });
  
  // Endpoint para buscar usuários por nome
  endpoints.get('/usuarios/buscar', async (req, res) => {
    const email = req.query.email;
    try {
      const usuarios = await BuscarPorEmail(nome);
      res.json(usuarios);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao buscar usuários.' });
    }
  });
  
  // Endpoint para autenticar um usuário
  endpoints.post('/usuarios/autenticar', async (req, res) => {
    const { email, senha } = req.body;
    try {
      const usuarioAutenticado = await autenticarUsuario(email, senha);
      if (usuarioAutenticado) {
        res.json(usuarioAutenticado);
      } else {
        res.status(400).json({ error: 'Credenciais inválidas.' });
      }
    } catch (error) {
      res.status(400).json({ error: 'Erro ao autenticar usuário.' });
    }
  });
  
  // Endpoint para atualizar um usuário
  endpoints.put('/usuarios/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const mensagem = await alterar(id, req.body);
      res.json({ message: mensagem });
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar usuário.' });
    }
  });
  
  // Endpoint para remover um usuário
  endpoints.delete('/usuarios/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const rowsAffected = await remover(id);
      if (rowsAffected) {
        res.json({ message: 'Usuário removido com sucesso.' });
      } else {
        res.status(400).json({ error: 'Usuário não encontrado.' });
      }
    } catch (error) {
      res.status(400).json({ error: 'Erro ao remover usuário.' });
    }
  });
