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
 },

 addItem: (task) => {
    return db.query(`
      INSERT INTO list (userID, name, completion) VALUES ('user456', $1, FALSE);
    `, [task])
    .then(() => {
      return db.query(`
        SELECT * FROM "list";
      `);
    })
    .then((res) => {
      console.log(res.rows[0]) // Hello World!
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
  },

  updateItem: (name) => {
    return db.query(`
      UPDATE list
      SET completion = TRUE
      WHERE name = $1
    `, [name])
    .then((res) => {
      console.log(res.rowCount + " rows updated"); // Print the number of rows updated
      return res.rowCount;
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
}