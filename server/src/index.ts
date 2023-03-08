// const express = require('express');
import express from "express";
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// Allows for X-site requests
app.use(cors())

// For monitoring requests loading, timing and status
app.use(morgan('dev'))

// Allows for JSOn to be sent in the request body without stringifying it explicitly
app.use(express.json())

// qury strings can be added to the header amd emcoded properly
app.use(express.urlencoded({extended: true}))



app.listen(8040, () => {
  console.log(`server listening on http://localhost: 8040`);
})