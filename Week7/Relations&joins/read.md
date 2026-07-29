
# 📚 What is a Relation?

In PostgreSQL, a **Relation** simply refers to a **Table**.

A table stores data in rows and columns.

Example:

**Students Table**

| student_id | student_name | age |
| ---------- | ------------ | --- |
| 101        | Rahul        | 20  |
| 102        | Priya        | 21  |
| 103        | Arun         | 19  |

Instead of storing all information in one table, relational databases organize data into multiple related tables. This approach reduces redundancy, improves data consistency, and makes database management easier.

---

# 📌 Why Multiple Tables?

Imagine storing student details and course details in one table.

| Student | Age | Course |
| ------- | --- | ------ |
| Rahul   | 20  | Python |
| Rahul   | 20  | SQL    |

Here, Rahul's details are repeated multiple times.

Problems include:

* Duplicate data
* Increased storage usage
* Difficult to update records
* Higher chances of inconsistent data

Instead, relational databases separate information into different tables.

For example:

* Students
* Courses
* Enrollments

These tables are connected using relationships.

---

# 🔑 Primary Key

A **Primary Key** is a column that uniquely identifies every record in a table.

Characteristics:

* Each value must be unique.
* Duplicate values are not allowed.
* NULL values are not allowed.
* Every table should have one Primary Key.

Example:

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    age INT
);
```

Example Data:

| student_id | student_name |
| ---------- | ------------ |
| 101        | Rahul        |
| 102        | Priya        |
| 103        | Arun         |

Here, **student_id** uniquely identifies each student.

---

# ❌ Primary Key Constraint

Attempting to insert duplicate values results in an error.

Example:

```sql
INSERT INTO Students
VALUES (101,'Kumar',22);
```

Output:

```
ERROR:
duplicate key value violates unique constraint
```

This ensures that every student has a unique identifier.

---

# 🔗 Foreign Key

A **Foreign Key** is used to establish a relationship between two tables.

It references the Primary Key of another table.

Example:

Students

| student_id | student_name |
| ---------- | ------------ |
| 101        | Rahul        |
| 102        | Priya        |

Enrollments

| enrollment_id | student_id | course_id |
| ------------- | ---------- | --------- |
| 1             | 101        | 1         |
| 2             | 102        | 2         |

The **student_id** column in the **Enrollments** table is a Foreign Key that references the **student_id** column in the **Students** table.

---

# Why Do We Use Foreign Keys?

Foreign Keys help maintain **referential integrity**.

They ensure that:

* Invalid student IDs cannot be inserted.
* Every enrollment belongs to an existing student.
* Relationships between tables remain consistent.

Example:

```sql
INSERT INTO Enrollments(student_id, course_id)
VALUES (110,1);
```

Output:

```
ERROR:
violates foreign key constraint
```

This happens because student ID **110** does not exist in the Students table.

---

# 🏗 Database Design Used Today

## Students Table

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    age INT
);
```

---

## Courses Table

```sql
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50)
);
```

---

## Enrollments Table

```sql
CREATE TABLE Enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
```

---

# Sample Data

## Students

```sql
INSERT INTO Students VALUES
(101,'Rahul',20),
(102,'Priya',21),
(103,'Arun',19),
(104,'Sneha',22),
(105,'Divya',20);
```

---

## Courses

```sql
INSERT INTO Courses VALUES
(1,'Python'),
(2,'Java'),
(3,'SQL'),
(4,'PostgreSQL');
```

---

## Enrollments

```sql
INSERT INTO Enrollments(student_id,course_id)
VALUES
(101,1),
(101,3),
(102,2),
(103,4),
(104,3);
```

---

# 🔄 Table Relationship

```
Students
---------
student_id (PK)

        │
        │
        ▼

Enrollments
------------
enrollment_id (PK)
student_id (FK)
course_id (FK)

        ▲
        │

Courses
--------
course_id (PK)
```

This design represents a **many-to-many relationship** between students and courses using the Enrollments table.

---

# 🤝 Understanding JOINs

A **JOIN** combines data from two or more related tables based on a common column.

Without JOINs, information is spread across multiple tables.

JOINs help retrieve complete information in a single query.

---

# Types of JOINs Learned

## 1. INNER JOIN

Returns only matching records from both tables.

```sql
SELECT Students.student_name,
Courses.course_name
FROM Students
JOIN Enrollments
ON Students.student_id = Enrollments.student_id
JOIN Courses
ON Enrollments.course_id = Courses.course_id;
```

Use Case:

Display only students who have enrolled in courses.

---

## 2. LEFT JOIN

Returns all records from the left table and matching records from the right table.

If no match exists, NULL values are returned.

```sql
SELECT Students.student_name,
Courses.course_name
FROM Students
LEFT JOIN Enrollments
ON Students.student_id = Enrollments.student_id
LEFT JOIN Courses
ON Enrollments.course_id = Courses.course_id;
```

Use Case:

Display every student, including those without any course enrollment.

---

## 3. RIGHT JOIN

Returns all records from the right table and matching records from the left table.

```sql
SELECT Students.student_name,
Courses.course_name
FROM Students
RIGHT JOIN Enrollments
ON Students.student_id = Enrollments.student_id
RIGHT JOIN Courses
ON Enrollments.course_id = Courses.course_id;
```

Use Case:

Display every course enrollment, even if student information is missing.

---

## 4. FULL JOIN

Returns all matching and non-matching rows from both tables.

```sql
SELECT Students.student_name,
Courses.course_name
FROM Students
FULL JOIN Enrollments
ON Students.student_id = Enrollments.student_id
FULL JOIN Courses
ON Enrollments.course_id = Courses.course_id;
```

Use Case:

Display all students and all courses, regardless of whether a matching relationship exists.

---

## 5. CROSS JOIN

Returns every possible combination of rows.

```sql
SELECT Students.student_name,
Courses.course_name
FROM Students
CROSS JOIN Courses;
```

If there are:

* 5 Students
* 4 Courses

The output contains:

```
5 × 4 = 20 rows
```

---

# Practice Queries Completed

During today's session, I practiced:

* Creating related tables
* Creating Primary Keys
* Creating Foreign Keys
* Inserting records into multiple tables
* INNER JOIN
* LEFT JOIN
* RIGHT JOIN
* FULL JOIN
* CROSS JOIN
* Filtering using WHERE
* Sorting using ORDER BY
* Counting records using COUNT()
* Grouping data using GROUP BY

---

# Errors Encountered and Solutions

## Duplicate Primary Key

Error:

```
duplicate key value violates unique constraint
```

Cause:

Attempted to insert an existing Primary Key value.

Solution:

Use a unique Primary Key value.

---

## Foreign Key Constraint Error

Error:

```
violates foreign key constraint
```

Cause:

Referenced a student ID that did not exist.

Solution:

Insert the student record first before creating the enrollment.

---

## Cannot Drop Parent Table

Error:

```
cannot drop table Students because other objects depend on it
```

Cause:

The Enrollments table depends on the Students table through a Foreign Key.

Solution:

Drop the child table first.

```sql
DROP TABLE Enrollments;
DROP TABLE Courses;
DROP TABLE Students;
```

Or use:

```sql
DROP TABLE Students CASCADE;
```

---


