import db from '../../db/connection';

export default {
 listAll: () => {
  return db
  .query(`
  SELECT * FROM "list";`)
  .then((res) => {
    console.log(res.rows[0]) // Hello World!
    return res.rows;
  }).catch((err) => {
    console.log(err.message);
  });
 }
}