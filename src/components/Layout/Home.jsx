import React, { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Home = () => {
	const [color, setColor] = useState(false);
	return (
		<div className={`${color ? "dark" : ""}`}>
			<h1 className="text-center text-5xl font-bold text-gray-700 dark:text-gray-100">
				Welcome on Board!
			</h1>
			{/* <label
				className={`${
					color ? "bg-gray-500" : "bg-yellow-400"
				} block h-4 w-8 rounded-full `}
			>
				<input
					type="checkbox"
					onChange={() => setColor(prevState => !prevState)}
					className="peer sr-only"
				/>
				<span className="ml-0 flex h-4 w-4 items-center justify-center rounded-full bg-gray-200 p-1 text-[8px] leading-none transition-all duration-1000 peer-checked:!ml-auto">
					{color ? (
						<BsMoonFill className="text-blue-800" />
					) : (
						<BsSunFill className="text-yellow-700" />
					)}
				</span>
			</label> */}
		</div>
	);
};

export default Home;
