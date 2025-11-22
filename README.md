# Assignment 9: React Job Portal with Material UI and Axios

A modern job portal web application built with React and Material-UI.

---

## Project Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Mauoser/job-portal.git
   cd job-portal
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

---

## Folder Structure

```
job-portal/
├── api/                # Backend API (controllers, models, routes, services)
├── public/             # Static files (index.html, manifest, robots.txt)
├── src/                # Frontend source code
│   ├── App/            # Main app components (Navbar, Input, Todos, Update)
│   ├── components/     # Shared UI components
│   ├── pages/          # Main pages (Home, About, Contact, JobListings, CompanyShowcase, Login)
│   ├── services/       # Contexts and service logic (AuthContext)
│   ├── App.js          # App entry point and routing
│   ├── App.css         # Global styles
│   ├── index.js        # React DOM entry point
│   ├── index.css       # Global CSS
│   └── ...             # Other config and utility files
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## Navigation

- **Navbar:** Persistent navigation bar with links to all main pages.
- **Pages:**
  - **Home:** Hero section, features, and call-to-action.
  - **Job Listings:** Browse and apply for jobs.
  - **Company Showcase:** View partner companies.
  - **About:** Learn about the portal's mission and features.
  - **Contact:** Contact information and form.
  - **Login:** User authentication.

---

## Key Functionalities

- **Job Search:**
  - Browse job listings with details and required skills.
  - Apply directly via external links.
- **Company Showcase:**
  - View featured companies with images and descriptions.
- **User Authentication:**
  - Login functionality with context-based authentication.
- **Responsive Design:**
  - Fully responsive layout for desktop and mobile.
- **Navigation:**
  - Intuitive navbar for seamless page transitions.
- **Modern UI:**
  - Material-UI components, gradients, and card layouts for a professional look.
