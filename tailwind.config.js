/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"main-color": "#3B0270",
				"accent-color": "#6F00FF",
				"highlight-color": "#E9B3FB",
				"minor-color": "#FFF1F1",
			},
		},
	},
	plugins: [],
};

