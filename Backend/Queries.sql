CREATE DATABASE eCommerce;
USE eCommerce;
CREATE TABLE users(
    userId INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role ENUM("admin","user") NOT NULL DEFAULT "user",
    createdAt DATE DEFAULT CURRENT_DATE()  
);