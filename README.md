 💊 Medication Management System – MedsBuddy

A role-based Medication Management web application for patients and caretakers, built using **React**, **Node.js**, and **SQLite**. The system allows users to track medications, log adherence, and visualize data via personalized dashboards.

---

## 📸 Screenshots

| Login & Role Select | Patient Dashboard | Caretaker Dashboard |
|---------------------|-------------------|----------------------|
| ![Login](./screenshots/login.png) | ![Patient](./screenshots/patient-dashboard.png) | ![Caretaker](./screenshots/caretaker-dashboard.png) |

> Screenshots path: `frontend/public/screenshots`

---

## ⚙️ Features

### ✅ Core Functionality

- 🧑‍⚕️ **Role-based login** (patient or caretaker)
- 🔐 **SQLite Authentication** with JWT tokens
- 💊 **Medication CRUD**
  - Add medication (name, dosage, frequency)
  - Mark medication as taken
  - Delete/edit medications
- 📊 **Adherence tracking**
- 📅 **Calendar-based tracking UI**
- 🗂️ **Separate dashboards** for each role
- 📁 Upload proof (UI available; backend optional)

---

## 🛠️ Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- SQLite3
- bcryptjs
- jsonwebtoken

---

## 📁 Project Structure

medication/
├── backend/
│ ├── index.js
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ ├── middleware/
│ └── .env
├── frontend/
│ ├── src/
│ └── public/
├── README.md


---

## 🚀 Getting Started

### 🔧 Backend Setup

1. Navigate to backend:
    
    cd backend
    

2. Install dependencies:
    
    npm install
    

3. Create `.env` file:
    
    JWT_SECRET=vinay
  
4. Start server:
    
    node index.js
    

> 📍 Runs on `http://localhost:5000`

---

### 🎨 Frontend Setup

1. Navigate to frontend:
 
    cd frontend
    

2. Install dependencies:
    
    npm install
    

3. Start the React app:

    npm start
    

> 📍 Runs on `http://localhost:3000`

---

## 📬 API Endpoints

### Authentication

- `POST /api/auth/register` – Register new user
- `POST /api/auth/login` – Login and receive JWT token

### Medications

- `GET /api/medications` – List medications
- `POST /api/medications` – Add medication
- `PUT /api/medications/taken/:id` – Mark medication taken
- `DELETE /api/medications/:id` – Delete medication

> 🔒 All routes except `/login` & `/register` require a token header.

---

## ✅ Testing

Run tests with:
