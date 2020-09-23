DROP DATABASE IF EXISTS myDb;

CREATE DATABASE myDb;

USE myDb ;


CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  is_favorite boolean NOT NULL default 0,
  PRIMARY KEY (id)
);





-- CREATE TABLE user(
--     id int NOT NULL AUTO_INCREMENT?
--     name varchar (50) NOT NULL,
-- );