CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    address TEXT
);
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    stock INT,
    category_id INT,
    FOREIGN KEY (category_id)
    REFERENCES categories(category_id)
);
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10,2),
    FOREIGN KEY (customer_id)
    REFERENCES customers(customer_id)
);
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (order_id)
    REFERENCES orders(order_id),
    FOREIGN KEY (product_id)
    REFERENCES products(product_id)
);
CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    order_id INT,
    payment_method VARCHAR(50),
    payment_status VARCHAR(50),
    payment_date DATE,
    FOREIGN KEY (order_id)
    REFERENCES orders(order_id)
);
INSERT INTO categories (category_name)
VALUES
('Electronics'),
('Accessories');
INSERT INTO customers (customer_name, email, phone, address)
VALUES
('Dhanushri', 'dhanushri@gmail.com', '9876543210', 'Namakkal'),
('Arun', 'arun@gmail.com', '9876543211', 'Coimbatore');
INSERT INTO products (product_name, price, stock, category_id)
VALUES
('Laptop', 50000, 10, 1),
('Mobile', 25000, 20, 1),
('Mouse', 800, 50, 2),
('Keyboard', 1500, 30, 2);
INSERT INTO orders (customer_id, order_date, total_amount)
VALUES
(1, '2026-07-30', 50800.00),
(2, '2026-07-30', 26500.00);
INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES
(1, 1, 1, 50000.00),
(1, 3, 1, 800.00),
(2, 2, 1, 25000.00),
(2, 4, 1, 1500.00);
INSERT INTO payments (order_id, payment_method, payment_status, payment_date)
VALUES
(1, 'UPI', 'Completed', '2026-07-30'),
(2, 'Credit Card', 'Completed', '2026-07-30');
SELECT * FROM customers;
SELECT * FROM categories;
SELECT * FROM products;
SELECT * FROM orders;
SELECT * FROM order_items;
SELECT * FROM payments;

SELECT
c.customer_name,
o.order_id,
o.order_date,
o.total_amount
FROM customers c
JOIN orders o
ON c.customer_id = o.customer_id;

SELECT
o.order_id,
p.product_name,
oi.quantity,
oi.price
FROM orders o
JOIN order_items oi
ON o.order_id = oi.order_id
JOIN products p
ON oi.product_id = p.product_id;

SELECT
c.customer_name,
p.product_name,
oi.quantity,
pay.payment_method,
pay.payment_status
FROM customers c
JOIN orders o
ON c.customer_id = o.customer_id
JOIN order_items oi
ON o.order_id = oi.order_id
JOIN products p
ON oi.product_id = p.product_id
JOIN payments pay
ON o.order_id = pay.order_id;

-- Find all products in the Electronics category
SELECT p.product_name, c.category_name
FROM products p
JOIN categories c
ON p.category_id = c.category_id;

-- Count the total number of orders
SELECT COUNT(*) AS total_orders
FROM orders;

-- Find the total amount spent by each customer
SELECT
c.customer_name,
SUM(o.total_amount) AS total_spent
FROM customers c
JOIN orders o
ON c.customer_id = o.customer_id
GROUP BY c.customer_name;