import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./App/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import JobListings from "./pages/JobListings";
import Contact from "./pages/Contact";
import CompanyShowcase from "./pages/CompanyShowcase";
import Login from "./pages/Login";
import { AuthProvider } from "./services/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/companies" element={<CompanyShowcase />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
