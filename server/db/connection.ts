import { Pool } from 'pg';


const dbParams = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const db = new Pool(dbParams);

db.connect();

export default db;