USE eCommerce;

CREATE TABLE product_details (
  id INT AUTO_INCREMENT PRIMARY KEY, -- Unique ID for each product detail
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE, -- Links to the products table
  description TEXT NOT NULL, -- Detailed description of the product
  price DECIMAL(10, 2) NOT NULL CHECK (price >= 0), -- Price of the product
  rating DECIMAL(3, 2) CHECK (rating >= 0 AND rating <= 5), -- Average rating (0 to 5)
  highlights TEXT, -- Array of product highlights (e.g., ["Fast charging", "5G support"])
  seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- Links to the seller in the users table
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of creation
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp of last update
);

SELECT * FROM product_details;