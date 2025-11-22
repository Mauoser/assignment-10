import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./App/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import JobListings from "./pages/JobListings";
import Contact from "./pages/Contact";
import CompanyShowcase from "./pages/CompanyShowcase";
import Login from "./pages/Login";
import AdminEmployees from "./pages/AdminEmployees";
import AdminAddJob from "./pages/AdminAddJob";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companies" element={<CompanyShowcase />} />
        <Route path="/login" element={<Login />} />

        {/* Employee Routes (Protected) */}
        <Route
          path="/jobs"
          element={
            <ProtectedRoute requiredRole="employee">
              <JobListings />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes (Protected) */}
        <Route
          path="/admin/employees"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminEmployees />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-job"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminAddJob />
            </ProtectedRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
