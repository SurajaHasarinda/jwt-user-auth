# 🔐 JWT Authentication API

A secure REST API implementation for user authentication using JSON Web Tokens (JWT).

## ✨ Features

- 📝 User registration (sign-up)
- 🔑 User authentication (sign-in)
- 🚪 User sign-out
- 🔒 Secure password hashing using bcrypt
- 🎟️ JWT-based authentication
- 🗄️ MongoDB integration
- ⚠️ Error handling middleware
- ✅ Input validation

## 📋 Prerequisites

- 📦 Node.js (v14 or higher)
- 🗃️ MongoDB database
- 📥 npm or yarn package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd user-authenticator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=8000
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d
```

## 💻 Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## 🛣️ API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/sign-up` | Register a new user |
| POST | `/api/v1/auth/sign-in` | Authenticate user and get token |
| POST | `/api/v1/auth/sign-out` | Sign out user |

### Request Bodies

#### Sign Up
```json
{
  "username": "username",
  "password": "Password123!"
}
```

#### Sign In
```json
{
  "username": "username",
  "password": "Password123!"
}
```

## 🛡️ Security Features

- 🔒 Password validation (minimum 8 characters, uppercase, lowercase, special character)
- 👤 Username validation (8-50 characters)
- 🍪 HTTP-only cookies
- 🔑 Secure password hashing
- 💾 MongoDB transaction support
- 🧹 Input sanitization
- 🌐 CORS enabled

## ⚠️ Error Handling

The API includes comprehensive error handling for:
- ❌ Validation errors
- 🔄 Duplicate entries
- 🚫 Authentication failures
- 💽 Database errors
- 🔧 Server errors

## 🛠️ Technology Stack

- ⚡ Express.js
- 🍃 MongoDB with Mongoose
- 🎟️ JSON Web Tokens (JWT)
- 🔐 bcrypt