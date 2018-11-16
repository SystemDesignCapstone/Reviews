const { Pool, Client } = require('pg');
const connection = 'postgresql://drewcurtis@localhost:5432/sdc';

const db = new Client(connection);
db.connect();

const houseReviews =
`CREATE TABLE IF NOT EXISTS HouseReviews (
  review_id INT PRIMARY KEY,
  house_id INT,
  name VARCHAR(50),
  avatarUrl VARCHAR(100),
  review_body VARCHAR(500),
  review_time VARCHAR(60),
  accuracy INT,
  communication INT,
  cleanliness INT,
  "check-in" INT,
  value INT,
  location INT
)`;

db.query(houseReviews)
  .then(res => {
    console.log('CREATE TABLE SUCCESS', res.command);
    db.end();
  })
  .catch(err => {
  console.log(err);
  db.end();
  });





// const userTable =
// `CREATE TABLE IF NOT EXISTS Users (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(50),
//   avatarUrl VARCHAR(100)
// )`;

// const reviewTable =
// `CREATE TABLE IF NOT EXISTS Reviews (
//   id SERIAL PRIMARY KEY,
//   reviewer_id INT,
//   review_body VARCHAR(500),
//   review_time VARCHAR(60),
//   accuracy INT,
//   communication INT,
//   cleanliness INT,
//   "check-in" INT,
//   value INT,
//   location INT,
//   house_id INT,
//   FOREIGN KEY (house_id) REFERENCES Users(id) ON DELETE CASCADE
// )`;

// db.query(userTable)
//   .then(res => {
//     console.log('CREATE USER SUCCESS', res);
//     db.query(reviewTable)
//     .then(res => {
//       console.log('CREATE REVIEW SUCCESS', res);
//       db.end();
//     })
//     .catch(err => {
//     console.log(err);
//     db.end();
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     db.end();
//   });


