const fs = require('fs');
const faker = require('faker');
const csv = require('fast-csv');


let createCSV = (rows = 5000000, reviewCount = 5) => {
  let reviewId = 1;
  for (let i = 1; i <= rows; i++) {
    // let rand = Math.floor(Math.random() * reviewCount) + 1;
    for (let j = 1; j <= reviewCount; j++) {
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
    writableStream = fs.createWriteStream("sdc.csv");

writableStream.on("finish", function(){
  console.log('CSV DONE!');
});

csvStream.pipe(writableStream);

createCSV(500, 6);

csvStream.end();
