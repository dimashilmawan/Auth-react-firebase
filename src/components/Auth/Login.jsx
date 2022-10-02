import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const { login } = useAuthContext();
	const navigate = useNavigate();
	const submitHandler = async e => {
		e.preventDefault();
		try {
			setError(null);
			await login(email, password);
			navigate("/account");
		} catch (e) {
			console.log(e.message);
			setError(e.message);
		}
	};
	return (
		<div className="px-4">
			<h1 className="text-center text-4xl font-normal text-gray-700 ">
				Welcome Back
			</h1>
			<form onSubmit={submitHandler} className="mt-10">
				<div className="">
					<input
						onChange={e => setEmail(e.target.value)}
						className="w-full rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
						type="email"
						id="email"
						placeholder="Enter email"
					/>
				</div>
				<div className="mt-3">
					<input
						onChange={e => setPassword(e.target.value)}
						className="w-full rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
						type="password"
						id="password"
						placeholder="Enter password"
					/>
				</div>
				<button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 text-center font-semibold  text-white">
					Login
				</button>
			</form>
			<p className="mt-3 flex justify-center gap-2 text-center">
				Don't have an account yet ?
				<Link
					to="/signup"
					className="font-semibold text-emerald-600 underline underline-offset-[2px] "
				>
					Sign up
				</Link>
			</p>
		</div>
	);
};

export default Login;
