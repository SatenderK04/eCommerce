USE ecommerce;

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  buyer_id INTEGER REFERENCES users(userId) ON DELETE CASCADE, -- Buyer = user with role 'Buyer'
  total_amount DECIMAL(10, 2) NOT NULL CHECK (total_amount >= 0),
  status VARCHAR(50) NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending','Processing', 'Order Placed',
  'Shipped','Out for Delivery', 'Delivered', 'Cancelled','Delivery Attempted')),
  payment_id VARCHAR(255), -- Payment gateway reference (e.g., Stripe ID)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);