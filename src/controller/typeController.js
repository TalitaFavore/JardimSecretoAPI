import typeModel from '../model/typeModel.js'

const getAll = async (req, res) => {
  const types = await typeModel.getAll();
  res.json(types);
};

const create = async (req, res) => {
  const { name } = req.body;

  // validação simples
  if (!name) {
    return res.status(400).json({
      message: 'O nome é obrigatório'
    });
  }
  const newType = await typeModel.create(name);
  res.status(201).json(newType);
};

export default { getAll, create };