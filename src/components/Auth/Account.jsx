import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const Account = () => {
	const { user, logout } = useAuthContext();
	const logoutHandler = async () => {
		await logout();
	};
	return (
		<div className="mx-auto mt-24 max-w-xl">
			<h1 className="text-3xl font-bold dark:text-gray-100">Account</h1>
			<p className="mt-1 text-gray-600 dark:text-gray-200">
				Email : {user?.email}
			</p>
			<button
				onClick={logoutHandler}
				className="text-md mt-4 rounded-lg bg-red-600 px-4 py-2 font-semibold text-gray-100 transition hover:bg-red-500 focus:outline-none"
			>
				Logout
			</button>
		</div>
	);
};

export default Account;
