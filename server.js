const express = require('express');
const colors = require('colors');
const moragan = require('morgan');
const dotenv = require('dotenv');

// test object
const app = express();

// middlewares
app.use(express.json());
app.use(moragan('dev'));

// routes
app.get('/', (req, res) => {
  res.status(200).send({
    message: "Server running",
  });
});