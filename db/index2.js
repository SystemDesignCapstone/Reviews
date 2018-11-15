const { Pool, Client } = require('pg');
const connection = 'postgresql://drewcurtis:@localhost:5432/mydb';

const db = new Client(connection);
db.connect();

const userTable =
`CREATE TABLE IF NOT EXISTS Users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  avatarUrl VARCHAR(100)
)`;

const reviewTable =
`CREATE TABLE IF NOT EXISTS Reviews (
  id SERIAL PRIMARY KEY,
  reviewer_id INT,
  review_body VARCHAR(500),
  review_time VARCHAR(60),
  accuracy INT,
  communication INT,
  cleanliness INT,
  "check-in" INT,
  value INT,
  location INT,
  house_id INT,
  FOREIGN KEY (house_id) REFERENCES Users(id) ON DELETE CASCADE
)`;

db.query(userTable)
  .then(res => {
    console.log('CREATE USER SUCCESS', res);
    db.query(reviewTable)
    .then(res => {
      console.log('CREATE REVIEW SUCCESS', res);
      db.end();
    })
  })
  .catch(err => {
    console.log(err);
    db.end();
  });









// const seed = require('./seed/data.js');
// const { Pool, Client } = require('pg');
// var format = require('pg-format');

// const pool = new Pool({
//   database: 'mydb',
// })

// const client = new Client({
//   databse: 'mydb',
// })


// const values = [['brianc', 'brian.m.carlson@gmail.com'], ['carl', 'carl.m.carlson@gmail.com']]
// const sqlUsers = format('INSERT INTO Users(name, avatarurl) VALUES %L', seed.users);
// const sqlReviews = format('INSERT INTO Reviews (reviewer_id, review_body, review_time, accuracy, communication, cleanliness, "check-in", value, location, house_id) VALUES %L', seed.reviews);

// // callback
// pool.query(sqlUsers, (err, res) => {
//   if (err) {
//     console.log(err.stack)
//   } else {
//     console.log('USERS', res)
//     // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
//   }
// })

// pool.query(sqlReviews)
//   .then(res => {
//     console.log('REVIEWS', res);
//     // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
//   })
//   .catch(e => console.error(e.stack))

















