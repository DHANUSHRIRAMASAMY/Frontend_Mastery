# NestJS First Endpoints Project

## Project Overview

This project is a beginner-friendly NestJS application created to understand the fundamentals of building REST APIs. It demonstrates how to create **GET** and **POST** endpoints, organize code using **Modules, Controllers, and Services**, and test APIs using **Postman**.

The project manages a simple **Students API**, where users can:

* Retrieve a list of students using a GET request.
* Add a new student using a POST request.
* Understand how data flows from Postman to the NestJS backend.

---

## Learning Objectives

By completing this project, I learned:

* How to create a NestJS project using the Nest CLI.
* How to start and run a NestJS development server.
* The purpose of Modules, Controllers, and Services in NestJS.
* How to create REST API endpoints.
* How to handle GET and POST requests.
* How to use DTOs (Data Transfer Objects) for request data.
* How to test APIs using Postman.
* How to commit and push code using Git and GitHub.

---

## Technologies Used

* **NestJS** – Backend framework for building scalable server-side applications.
* **TypeScript** – Programming language used in NestJS.
* **Node.js** – JavaScript runtime environment.
* **Postman** – API testing tool.
* **Git & GitHub** – Version control and code hosting.

---

## Project Setup

### Install NestJS CLI

Run the following command to install the NestJS CLI globally:

```bash
npm install -g @nestjs/cli
```

### Create a New Project

```bash
nest new first-endpoints-app
```

Choose **npm** as the package manager when prompted.

### Navigate to the Project Folder

```bash
cd first-endpoints-app
```

### Start the Development Server

```bash
npm run start:dev
```

After running the command, the server will start on:

```text
http://localhost:3000
```

---

## Generate the Students Resource

To create the Students module, controller, service, and DTO files:

```bash
nest generate resource students
```

Select:

* **REST API** as the transport layer.
* **Yes** to generate CRUD entry points.

---

## Project Structure

```text
src/
 └── students/
     ├── dto/
     │   └── create-student.dto.ts
     ├── entities/
     │   └── student.entity.ts
     ├── students.controller.ts
     ├── students.module.ts
     └── students.service.ts
```

### Explanation of Each File

* **students.module.ts** – Groups all student-related files together.
* **students.controller.ts** – Handles incoming HTTP requests.
* **students.service.ts** – Contains business logic and data operations.
* **create-student.dto.ts** – Defines the structure of incoming POST request data.
* **student.entity.ts** – Represents the student entity (not used in this simple example).

---

## Students Service

The service contains the student data and methods for retrieving and adding students.

```typescript
import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  private students = [
    { id: 1, name: 'Dhanushri', course: 'IT' },
    { id: 2, name: 'Rahul', course: 'CSE' },
  ];

  findAll() {
    return this.students;
  }

  create(createStudentDto: CreateStudentDto) {
    const newStudent = {
      id: this.students.length + 1,
      ...createStudentDto,
    };

    this.students.push(newStudent);
    return newStudent;
  }
}
```

### Service Explanation

* **private students** stores the student data in an array.
* **findAll()** returns all students.
* **create()** creates a new student object, adds it to the array, and returns it.

---

## Students Controller

The controller handles GET and POST requests.

```typescript
import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }
}
```

### Controller Explanation

* **@Controller('students')** creates the base route `/students`.
* **@Get()** handles GET requests.
* **@Post()** handles POST requests.
* **@Body()** extracts JSON data from the request body.

---

## Create Student DTO

The DTO defines the expected structure of the POST request.

```typescript
export class CreateStudentDto {
  name!: string;
  course!: string;
}
```

### DTO Explanation

* **name** represents the student’s name.
* **course** represents the student’s course.
* The **!** operator tells TypeScript that these properties will be assigned later.

---

## API Endpoints

### GET /students

Retrieves all students.

**URL**

```text
http://localhost:3000/students
```

**Method**

```text
GET
```

**Response**

```json
[
  {
    "id": 1,
    "name": "Dhanushri",
    "course": "IT"
  },
  {
    "id": 2,
    "name": "Rahul",
    "course": "CSE"
  }
]
```

---

### POST /students

Adds a new student.

**URL**

```text
http://localhost:3000/students
```

**Method**

```text
POST
```

**Request Body**

```json
{
  "name": "Priya",
  "course": "ECE"
}
```

**Response**

```json
{
  "id": 3,
  "name": "Priya",
  "course": "ECE"
}
```

---

## How to Test with Postman

### Test GET Endpoint

1. Open Postman.
2. Create a new request.
3. Select **GET** as the request method.
4. Enter `http://localhost:3000/students`.
5. Click **Send**.
6. Verify that the list of students is returned.

### Test POST Endpoint

1. Create a new request.
2. Select **POST** as the request method.
3. Enter `http://localhost:3000/students`.
4. Go to **Body → raw → JSON**.
5. Enter the JSON data:

```json
{
  "name": "Priya",
  "course": "ECE"
}
```

6. Click **Send**.
7. Verify that the new student is added.

---

## Request Flow

```text
Postman sends request
        ↓
Controller receives request
        ↓
Service processes data
        ↓
Data is stored or retrieved
        ↓
Response is returned to Postman
```

### Detailed Flow

* **Postman** sends an HTTP request.
* **Controller** receives the request and determines which method to call.
* **Service** performs the business logic.
* The result is returned back to the **Controller**.
* The **Controller** sends the response to Postman.

---

## GET vs POST

| Feature       | GET           | POST          |
| ------------- | ------------- | ------------- |
| Purpose       | Retrieve data | Send new data |
| Data Location | URL           | Request Body  |
| Modifies Data | No            | Yes           |
| Example       | `/students`   | `/students`   |

---

## Common Errors and Solutions

| Error                | Cause                      | Solution                     |
| -------------------- | -------------------------- | ---------------------------- |
| 404 Not Found        | Wrong URL                  | Check `/students` route      |
| Cannot POST          | Wrong HTTP method          | Select POST in Postman       |
| 400 Bad Request      | Invalid JSON               | Verify JSON syntax           |
| Port already in use  | Another app uses port 3000 | Stop the other app           |
| TypeScript DTO error | Properties not initialized | Use `!` after property names |

---

## What I Learned

Through this project, I gained practical experience in:

* Creating a NestJS project from scratch.
* Understanding the modular architecture of NestJS.
* Building GET and POST REST API endpoints.
* Using Controllers and Services effectively.
* Creating and using DTOs.
* Testing APIs with Postman.
* Managing code with Git and GitHub.

---
