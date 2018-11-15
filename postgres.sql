-- drop database if exists mydb;
-- create database mydb;
-- use mydb;
-- drop table if exists Users;
-- drop table if exists Reviews;

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  avatarUrl VARCHAR(100)
);

CREATE TABLE Reviews (
  id SERIAL PRIMARY KEY,
  reviewer_id INT,
  review_body VARCHAR(500),
  review_time VARCHAR(60),
  accuracy INT,
  communication INT,
  cleanliness INT,
  "check-in" INT,
  value INT,
  location INT,
  house_id INT,
  FOREIGN KEY (house_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- node --max-old-space-size=8192