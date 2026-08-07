
## Objectives

* Understand the architecture of a full-stack application.
* Learn how the frontend, backend, and database interact.
* Build RESTful APIs using NestJS.
* Connect a React frontend with backend services.
* Perform database operations using Prisma ORM and PostgreSQL.
* Implement the core concepts of CRUD (Create, Read, Update, and Delete).

## Technologies Used

### Frontend

* React
* TypeScript
* Vite
* Axios

### Backend

* NestJS
* Prisma ORM

### Database

* PostgreSQL

## Features

* Product Management System
* RESTful API Integration
* Frontend and Backend Communication
* PostgreSQL Database Connectivity
* Prisma ORM for Database Operations
* Create Product
* View Product List
* Responsive API Requests using Axios
* Modular Project Architecture
* Beginner-Friendly Code Structure

## CRUD Operations

### Create

Allows users to add new product details, which are stored in the PostgreSQL database through the NestJS API.

### Read

Displays the list of available products by retrieving data from the database and presenting it on the frontend.

### Update

Supports modifying existing product information through the backend API.

### Delete

Allows removal of products from the database through the API.

## API Endpoints

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| POST   | `/products`     | Create a new product       |
| GET    | `/products`     | Retrieve all products      |
| GET    | `/products/:id` | Retrieve a product by ID   |
| PUT    | `/products/:id` | Update an existing product |
| DELETE | `/products/:id` | Delete a product           |

## Key Concepts Covered

* Full Stack Development
* React Component-Based Architecture
* TypeScript Basics
* REST API Development
* HTTP Methods
* Axios API Integration
* NestJS Modules, Controllers, and Services
* Prisma ORM
* PostgreSQL Database Operations
* CRUD Implementation
* Client–Server Communication
* Data Flow Between Frontend and Backend
