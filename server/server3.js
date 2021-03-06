require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 3002;
const { Pool, Client } = require('pg');
const cassandra = require('cassandra-driver');
const cache = require('express-redis-cache')();

//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.static('./client/dist'));
app.use(bodyParser.json());

//DB CONNECTIONS

//Postgress Connection
const connection = 'postgresql://drewcurtis@ec2-18-191-42-132.us-east-2.compute.amazonaws.com/sdc';

const db = new Client(connection);
db.connect();

//Cassandra Connection
// var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'sdc'});


//API ENPOINTS

// postgres ENDPOINT
app.get('/api/:houseId', cache.route(), (req, res) => {
  db.query(`select * from housereviews where house_id= ${req.params.houseId}`,
  (err, rows) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      res.send(rows.rows);
    }
  });
});

//Cassandra Endpoint
// app.get('/api/:houseId', (req, res) => {
//   const query = `SELECT * FROM housereviews WHERE house_id = ${req.params.houseId}`;
//   client.execute(query)
//     .then(result => res.send(result.rows));
// });

app.listen(port, () => {
  console.log(`Connected to http://localhost:${port}`);
});
