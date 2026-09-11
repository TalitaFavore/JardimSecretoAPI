import pool from '../config/db.js';

// ==========================================
// MODEL
// ==========================================
// Responsável por acessar o banco de dados.
//
// A Controller chama as funções da Model
// para buscar, inserir, alterar ou excluir dados.
// ==========================================


// Função responsável por buscar todos os tipos
// cadastrados na tabela "tipos".
const getAll = async () => {

  // Executa uma consulta SQL no banco.
  const result = await pool.query(
    'SELECT * FROM tipos'
  );

  // A propriedade "rows" contém os dados encontrados.
  return result.rows;
};


// Função responsável por buscar um tipo
// com base no ID informado.
const getById = async (id) => {

  // SELECT procura o registro na tabela.
  //
  // WHERE id_tipos = $1 garante que será buscado
  // somente o tipo que possui o ID informado.
  //
  // Exemplo:
  // GET /types/3
  //
  // Nesse caso, o valor de $1 será 3.
  const result = await pool.query(
    'SELECT * FROM tipos WHERE id_tipos = $1',
    [id]
  );

  // Retorna o primeiro registro encontrado.
  //
  // Se nenhum tipo possuir esse ID,
  // rows[0] será undefined.
  return result.rows[0];
};


// Função responsável por criar um novo tipo
// na tabela "tipos".
const create = async (name) => {

  // Executa um INSERT no banco.
  //
  // $1 representa o primeiro parâmetro enviado.
  const result = await pool.query(
    'INSERT INTO tipos (nome_tipos) VALUES ($1) RETURNING *',
    [name]
  );

  // RETURNING * faz o PostgreSQL devolver
  // o registro recém-criado.
  return result.rows[0];
};


// Função responsável por atualizar um tipo
// existente na tabela "tipos".
const update = async (id, name) => {

  // UPDATE altera os dados de um registro.
  //
  // SET define o novo valor do nome.
  //
  // WHERE id_tipos = $2 garante que somente
  // o tipo com o ID informado será alterado.
  const result = await pool.query(
    `UPDATE tipos
     SET nome_tipos = $1
     WHERE id_tipos = $2
     RETURNING *`,
    [name, id]
  );

  // RETURNING * devolve o registro atualizado.
  //
  // Se o ID não existir, rows[0] será undefined.
  return result.rows[0];
};


// Função responsável por excluir um tipo
// com base no ID informado.
const remove = async (id) => {

  // DELETE remove um registro da tabela.
  //
  // WHERE id_tipos = $1 garante que apenas
  // o registro com o ID informado será removido.
  const result = await pool.query(
    'DELETE FROM tipos WHERE id_tipos = $1 RETURNING *',
    [id]
  );

  // RETURNING * devolve o registro removido.
  //
  // Isso permite que a Controller saiba
  // se o registro existia ou não.
  return result.rows[0];
};


// Exporta todas as funções da Model.
//
// Assim elas podem ser utilizadas pela Controller.
export default {
  getAll,
  getById,
  create,
  update,
  remove
};