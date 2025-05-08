# 📦 Subscription Tracker

A full-stack Node.js REST API that helps users manage and track their online subscriptions efficiently. It supports user authentication, subscription CRUD operations, and secure token-based access.

---

## 🚀 Features

- User Sign Up & Sign In (JWT Authentication)
- Secure Token-Based Authorization
- Create, Read, Update, and Delete Subscriptions
- View All Subscriptions by User
- Upcoming Renewal Tracker
- Middleware for error handling and route protection
- MongoDB as the database

---

## 📁 Project Structure


---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js
- dotenv
- cookie-parser

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/subscription-tracker.git
   cd subscription-tracker
| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| POST   | `/api/v1/auth/signup` | Register new user |
| POST   | `/api/v1/auth/signin` | Login user        |
| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/v1/users/` | Get all users |


| Method | Endpoint                                  | Description               |
| ------ | ----------------------------------------- | ------------------------- |
| GET    | `/api/v1/subscriptions/`                  | Get all subscriptions     |
| GET    | `/api/v1/subscriptions/:id`               | Get subscription by ID    |
| POST   | `/api/v1/subscriptions/`                  | Create new subscription   |
| PUT    | `/api/v1/subscriptions/:id`               | Update subscription by ID |
| DELETE | `/api/v1/subscriptions/:id`               | Delete subscription by ID |
| GET    | `/api/v1/subscriptions/user/:id`          | Get subscriptions by user |
| PUT    | `/api/v1/subscriptions/:id/cancel`        | Cancel a subscription     |
| GET    | `/api/v1/subscriptions/upcoming-renewals` | View upcoming renewals    |
