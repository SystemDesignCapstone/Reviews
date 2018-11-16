const { Pool, Client } = require('pg');
const connection = 'postgresql://drewcurtis:@localhost:5432/sdc';

const db = new Client(connection);
db.connect();

const csv = `\copy housereviews FROM '/Users/drewcurtis/Documents/WebDev/HackReactor/ImmersionHRR34/SDC/Reviews/sdc.csv' WITH (FORMAT CSV);`;
const csv2 = `\copy housereviews FROM '/Users/drewcurtis/Documents/WebDev/HackReactor/ImmersionHRR34/SDC/Reviews/sdc2.csv' WITH (FORMAT CSV);`;
const createIndex = `create index houseID on housereviews (house_id);`;

db.query(csv)
  .then(res => {
    console.log('SEED1 SUCCESS', res.rowCount);
    db.query(csv2)
    .then(res => {
      console.log('SEED2 SUCCESS', res.rowCount);
      db.query(createIndex)
      .then(res => {
        console.log('Table Indexed SUCCESS');
        db.end();
      })
      .catch(err => {
        console.log(err);
        db.end();
      });
    })
    .catch(err => {
      console.log(err);
      db.end();
    });
  })
  .catch(err => {
    console.log(err);
    db.end();
  });

// db.query(csv)
//   .then(res => {
//     console.log('SEED SUCCESS', res);
//     db.end();
//   })
//   .catch(err => {
//     console.log(err);
//     db.end();
//   });

// psql -d sdc -U drewcurtis -c "\copy housereviews FROM '/Users/drewcurtis/Documents/WebDev/HackReactor/ImmersionHRR34/SDC/Reviews/sdcPipe';"


//THE BELOW CODE SEEDS USING POOL.CONNECT BUT IT IS SLIGHTLY SLOWER.
// const { Pool } = require('pg');

// const config = {
//   user: 'drewcurtis',
//   database: 'sdc',
//   password: '',
//   host: 'localhost',
//   port: '5432',
//   max: 10,
//   idleTimeoutMillis: 30000,
// };

// const pool = new Pool(config);

// const csv = `COPY housereviews FROM '/Users/drewcurtis/Documents/WebDev/HackReactor/ImmersionHRR34/SDC/Reviews/sdc.csv' WITH (FORMAT CSV);`;

// pool.connect()
//   .then(client => {
//     return client.query(csv)
//       .then(res => {
//         client.release()
//         console.log('SEED SUCCESS', res)
//       })
//       .catch(e => {
//         client.release()
//         console.log(e.stack)
//       })
//   })