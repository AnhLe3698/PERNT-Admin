// const router = require('../index')

import { Router } from 'express'
import db from './db_queries';
const router = Router();

router.get('/', (req, res) => {
  res.send('YoYoApi');
})

router.get('/todo', (req, res) => {
  
  db.listAll().then((info) => {
    res.send(info)
  })
})

router.put('/todo', (req, res) => {
  db.addItem(req.body.task).then((info) => {
    res.send(info);
  })
})

router.put('/todo/complete', (req, res) => {
  db.updateItem(req.body.name).then(() => {
    db.listAll().then((info) => {
      res.send(info)
    })
  })
})


router.delete('/todo/:name', (req, res) => {
  const name = req.params.name;
  db.deleteItem(name).then((info) => {
    res.send(info);
  })
});

export default router;