# Assignment 10: Admin & Employee Portal with Redux

A full-stack job portal application with role-based access control, Redux state management, and comprehensive admin and employee functionalities. Built with React, Redux Toolkit, Express.js, and MongoDB.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Setup](#project-setup)
3. [Folder Structure](#folder-structure)
4. [Technology Stack](#technology-stack)
5. [Navigation & Routing](#navigation--routing)
6. [Key Functionalities](#key-functionalities)
7. [API Endpoints](#api-endpoints)
8. [Redux State Management](#redux-state-management)
9. [User Roles & Permissions](#user-roles--permissions)
10. [Running the Application](#running-the-application)

---

## Project Overview

The Job Portal Application is a two-tier system designed for managing job listings with role-based access control:

- **Admins**: Can post new job listings and manage employee accounts
- **Employees**: Can browse available job listings and view job details

The application uses Redux Toolkit for centralized state management, Material-UI for responsive design, and Express.js with MongoDB for backend services.

---

## Project Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas connection)

### Installation Steps

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd assignment-10
```

#### 2. Install Frontend Dependencies

```bash
npm install
```

#### 3. Install Backend Dependencies

```bash
cd api
npm install
cd ..
```

#### 4. Configure Environment Variables

Create a `.env` file in the `api/` directory:

```env
MONGO_URI=mongodb://localhost:27017/assignment8
PORT=5000
```

If using MongoDB Atlas, update `MONGO_URI`:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/assignment8
PORT=5000
```

#### 5. Start the Application

**Terminal 1 - Backend Server:**

```bash
cd api
npm start
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend Development Server:**

```bash
npm start
# Frontend runs on http://localhost:3001
```

---

## Folder Structure

```
assignment-10/
├── api/                          # Backend (Express.js)
│   ├── models/
│   │   ├── User.js              # User schema (admin/employee)
│   │   └── Job.js               # Job schema
│   ├── routes/
│   │   └── user.js              # All API endpoints
│   ├── middleware/
│   │   └── upload.js            # Image upload middleware
│   ├── images/                  # Uploaded image storage
│   ├── server.js                # Express server setup
│   └── package.json             # Backend dependencies
│
├── src/                          # Frontend (React)
│   ├── redux/
│   │   ├── store.js             # Redux store configuration
│   │   ├── authSlice.js         # Authentication state
│   │   ├── jobsSlice.js         # Jobs state
│   │   └── usersSlice.js        # Users state
│   │
│   ├── components/
│   │   └── ProtectedRoute.js    # Role-based route protection
│   │
│   ├── pages/
│   │   ├── Home.js              # Landing page
│   │   ├── About.js             # About page
│   │   ├── Contact.js           # Contact page
│   │   ├── CompanyShowcase.js   # Company showcase
│   │   ├── Login.js             # Login form
│   │   ├── JobListings.js       # Employee job listings
│   │   ├── AdminEmployees.js    # Admin employees management
│   │   └── AdminAddJob.js       # Admin job posting form
│   │
│   ├── App/
│   │   ├── Navbar/
│   │   │   └── Navbar.js        # Navigation bar (role-aware)
│   │   ├── Input/               # Input components
│   │   ├── Todos/               # Todo components
│   │   └── Update/              # Update components
│   │
│   ├── services/
│   │   └── AuthContext.js       # Auth context utilities
│   │
│   ├── App.js                   # Main routing configuration
│   ├── App.css                  # App styling
│   ├── index.js                 # React entry point
│   └── index.css                # Global styles
│
├── public/
│   ├── index.html               # HTML template
│   ├── manifest.json            # PWA manifest
│   └── robots.txt               # SEO robots file
│
├── package.json                 # Frontend dependencies
├── server.js                    # Proxy/setup file
└── README.md                    # This file
```

---

## Technology Stack

### Frontend

| Technology        | Version | Purpose                 |
| ----------------- | ------- | ----------------------- |
| React             | 19.2.0  | UI framework            |
| Redux Toolkit     | 2.10.1  | State management        |
| React Redux       | 9.2.0   | Redux React bindings    |
| React Router DOM  | 7.9.6   | Client-side routing     |
| Material-UI (MUI) | 7.3.5   | UI component library    |
| Axios             | 1.13.2  | HTTP client             |
| Redux Persist     | 6.0.0   | Redux state persistence |

### Backend

| Technology | Version | Purpose               |
| ---------- | ------- | --------------------- |
| Express.js | 5.1.0   | Web framework         |
| MongoDB    | -       | NoSQL database        |
| Mongoose   | 8.19.3  | MongoDB ODM           |
| Bcrypt     | 6.0.0   | Password hashing      |
| Joi        | 18.0.1  | Data validation       |
| Multer     | 2.0.2   | File upload handling  |
| CORS       | 2.8.5   | Cross-origin requests |

---

## Navigation & Routing

### Public Routes (No Authentication Required)

| Route        | Page             | Description                       |
| ------------ | ---------------- | --------------------------------- |
| `/`          | Home             | Landing page with portal overview |
| `/login`     | Login            | User authentication page          |
| `/about`     | About            | Company information page          |
| `/contact`   | Contact          | Contact form page                 |
| `/companies` | Company Showcase | Featured companies page           |

### Protected Routes (Authentication Required)

#### Employee Routes (role: "employee")

| Route   | Page         | Description                                               |
| ------- | ------------ | --------------------------------------------------------- |
| `/jobs` | Job Listings | Browse all job postings with pagination (6 jobs per page) |

#### Admin Routes (role: "admin")

| Route              | Page                 | Description                                   |
| ------------------ | -------------------- | --------------------------------------------- |
| `/admin/employees` | Employees Management | View all registered employees in table format |
| `/admin/add-job`   | Post Job             | Form to create and post new job listings      |

### Route Protection

All protected routes use the `<ProtectedRoute>` component which:

1. Checks if user is authenticated
2. Validates user role matches required role
3. Redirects to login if not authenticated
4. Blocks access if user lacks required permissions

---

## Key Functionalities

### 1. Authentication System

#### User Registration

- **Endpoint**: `POST /user/create`
- **Fields**: Full Name, Email, Password, User Type (admin/employee)
- **Validation**:
  - Email must be unique and valid
  - Password hashed using Bcrypt
  - Type must be "admin" or "employee"
- **Response**: User data without password

#### User Login

- **Endpoint**: `POST /user/login`
- **Credentials**: Email and Password
- **Response**: User object with ID, name, email, and type
- **Storage**: Redux store + localStorage (persistent across sessions)

#### Logout

- Clears Redux auth state
- Clears localStorage
- Redirects to home page

### 2. Employee Portal

#### Job Listings Page (`/jobs`)

- **Features**:
  - Displays all job postings in responsive grid layout
  - 6 jobs per page with Material-UI Pagination
  - Shows complete job information:
    - Company Name
    - Job Title
    - Full Job Description
    - Salary
    - Posted Date
  - Responsive design: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
  - Loading spinner during data fetch
  - Error handling with user-friendly messages

### 3. Admin Portal

#### Employees Management Page (`/admin/employees`)

- **Features**:
  - Displays all registered employees in table format
  - Columns:
    - Employee ID
    - Full Name
    - Email Address
    - User Type (formatted as "Admin" or "Employee")
    - Joined Date
  - Sortable columns
  - Material-UI Table with styling
  - Real-time data from MongoDB
  - Loading states during fetch

#### Post Job Page (`/admin/add-job`)

- **Features**:
  - Form with required fields:
    - Company Name
    - Job Title
    - Job Description (multi-line textarea)
    - Salary
  - Form validation:
    - All fields required
    - Salary must be numeric
    - Descriptive error messages
  - Success feedback:
    - Toast notification on successful post
    - Auto-redirect to employees page after 2 seconds
  - Error handling with retry capability
  - Loading state during submission

### 4. Navigation Bar

#### Responsive Navbar

- **Features**:
  - Logo/brand name
  - Dynamic navigation links based on user role:
    - **Unauthenticated**: Home, About, Contact, Companies, Login
    - **Employee**: Home, Jobs, About, Contact, Logout
    - **Admin**: Home, Employees, Post Job, About, Contact, Logout
  - User greeting with name (when authenticated)
  - Responsive hamburger menu for mobile devices
  - Material-UI AppBar with consistent styling

### 5. Redux State Management

#### Auth Slice (`authSlice.js`)

- **State**:
  - `user`: Current authenticated user object
  - `loading`: Authentication in progress
  - `error`: Authentication error message
  - `isAuthenticated`: Boolean flag
- **Actions**:
  - Login (async thunk)
  - Register (async thunk)
  - Logout (synchronous)
- **Persistence**: Redux Persist stores auth state in localStorage

#### Jobs Slice (`jobsSlice.js`)

- **State**:
  - `jobs`: Array of all job postings
  - `loading`: Data fetch in progress
  - `error`: Error message
- **Thunks**:
  - `fetchJobs()`: Retrieve all jobs from backend
  - `createJob()`: Post new job listing

#### Users Slice (`usersSlice.js`)

- **State**:
  - `users`: Array of all registered users
  - `loading`: Data fetch in progress
  - `error`: Error message
- **Thunks**:
  - `fetchUsers()`: Retrieve all users for admin view

---

## API Endpoints

### User Management

#### 1. Create User (Register)

```
POST /user/create
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123",
  "type": "employee"  // or "admin"
}

Response: 201 Created
{
  "_id": "...",
  "fullName": "John Doe",
  "email": "john@example.com",
  "type": "employee",
  "createdAt": "..."
}
```

#### 2. Login User

```
POST /user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}

Response: 200 OK
{
  "_id": "...",
  "fullName": "John Doe",
  "email": "john@example.com",
  "type": "employee"
}
```

#### 3. Get All Users

```
GET /user/getAll

Response: 200 OK
[
  {
    "_id": "...",
    "fullName": "John Doe",
    "email": "john@example.com",
    "type": "employee",
    "createdAt": "..."
  },
  ...
]
```

#### 4. Get User by ID

```
GET /user/:id

Response: 200 OK
{
  "_id": "...",
  "fullName": "John Doe",
  "email": "john@example.com",
  "type": "employee"
}
```

#### 5. Update User

```
PUT /user/:id
Content-Type: application/json

{
  "fullName": "Jane Doe",
  "email": "jane@example.com"
}

Response: 200 OK
{ updated user object }
```

#### 6. Delete User

```
DELETE /user/:id

Response: 200 OK
{ message: "User deleted" }
```

### Job Management

#### 7. Create Job (Admin Only)

```
POST /user/create/job
Content-Type: application/json

{
  "companyName": "Tech Corp",
  "jobTitle": "Senior Developer",
  "description": "Looking for experienced developers...",
  "salary": 120000
}

Response: 201 Created
{
  "_id": "...",
  "companyName": "Tech Corp",
  "jobTitle": "Senior Developer",
  "description": "Looking for experienced developers...",
  "salary": 120000,
  "createdAt": "..."
}
```

#### 8. Get All Jobs (Employee View)

```
GET /user/jobs

Response: 200 OK
[
  {
    "_id": "...",
    "companyName": "Tech Corp",
    "jobTitle": "Senior Developer",
    "description": "Looking for experienced developers...",
    "salary": 120000,
    "createdAt": "..."
  },
  ...
]
```

---

## Redux State Management

### Store Structure

```javascript
{
  auth: {
    user: {
      _id: "...",
      fullName: "John Doe",
      email: "john@example.com",
      type: "employee" or "admin"
    },
    isAuthenticated: true,
    loading: false,
    error: null
  },
  jobs: {
    jobs: [...],
    loading: false,
    error: null
  },
  users: {
    users: [...],
    loading: false,
    error: null
  }
}
```

### Redux Thunks Usage

#### Authentication Example

```javascript
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "./redux/authSlice";

function LoginComponent() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = (email, password) => {
    dispatch(loginUser({ email, password }));
  };

  // Component JSX...
}
```

#### Jobs Example

```javascript
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/jobsSlice";

function JobListings() {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Component JSX...
}
```

---

## User Roles & Permissions

### Employee Role

**Permissions:**

- ✅ View job listings
- ✅ See complete job details
- ✅ Browse multiple pages of jobs
- ❌ Post jobs
- ❌ Manage employees
- ❌ Access admin pages

**Protected Routes:**

- `/jobs` - Job listings page

### Admin Role

**Permissions:**

- ✅ Post new job listings
- ✅ View all registered employees
- ✅ Access admin dashboard pages
- ✅ View full user details
- ❌ Cannot access employee-only routes (but has employee capabilities)

**Protected Routes:**

- `/admin/employees` - Employee management
- `/admin/add-job` - Job posting form

### Unauthenticated Users

**Permissions:**

- ✅ Access public pages (Home, About, Contact, Companies)
- ✅ Access login page
- ❌ View job listings
- ❌ Access admin pages
- ❌ Post jobs

---

## Running the Application

### Development Mode

1. **Start MongoDB** (if using local instance)

   ```bash
   mongod
   ```

2. **Start Backend Server**

   ```bash
   cd api
   npm start
   ```

   Server runs on `http://localhost:5000`

3. **Start Frontend Server** (in new terminal)

   ```bash
   npm start
   ```

   Frontend runs on `http://localhost:3001`

4. **Access the Application**
   Open browser and navigate to `http://localhost:3001`

### Testing User Accounts

**Admin Account:**

- Email: `admin@example.com`
- Password: `AdminPass123`
- Type: admin

**Employee Account:**

- Email: `employee@example.com`
- Password: `EmpPass123`
- Type: employee

> **Note**: First, register these accounts through the `/login` page signup form, or create them manually via the `/user/create` endpoint.

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

---

## Key Features Summary

| Feature                     | Status      | Location                              |
| --------------------------- | ----------- | ------------------------------------- |
| User Authentication         | ✅ Complete | `/login`, Redux auth                  |
| Role-Based Access Control   | ✅ Complete | `ProtectedRoute.js`, App.js           |
| Job Listings (Employee)     | ✅ Complete | `/jobs`, JobListings.js               |
| Job Management (Admin)      | ✅ Complete | `/admin/add-job`, AdminAddJob.js      |
| Employee Management (Admin) | ✅ Complete | `/admin/employees`, AdminEmployees.js |
| Responsive Design           | ✅ Complete | Material-UI                           |
| Redux State Management      | ✅ Complete | `/src/redux/`                         |
| Error Handling              | ✅ Complete | Thunks, Components                    |
| Loading States              | ✅ Complete | Spinners, Redux loading               |
| Data Persistence            | ✅ Complete | Redux Persist, localStorage           |

---

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB service is running
- Check MONGO_URI in `.env` file
- Verify network connectivity for Atlas

### CORS Errors

- Ensure backend CORS is configured correctly
- Check frontend URL matches CORS origin in backend
- Default backend listens on `http://localhost:5000`
- Default frontend runs on `http://localhost:3001`

### Redux State Not Persisting

- Clear browser localStorage: Developer Tools > Application > Local Storage > Clear
- Restart the application
- Check Redux Persist configuration in store.js

### Protected Routes Not Working

- Verify user is logged in (check Redux auth state)
- Confirm user type matches required role
- Check ProtectedRoute.js for role enforcement logic

---

## Future Enhancements

- 🔍 Job search and filtering functionality
- 📝 User profile management page
- 💼 Job application tracking system
- ✏️ Edit/Delete job functionality for admins
- 📊 Admin dashboard with analytics
- 🔐 Two-factor authentication (2FA)
- 📧 Email notifications for job postings
- ⭐ Job bookmarking for employees

---

## License

This project is part of an academic assignment and is provided for educational purposes.

---

## Support

For issues or questions, please refer to the project documentation or contact the development team.

**Last Updated**: November 2025
