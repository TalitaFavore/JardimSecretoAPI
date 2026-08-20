import pool from '../config/db.js';

const create = async (email, password) => {
  const result = await pool.query(
    `INSERT INTO usuarios (email, password)
     VALUES ($1, $2)
     RETURNING id_usuarios, email`,
    [email, password]
  );

  return result.rows[0];
};

const findByEmail = async (email) => {
  const result = await pool.query(
    'SELECT * FROM usuarios WHERE email = $1',
    [email]
  );

  return result.rows[0];
};

export default {
  create,
  findByEmail
};
