# FixBuddy Demo

Simple demo project with a small Express backend and a React + Vite frontend. The app shows a product list and product detail pages with EMI plans.

**Quick Start**
- **Backend:** run the server which exposes a small products API.
- **Frontend:** run the Vite dev server to view the React app.

Prerequisites
- Node.js (>=16) and npm

Backend
- Folder: `backend`
- Install & run:
```bash
cd backend
npm install
node server.js
```
- The backend serves an API at `http://localhost:5000/api/products` and `http://localhost:5000/api/products/:slug`.
- To (re)create sample data the project includes `schema.sql` and `seed.sql` (SQLite/Postgres depending on your setup).

Frontend
- Folder: `frontend`
- Install & run:
```bash
cd frontend
npm install
npm run dev
```
- The frontend runs on Vite (default port 5173).


Project structure (top-level)
- `frontend/` — React + Vite app (components in `frontend/src`)
- `backend/` — small Node server and SQL seed/schema files