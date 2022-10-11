import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Account from "./components/Auth/Account";
import AuthForm from "./components/Auth/AuthForm";
import Home from "./components/Layout/Home";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
	const { user } = useAuthContext();
	return (
		<Layout>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route
					path="/auth"
					exact
					element={!user ? <AuthForm /> : <Navigate to="/" />}
				/>
				<Route
					path="/account"
					exact
					element={user ? <Account /> : <Navigate to="/" />}
				/>
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</Layout>
	);
};

export default App;
