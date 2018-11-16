const { Readable } = require('stream');
const fs = require('fs');
const faker = require('faker');

let reviewId = 1;
let houseId = 1;
let reviewNum = 0;
let maxReviewNum = Math.floor(Math.random() * 3) + 1;
const inStream = new Readable({
  read() {
    if (houseId <= 100) {
        var a = faker.name.findName();
        var b = faker.image.avatar();
        var c = faker.lorem.paragraph();
        var d = faker.date.past();
        var e = Math.floor(Math.random() * 5) + 1;
        var f = Math.floor(Math.random() * 5) + 1;
        var g = Math.floor(Math.random() * 5) + 1;
        var h = Math.floor(Math.random() * 5) + 1;
        var i = Math.floor(Math.random() * 5) + 1;
        var j = Math.floor(Math.random() * 5) + 1;
      this.push(`${reviewId}\t${houseId}\t${a}\t${b}\t${c}\t${d}\t${e}\t${f}\t${f}\t${h}\t${i}\t${j}\n`);
      reviewNum++;
      if (reviewNum > maxReviewNum) {
        reviewNum = 0;
        maxReviewNum = Math.floor(Math.random() * 3) + 1;
        houseId++;
      }
      reviewId++;
    } else {
      this.push(null);
    }
  },
});
inStream.pipe(process.stdout);

