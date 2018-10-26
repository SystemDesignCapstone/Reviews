const express = require('express');

const app = express();

const mysql = require('mysql');

const bodyParser = require('body-parser');

let ip = '127.0.0.1';

let port = 3000;

app.use(express.static('client/dist'));

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ReviewSystem',
  multipleStatements: true
});

connection.connect();

app.get('/rooms/1', function(err, res) {
    connection.query(`select * from reviews`, function (err, rows, fields) {
    if (err) throw err;
    res.send(rows[0].review_body);
  });
});


app.listen(3000, () => {
  console.log(`Connected to http://${ip}/${port}`);
});