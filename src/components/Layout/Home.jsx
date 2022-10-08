import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState(false);
	return (
		<div className={`${color ? "dark" : ""}`}>
			<h1 className="text-center text-5xl font-bold text-gray-700 transition-all dark:text-gray-100">
				Welcome on Board!
			</h1>
		</div>
	);
};

export default Home;
