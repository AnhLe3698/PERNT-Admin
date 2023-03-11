// const express = require('express');
import express from "express";
import morgan from 'morgan';
import cors from 'cors';

// load .env data into process.env
require('dotenv').config();

const PORT = process.env.PORT || 8040;
const app = express();

// Allows for X-site requests
app.use(cors())

// For monitoring requests loading, timing and status
app.use(morgan('dev'))

// Allows for JSOn to be sent in the request body without stringifying it explicitly
app.use(express.json())

// qury strings can be added to the header amd emcoded properly
app.use(express.urlencoded({extended: true}))


app.listen(PORT, () => {
  console.log(`server listening on http://localhost: ${PORT}`);
})

app.get('/', (req, res) => {
  const legoMyego = 's';
  res.send('hello worlds');
})