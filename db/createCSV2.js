const fs = require('fs');
const faker = require('faker');
const csv = require('fast-csv');


let createCSV = (rows = 100000, reviewCount = 5, start = rows * 2 + 1) => {
  let reviewId = start;
  for (let i = rows + 1; i <= rows * 2; i++) {
    // let rand = Math.floor(Math.random() * reviewCount) + 1;
    for (let j = 1; j <= 2; j++) {
      csvStream.write([
        reviewId++,
        i,
        faker.name.findName(),
        faker.image.avatar(),
        faker.lorem.sentence(),
        faker.date.past(),
        Math.floor(Math.random() * 5) + 1,
        Math.floor(Math.random() * 5) + 1,
        Math.floor(Math.random() * 5) + 1,
        Math.floor(Math.random() * 5) + 1,
        Math.floor(Math.random() * 5) + 1,
        Math.floor(Math.random() * 5) + 1
      ]);
    }
  }
}


var csvStream = csv.createWriteStream({headers: false}),
    writableStream = fs.createWriteStream("sdc2.csv");

writableStream.on("finish", function(){
  console.log('CSV2 DONE!');
});

csvStream.pipe(writableStream);

createCSV(50000000, 2);

csvStream.end();