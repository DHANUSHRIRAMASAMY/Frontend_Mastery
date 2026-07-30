# Topics Covered

- Introduction to Database Schema Design
- Identifying Entities
- Modeling Products and Orders
- Designing Tables
- Primary Key (PK)
- Foreign Key (FK)
- One-to-Many Relationships
- Drafting the Database Schema
- Creating Tables in PostgreSQL
- Inserting Sample Data
- Retrieving Data using SELECT
- Testing Relationships using JOIN
- Reviewing the Database Schema

---

# What is Database Schema Design?

A database schema is the blueprint or structure of a database. It defines how data is organized, how tables are created, and how they relate to one another. A well-designed schema reduces data redundancy, improves consistency, and makes database management easier.

---

# Project Scenario

To understand schema design practically, I created a simple **E-Commerce Database** that manages customer information, products, orders, and payments.

The database consists of the following tables:

- Categories
- Customers
- Products
- Orders
- Order_Items
- Payments

---

# Database Design

## Categories Table

Stores different product categories.

Columns:
- category_id
- category_name

Primary Key:
- category_id

---

## Customers Table

Stores customer details.

Columns:
- customer_id
- customer_name
- email
- phone
- address

Primary Key:
- customer_id

---

## Products Table

Stores product information.

Columns:
- product_id
- product_name
- price
- stock
- category_id

Primary Key:
- product_id

Foreign Key:
- category_id references Categories

---

## Orders Table

Stores customer order details.

Columns:
- order_id
- customer_id
- order_date
- total_amount

Primary Key:
- order_id

Foreign Key:
- customer_id references Customers

---

## Order_Items Table

Stores the products included in each order.

Columns:
- order_item_id
- order_id
- product_id
- quantity
- price

Primary Key:
- order_item_id

Foreign Keys:
- order_id references Orders
- product_id references Products

---

## Payments Table

Stores payment information for each order.

Columns:
- payment_id
- order_id
- payment_method
- payment_status
- payment_date

Primary Key:
- payment_id

Foreign Key:
- order_id references Orders

---

# Relationships Implemented

The following relationships were established:

- One Category can have many Products.
- One Customer can place many Orders.
- One Order can contain multiple Products through the Order_Items table.
- One Product can appear in multiple Orders.
- Each Order is linked with its Payment details.

These relationships were implemented using Foreign Keys to maintain referential integrity.

---

# Practical Implementation

## Step 1

Created a new PostgreSQL database named:

```
ecommerce_db
```

---

## Step 2

Created all six tables using SQL CREATE TABLE statements.

The tables include:

- categories
- customers
- products
- orders
- order_items
- payments

---

## Step 3

Defined Primary Keys for every table.

Example:

- customer_id
- product_id
- order_id
- payment_id

---

## Step 4

Defined Foreign Keys to establish relationships.

Examples:

- customer_id in Orders references Customers
- category_id in Products references Categories
- product_id in Order_Items references Products
- order_id in Order_Items references Orders
- order_id in Payments references Orders

---

## Step 5

Inserted sample records into every table using INSERT statements.

The sample data included:

- Product Categories
- Customers
- Products
- Orders
- Order Items
- Payments

---

## Step 6

Verified the inserted data using SELECT statements.

Examples:

```sql
SELECT * FROM customers;

SELECT * FROM products;

SELECT * FROM orders;
```

---

## Step 7

Tested table relationships using JOIN queries.

### Customer Orders

```sql
SELECT
customers.customer_name,
orders.order_id,
orders.order_date,
orders.total_amount
FROM customers
JOIN orders
ON customers.customer_id = orders.customer_id;
```

### Products Purchased

```sql
SELECT
orders.order_id,
products.product_name,
order_items.quantity,
order_items.price
FROM orders
JOIN order_items
ON orders.order_id = order_items.order_id
JOIN products
ON order_items.product_id = products.product_id;
```

### Complete Order Details

```sql
SELECT
customers.customer_name,
products.product_name,
order_items.quantity,
payments.payment_method,
payments.payment_status
FROM customers
JOIN orders
ON customers.customer_id = orders.customer_id
JOIN order_items
ON orders.order_id = order_items.order_id
JOIN products
ON order_items.product_id = products.product_id
JOIN payments
ON orders.order_id = payments.order_id;
```

These queries successfully retrieved related information from multiple tables, demonstrating how JOIN operations work in a relational database.

---


