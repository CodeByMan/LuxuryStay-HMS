# LuxuryStay Hotel Management System

A full-stack **MERN hotel management system** for managing hotel rooms, reservations, guests, staff, billing, housekeeping, maintenance requests, guest feedback, and admin dashboard operations.

This project is built as a practical full-stack portfolio project using **React + Vite** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## Project Type

**MERN Stack Full-Stack Application**

MERN stack used:

- **MongoDB** — database
- **Express.js** — backend framework
- **React.js** — frontend library
- **Node.js** — backend runtime

> Note: This is a React + Vite project, not a Next.js project.

---

## Features

### Public Website

- Responsive landing/home page
- Rooms listing
- Room details
- Services page
- About page
- Contact page
- Light and dark mode support
- Modern glassmorphism login/register UI
- Responsive hotel-themed UI

### Authentication

- Guest registration
- User login
- JWT-based authentication
- Password hashing with bcrypt
- Protected frontend routes
- Role-based backend middleware

### Roles

The project supports multiple user roles, including:

- Admin
- Manager
- Receptionist
- Housekeeping
- Maintenance
- Guest

### Hotel Management Modules

- Room management
- Reservation management
- Check-in / check-out flow
- Billing and invoice handling
- Guest management
- Housekeeping tasks
- Maintenance requests
- Guest service requests
- Feedback management
- Dashboard statistics

### File / Media Support

- Cloudinary configuration
- Multer upload handling
- PDF invoice generation with PDFKit

---

## Tech Stack

### Frontend

- React 19
- Vite 7
- Tailwind CSS 3
- React Router DOM 7
- Axios
- GSAP
- Lucide React
- React Toastify
- React Context API

### Backend

- Node.js
- Express.js 5
- MongoDB
- Mongoose 9
- JSON Web Token
- bcryptjs
- Multer
- Cloudinary
- PDFKit
- CORS
- dotenv

---

## Folder Structure

```bash
HotelManagement-main/
├── Backend/
│   ├── config/
│   ├── Controllers/
│   ├── Middlewares/
│   ├── Models/
│   ├── Routes/
│   ├── package.json
│   └── server.js
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── Components/
│   │   ├── context/
│   │   ├── Pages/
│   │   ├── api.js
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## Prerequisites

Install these before running the project:

- Node.js
- npm
- MongoDB Atlas account or local MongoDB
- Cloudinary account for image upload features

---

## Environment Variables

### Backend

Create a `.env` file inside the `Backend` folder:

```env
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Frontend

Create a `.env` file inside the `Frontend` folder:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

For deployed backend, replace it with your deployed API URL:

```env
VITE_API_BASE_URL=https://your-backend-url.com/api
```

---

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hotel-management-system.git
cd hotel-management-system
```

### 2. Install backend dependencies

```bash
cd Backend
npm install
```

### 3. Run backend

```bash
npm run dev
```

Backend will run on:

```bash
http://localhost:5000
```

Health check route:

```bash
http://localhost:5000/run
```

### 4. Install frontend dependencies

Open a new terminal:

```bash
cd Frontend
npm install
```

### 5. Run frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

## Production Build

### Frontend build

```bash
cd Frontend
npm run build
```

### Preview frontend build

```bash
npm run preview
```

### Backend start

```bash
cd Backend
npm start
```

---

## Important GitHub Upload Notes

Before pushing to GitHub:

1. Delete `node_modules` from both frontend and backend.
2. Do not upload real `.env` files.
3. Add `.env.example` files instead.
4. Keep `package-lock.json` files if available.
5. Add screenshots to the README if possible.
6. Add demo credentials only if they are safe demo accounts.

Recommended cleanup commands:

```bash
rm -rf Backend/node_modules Frontend/node_modules
rm -f Backend/.env Frontend/.env
```

On Windows CMD:

```cmd
rmdir /s /q Backend\node_modules
rmdir /s /q Frontend\node_modules
del Backend\.env
del Frontend\.env
```

---

## Suggested Demo Credentials

Add your own safe demo accounts here after creating them in your database.

```txt
Admin:
Email: admin@example.com
Password: Admin@123

Guest:
Email: guest@example.com
Password: Guest@123
```

> Do not publish real personal or production credentials.

---

## Portfolio Description

**LuxuryStay Hotel Management System** is a full-stack MERN application built to manage hotel operations including rooms, reservations, billing, housekeeping, maintenance, guest services, feedback, and role-based dashboards. The project demonstrates practical full-stack development using React, Node.js, Express, MongoDB, JWT authentication, and responsive UI design.

---

## Resume Bullet

Built a MERN stack hotel management system with JWT authentication, role-based access control, room management, reservation workflows, billing, housekeeping, maintenance requests, guest feedback, and admin/staff dashboards using React, Node.js, Express, and MongoDB.

---

## License

This project is licensed under the MIT License.
