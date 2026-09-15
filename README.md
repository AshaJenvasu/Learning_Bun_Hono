# 📝 Hono + Drizzle ORM + PostgreSQL To-Do REST API

A modern **REST API for a To-Do application** built as a personal learning repository to master backend development. This project focuses on connecting a fast web framework with a type-safe ORM and a containerized database.

---

## 🛠️ Tech Stack
- **Runtime:** Bun
- **Framework:** Hono.js
- **Database:** PostgreSQL (v17.5 via Docker)
- **ORM:** Drizzle ORM & Drizzle Kit
- **Testing:** Bun Test Runner

---

## 🚀 Key Learning Objectives
- **Containerized DB:** Running an isolated PostgreSQL instance locally using Docker Compose.
- **Type-Safe Database:** Designing schemas, handling data relations, and executing migrations with Drizzle ORM.
- **RESTful Endpoints:** Building clean, fast API routes with Hono.js.
- **Seeding & Testing:** Writing automated unit tests and population scripts for developer environments.

---

## ⚙️ Quick Start

### 1. Clone & Install
```bash
git clone <your-repository-url>
cd hono-drizzle-postgres-todos
bun install
```

### 2. Environment Setup
Create a `.env` file from the example template and fill in your database credentials:
```bash
cp .env.example .env
```

### 3. Spin up PostgreSQL
Make sure Docker Desktop is running, then start the database container:
```bash
docker compose up -d
```

### 4. Database Setup & Migrations
```bash
bun run database:generate   # Generate SQL migration files
bun run database:migrate    # Apply schemas to the PostgreSQL container
bun run database:seed       # Populate dummy data for testing
```

### 5. Run the Application
```bash
bun run dev
```
