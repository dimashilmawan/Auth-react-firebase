import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
	const { user } = useAuthContext();
	// console.log(user);
	return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
