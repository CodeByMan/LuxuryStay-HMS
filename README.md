<div align="center">

# 🏨 LuxuryStay — Hotel Management System MERN

A modern full-stack hotel management platform built with the **MERN stack**. LuxuryStay helps manage hotel rooms, reservations, guests, staff, billing, housekeeping, maintenance requests, feedback, and role-based hotel operations from a clean dashboard experience.

![MERN](https://img.shields.io/badge/Stack-MERN-16a34a?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61dafb?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-111827?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-10b981?style=for-the-badge)
![Tailwind](https://img.shields.io/badge/UI-Tailwind%20CSS-38bdf8?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-f97316?style=for-the-badge)

</div>

---

## 📌 Project Overview

**LuxuryStay** is a hotel management system designed for hotels and resorts that need a centralized platform to manage daily operations. The application includes a public hotel website, guest authentication, room booking flow, admin/staff dashboards, reservation handling, billing, housekeeping, maintenance, guest service requests, and feedback management.

This project is built as a practical **MERN stack portfolio project** using **React + Vite** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## ✨ Premium Features

- 🔐 **JWT authentication** with protected routes
- 👤 **Guest registration and login**
- 🧑‍💼 **Role-based access control** for admin, manager, receptionist, housekeeping, maintenance, and guest users
- 🛏️ **Room management** with room details and availability handling
- 📅 **Reservation management** for booking and guest stays
- 🧾 **Billing and invoice management**
- 🧹 **Housekeeping task management**
- 🛠️ **Maintenance request handling**
- 🛎️ **Guest service request system**
- ⭐ **Guest feedback management**
- 📊 **Admin dashboard with hotel statistics**
- 🌙 **Light and dark mode support**
- 🎨 **Responsive UI with Tailwind CSS**
- ✨ **GSAP-powered homepage animations**
- 🖼️ **Cloudinary image upload support**
- 📄 **PDF generation using PDFKit**

---

## 🖼️ Screenshots

| Home Page | Dashboard |
|----------|-----------|
| ![Home Page](docs/screenshots/homepage.png) | ![Dashboard](docs/screenshots/dashboard.png) |

| Login | Register |
|-------|----------|
| ![Login](docs/screenshots/login.png) | ![Register](docs/screenshots/register.png) |

---

## 🧰 Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- GSAP
- Lucide React
- React Toastify
- React Context API

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- BcryptJS
- Multer
- Cloudinary
- PDFKit
- CORS
- dotenv

---

## 📁 Folder Structure

```bash
LuxuryStay-Hotel-Management-System/
├── Backend/
│   ├── config/
│   ├── Controllers/
│   ├── Middlewares/
│   ├── Models/
│   ├── Routes/
│   ├── .env.example
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
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── docs/
│   └── screenshots/
│       ├── homepage.png
│       ├── dashboard.png
│       ├── login.png
│       └── register.png
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚙️ Environment Variables

### Backend Environment

Create a `.env` file inside the `Backend` folder using the included example file:

```bash
cd Backend
cp .env.example .env
```

Then update the values:

| Variable | Description |
| --- | --- |
| `PORT` | Backend server port, usually `5000` |
| `MONGODB_URL` | MongoDB local or Atlas connection string |
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

Example:

```env
PORT=5000
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/luxurystay
JWT_SECRET=your_secure_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend Environment

Create a `.env` file inside the `Frontend` folder:

```bash
cd Frontend
cp .env.example .env
```

Then update the value:

| Variable | Description |
| --- | --- |
| `VITE_API_BASE_URL` | Backend API base URL |

Example:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

For deployment:

```env
VITE_API_BASE_URL=https://your-backend-url.com/api
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CodeByMan/LuxuryStay-HMS.git
cd luxurystay-hotel-management-system
```

### 2. Install backend dependencies

```bash
cd Backend
npm install
```

### 3. Configure backend environment

```bash
cp .env.example .env
```

Update the `.env` file with your MongoDB, JWT, and Cloudinary credentials.

### 4. Start the backend server

```bash
npm run dev
```

Backend runs by default at:

```bash
http://localhost:5000
```

Health check route:

```bash
http://localhost:5000/run
```

### 5. Install frontend dependencies

Open a new terminal:

```bash
cd Frontend
npm install
```

### 6. Start the frontend development server

```bash
npm run dev
```

Frontend runs by default at:

```bash
http://localhost:5173
```

---

## 📜 Available Scripts

### Backend

| Command | Description |
| --- | --- |
| `npm run dev` | Start backend with Nodemon |
| `npm start` | Start backend with Node |

### Frontend

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 🔗 API Modules

The backend is organized into route modules under `/api`.

| Module | Base Route |
| --- | --- |
| Authentication | `/api/auth` |
| Rooms | `/api/room` |
| Reservations | `/api/reservation` |
| Guests | `/api/guest` |
| Staff | `/api/staff` |
| Billing | `/api/billing` |
| Housekeeping | `/api/housekeeping` |
| Maintenance | `/api/maintenance` |
| Service Requests | `/api/service` |
| Feedback | `/api/feedback` |
| Dashboard | `/api/dashboard` |

> Route names can vary depending on your final backend route files. Update this table if your route names are different.

---

## 🧑‍💻 Author

**Muhammad Ali Nawaz**  
MERN Stack Developer and Data Engineer

---

## 📄 License

This project is licensed under the [MIT license](LICENSE).

---

<p align="center">
  <b>⭐ If you like this project, consider starring the repository!</b>
</p>
