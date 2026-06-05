import pool from '../config/db.js';

// ==========================================
// MODEL
// Responsável por acessar o banco de dados.
// A Controller chama as funções da Model
// para buscar, inserir ou excluir dados.
// ==========================================


// Função responsável por buscar todos os tipo cadastrados na tabela "tipos".
const getAll = async () => {

  // Executa uma consulta SQL no banco.
  // SELECT * significa:
  // "retorne todas as colunas de todos os registros".
  const result = await pool.query(
    'SELECT * FROM tipos'
  );

  // O PostgreSQL retorna várias informações.
  // A propriedade "rows" contém os dados encontrados.
  return result.rows;
};


// Função responsável por criar um novo tipo na tabela "tipos".
const create = async (name) => {

  // Executa um INSERT no banco.
  // $1 representa o primeiro parâmetro enviado.
  // O valor de $1 será substituído pelo conteúdo presente no array [name].
  const result = await pool.query(
    'INSERT INTO tipos (nome_tipos) VALUES ($1) RETURNING *',
    [name]
  );

  // RETURNING * faz o PostgreSQL devolver o registro recém-criado.
  //
  // Exemplo:
  // {
  //   id_tipos: 3,
  //   nome_tipos: "Orquídea"
  // }
  //
  // rows[0] representa o primeiro (e único) registro retornado.
  return result.rows[0];
};


// Função responsável por excluir um tipo com base no ID informado.
const remove = async (id) => {

  // DELETE remove um registro da tabela.
  //
  // WHERE id_tipos = $1 garante que apenas o registro com o ID informado será removido.
  //
  // Exemplo: DELETE FROM tipos WHERE id_tipos = 3
  const result = await pool.query(
    'DELETE FROM tipos WHERE id_tipos = $1 RETURNING *',
    [id]
  );

  // RETURNING * devolve o registro removido.
  // Isso permite que a Controller saiba se o registro existia ou não.
  return result.rows[0];
};


// Exporta todas as funções da Model.
// Assim elas podem ser utilizadas pela Controller.
export default {
  getAll,
  create,
  remove
};