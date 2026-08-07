# Products App — Setup Guide

## 1. Backend Setup

```bash
cd backend
npm install

# Set up Prisma — generates the database client
npx prisma generate

# Run migrations — creates the "products" table in PostgreSQL
npx prisma migrate dev --name init

# Start the backend (runs on http://localhost:3000)
npm run start:dev
```

> Before running, open `backend/.env` and update the DATABASE_URL with your PostgreSQL credentials.

## 2. Frontend Setup

```bash
cd frontend
npm install

# Start the frontend (runs on http://localhost:5173)
npm run dev
```

## API Endpoints

| Method | URL           | What it does         |
|--------|---------------|----------------------|
| GET    | /products     | Get all products     |
| GET    | /products/:id | Get one product      |
| POST   | /products     | Create a new product |
