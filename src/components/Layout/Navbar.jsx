import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { RiHome7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = ({ onThemeToggle, darkMode }) => {
	const { user } = useAuthContext();
	return (
		<header className={`py-4 px-4 sm:px-8`}>
			<nav className="">
				<ul
					className={`flex w-full items-center justify-between text-lg font-semibold text-gray-700 `}
				>
					<li className="items center flex ">
						<Link
							to="/"
							className="inline-block focus:outline-none focus:ring-2 focus:ring-emerald-600"
						>
							<RiHome7Line className=" text-3xl text-emerald-600 " />
						</Link>
					</li>
					<li className="absolute left-[50%] top-4 -translate-x-[50%] ">
						<button
							onClick={() => onThemeToggle(prevState => !prevState)}
							className={`flex h-10 w-10 items-center justify-center rounded-full  bg-white/90 transition-all hover:scale-110  hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:hover:shadow-sm dark:hover:shadow-gray-600 `}
						>
							{darkMode ? (
								<BsMoonFill className="text-gray-300" />
							) : (
								<BsSunFill className="text-2xl text-yellow-400 " />
							)}
						</button>
					</li>
					{!user && (
						<li className="">
							<Link
								to="/auth"
								className="flex animate-bounce items-center rounded-lg  bg-emerald-600 px-4 py-2  text-sm  text-gray-100 transition-all hover:scale-[1.03] hover:shadow-sm hover:shadow-emerald-600/80 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-slate-800 sm:px-5"
							>
								Login
							</Link>
						</li>
					)}
					{user && (
						<li className="">
							<Link
								to="/account"
								className="text-sm capitalize text-emerald-600 underline transition-all dark:text-emerald-500"
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
