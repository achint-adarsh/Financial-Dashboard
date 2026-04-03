# Finance Dashboard Backend

## 🚀 Features
- User authentication (JWT)
- Role-based access control (Viewer, Analyst, Admin)
- Financial records CRUD with filtering
- Dashboard summary APIs (income, expense, trends)

## 🧠 Tech Stack
- Node.js, Express
- MongoDB
- React (Vite)
- Zod validation

## 🔐 Roles
- Viewer → Read-only
- Analyst → Read + dashboard
- Admin → Full access

## 📡 API Endpoints

### Auth
POST /api/auth/register  
POST /api/auth/login  

### Records
GET /api/records  
POST /api/records  
PUT /api/records/:id  
DELETE /api/records/:id  

### Dashboard
GET /api/dashboard/summary  

## 🎨 Frontend
Minimal React UI to demonstrate API integration.

## ⚙️ Setup
npm install
npm run dev

Render deployment link :- https://financial-dashboard-9s00.onrender.com
