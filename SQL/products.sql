USE ecommerce;
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
  stock INTEGER NOT NULL CHECK (stock >= 0),
  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
  seller_id INTEGER REFERENCES users(userId) ON DELETE CASCADE, -- Seller = user with role 'Seller'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM products;
SET SQL_SAFE_UPDATES = 0;
DELETE FROM products;