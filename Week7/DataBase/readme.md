
# 📖 Overview

Today, I learned the fundamentals of SQL (Structured Query Language) using PostgreSQL. SQL is the standard language used to communicate with relational databases. Throughout this session, I practiced creating tables, inserting records, retrieving data, updating existing records, deleting records, and filtering data using various SQL queries.

This practice helped me understand the basic CRUD (Create, Read, Update, Delete) operations, which form the foundation of database management.



# 🛠️ Environment

- Database: PostgreSQL
- SQL Editor: pgAdmin 4
- Code Editor: Visual Studio Code
- Version Control: Git & GitHub

---

# 📚 Topics Covered

## 1. Introduction to SQL

- What is SQL?
- Why databases are used.
- Database vs Table.
- Rows and Columns.
- Records and Fields.

---

## 2. Creating a Table

Created a `students` table with the following columns:

- id
- name
- age
- department
- mobile_no

Used:

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    department VARCHAR(50),
    mobile_no VARCHAR(15)
);
```

---

## 3. Inserting Records

Learned how to insert single and multiple records into a table.

Example:

```sql
INSERT INTO students(name, age, department, mobile_no)
VALUES
('Dhanushri',20,'IT','987654321'),
('Priya',21,'CSE','123456789');
```

---

## 4. Retrieving Data using SELECT

Practiced retrieving data from the database.

Examples:

```sql
SELECT * FROM students;
```

```sql
SELECT name FROM students;
```

```sql
SELECT name, age FROM students;
```

Learned the difference between:

- `SELECT *`
- Selecting specific columns
- Selecting multiple columns

---

## 5. Filtering Data using WHERE

Learned how to retrieve specific records using conditions.

Examples:

```sql
SELECT *
FROM students
WHERE age = 20;
```

```sql
SELECT *
FROM students
WHERE department = 'IT';
```

Used comparison operators:

- =
- >
- <
- >=
- <=
- <>

---

## 6. Using AND & OR Operators

Practiced combining multiple conditions.

Example:

```sql
SELECT *
FROM students
WHERE age = 20
AND department = 'IT';
```

Example:

```sql
SELECT *
FROM students
WHERE department = 'IT'
OR department = 'CSE';
```

---

## 7. Updating Records

Learned how to modify existing data.

Example:

```sql
UPDATE students
SET department = 'AI'
WHERE name = 'Vijay';
```

Also learned why the `WHERE` clause is important while updating records.

---

## 8. Deleting Records

Learned how to delete specific rows.

Example:

```sql
DELETE FROM students
WHERE name = 'Rahul';
```

Also understood that deleting without a `WHERE` clause removes every row from the table.

---

## 9. Practice Queries

Solved practice problems involving:

- Displaying all students
- Displaying selected columns
- Finding students by age
- Finding students by department
- Using AND conditions
- Using OR conditions
- Inserting new records
- Updating records
- Deleting records

---

# 🧠 Key Concepts Learned

- SQL stands for Structured Query Language.
- A database stores multiple tables.
- Tables contain rows and columns.
- `SELECT` is used to retrieve data.
- `WHERE` filters records.
- `INSERT` adds new records.
- `UPDATE` modifies existing records.
- `DELETE` removes records.
- `AND` combines multiple conditions that must all be true.
- `OR` combines conditions where at least one must be true.

---

# ⚠️ Common Mistakes I Learned to Avoid

- Using `AND` instead of commas in the `SELECT` statement.
- Forgetting the `FROM` clause.
- Missing single quotes around text values.
- Using double quotes instead of single quotes for string values.
- Forgetting the `WHERE` clause while updating or deleting records.
- Creating a table that already exists.
- Understanding and resolving the "relation already exists" error.

---

# 💡 Challenges Faced

- Encountered the "relation already exists" error while recreating a table.
- Learned how to use:

```sql
DROP TABLE IF EXISTS students;
```

before recreating the table.

- Understood the importance of using the correct SQL syntax.
- Corrected mistakes related to `SELECT`, `WHERE`, `AND`, and `OR`.

---




