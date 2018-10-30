const express = require('express');

const app = express();

const mysql = require('mysql');

const bodyParser = require('body-parser');

const dummy_reviews = require('../dummy_reviews.js');
const dummy_user = require('../dummy_user.js');

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

//connection.query(`delete from customers`);

for (var j = 0; j < dummy_user.length; j++) {
  connection.query(`insert into customers (avatar_url, username) values (
    '${dummy_user[j].avatarUrl}',
    '${dummy_user[j].name}'
    )`);
}

connection.query(`delete from reviews`);

for (var i = 0; i < dummy_reviews.length; i++) {
  connection.query(`insert into reviews (reviewer_id, review_body, review_time, accuracy, communication, cleanliness, checkIn, value, location, house_id) values (
    '${dummy_reviews[i].reviewer_id}',
    '${dummy_reviews[i].review_body}',
    '${dummy_reviews[i].review_time}',
    '${dummy_reviews[i].accuracy}',
    '${dummy_reviews[i].communication}',
    '${dummy_reviews[i].cleanliness}',
    '${dummy_reviews[i]['check-in']}',
    '${dummy_reviews[i].value}',
    '${dummy_reviews[i].location}',
    '${dummy_reviews[i].house_id}'
    )`);
}

app.get('/rooms/:houseId', function(req, res, err) {
  connection.query(`select * from reviews left join customers on customers.id = reviews.reviewer_id where house_id= ${req.params.houseId}`, function (err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});


app.listen(3000, () => {
  console.log(`Connected to http://${ip}/${port}`);
});