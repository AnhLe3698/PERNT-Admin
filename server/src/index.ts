// load .env data into process.env
// require('dotenv').config();
import * as dotenv from 'dotenv';
dotenv.config();

import express from "express";
import morgan from 'morgan';
import cors from 'cors';

// Import our router
import router from './routes/routes'


const PORT = process.env.PORT || 8020;
const app = express();

// Allows for X-site requests
app.use(cors())

// For monitoring requests loading, timing and status
app.use(morgan('dev'))

// Allows for JSOn to be sent in the request body without stringifying it explicitly
app.use(express.json())

// query strings can be added to the header amd emcoded properly
app.use(express.urlencoded({extended: true}))

// Initialize listener
app.listen(PORT, () => {
  console.log(`server listening on http://localhost: ${PORT}`);
})

app.use('/api', router)

app.get('/', (req, res) => {
  res.send('hello world');
})
