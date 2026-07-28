DROP TABLE IF EXISTS students;
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    department VARCHAR(50),
	mobile_no VARCHAR(15)
);
-- INSERT INTO students (name, age, department, mobile_no)
-- VALUES
-- ('Dhanushri', 20, 'IT' , '987654321'),
-- ('Priya', 21, 'CSE', '123456789');
-- SELECT * FROM students;

-- SELECT name FROM students
-- where age = 20;
-- SELECT name FROM students
-- where department = 'CSE';

-- INSERT INTO students(name, department)
-- VALUES('Rahul','IT');

-- UPDATE students
-- SET department = 'IT';
-- WHERE name ='Rahul';

-- DELETE FROM students
-- WHERE name = 'Rahul';

-- SELECT name FROM students
-- where age = 20 AND department ='IT';


INSERT INTO students(name, age, department, mobile_no)
VALUES
('Dhanushri',20,'IT','9876543210'),
('Priya',21,'CSE','9876543211'),
('Rahul',22,'ECE','9876543212'),
('Anitha',20,'IT','9876543213'),
('Karthik',19,'MECH','9876543214'),
('Sanjay',23,'CSE','9876543215'),
('Divya',21,'IT','9876543216'),
('Arun',20,'ECE','9876543217');
SELECT * FROM students;
SELECT name FROM students;
SELECT department FROM students;
SELECT name, age FROM students;
SELECT name , mobile_no FROM students;

SELECT name FROM students
where age = 21;  
SELECT name FROM students
where department ='IT';
SELECT name FROM students
where age > 21;
SELECT name FROM students
where age < 21;
SELECT name FROM students
where age = 21;
SELECT name FROM students
where age <> 21;
SELECT name FROM students
where department ='ECE';

SELECT name FROM students
where age = 20 AND department ='IT';
SELECT name FROM students
where age > 20 AND department ='CSE';
SELECT name FROM students
where department='CSE' OR department ='IT';
SELECT name FROM students
where age = 20 OR age=21;

INSERT INTO students(name,age, department, mobile_no)
VALUES
('Vijay',22,'IT','999999999'),
('Meena',19,'CSE','8888888888');

UPDATE students
SET department='AI'
WHERE name='Vijay';
UPDATE students
SET age=20
WHERE name='Meena';
UPDATE students
SET department='CSE'
WHERE name='Rahul';

DELETE FROM students
WHERE name='Meena';
DELETE FROM students
WHERE name='Vijay';

SELECT * FROM students
WHERE department ='IT' AND age >20;
SELECT * FROM students
WHERE department ='CSE' OR department ='ECE';
