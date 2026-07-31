CREATE SCHEMA college;
SET search_path TO college;
CREATE TABLE students
(
student_id INTEGER PRIMARY KEY,
student_name VARCHAR(15) NOT NULL,
age INTEGER check(age >18),
department VARCHAR(25)
);
INSERT INTO students VALUES
(101,'Rahul',20,'IT'),
(102,'Priya',21,'CSE'),
(103,'Anu',22,'ECE');
CREATE TABLE courses
(
course_id INTEGER PRIMARY KEY,
course_name VARCHAR(50),
duration INTEGER
);
INSERT INTO courses VALUES
(1,'Python',30),
(2,'Java',45),
(3,'SQL',20);
CREATE TABLE enrollments
(
enrollment_id INTEGER PRIMARY KEY,
student_id INTEGER,
course_id INTEGER
);
INSERT INTO enrollments VALUES
(1,101,1),
(2,102,2),
(3,103,3);
SELECT * FROM students;
SELECT * FROM courses;
SELECT * FROM enrollments;




SET search_path TO library;
CREATE TABLE books(
book_id INT,
title VARCHAR(25),
price INT
);
INSERT INTO books VALUES
(2,'Python',150),
(5,'Java',40),
(7,'SQL',45),
(10,'Data',78),
(8,'Machine Learning',56);
SELECT * FROM books;

CREATE TABLE members(
book_id INT,
member_name VARCHAR(25),
phone VARCHAR(15)
);
INSERT INTO members VALUES
(7,'Hari',987654321),
(8,'Dhanu',123456789),
(2,'Swetha',5432112345),
(7,'Neha',987678955),
(5,'Sibi',678543892);
SELECT * FROM members;

CREATE TABLE borrow(
borrow_id INT,
book_id INT,
member_id INT,
borrow_date DATE
);
INSERT INTO borrow VALUES
(1,2,101,'2026-07-31'),
(2,5,102,'2026-08-01'),
(3,7,103,'2026-08-02'),
(4,8,104,'2026-08-03'),
(5,10,105,'2026-08-04');
SELECT * FROM borrow;

SELECT title,price from books;
SELECT * from books
WHERE price > 50;

SELECT * from books
ORDER BY price DESC;

SELECT COUNT(*) from books ;

UPDATE books
SET price = 200
WHERE book_id = 5;
SELECT * from books;