## 1. Schema Creation

- Learned the purpose of a schema in PostgreSQL.
- Understood how schemas help organize database objects.
- Created a new schema named `library`.
- Used the `SET search_path` command to work inside the schema.

### Commands Practiced

```sql
CREATE SCHEMA library;

SET search_path TO library;
```

---

## 2. Table Creation

Created three tables to simulate a simple Library Management System.

### Books Table

Columns:

- book_id
- title
- price

### Members Table

Columns:

- member_id
- member_name
- phone

### Borrow Table

Columns:

- borrow_id
- book_id
- member_id
- borrow_date

During this practice, I learned how to define table structures and choose appropriate data types for different columns.

---

## 3. Inserting Sample Data

Inserted multiple records into each table using the `INSERT INTO` statement.

Practiced:

- Single row insertion
- Multiple row insertion
- Managing different data types
- Working with date values

---

## 4. Retrieving Data

Practiced different `SELECT` queries to retrieve information from the tables.

Examples:

- Display all records
- Display selected columns
- View complete table contents

Commands practiced:

```sql
SELECT * FROM books;

SELECT * FROM members;

SELECT * FROM borrow;

SELECT title FROM books;

SELECT title, price FROM books;
```

---

## 5. Filtering Records

Learned how to retrieve specific records using the `WHERE` clause.

Examples:

- Books with price greater than 50
- Books with price less than 100

Example:

```sql
SELECT *
FROM books
WHERE price > 50;
```

---

## 6. Sorting Data

Practiced arranging records using the `ORDER BY` clause.

Examples:

- Ascending order
- Descending order

```sql
ORDER BY price;

ORDER BY price DESC;
```

---

## 7. Aggregate Functions

Learned to perform calculations on table data using aggregate functions.

Functions practiced:

- COUNT()
- MAX()
- MIN()
- AVG()

Example:

```sql
SELECT COUNT(*) FROM books;

SELECT MAX(price) FROM books;

SELECT MIN(price) FROM books;

SELECT AVG(price) FROM books;
```

---

## 8. Updating Records

Practiced modifying existing records using the `UPDATE` statement.

Example:

```sql
UPDATE books
SET price = 200
WHERE book_id = 5;
```

---

## 9. Deleting Records

Learned how to remove records from a table using the `DELETE` statement.

Example:

```sql
DELETE FROM books
WHERE book_id = 8;
```

---

## 10. Error Handling

During today's practice, I encountered and understood several PostgreSQL errors.

### Errors Faced

- `integer out of range`
- Incorrect `DROP TABLE` syntax
- Data type mismatch while inserting values

### Solutions Learned

- Used `VARCHAR` instead of `INTEGER` for phone numbers.
- Correct syntax for dropping a table:

```sql
DROP TABLE IF EXISTS members;
```

- Verified table structures before inserting data.

---

