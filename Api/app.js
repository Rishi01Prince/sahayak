const express = require('express')
const app = express();

const morgan = require('morgan')
const mongoDB = require("./db");
const cookie = require("cookie-parser");
app.use(cookie());
app.use(morgan('dev'));

const cors = require("cors");


app.get('/', (req, res) => {
  res.send('You are successfully connected to app!')
})

module.exports = app;

