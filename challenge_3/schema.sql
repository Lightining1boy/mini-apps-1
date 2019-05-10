


DROP DATABASE IF EXISTS profilelist;

CREATE DATABASE profilelist;

USE profilelist;

CREATE TABLE profiles (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(200) not null,
email VARCHAR(200) not null,
password INT,
address VARCHAR(200) not null,
phone_number INT,
credit_card_number INT,
experation_date INT,
cvv INT,
zipcode INT
)