import express from 'express';
import cors from 'cors';
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  host: 'postgres',
  user: 'user',
  password: 'password',
  database: 'app_db',
  port: 5432,
});

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json({
    message: 'API funcionando 🚀',
    time: result.rows[0],
  });
});

app.listen(4000, () => {
  console.log('Backend corriendo en puerto 4000');
});
