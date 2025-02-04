USE ecommerce;

CREATE TABLE subcategories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE, -- Parent category
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO subcategories (category_id, name) VALUES
-- (1, 'Mobile Phones'),
-- (1, 'Laptops & Computers'),
-- (1, 'Smartwatches & Wearables'),
-- (1, 'Headphones & Earbuds');

