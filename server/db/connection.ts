import { Pool } from 'pg';

// const pass: string = `${process.env.PGPASSWORD}`;
console.log('----', process.env.PGPASSWORD);

const dbParams = {
  user: process.env.PGHOST,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: 'labber',
  port: process.env.PGPORT,
};

const db = new Pool(dbParams);

db.connect();

export default db;