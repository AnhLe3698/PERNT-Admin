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

export default router;