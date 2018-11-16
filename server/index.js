const express = require('express');
const app = express();
const { Pool, Client } = require('pg');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 3000;


app.use(morgan('dev'));
app.use(express.static('./client/dist'));
app.use(bodyParser.json());



const connection = 'postgresql://drewcurtis@localhost:5432/sdc';

const db = new Client(connection);
db.connect();



app.get('/api/:houseId', (req, res) => {
  db.query(`select * from housereviews where house_id= ${req.params.houseId}`,
  (err, rows) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      res.send(rows.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Connected to http://localhost:${port}`);
});
