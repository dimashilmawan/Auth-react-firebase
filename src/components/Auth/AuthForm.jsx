import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const AuthForm = () => {
	const emailInputRef = useRef("");
	const passwordInputRef = useRef("");
	const [isLogin, setIsLogin] = useState(true);
	const [error, setError] = useState(null);
	const { login, signup } = useAuthContext();
	const navigate = useNavigate();
	const submitHandler = async e => {
		e.preventDefault();
		const emailInput = emailInputRef.current.value;
		const passwordInput = passwordInputRef.current.value;
		try {
			setError(null);
			if (isLogin) {
				await login(emailInput, passwordInput);
			} else {
				await signup(emailInput, passwordInput);
			}
			navigate("/account");
		} catch (e) {
			emailInputRef.current.value = "";
			passwordInputRef.current.value = "";
			setError(e.message);
		}
	};
	return (
		<div className="mx-auto max-w-sm  px-6 sm:px-4">
			<h1 className="text-center text-4xl font-normal text-gray-700 transition-all dark:text-gray-100">
				{isLogin ? "Welcome Back" : "Create Account"}
			</h1>
			<form onSubmit={submitHandler} className="mt-8">
				<div className="">
					<input
						ref={emailInputRef}
						className="w-full rounded-xl px-4 py-3 shadow-sm	 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-500 dark:text-gray-200 dark:placeholder:text-gray-300/70"
						type="email"
						id="email"
						required
						placeholder="Enter email"
					/>
				</div>
				<div className="mt-3">
					<input
						ref={passwordInputRef}
						className="w-full rounded-xl px-4 py-3 shadow-sm	 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-500 dark:text-gray-200 dark:placeholder:text-gray-300/70"
						type="password"
						id="password"
						required
						placeholder="Enter password"
						minLength={8}
					/>
				</div>
				<button className="mt-5 w-full rounded-xl bg-emerald-600 py-3 text-center font-semibold text-gray-100 transition-all hover:shadow-sm hover:shadow-emerald-600/90 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 dark:focus:ring-offset-gray-700">
					{isLogin ? "Login" : "Sign up"}
				</button>
				{error && (
					<p className="mx-auto mt-3 block  rounded-lg bg-red-300 p-2 px-4 text-center text-red-800">
						{error.replace("Firebase: ", "")}
					</p>
				)}
			</form>
			<p className="mt-2 flex justify-center gap-2 text-center text-sm transition-all dark:text-gray-300/90">
				{isLogin ? "Don't have an account yet ?" : "Already have an account ?"}
				<button
					onClick={e => {
						e.preventDefault();
						setIsLogin(prevState => !prevState);
						setError(null);
					}}
					className="inline-block font-semibold text-emerald-600 underline underline-offset-[2px] hover:text-emerald-500 focus:outline-none  focus:ring-2 focus:ring-emerald-500"
				>
					{isLogin ? "Sign up" : "Login"}
				</button>
			</p>
		</div>
	);
};

export default AuthForm;
