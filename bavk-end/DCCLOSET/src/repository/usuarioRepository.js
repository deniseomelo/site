import { con } from "./connection.js";

export async function listar() {
  const comando = `
    SELECT email, senha
    FROM usuarios;
  `

  const [linhas] = await con.query(comando);
  return linhas;
}
import { con } from "./connection.js";

export async function listar() {
    const comando = `
      SELECT email, senha
      FROM usuarios;
    `
  
    const [linhas] = await con.query(comando);
    return linhas;
  }
  
  // Função para buscar usuários por nome
  export async function BuscarPorEmail(email) {
    const comando = `
      SELECT email, senha
      FROM usuarios
      WHERE email like ?
    `
  
    const [linhas] = await con.query(comando, ['%' + email + '%']);
    return linhas;
  }
  
  // Função para autenticar um usuário
  export async function autenticarUsuario(email, senha) {
    const comando = `
      SELECT email, senha
      FROM usuarios
      WHERE nome = ? AND senha = ?;
    `
  
    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0]; // Retorna o primeiro usuário encontrado ou null se não for encontrado
  }
  
  // Função para alterar um usuário
  export async function alterar(id, usuario) {
    const comando = `
      UPDATE usuarios
      SET email = ?,
          senha = ?
      WHERE id = ?;
    `
    const [info] = await con.query(comando, [usuario.email, usuario.senha, id]);
    if (info.affectedRows > 0) {
      return "Registro atualizado com sucesso.";
    } else {
      return "Nenhum registro foi atualizado. Verifique o ID fornecido.";
    }
  }
  
  // Função para remover um usuário
  export async function remover(id) {
    const comando = 'DELETE FROM usuarios WHERE id = ?'
  
    const [info] = await con.query(comando, [id]);
    return info.affectedRows;
  }
