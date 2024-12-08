import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/Auth.store";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthStore((state) => state);

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/sign-in"
        replace
      />
    );
  }
  return children;
};

export default ProtectedRoute;
