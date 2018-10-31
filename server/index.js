const express = require('express');

const app = express();

const mysql = require('mysql');

const bodyParser = require('body-parser');

let ip = '127.0.0.1';

let port = 3000;

app.use(express.static('./client/dist'));

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ReviewSystem',
  multipleStatements: true
});

connection.connect();

app.get('/rooms/:houseId', function(req, res, err) {
  connection.query(`select * from reviews left join customers on customers.id = reviews.reviewer_id where house_id= ${req.params.houseId}`, function (err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});


app.listen(3000, () => {
  console.log(`Connected to http://${ip}/${port}`);
});