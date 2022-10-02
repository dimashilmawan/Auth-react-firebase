import React, { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { RiHome7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = ({ onThemeToggle, darkMode }) => {
	const [navOpen, setNavOpen] = useState(false);
	const { user } = useAuthContext();
	return (
		<header className={`py-4 px-4 sm:px-8`}>
			<nav className="">
				<ul
					className={`flex w-full items-center justify-between text-lg font-semibold text-gray-700 `}
				>
					<li className="">
						<Link to="/">
							<RiHome7Line className=" text-3xl text-emerald-500" />
						</Link>
					</li>
					<li className="absolute left-[50%] top-4 -translate-x-[50%] ">
						<button
							onClick={() => onThemeToggle(prevState => !prevState)}
							className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-200/60 transition duration-300 hover:outline-none hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-600 `}
						>
							{darkMode ? (
								<BsMoonFill className="text-gray-300" />
							) : (
								<BsSunFill className="text-2xl text-yellow-400/95 " />
							)}
						</button>
					</li>
					{!user && (
						<li className="">
							<Link
								to="/auth"
								className="flex items-center rounded-lg bg-emerald-600  px-4 py-2 text-sm text-gray-100 transition hover:bg-emerald-500  focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-slate-800"
							>
								Login
							</Link>
						</li>
					)}
					{user && (
						<li className="">
							<Link
								to="/account"
								className="text-sm capitalize text-emerald-600 underline dark:text-emerald-500"
							>
								{user.email.split("@")[0]}
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
