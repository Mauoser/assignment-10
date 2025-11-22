import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Component to protect routes based on user role
const ProtectedRoute = ({ children, requiredRole }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.type !== requiredRole) {
    // User doesn't have the required role, redirect to home
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
