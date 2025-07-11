import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  if (!userInfo) {
    return <Navigate to="/sesion" replace />;
  }
  return children;
};
