/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: "var(--color-brand)",
					tint: "var(--color-brand-tint)",
					shade: "var(--color-brand-shade)",
				},
			},
		},
	},
	plugins: [],
};
