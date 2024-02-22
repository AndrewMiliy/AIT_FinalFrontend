// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isLoggedIn = useAuth();

  console.log('isLoggedIn', isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
