# NestJS Setup and Basic Project

This project demonstrates the complete setup of a NestJS application, including project creation, modules, controllers, services, running the server, and committing the project using Git. It is designed as a beginner-friendly guide to understand the fundamental architecture of NestJS.

## What is NestJS?

NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript by default and follows a modular architecture inspired by Angular.

### Why use NestJS?

* **Modular architecture** – Organizes code into reusable modules.
* **TypeScript support** – Provides type safety and better development experience.
* **Dependency Injection** – Makes code reusable, testable, and maintainable.
* **Scalability** – Suitable for both small and large applications.
* **Built on Express/Fastify** – Uses familiar Node.js web server foundations.

---

# Prerequisites

Before starting, ensure the following tools are installed on your system:

| Tool     | Purpose                             |
| -------- | ----------------------------------- |
| Node.js  | Runs JavaScript on the server       |
| npm      | Installs packages and dependencies  |
| Nest CLI | Creates and manages NestJS projects |
| Git      | Version control                     |
| VS Code  | Recommended code editor             |

### Verify installations

Run the following commands in your terminal:

```bash
node -v
npm -v
git --version
```

If version numbers are displayed, the tools are installed correctly.

---

# Install Nest CLI

The Nest CLI is the official command-line tool used to create and manage NestJS projects.

```bash
npm install -g @nestjs/cli
```

### Verify Nest CLI installation

```bash
nest --version
```

---

# Create a NestJS Project

Create a new NestJS project using the following command:

```bash
nest new my-nest-app
```

### During project creation

* A new folder named `my-nest-app` will be created.
* Required dependencies will be installed automatically.
* You may be asked to choose a package manager; select **npm** if you are using npm.

Move into the project directory:

```bash
cd my-nest-app
```

---

# Project Structure

After creating the project, the folder structure will look like this:

```text
my-nest-app/
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   └── main.ts
├── test/
├── node_modules/
├── package.json
├── tsconfig.json
└── nest-cli.json
```

### Important files

| File                | Purpose                          |
| ------------------- | -------------------------------- |
| `main.ts`           | Entry point of the application   |
| `app.module.ts`     | Root module of the application   |
| `app.controller.ts` | Handles incoming HTTP requests   |
| `app.service.ts`    | Contains business logic          |
| `package.json`      | Project dependencies and scripts |
| `tsconfig.json`     | TypeScript configuration         |

---

# Run the NestJS Server

Start the development server with:

```bash
npm run start:dev
```

### What this command does

* Compiles TypeScript into JavaScript.
* Starts the NestJS server.
* Watches for file changes and automatically restarts the server.

You should see output similar to:

```text
[Nest] 12345   - Nest application successfully started
```

Open your browser and visit:

```text
http://localhost:3000
```

You should see the default message:

```text
Hello World!
```

---

# Understanding main.ts

The `main.ts` file is the entry point of the NestJS application.

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

### Explanation

* `NestFactory.create(AppModule)` creates the NestJS application.
* `AppModule` is the root module loaded into the application.
* `app.listen(3000)` starts the server on port 3000.
* `bootstrap()` initializes the application.

---

# Modules in NestJS

A module is a class annotated with `@Module()`. It organizes related controllers and services together.

### Default AppModule

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### Module properties

| Property      | Purpose                             |
| ------------- | ----------------------------------- |
| `imports`     | Other modules used in this module   |
| `controllers` | Classes that handle requests        |
| `providers`   | Services and dependency providers   |
| `exports`     | Providers shared with other modules |

### Create a new module

```bash
nest generate module users
```

Short form:

```bash
nest g mo users
```

This creates:

```text
src/users/
└── users.module.ts
```

---

# Controllers in NestJS

A controller handles incoming HTTP requests and returns responses.

### Generate a controller

```bash
nest generate controller users
```

Short form:

```bash
nest g co users
```

### Example controller

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }
}
```

### How it works

* `@Controller('users')` creates a route prefix `/users`.
* `@Get()` handles HTTP GET requests.
* `findAll()` returns the response.

Visit:

```text
http://localhost:3000/users
```

---

# Services in NestJS

A service contains business logic and reusable code.

### Generate a service

```bash
nest generate service users
```

Short form:

```bash
nest g s users
```

### Example service

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(): string[] {
    return ['John', 'Jane', 'Alex'];
  }
}
```

### Why use services?

* Keeps controllers clean.
* Separates business logic from request handling.
* Allows code reuse across multiple controllers.
* Makes testing easier.

---

# Connect Controller and Service

Modify `users.controller.ts` to use the service:

```typescript
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): string[] {
    return this.usersService.findAll();
  }
}
```

### Dependency Injection

NestJS automatically provides `UsersService` to the controller through the constructor. This is called **Dependency Injection (DI)**.

### Request flow

```text
Browser Request
      ↓
Controller
      ↓
Service
      ↓
Data / Logic
      ↓
Controller returns response
```

---

# Full Users Example

### users.service.ts

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alex' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }
}
```

### users.controller.ts

```typescript
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }
}
```

### users.module.ts

```typescript
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

### Import module in AppModule

```typescript
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
```

---

# HTTP Methods in NestJS

| Decorator   | HTTP Method | Purpose               |
| ----------- | ----------- | --------------------- |
| `@Get()`    | GET         | Retrieve data         |
| `@Post()`   | POST        | Create data           |
| `@Put()`    | PUT         | Update data           |
| `@Delete()` | DELETE      | Remove data           |
| `@Patch()`  | PATCH       | Partially update data |

### Example POST method

```typescript
import { Controller, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() body: any) {
    return {
      message: 'User created successfully',
      data: body,
    };
  }
}
```

---

# Testing with Postman

### GET request

* **Method:** GET
* **URL:** `http://localhost:3000/users`

### POST request

* **Method:** POST
* **URL:** `http://localhost:3000/users`
* **Body:** Raw JSON

```json
{
  "name": "Dhanushri",
  "email": "dhanushri@example.com"
}
```

---

# Important NestJS CLI Commands

| Command             | Purpose                |
| ------------------- | ---------------------- |
| `nest new app-name` | Create a new project   |
| `nest g mo name`    | Generate a module      |
| `nest g co name`    | Generate a controller  |
| `nest g s name`     | Generate a service     |
| `npm run start`     | Start the application  |
| `npm run start:dev` | Start with auto-reload |
| `npm run build`     | Build for production   |
| `npm run test`      | Run tests              |

---

# Git Commit Process

### Initialize Git

```bash
git init
```

### Check status

```bash
git status
```

### Add all files

```bash
git add .
```

### Create a commit

```bash
git commit -m "Initial NestJS setup with modules, controllers, and services"
```

### Push to GitHub

Create a repository on GitHub and run:

```bash
git remote add origin https://github.com/your-username/my-nest-app.git
git branch -M main
git push -u origin main
```

---

# Practice Project: Student API

### Create project

```bash
nest new student-api
cd student-api
```

### Generate module, controller, and service

```bash
nest g mo students
nest g co students
nest g s students
```

### students.service.ts

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  private students = [
    { id: 1, name: 'Dhanushri', department: 'IT' },
    { id: 2, name: 'Priya', department: 'CSE' },
  ];

  findAll() {
    return this.students;
  }
}
```

### students.controller.ts

```typescript
import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getStudents() {
    return this.studentsService.findAll();
  }
}
```

### Run the project

```bash
npm run start:dev
```

Visit:

```text
http://localhost:3000/students
```

Expected output:

```json
[
  {
    "id": 1,
    "name": "Dhanushri",
    "department": "IT"
  },
  {
    "id": 2,
    "name": "Priya",
    "department": "CSE"
  }
]
```

---

# Common Beginner Mistakes

* Forgetting to import a module into `AppModule`.
* Not adding a service to the `providers` array.
* Using incorrect route paths.
* Forgetting that route parameters are strings by default.
* Not restarting the server when using `npm run start` instead of `npm run start:dev`.

---

# NestJS Architecture Recap

```text
main.ts
   ↓
AppModule
   ↓
Feature Module (UsersModule)
   ↓
Controller
   ↓
Service
   ↓
Business Logic / Database
```

### Remember

* **Module** = Organizes related files.
* **Controller** = Handles HTTP requests.
* **Service** = Contains business logic.
* **main.ts** = Starts the application.

---
