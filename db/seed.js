const { Pool, Client } = require('pg');
const connection = 'postgresql://drewcurtis:@localhost:5432/mydb';

const db = new Client(connection);
db.connect();

const csvSeed = `COPY Users FROM '/Users/drewcurtis/Documents/WebDev/HackReactor/ImmersionHRR34/SDC/Reviews/sdcUsers.csv' WITH (FORMAT CSV);`;
// const csvSeed = `COPY Users FROM '${__dirname}../sdcUsers.csv'`;



db.query(csvSeed)
  .then(res => {
    console.log('SEED SUCCESS', res);
    db.end();
  })
  .catch(err => {
    console.log(err);
    db.end();
  });