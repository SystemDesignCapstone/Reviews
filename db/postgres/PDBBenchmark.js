const { Pool, Client } = require('pg');
const connection = 'postgresql://drewcurtis@localhost:5432/sdc';
const cassandra = require('cassandra-driver');

//CASSANDRA QUERY
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'sdc'});

const start1 = process.hrtime();
const query = 'SELECT * FROM housereviews WHERE house_id = 9500000';
client.execute(query)
  .then(result => console.log(`CASSANDRA GET QUERY RESULTS:\n`, result.rows))
  .then(() => {
    const end1 = process.hrtime();
    console.log('CQLSH Query Time:\n', end1[0] - start1[0], 'seconds and', (end1[1]-start1[1]) / 1e6, 'milliseconds')
    client.shutdown();
  })

//POSTGRES QUERY
const db = new Client(connection);
db.connect();

const start = process.hrtime();
db.query(`select * from housereviews where house_id=9500000`, (err, rows) => {
  if (err) {
    console.log('ERROR', err);
  } else {
    console.log('POSTGRESQL GET QUERY RESULTS:\n\n', rows.rows[0]);
    const end = process.hrtime();
    console.log('PSQL Query Time:\n', end[0] - start[0], 'seconds and', (end[1]-start[1]) / 1e6, 'milliseconds');
    db.end();
  }
});


