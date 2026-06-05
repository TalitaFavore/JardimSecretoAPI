import typeModel from '../model/typeModel.js';

// Função responsável por listar todos os tipos cadastrados.
// Geralmente é chamada por uma rota GET, por exemplo: GET /types
const getAll = async (req, res) => {

  // Chama a função getAll() da Model.
  // A Model é a camada responsável por acessar o banco de dados.
  const types = await typeModel.getAll();

  // Envia os dados encontrados para o cliente em formato JSON.
  res.json(types);
};

// Função responsável por criar um novo tipo.
// Geralmente é chamada por uma rota POST, por exemplo: POST /types
const create = async (req, res) => {

  // Obtém o campo "name" enviado no corpo da requisição (body).
  // Exemplo:
  // {
  //   "name": "Cacto"
  // }
  const { name } = req.body;

  // Verifica se o nome foi enviado.
  // Caso não exista, retorna erro 400 (Bad Request).
  if (!name) {
    return res.status(400).json({
      message: 'O nome é obrigatório'
    });
  }

  // Chama a Model para salvar o novo tipo no banco de dados.
  const newType = await typeModel.create(name);

  // Retorna status 201 (Created), indicando que o recurso foi criado.
  // Também devolve o objeto criado.
  res.status(201).json(newType);
};

// Função responsável por excluir um tipo.
// Geralmente é chamada por uma rota DELETE, por exemplo: DELETE /types/1
const remove = async (req, res) => {

  // req.params.id pega o valor informado na URL.
  // Exemplo:
  // DELETE /types/1
  // req.params.id = 1
  const deletedType = await typeModel.remove(req.params.id);

  // Verifica se o tipo existe.
  // Se não existir, retorna erro 404 (Not Found).
  if (!deletedType) {
    return res.status(404).json({
      message: 'Tipo não encontrado'
    });
  }

  // Retorna status 200 (OK) informando que a exclusão foi realizada.
  res.status(200).json({
    message: 'Tipo deletado com sucesso',

    // Mostra os dados do registro removido.
    deletedType
  });
};

// Exporta as funções da controller.
// Assim elas podem ser utilizadas nas rotas.
export default {
  getAll,
  create,
  remove
};