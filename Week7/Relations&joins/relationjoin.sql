CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    age INT
);
INSERT INTO Students VALUES
(101,'Rahul',20),
(102,'Priya',21),
(103,'Arun',19),
(104,'Sneha',22);
SELECT * FROM students

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50)
);
INSERT INTO Courses VALUES
(1,'Python'),
(2,'Java'),
(3,'SQL'),
(4,'PostgreSQL');
SELECT * FROM Courses

CREATE TABLE Enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
INSERT INTO Enrollments(student_id, course_id)
VALUES
(101,1),
(101,3),
(102,2),
(103,4),
(104,3);
SELECT * FROM Enrollments;
-- primary
INSERT INTO students
VALUES (101,'Kumar',22);
-- foreign
INSERT INTO Enrollments(student_id, course_id)
VALUES (110,1);
-- inner
SELECT Students.student_name,
       Courses.course_name
FROM Students
INNER JOIN Enrollments
ON Students.student_id = Enrollments.student_id
INNER JOIN Courses
ON Courses.course_id = Enrollments.course_id;

INSERT INTO Students
VALUES
(105, 'Divya', 20);
SELECT * FROM students;

-- left
SELECT Students.student_name,
       Courses.course_name
FROM Students
LEFT JOIN Enrollments
ON Students.student_id = Enrollments.student_id
LEFT JOIN Courses
ON Courses.course_id = Enrollments.course_id;
-- right
SELECT Students.student_name,
       Courses.course_name
FROM Students
RIGHT JOIN Enrollments
ON Students.student_id = Enrollments.student_id
RIGHT JOIN Courses
ON Courses.course_id = Enrollments.course_id;
-- full
SELECT Students.student_name,
       Courses.course_name
FROM Students
FULL JOIN Enrollments
ON Students.student_id = Enrollments.student_id
FULL JOIN Courses
ON Courses.course_id = Enrollments.course_id;
-- cross 
SELECT student_name,
       course_name
FROM Students
CROSS JOIN Courses;
-- where join
SELECT Students.student_name
FROM Students
JOIN Enrollments
ON Students.student_id = Enrollments.student_id
JOIN Courses
ON Courses.course_id = Enrollments.course_id
WHERE Courses.course_name = 'SQL';
-- count join
SELECT Courses.course_name,
       COUNT(Enrollments.student_id) AS total_students
FROM Courses
LEFT JOIN Enrollments
ON Courses.course_id = Enrollments.course_id
GROUP BY Courses.course_name;
-- order by
SELECT Students.student_name,
       Courses.course_name
FROM Students
JOIN Enrollments
ON Students.student_id = Enrollments.student_id
JOIN Courses
ON Courses.course_id = Enrollments.course_id
ORDER BY Students.student_name;
