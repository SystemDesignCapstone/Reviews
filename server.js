const express = require('express');

const app = express();

const mysql = require('mysql');

const bodyParser = require('body-parser');

let ip = '127.0.0.1';

let port = 3000;

app.use(express.static('client/dist'));

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log(`Connected to http://${ip}/${port}`);
})