CREATE DATABASE eCommerce;
USE eCommerce;

CREATE TABLE users (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE users 
MODIFY COLUMN role ENUM('Seller', 'Buyer') NOT NULL DEFAULT 'Buyer';

SELECT DISTINCT role FROM users;

SELECT * FROM users WHERE role = "Seller";
