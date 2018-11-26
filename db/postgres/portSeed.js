const { Readable } = require('stream');
const fs = require('fs');
const faker = require('faker');

// let reviewId = 1;
// let houseId = 1;
// let reviewNum = 1;
// let maxReviewNum = Math.floor(Math.random() * 10) + 1;
// const inStream = new Readable({
//   read() {
//     if (houseId <= 1000000) {
//         let name = faker.name.findName();
//         let avatarUrl = faker.image.avatar();
//         let review_body = faker.lorem.paragraph();
//         let review_time = faker.date.past().toISOString();
//         let accuracy = Math.floor(Math.random() * 5) + 1;
//         let communication = Math.floor(Math.random() * 5) + 1;
//         let cleanliness = Math.floor(Math.random() * 5) + 1;
//         let checkIn = Math.floor(Math.random() * 5) + 1;
//         let value = Math.floor(Math.random() * 5) + 1;
//         let location = Math.floor(Math.random() * 5) + 1;
//       this.push(`${reviewId},${houseId},${name},${avatarUrl},${review_body},${review_time},${accuracy},${communication},${cleanliness},${checkIn},${value},${location}\n`);
//       reviewNum++;
//       if (reviewNum > maxReviewNum) {
//         reviewNum = 1;
//         maxReviewNum = Math.floor(Math.random() * 10) + 1;
//         houseId++;
//       }
//       reviewId++;
//     } else {
//       this.push(null);
//     }
//   },
// });
// inStream.pipe(process.stdout);

let seeder = (num, houseId, reviewId) => {
  let output = '';
  for (let i = 0; i < num; i++) {
    let name = faker.name.findName();
    let avatarUrl = faker.image.avatar();
    let review_body = faker.lorem.sentence();
    let review_time = faker.date.past().toISOString();
    let accuracy = Math.floor(Math.random() * 5) + 1;
    let communication = Math.floor(Math.random() * 5) + 1;
    let cleanliness = Math.floor(Math.random() * 5) + 1;
    let checkIn = Math.floor(Math.random() * 5) + 1;
    let value = Math.floor(Math.random() * 5) + 1;
    let location = Math.floor(Math.random() * 5) + 1;
    output += `${reviewId},${houseId},${name},${avatarUrl},${review_body},${review_time},${accuracy},${communication},${cleanliness},${checkIn},${value},${location}\n`
    reviewId++;
  }
  return output;
}

let reviewId = 1;
let houseId = 1;
let reviewNum = 0;
let maxReviewNum = Math.floor(Math.random() * 10) + 1;
const inStream = new Readable({
  read() {
    if (houseId <= 10000000) {
      this.push(seeder(maxReviewNum, houseId, reviewId));
      houseId++;
      reviewId += maxReviewNum;
      maxReviewNum = Math.floor(Math.random() * 10) + 1;
    } else {
      this.push(null);
    }
  },
});
inStream.pipe(process.stdout);