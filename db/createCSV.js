const fs = require('fs');
const faker = require('faker');
const csv = require('fast-csv');

var csvStream = csv.createWriteStream({headers: false}),
    writableStream = fs.createWriteStream("sdcUsers.csv");

writableStream.on("finish", function(){
  console.log('DONE!');
});

csvStream.pipe(writableStream);

for (let j = 1; j <= 10000000; j++) {
  csvStream.write([
    j,
    faker.name.findName(),
    faker.image.avatar(),
  ])
}

csvStream.end();