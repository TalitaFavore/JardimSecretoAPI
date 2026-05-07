import pool from '../config/db.js';

// Puxar todos os dados
const getAll = async () => {
  const result = await pool.query('SELECT * FROM tipos');
  return result.rows;
};

// Criar novo tipo
const create = async (name) => {
  const result = await pool.query(
    'INSERT INTO tipos (name) VALUES ($1) RETURNING *',
    [name]
  );

  return result.rows[0];
};


export default {
  getAll,
  create
};