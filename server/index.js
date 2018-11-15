const express = require('express');

const app = express();

// const mysql = require('mysql');

const { Pool } = require('pg');

const bodyParser = require('body-parser');

const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static('./client/dist'));

app.use(bodyParser.json());

const db = new Pool({
  database: 'mydb',
  user: 'drewcurtis',
  password: '',
});

// const connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT,
//   database: process.env.RDS_DB_NAME,
//   multipleStatements: true,
// });

// connection.connect();

app.get('/api/:houseId', (req, res) => {
  connection.query(`select * from reviews left join customers on
  customers.id = reviews.reviewer_id where house_id= ${req.params.houseId}`,
  (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Connected to http://localhost:${port}`);
});
