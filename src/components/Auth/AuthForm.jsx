import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const AuthForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLogin, setIsLogin] = useState(true);
	const [error, setError] = useState(null);
	const { login, signup } = useAuthContext();
	const navigate = useNavigate();
	const submitHandler = async e => {
		e.preventDefault();
		try {
			setError(null);
			if (isLogin) {
				await login(email, password);
			} else {
				await signup(email, password);
			}
			navigate("/account");
		} catch (e) {
			console.log(e.message);
			setError(e.message);
		}
	};
	return (
		<div className="mx-auto max-w-sm  px-6 sm:px-4">
			<h1 className="text-center text-4xl font-normal text-gray-700 dark:text-gray-100">
				{isLogin ? "Welcome Back" : "Create Account"}
			</h1>
			<form onSubmit={submitHandler} className="mt-8">
				<div className="">
					<input
						onChange={e => setEmail(e.target.value)}
						className="w-full rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
						type="email"
						id="email"
						placeholder="Enter email"
					/>
				</div>
				<div className="mt-3">
					<input
						onChange={e => setPassword(e.target.value)}
						className="w-full rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
						type="password"
						id="password"
						placeholder="Enter password"
					/>
				</div>
				<button className="mt-5 w-full rounded-xl bg-emerald-600 py-3 text-center font-semibold  text-gray-100">
					{isLogin ? "Login" : "Sign up"}
				</button>
			</form>
			<p className="mt-2 flex justify-center gap-2 text-center text-sm dark:text-gray-300/90">
				{isLogin ? "Don't have an account yet ?" : "Already have an account ?"}
				<button
					onClick={e => {
						e.preventDefault();
						setIsLogin(prevState => !prevState);
					}}
					className="font-semibold text-emerald-600  underline underline-offset-[2px]"
				>
					{isLogin ? "Sign up" : "Login"}
				</button>
			</p>
		</div>
	);
};

export default AuthForm;
