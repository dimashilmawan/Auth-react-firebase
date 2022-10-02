import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const { signup } = useAuthContext();
	const navigate = useNavigate();

	const submitHandler = async e => {
		e.preventDefault();
		try {
			setError(null);
			await signup(email, password);
			navigate("/account");
		} catch (e) {
			console.log(e.message);
			setError(e.message);
		}
	};
	return (
		<div className="px-4">
			<h1 className="text-center text-4xl font-normal text-gray-700 dark:text-gray-200 ">
				Create Account
			</h1>
			<form onSubmit={submitHandler} className="mt-10">
				<div className="">
					<input
						onChange={e => setEmail(e.target.value)}
						className="w-full rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-600 dark:placeholder:text-gray-200"
						type="email"
						id="email"
						placeholder="Enter email"
					/>
				</div>
				<div className="mt-3">
					<input
						onChange={e => setPassword(e.target.value)}
						className="w-full rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-600 dark:placeholder:text-gray-200"
						type="password"
						id="password"
						placeholder="Enter password"
					/>
				</div>
				<button
					className="bg-emerald- mt-6 w-full rounded-xl bg-emerald-600 py-3 text-center text-lg 
				font-semibold text-white dark:bg-emerald-700 dark:text-gray-200"
				>
					Sign up
				</button>
			</form>
			<p className="mt-3 flex justify-center gap-2 text-center dark:text-gray-300">
				Already have an account ?
				<Link
					to="/login"
					className="font-semibold text-emerald-600 underline underline-offset-[2px] dark:text-emerald-500 "
				>
					Login
				</Link>
			</p>
		</div>
	);
};

export default Signup;
