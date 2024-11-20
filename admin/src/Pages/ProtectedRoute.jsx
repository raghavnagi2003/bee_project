import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ element: Component }) => {
  const  token  = localStorage.getItem('auth-token');
  const role = localStorage.getItem("role");
  const location = useLocation();
  const isAuthenticated = token && role === "admin";

  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
