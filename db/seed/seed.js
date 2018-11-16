
const {
  Users,
  Reviews,
} = require('./index.js');
const seed = require('./data.js');
const db = require('../index.js');

const insertDummyData = () => {
  db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.RDS_DB_NAME};`)
    .then(() => db.sync({ force: true }))
    .then(() => Users.bulkCreate(seed.users))
    .then(() => Reviews.bulkCreate(seed.reviews))
    .then(() => db.close())
    .catch((err) => {
      db.close();
      throw err.parent;
    });
};

insertDummyData();
