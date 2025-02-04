USE ecommerce;
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  description TEXT, -- NOW WE DON"T HAVE ANY description IN THE TABLE
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE categories  
DROP COLUMN description;


SELECT * FROM categories;

INSERT INTO categories (name) VALUES
('Electronics & Gadgets'),
('Fashion & Apparel'),
('Home & Kitchen'),
('Beauty & Personal Care'),
('Health & Wellness'),
('Grocery & Food'),
('Books & Stationery'),
('Baby & Kids'),
('Sports & Outdoor'),
('Automotive & Accessories');