CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username TEXT,
  email VARCHAR(320),
  password VARCHAR(64),
  address TEXT,
  city TEXT,
  state TEXT,
  zip VARCHAR(10),
  phone VARCHAR(10),
  cardnumber VARCHAR(32),
  expiration TEXT,
  cvv VARCHAR(10),
  billzip VARCHAR(10)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
     mysql -u student -p = starts sql
 *    mysql -u student -p < schema.sql
 *  to create the database and the tables.*/

