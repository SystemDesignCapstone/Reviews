const express = require('express');

const app = express();

const mysql = require('mysql');

const bodyParser = require('body-parser');

const ip = '127.0.0.1';

const port = 3000;

app.use(express.static('./client/dist'));

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ReviewSystem',
  multipleStatements: true,
});

connection.connect();

app.get('/rooms/:houseId', (req, res) => {
  connection.query(`select * from reviews left join customers on 
  customers.id = reviews.reviewer_id where house_id= ${req.params.houseId}`,
  (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.listen(3000, () => {
  console.log(`Connected to http://${ip}/${port}`);
});
