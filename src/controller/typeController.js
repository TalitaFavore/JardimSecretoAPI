import typeModel from '../model/typeModel.js'

const getAll = async (req, res) => {
  const types = await typeModel.getAll();
  res.json(types);
};

export default { getAll };