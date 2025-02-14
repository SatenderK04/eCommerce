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

ALTER TABLE products ADD COLUMN highlights TEXT;


INSERT INTO products (name, description, price, stock, category_id, seller_id) VALUES
('Wireless Bluetooth Earbuds', 'High-quality wireless earbuds with active noise cancellation, deep bass, sweat-resistant design, long battery life, and Bluetooth 5.0 connectivity for seamless music and calls anywhere.', 49.99, 100, 1, 33),
('Men''s Cotton T-Shirt', 'Soft and breathable cotton t-shirt available in multiple sizes and colors. Perfect for casual wear, offering comfort, durability, and style for any occasion.', 12.99, 200, 2, 33),
('Stainless Steel Water Bottle', 'Vacuum-insulated stainless steel water bottle keeps drinks hot for 12 hours and cold for 24 hours. Leak-proof, lightweight, and ideal for gym, travel, and office use.', 19.99, 150, 3, 33),
('Face Moisturizer Cream', 'Hydrating face cream with SPF 30 provides deep nourishment, protection from UV rays, and long-lasting moisture. Ideal for all skin types and daily skincare routine.', 15.49, 120, 4, 33),
('Digital Blood Pressure Monitor', 'Automatic blood pressure monitor with large LCD display, memory storage, and easy one-touch operation. Provides accurate BP readings for home health monitoring.', 29.99, 80, 5, 33),
('Organic Green Tea', '100% organic green tea leaves sourced from high-altitude plantations. Rich in antioxidants, boosts metabolism, and promotes relaxation with every sip.', 9.99, 250, 6, 33),
('Wireless Gaming Mouse', 'Ergonomic wireless gaming mouse with adjustable DPI, programmable buttons, RGB lighting, and long battery life. Designed for smooth and precise gaming performance.', 39.99, 90, 1, 33),
('Leather Office Bag', 'Premium leather office bag with multiple compartments for laptop, documents, and accessories. Durable, stylish, and ideal for professionals on the go.', 79.99, 50, 2, 33),
('Ceramic Dinner Set', 'Elegant 12-piece ceramic dinner set with a modern design. Perfect for daily use or special occasions. Microwave and dishwasher safe for convenience.', 54.99, 60, 3, 33),
('Aloe Vera Face Wash', 'Refreshing face wash infused with aloe vera extracts to deeply cleanse, hydrate, and soothe skin. Free from harsh chemicals and suitable for all skin types.', 7.99, 180, 4, 33),
('Adjustable Dumbbell Set', 'Professional adjustable dumbbells with multiple weight settings for effective home workouts. Durable, compact, and easy to store. Suitable for all fitness levels.', 69.99, 40, 9, 33),
('Soft Cotton Baby Blanket', 'Ultra-soft and breathable baby blanket made from 100% organic cotton. Keeps babies warm and cozy while ensuring comfort and safety for newborns.', 24.99, 75, 8, 33),
('SUV Car Cover', 'All-weather SUV car cover protects against dust, UV rays, rain, and scratches. Made from durable material with elastic hem for a perfect fit.', 45.99, 30, 10, 33),
('Stainless Steel Cookware Set', 'Premium 5-piece stainless steel cookware set with non-stick coating. Includes frying pan, saucepan, and stockpot for versatile cooking needs.', 89.99, 55, 3, 33),
('Portable Power Bank 20000mAh', 'High-capacity 20000mAh power bank with fast charging, dual USB ports, and LED indicator. Compatible with smartphones, tablets, and other USB devices.', 34.99, 120, 1, 33),
('Fitness Smartwatch', 'Feature-packed smartwatch with heart rate monitoring, step tracking, sleep analysis, and call notifications. Waterproof design with long battery life.', 59.99, 95, 5, 33),
('Classic Leather Wallet', 'Genuine leather wallet with multiple card slots, coin pocket, and RFID protection. Slim and stylish design for everyday use.', 29.99, 200, 2, 33),
('Hardcover Notebook Set', 'Premium hardcover notebook set with ruled pages, elastic closure, and ribbon bookmark. Ideal for students, professionals, and journaling enthusiasts.', 14.99, 160, 7, 33),
('Adjustable Laptop Stand', 'Portable and ergonomic laptop stand with adjustable height, anti-slip design, and ventilation for better heat dissipation. Perfect for home and office use.', 26.99, 100, 1, 33),
('Professional Chef Knife', 'Razor-sharp stainless steel chef knife with ergonomic handle for precision cutting. Ideal for slicing, dicing, and chopping vegetables, meat, and fruits.', 39.99, 70, 3, 33);

UPDATE products SET highlights = 'Active noise cancellation, Deep bass, Sweat-resistant, Long battery life, Bluetooth 5.0' 
WHERE name = 'Wireless Bluetooth Earbuds';

UPDATE products SET highlights = '100% Cotton, Breathable fabric, Multiple colors available, Comfortable fit' 
WHERE name = 'Men''s Cotton T-Shirt';

UPDATE products SET highlights = 'Vacuum-insulated, Keeps drinks hot for 12 hrs & cold for 24 hrs, Leak-proof, Lightweight' 
WHERE name = 'Stainless Steel Water Bottle';

UPDATE products SET highlights = 'Hydrating, SPF 30 protection, Suitable for all skin types, Non-greasy formula' 
WHERE name = 'Face Moisturizer Cream';

UPDATE products SET highlights = 'Large LCD display, Memory storage, One-touch operation, Accurate readings' 
WHERE name = 'Digital Blood Pressure Monitor';

UPDATE products SET highlights = '100% Organic, Rich in antioxidants, Boosts metabolism, High-altitude plantation' 
WHERE name = 'Organic Green Tea';

UPDATE products SET highlights = 'Adjustable DPI, RGB lighting, Programmable buttons, Long battery life' 
WHERE name = 'Wireless Gaming Mouse';

UPDATE products SET highlights = 'Genuine leather, Multiple compartments, Durable, Stylish design' 
WHERE name = 'Leather Office Bag';

UPDATE products SET highlights = '12-piece set, Modern design, Microwave & dishwasher safe, Durable' 
WHERE name = 'Ceramic Dinner Set';

UPDATE products SET highlights = 'Aloe vera extracts, Deep cleansing, Hydrating, Free from harsh chemicals' 
WHERE name = 'Aloe Vera Face Wash';

UPDATE products SET highlights = 'Adjustable weights, Durable, Compact, Easy to store' 
WHERE name = 'Adjustable Dumbbell Set';

UPDATE products SET highlights = '100% Organic cotton, Ultra-soft, Breathable, Perfect for newborns' 
WHERE name = 'Soft Cotton Baby Blanket';

UPDATE products SET highlights = 'All-weather protection, UV-resistant, Elastic hem, Durable material' 
WHERE name = 'SUV Car Cover';

UPDATE products SET highlights = '5-piece set, Non-stick coating, Includes frying pan & stockpot, Stainless steel' 
WHERE name = 'Stainless Steel Cookware Set';

UPDATE products SET highlights = '20000mAh capacity, Fast charging, Dual USB ports, LED indicator' 
WHERE name = 'Portable Power Bank 20000mAh';

UPDATE products SET highlights = 'Heart rate monitor, Step tracker, Sleep analysis, Waterproof' 
WHERE name = 'Fitness Smartwatch';

UPDATE products SET highlights = 'Genuine leather, RFID protection, Multiple card slots, Slim design' 
WHERE name = 'Classic Leather Wallet';

UPDATE products SET highlights = 'Ruled pages, Hardcover, Elastic closure, Ribbon bookmark' 
WHERE name = 'Hardcover Notebook Set';

UPDATE products SET highlights = 'Adjustable height, Anti-slip design, Ventilated, Portable' 
WHERE name = 'Adjustable Laptop Stand';

UPDATE products SET highlights = 'Razor-sharp, Ergonomic handle, Precision cutting, Stainless steel' 
WHERE name = 'Professional Chef Knife';
