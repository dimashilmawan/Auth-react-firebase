import React, { useState } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className={darkMode ? "dark" : ""}>
			<div className="h-screen w-screen bg-gray-100 dark:bg-gray-800">
				<Navbar onThemeToggle={setDarkMode} darkMode={darkMode} />
				<main className="mt-20 px-4">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
